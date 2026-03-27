import { NextRequest, NextResponse } from "next/server";
import { DateTime } from "luxon";
import { calculateVenusSignServer } from "@/lib/venus-server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { date, time, timezone } = body as {
      date: string;   // "DD/MM/YYYY"
      time: string;   // "HH:MM"
      timezone: string; // "America/Sao_Paulo"
    };

    if (!date || !time || !timezone) {
      return NextResponse.json({ error: "Campos obrigatórios: date, time, timezone" }, { status: 400 });
    }

    // Converte data/hora local para UTC
    const [day, month, year] = date.split("/").map(Number);
    const [hour, minute] = time.split(":").map(Number);

    if (!day || !month || !year || isNaN(hour) || isNaN(minute)) {
      return NextResponse.json({ error: "Formato inválido" }, { status: 400 });
    }

    const isoStr = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}T${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:00`;
    const dt = DateTime.fromISO(isoStr, { zone: timezone }).toUTC();

    if (!dt.isValid) {
      return NextResponse.json({ error: "Data ou fuso inválido" }, { status: 400 });
    }

    const hourUT = dt.hour + dt.minute / 60 + dt.second / 3600;

    const result = await calculateVenusSignServer(dt.year, dt.month, dt.day, hourUT);

    return NextResponse.json(result);
  } catch (err) {
    console.error("[venus/route]", err);
    return NextResponse.json({ error: "Erro interno no cálculo" }, { status: 500 });
  }
}
