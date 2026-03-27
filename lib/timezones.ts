// Mapeamento simplificado de cidades brasileiras para timezones IANA
// Cobre ~95% do público brasileiro
const BR_CITY_TIMEZONES: Record<string, string> = {
  // Brasília / UTC-3 (horário padrão)
  "são paulo": "America/Sao_Paulo",
  "sao paulo": "America/Sao_Paulo",
  "rio de janeiro": "America/Sao_Paulo",
  "brasília": "America/Sao_Paulo",
  "brasilia": "America/Sao_Paulo",
  "belo horizonte": "America/Sao_Paulo",
  "curitiba": "America/Sao_Paulo",
  "porto alegre": "America/Sao_Paulo",
  "florianópolis": "America/Sao_Paulo",
  "florianopolis": "America/Sao_Paulo",
  "salvador": "America/Bahia",
  "fortaleza": "America/Fortaleza",
  "recife": "America/Recife",
  "natal": "America/Fortaleza",
  "maceió": "America/Maceio",
  "maceio": "America/Maceio",
  "joão pessoa": "America/Fortaleza",
  "joao pessoa": "America/Fortaleza",
  "aracaju": "America/Maceio",
  "teresina": "America/Fortaleza",
  "são luís": "America/Fortaleza",
  "sao luis": "America/Fortaleza",
  "belém": "America/Belem",
  "belem": "America/Belem",
  "macapá": "America/Belem",
  "macapa": "America/Belem",
  "manaus": "America/Manaus",
  "porto velho": "America/Porto_Velho",
  "rio branco": "America/Rio_Branco",
  "palmas": "America/Araguaina",
  "goiânia": "America/Sao_Paulo",
  "goiania": "America/Sao_Paulo",
  "campo grande": "America/Campo_Grande",
  "cuiabá": "America/Cuiaba",
  "cuiaba": "America/Cuiaba",
  "vitória": "America/Sao_Paulo",
  "vitoria": "America/Sao_Paulo",
  "campinas": "America/Sao_Paulo",
  "santos": "America/Sao_Paulo",
  "ribeirão preto": "America/Sao_Paulo",
  "ribeirao preto": "America/Sao_Paulo",
  "uberlândia": "America/Sao_Paulo",
  "uberlandia": "America/Sao_Paulo",
};

/**
 * Retorna o timezone IANA para uma cidade.
 * Fallback: America/Sao_Paulo (UTC-3, cobre ~75% do Brasil).
 */
export function getTimezoneForCity(city: string): string {
  const normalized = city.toLowerCase().trim();
  return BR_CITY_TIMEZONES[normalized] ?? "America/Sao_Paulo";
}
