import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Serif_Display, Lato } from "next/font/google";
import "./globals.css";
import { QuizProvider } from "@/context/QuizContext";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Síndrome do Dedo Podre — Descubra seu padrão afetivo",
  description:
    "Em menos de 4 minutos, descubra o Ímã do Cara Errado: o padrão específico que faz você atrair sempre o mesmo tipo de homem. Quiz baseado em Vênus + estilo de apego.",
  openGraph: {
    title: "Síndrome do Dedo Podre",
    description: "Você não tem dedo podre. Você tem um padrão que nunca te explicaram.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${dmSerif.variable} ${lato.variable} h-full`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.pixelId = "6844d9846b0f75c03476cc94"; var a = document.createElement("script"); a.setAttribute("async", ""); a.setAttribute("defer", ""); a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js"); document.head.appendChild(a);`,
          }}
        />
        <script
          async
          defer
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-subids=""
        />
      </head>
      <body className="min-h-full bg-bg-deep text-text-primary antialiased">
        <QuizProvider>{children}</QuizProvider>
      </body>
    </html>
  );
}
