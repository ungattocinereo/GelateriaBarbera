export type Locale = "it" | "en" | "zh" | "fr";

export type AllergenKey =
  | "latte"
  | "soia"
  | "frutta-a-guscio"
  | "mandorla"
  | "nocciola"
  | "pistacchio"
  | "cocco"
  | "uova"
  | "arachidi"
  | "glutine"
  | "senape"
  | "sesamo";

export type Category = "gelato" | "sorbetto" | "extra";

export type AllergenPresence = "contains" | "may-contain";

export type FlavorItem = {
  id: string;
  category: Category;
  name: Record<Locale, string>;
  ingredients: Record<Locale, string[]>;
  allergens: {
    key: AllergenKey;
    presence: AllergenPresence;
    note?: Record<Locale, string>;
  }[];
  iconSlug: string;
  theme: string;
};

export const locales: { code: Locale; label: string; short: string; active: boolean }[] = [
  { code: "it", label: "Italiano", short: "IT", active: true },
  { code: "en", label: "English", short: "EN", active: false },
  { code: "zh", label: "中文", short: "中文", active: false },
  { code: "fr", label: "Français", short: "FR", active: false }
];

export const defaultLocale: Locale = "it";

const t = <T>(it: T): Record<Locale, T> => ({
  it,
  en: it,
  zh: it,
  fr: it
});

const contains = (key: AllergenKey, note?: string) => ({
  key,
  presence: "contains" as const,
  ...(note ? { note: t(note) } : {})
});

const mayContain = (key: AllergenKey, note?: string) => ({
  key,
  presence: "may-contain" as const,
  ...(note ? { note: t(note) } : {})
});

export const allergenInfo: Record<
  AllergenKey,
  { label: Record<Locale, string>; description: Record<Locale, string>; icon: string }
> = {
  latte: {
    label: t("Latte"),
    description: t("Latte e derivati"),
    icon: "fa-solid fa-glass-water"
  },
  soia: {
    label: t("Soia"),
    description: t("Soia e derivati"),
    icon: "fa-solid fa-seedling"
  },
  "frutta-a-guscio": {
    label: t("Frutta a guscio"),
    description: t("Possibile frutta a guscio"),
    icon: "fa-solid fa-circle"
  },
  mandorla: {
    label: t("Mandorla"),
    description: t("Mandorla, frutta a guscio"),
    icon: "fa-solid fa-diamond"
  },
  nocciola: {
    label: t("Nocciola"),
    description: t("Nocciola, frutta a guscio"),
    icon: "fa-solid fa-circle-dot"
  },
  pistacchio: {
    label: t("Pistacchio"),
    description: t("Pistacchio, frutta a guscio"),
    icon: "fa-solid fa-leaf"
  },
  cocco: {
    label: t("Cocco"),
    description: t("Cocco"),
    icon: "fa-solid fa-certificate"
  },
  uova: {
    label: t("Uova"),
    description: t("Uova e derivati"),
    icon: "fa-solid fa-egg"
  },
  arachidi: {
    label: t("Arachidi"),
    description: t("Arachidi e derivati"),
    icon: "fa-solid fa-spa"
  },
  glutine: {
    label: t("Glutine"),
    description: t("Cereali contenenti glutine"),
    icon: "fa-solid fa-wheat-awn"
  },
  senape: {
    label: t("Senape"),
    description: t("Senape"),
    icon: "fa-solid fa-jar"
  },
  sesamo: {
    label: t("Sesamo"),
    description: t("Semi di sesamo"),
    icon: "fa-solid fa-grip"
  }
};

export const categoryLabels: Record<Category | "all", Record<Locale, string>> = {
  all: t("Tutti"),
  gelato: t("Gelati"),
  sorbetto: t("Sorbetti"),
  extra: t("Coni e extra")
};

