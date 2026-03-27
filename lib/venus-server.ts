// ATENÇÃO: Este arquivo usa swisseph-wasm (WASM nativo) e deve ser importado
// APENAS em arquivos server-side (API Routes, Server Components, Server Actions).
// Nunca importe este arquivo em componentes 'use client'.

import { VENUS_SIGNS, VenusSign } from "./venus-calculator";

export interface VenusResult {
  sign: VenusSign;
  degree: number;
  longitude: number;
}

/**
 * Calcula a posição de Vênus natal via Swiss Ephemeris.
 * Mesmo motor usado por astro.com, Astrolink e Personare.
 * Precisão: 0.001 arco-segundo (efemérides JPL DA431 da NASA).
 *
 * @param year   Ano (ex: 1990)
 * @param month  Mês (1-12)
 * @param day    Dia (1-31)
 * @param hourUT Hora em UTC decimal (ex: 14.5 = 14h30 UTC)
 */
export async function calculateVenusSignServer(
  year: number,
  month: number,
  day: number,
  hourUT: number
): Promise<VenusResult> {
  // swisseph-wasm é ESM — importação dinâmica necessária no Node.js
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const SwissEph = (await import("swisseph-wasm") as any).default;
  const swe = new SwissEph();
  await swe.initSwissEph();

  // Converte data/hora para Dia Juliano
  const jd: number = swe.julday(year, month, day, hourUT);

  // SE_VENUS = 3, SEFLG_SWIEPH = 2
  const result: number[] = swe.calc_ut(jd, 3, 2);

  swe.close();

  // result[0] = longitude eclíptica em graus (0–360)
  const longitude = result[0];
  const signIndex = Math.floor(longitude / 30); // 0–11
  const degree = longitude % 30;

  return {
    sign: VENUS_SIGNS[signIndex],
    degree: parseFloat(degree.toFixed(4)),
    longitude: parseFloat(longitude.toFixed(4)),
  };
}
