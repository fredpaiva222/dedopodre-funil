// URLs dos produtos no Lastlink
// Substitua pelos links reais quando criar os produtos na plataforma

export const LASTLINK_URLS = {
  frontend: "https://pay.lastlink.com/sindrome-dedo-podre", // R$ 27 — Quiz completo
  orderBump: "https://pay.lastlink.com/guia-emergencia",    // R$ 17 — Guia de Emergência
  oto1: "https://pay.lastlink.com/decodificada",            // R$ 97 — Decodificada
  oto2: "https://pay.lastlink.com/venus-revelada",          // R$ 37 — Vênus Revelada
  downsell: "https://pay.lastlink.com/primeiros-passos",    // R$ 17 — Primeiros Passos
} as const;

export function getCheckoutUrl(product: keyof typeof LASTLINK_URLS, profileSlug?: string): string {
  const base = LASTLINK_URLS[product];
  if (profileSlug) {
    return `${base}?perfil=${profileSlug}&redirect=/resultado/${profileSlug}`;
  }
  return base;
}