export const flavors: FlavorItem[] = [
  {
    id: "cioccolato-acqua",
    category: "gelato",
    name: t("Cioccolato all'acqua"),
    ingredients: t([
      "ACQUA",
      "SACCAROSIO (ZUCCHERO)",
      "COPERTURA SUR DEL LAGO",
      "CACAO AROMATICO IN POLVERE",
      "DESTROSIO",
      "BASE SORBETTO 50",
      "ZUCCHERO D'UVA"
    ]),
    allergens: [contains("soia"), mayContain("frutta-a-guscio")],
    iconSlug: "chocolate-bar",
    theme: "cocoa"
  },
  {
    id: "cioccolato-bianco",
    category: "gelato",
    name: t("Cioccolato Bianco"),
    ingredients: t([
      "CIOCC. BIANCO 35%",
      "ACQUA",
      "LATTE FATTORIA GIULIA",
      "DESTROSIO",
      "SACCAROSIO",
      "AGRIMONTANA CREMA EMILIO"
    ]),
    allergens: [contains("latte"), contains("soia"), mayContain("frutta-a-guscio")],
    iconSlug: "chocolate-bar",
    theme: "white-chocolate"
  },
  {
    id: "cioccolato-latte",
    category: "gelato",
    name: t("Cioccolato al Latte"),
    ingredients: t([
      "LATTE FATTORIA GIULIA",
      "ACQUA",
      "COPERTURA SUR DEL LAGO",
      "DESTROSIO",
      "PANNA 36M FATTORIA GIULIA",
      "SACCAROSIO",
      "CACAO AROMATICO IN POLVERE",
      "AGRIMONTANA CREMA EMILIO"
    ]),
    allergens: [contains("latte"), contains("soia"), mayContain("frutta-a-guscio")],
    iconSlug: "chocolate-bar",
    theme: "milk-chocolate"
  },
  {
    id: "fiordilatte",
    category: "gelato",
    name: t("Fiordilatte"),
    ingredients: t([
      "LATTE FATTORIA GIULIA",
      "PANNA 36M FATTORIA GIULIA",
      "SACCAROSIO",
      "DESTROSIO",
      "AGRIMONTANA CREMA EMILIO",
      "LATTE SCREMATO IN POLVERE",
      "ZUCCHERO D'UVA"
    ]),
    allergens: [contains("latte"), mayContain("soia"), mayContain("frutta-a-guscio")],
    iconSlug: "ice-cream-cone",
    theme: "milk"
  },
  {
    id: "mandorla",
    category: "gelato",
    name: t("Mandorla"),
    ingredients: t([
      "LATTE FATTORIA GIULIA",
      "PASTA MANDORLA VAL DI NOTO",
      "SACCAROSIO",
      "DESTROSIO",
      "ZUCCHERO D'UVA",
      "AGRIMONTANA CREMA EMILIO",
      "LATTE SCREMATO IN POLVERE"
    ]),
    allergens: [contains("latte"), contains("mandorla", "Frutta a guscio"), mayContain("soia")],
    iconSlug: "almond",
    theme: "almond"
  },
  {
    id: "nocciola-piemonte",
    category: "gelato",
    name: t("Nocciola Piemonte"),
    ingredients: t([
      "LATTE FATTORIA GIULIA",
      "PASTA CHIARA DI NOCCIOLA",
      "SACCAROSIO",
      "DESTROSIO",
      "AGRIMONTANA CREMA EMILIO",
      "PANNA 36M FATTORIA GIULIA"
    ]),
    allergens: [contains("latte"), contains("nocciola", "Frutta a guscio"), mayContain("soia")],
    iconSlug: "hazelnut",
    theme: "hazelnut"
  },
  {
    id: "pistacchio",
    category: "gelato",
    name: t("Pistacchio"),
    ingredients: t([
      "LATTE FATTORIA GIULIA",
      "PASTA DI PISTACCHIO",
      "SACCAROSIO",
      "DESTROSIO",
      "AGRIMONTANA CREMA EMILIO",
      "PANNA 36M FATTORIA GIULIA"
    ]),
    allergens: [contains("latte"), contains("pistacchio", "Frutta a guscio"), mayContain("soia")],
    iconSlug: "nut",
    theme: "pistachio"
  },
  {
    id: "ricotta-base",
    category: "gelato",
    name: t("Ricotta Base 50"),
    ingredients: t([
      "LATTE FATTORIA GIULIA",
      "ZUCCHERO D'UVA",
      "SACCAROSIO",
      "RICOTTA VACCINA",
      "DESTROSIO",
      "LATTE SCREMATO IN POLVERE",
      "AGRIMONTANA CREMA EMILIO",
      "PANNA 36M FATTORIA GIULIA"
    ]),
    allergens: [contains("latte"), mayContain("soia"), mayContain("frutta-a-guscio")],
    iconSlug: "cheese",
    theme: "ricotta"
  },
  {
    id: "amarena",
    category: "gelato",
    name: t("Amarena"),
    ingredients: t([
      "LATTE FATTORIA GIULIA",
      "PANNA 36M FATTORIA GIULIA",
      "SACCAROSIO",
      "DESTROSIO",
      "AGRIMONTANA CREMA EMILIO",
      "LATTE SCREMATO IN POLVERE",
      "ZUCCHERO D'UVA",
      "AMARENA"
    ]),
    allergens: [contains("latte"), mayContain("soia"), mayContain("frutta-a-guscio")],
    iconSlug: "cherry",
    theme: "amarena"
  },
  {
    id: "stracciatella",
    category: "gelato",
    name: t("Stracciatella"),
    ingredients: t([
      "LATTE FATTORIA GIULIA",
      "PANNA 36M FATTORIA GIULIA",
      "SACCAROSIO",
      "DESTROSIO",
      "AGRIMONTANA CREMA EMILIO",
      "LATTE SCREMATO IN POLVERE",
      "ZUCCHERO D'UVA",
      "CIOCCOLATO"
    ]),
    allergens: [contains("latte"), contains("soia"), mayContain("frutta-a-guscio")],
    iconSlug: "cookie",
    theme: "stracciatella"
  },
  {
    id: "ricotta-nutella-cocco",
    category: "gelato",
    name: t("Ricotta Nutella & Cocco"),
    ingredients: t([
      "LATTE FATTORIA GIULIA",
      "ZUCCHERO D'UVA",
      "SACCAROSIO",
      "RICOTTA VACCINA",
      "DESTROSIO",
      "LATTE SCREMATO IN POLVERE",
      "AGRIMONTANA CREMA EMILIO",
      "PANNA 36M FATTORIA GIULIA",
      "NUTELLA",
      "COCCO"
    ]),
    allergens: [
      contains("latte"),
      contains("soia"),
      contains("nocciola"),
      contains("cocco"),
      mayContain("frutta-a-guscio", "Altra frutta a guscio")
    ],
    iconSlug: "chocolate-spread",
    theme: "nutella-coconut"
  },
  {
    id: "ricotta-pera",
    category: "gelato",
    name: t("Ricotta e Pera"),
    ingredients: t([
      "LATTE FATTORIA GIULIA",
      "ZUCCHERO D'UVA",
      "SACCAROSIO",
      "RICOTTA VACCINA",
      "DESTROSIO",
      "LATTE SCREMATO IN POLVERE",
      "AGRIMONTANA CREMA EMILIO",
      "PANNA 36M FATTORIA GIULIA",
      "PERA"
    ]),
    allergens: [contains("latte"), mayContain("soia"), mayContain("frutta-a-guscio")],
    iconSlug: "pear",
    theme: "pear"
  },
  {
    id: "ricotta-fichi",
    category: "gelato",
    name: t("Ricotta e Fichi"),
    ingredients: t([
      "LATTE FATTORIA GIULIA",
      "ZUCCHERO D'UVA",
      "SACCAROSIO",
      "RICOTTA VACCINA",
      "DESTROSIO",
      "LATTE SCREMATO IN POLVERE",
      "AGRIMONTANA CREMA EMILIO",
      "PANNA 36M FATTORIA GIULIA",
      "FICHI"
    ]),
    allergens: [contains("latte"), mayContain("soia"), mayContain("frutta-a-guscio")],
    iconSlug: "natural-food",
    theme: "fig"
  },
  {
    id: "cocco",
    category: "gelato",
    name: t("Cocco"),
    ingredients: t([
      "LATTE FATTORIA GIULIA",
      "PASTA COCCO",
      "SACCAROSIO",
      "DESTROSIO",
      "AGRIMONTANA CREMA EMILIO",
      "PANNA 36M FATTORIA GIULIA",
      "LATTE SCREMATO IN POLVERE",
      "GLUCOSIO DISIDRATATO 33DE"
    ]),
    allergens: [contains("latte"), contains("cocco", "Frutta a guscio"), mayContain("soia")],
    iconSlug: "coconut",
    theme: "coconut"
  },
  {
    id: "caramello",
    category: "gelato",
    name: t("Caramello"),
    ingredients: t([
      "LATTE FATTORIA GIULIA",
      "ZUCCHERO CARAMELLATO",
      "SACCAROSIO",
      "DESTROSIO",
      "AGRIMONTANA CREMA EMILIO",
      "PANNA 36M FATTORIA GIULIA",
      "LATTE SCREMATO IN POLVERE",
      "TUORLO",
      "PASTA VANIGLIA"
    ]),
    allergens: [contains("latte"), contains("uova"), mayContain("soia"), mayContain("frutta-a-guscio")],
    iconSlug: "caramel-apple",
    theme: "caramel"
  },
  {
    id: "arachide",
    category: "gelato",
    name: t("Arachide"),
    ingredients: t([
      "LATTE FATTORIA GIULIA",
      "PASTA ARACHIDE",
      "SACCAROSIO",
      "DESTROSIO",
      "AGRIMONTANA CREMA EMILIO",
      "PANNA 36M FATTORIA GIULIA"
    ]),
    allergens: [contains("latte"), contains("arachidi"), mayContain("soia"), mayContain("frutta-a-guscio", "Altra frutta a guscio")],
    iconSlug: "peanuts",
    theme: "peanut"
  },
  {
    id: "crema-vaniglia",
    category: "gelato",
    name: t("Crema alla Vaniglia"),
    ingredients: t([
      "AGRIMONTANA CREMA EMILIO",
      "LATTE FATTORIA GIULIA",
      "VANIGLIA BACCHE",
      "SACCAROSIO",
      "DESTROSIO",
      "PANNA 36M FATTORIA GIULIA",
      "LATTE SCREMATO IN POLVERE",
      "TUORLO",
      "PASTA VANIGLIA"
    ]),
    allergens: [contains("latte"), contains("uova"), mayContain("soia"), mayContain("frutta-a-guscio")],
    iconSlug: "dessert",
    theme: "vanilla"
  },
  {
    id: "caffe",
    category: "gelato",
    name: t("Caffè"),
    ingredients: t([
      "LATTE FATTORIA GIULIA",
      "CAFFE ESPRESSO",
      "SACCAROSIO",
      "DESTROSIO",
      "AGRIMONTANA CREMA EMILIO",
      "PANNA 36M FATTORIA GIULIA",
      "LATTE SCREMATO IN POLVERE",
      "ESTRATTO ILLY"
    ]),
    allergens: [contains("latte"), mayContain("soia"), mayContain("frutta-a-guscio")],
    iconSlug: "coffee",
    theme: "coffee"
  },
  {
    id: "more-gelso",
    category: "sorbetto",
    name: t("More di Gelso"),
    ingredients: t(["GELSI NERI SURG", "SCIROPPO DI ZUCCHERI", "ACQUA"]),
    allergens: [],
    iconSlug: "grapes",
    theme: "mulberry"
  },
  {
    id: "fragola-sorbetto",
    category: "sorbetto",
    name: t("Fragola sorbetto"),
    ingredients: t(["SCIROPPO DI ZUCCHERI", "FRAGOLE SURG", "ACQUA"]),
    allergens: [],
    iconSlug: "strawberry",
    theme: "strawberry"
  },
  {
    id: "lampone-sorbetto",
    category: "sorbetto",
    name: t("Lampone sorbetto"),
    ingredients: t(["SCIROPPO DI ZUCCHERI", "LAMPONI POLPA", "ACQUA"]),
    allergens: [],
    iconSlug: "raspberry",
    theme: "raspberry"
  },
  {
    id: "mandorla-sorbetto",
    category: "sorbetto",
    name: t("Mandorla sorbetto"),
    ingredients: t(["SCIROPPO DI ZUCCHERI", "MARZAPANE MANDORLE", "ACQUA"]),
    allergens: [contains("mandorla", "Frutta a guscio")],
    iconSlug: "almond",
    theme: "almond-sorbet"
  },
  {
    id: "limone-sorbetto",
    category: "sorbetto",
    name: t("Limone sorbetto"),
    ingredients: t(["SCIROPPO DI ZUCCHERI", "SUCCO DI LIMONE SORRENTO", "ACQUA"]),
    allergens: [],
    iconSlug: "citrus",
    theme: "lemon"
  },
  {
    id: "ananas",
    category: "sorbetto",
    name: t("Ananas"),
    ingredients: t(["SCIROPPO DI ZUCCHERI", "SUCCO DI ANANAS", "ACQUA"]),
    allergens: [],
    iconSlug: "pineapple",
    theme: "pineapple"
  },
  {
    id: "mandarino",
    category: "sorbetto",
    name: t("Mandarino"),
    ingredients: t(["SCIROPPO DI ZUCCHERI", "SUCCO DI MANDARINO", "ACQUA"]),
    allergens: [],
    iconSlug: "orange",
    theme: "mandarin"
  },
  {
    id: "sciroppo-zucchero",
    category: "sorbetto",
    name: t("Sciroppo di zucchero"),
    ingredients: t(["ACQUA", "SACCAROSIO", "BASE SORBETTO 50", "MALTODESTRINE", "DESTROSIO"]),
    allergens: [],
    iconSlug: "sugar",
    theme: "syrup"
  },
  {
    id: "mango",
    category: "sorbetto",
    name: t("Mango"),
    ingredients: t(["SCIROPPO DI ZUCCHERI", "SUCCO DI MANGO", "ACQUA"]),
    allergens: [],
    iconSlug: "natural-food",
    theme: "mango"
  },
  {
    id: "yogurt",
    category: "gelato",
    name: t("Yogurt"),
    ingredients: t([
      "YOGURT FRESCO",
      "SACCAROSIO",
      "LATTE FATTORIA GIULIA",
      "PANNA FATTORIA GIULIA",
      "DESTROSIO",
      "ZUCCHERO D'UVA",
      "AGRIMONTANA CREMA EMILIO",
      "LATTE SCREMATO IN POLVERE"
    ]),
    allergens: [contains("latte"), mayContain("soia"), mayContain("frutta-a-guscio")],
    iconSlug: "yogurt",
    theme: "yogurt"
  },
  {
    id: "panna-montata",
    category: "extra",
    name: t("Panna Montata"),
    ingredients: t(["PANNA FRESCA", "SACCAROSIO"]),
    allergens: [contains("latte")],
    iconSlug: "whipped-cream",
    theme: "cream"
  },
  {
    id: "cono-norge",
    category: "extra",
    name: t("Cono Norge"),
    ingredients: t(["Contiene: glutine cioccolato. Può contenere tracce di senape soia, frutta a guscio, possibile contaminazione di uova."]),
    allergens: [contains("glutine"), mayContain("senape"), mayContain("soia"), mayContain("frutta-a-guscio"), mayContain("uova")],
    iconSlug: "ice-cream-cone",
    theme: "cone"
  },
  {
    id: "cono-norge-granella-cioccolato",
    category: "extra",
    name: t("Cono Norge Granella e Cioccolato"),
    ingredients: t(["Contiene: glutine cioccolato. Può contenere tracce di senape soia, frutta a guscio, latte e derivati, possibile contaminazione di uova."]),
    allergens: [contains("glutine"), mayContain("senape"), mayContain("soia"), mayContain("frutta-a-guscio"), mayContain("latte"), mayContain("uova")],
    iconSlug: "ice-cream-cone",
    theme: "cone-granella"
  },
  {
    id: "cialda-norge",
    category: "extra",
    name: t("Cialda Norge"),
    ingredients: t(["Contiene: glutine. Può contenere tracce di senape soia, latte e derivati, possibile contaminazione di uova."]),
    allergens: [contains("glutine"), mayContain("senape"), mayContain("soia"), mayContain("latte"), mayContain("uova")],
    iconSlug: "biscuits",
    theme: "wafer"
  },
  {
    id: "sigaretta-norge",
    category: "extra",
    name: t("Sigaretta Norge"),
    ingredients: t(["Contiene: glutine. Può contenere tracce di senape soia latte e derivati, possibile contaminazione di uova."]),
    allergens: [contains("glutine"), mayContain("senape"), mayContain("soia"), mayContain("latte"), mayContain("uova")],
    iconSlug: "bread-loaf",
    theme: "sigaretta"
  },
  {
    id: "croissant-dritto-edt",
    category: "extra",
    name: t("Croissant Dritto EDT"),
    ingredients: t([
      "FARINA DI FRUMENTO",
      "ACQUA",
      "UOVA",
      "BURRO",
      "ZUCCHERO",
      "LIEVITO",
      "LATTE INTERO IN POLVERE",
      "SALE"
    ]),
    allergens: [contains("glutine"), contains("latte"), contains("uova"), mayContain("sesamo"), mayContain("soia"), mayContain("frutta-a-guscio")],
    iconSlug: "croissant",
    theme: "croissant"
  }
];
