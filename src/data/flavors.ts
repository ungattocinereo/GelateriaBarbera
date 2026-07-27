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

export const locales: { code: Locale; label: string; short: string; flagClass: string; path: string; ogLocale: string }[] = [
  { code: "it", label: "Italiano", short: "IT", flagClass: "flag-it", path: "/", ogLocale: "it_IT" },
  { code: "en", label: "English", short: "EN", flagClass: "flag-en", path: "/en/", ogLocale: "en_US" },
  { code: "zh", label: "中文", short: "中文", flagClass: "flag-zh", path: "/zh/", ogLocale: "zh_CN" },
  { code: "fr", label: "Français", short: "FR", flagClass: "flag-fr", path: "/fr/", ogLocale: "fr_FR" }
];

export const defaultLocale: Locale = "it";
export const translatedLocales = ["en", "zh", "fr"] satisfies Locale[];

const l = (it: string, en: string, zh: string, fr: string): Record<Locale, string> => ({
  it,
  en,
  zh,
  fr
});

const translatedText: Record<string, Record<Locale, string>> = {
  "Latte": l("Latte", "Milk", "牛奶", "Lait"),
  "Latte e derivati": l("Latte e derivati", "Milk and dairy products", "牛奶及乳制品", "Lait et produits laitiers"),
  "Soia": l("Soia", "Soy", "大豆", "Soja"),
  "Soia e derivati": l("Soia e derivati", "Soy and soy derivatives", "大豆及其制品", "Soja et dérivés"),
  "Frutta a guscio": l("Frutta a guscio", "Tree nuts", "坚果", "Fruits à coque"),
  "Possibile frutta a guscio": l("Possibile frutta a guscio", "Possible tree nuts", "可能含有坚果", "Présence possible de fruits à coque"),
  "Mandorla": l("Mandorla", "Almond", "杏仁", "Amande"),
  "Mandorla, frutta a guscio": l("Mandorla, frutta a guscio", "Almond, tree nut", "杏仁，坚果", "Amande, fruit à coque"),
  "Nocciola": l("Nocciola", "Hazelnut", "榛子", "Noisette"),
  "Nocciola, frutta a guscio": l("Nocciola, frutta a guscio", "Hazelnut, tree nut", "榛子，坚果", "Noisette, fruit à coque"),
  "Pistacchio": l("Pistacchio", "Pistachio", "开心果", "Pistache"),
  "Pistacchio, frutta a guscio": l("Pistacchio, frutta a guscio", "Pistachio, tree nut", "开心果，坚果", "Pistache, fruit à coque"),
  "Cocco": l("Cocco", "Coconut", "椰子", "Noix de coco"),
  "Uova": l("Uova", "Eggs", "鸡蛋", "Oeufs"),
  "Uova e derivati": l("Uova e derivati", "Eggs and egg products", "鸡蛋及蛋制品", "Oeufs et dérivés"),
  "Arachidi": l("Arachidi", "Peanuts", "花生", "Arachides"),
  "Arachidi e derivati": l("Arachidi e derivati", "Peanuts and peanut products", "花生及其制品", "Arachides et dérivés"),
  "Glutine": l("Glutine", "Gluten", "麸质", "Gluten"),
  "Cereali contenenti glutine": l("Cereali contenenti glutine", "Cereals containing gluten", "含麸质谷物", "Céréales contenant du gluten"),
  "Senape": l("Senape", "Mustard", "芥末", "Moutarde"),
  "Sesamo": l("Sesamo", "Sesame", "芝麻", "Sésame"),
  "Semi di sesamo": l("Semi di sesamo", "Sesame seeds", "芝麻籽", "Graines de sésame"),
  "Tutti": l("Tutti", "All", "全部", "Tous"),
  "Gelati": l("Gelati", "Gelato", "冰淇淋", "Glaces"),
  "Sorbetti": l("Sorbetti", "Sorbets", "雪葩", "Sorbets"),
  "Coni e extra": l("Coni e extra", "Cones and extras", "蛋筒与配料", "Cornets et extras"),
  "Contiene": l("Contiene", "Contains", "含有", "Contient"),
  "Possibile presenza": l("Possibile presenza", "May contain", "可能含有", "Présence possible"),
  "Altra frutta a guscio": l("Altra frutta a guscio", "Other tree nuts", "其他坚果", "Autres fruits à coque"),
  "Da Base Sorbetto 50": l("Da Base Sorbetto 50", "From Base Sorbetto 50", "来自 Base Sorbetto 50", "Issu de Base Sorbetto 50"),
  "Cioccolato all'acqua": l("Cioccolato all'acqua", "Water-based chocolate", "水巧克力", "Chocolat à l'eau"),
  "Cioccolato Bianco": l("Cioccolato Bianco", "White chocolate", "白巧克力", "Chocolat blanc"),
  "Cioccolato al Latte": l("Cioccolato al Latte", "Milk chocolate", "牛奶巧克力", "Chocolat au lait"),
  "Fiordilatte": l("Fiordilatte", "Fiordilatte", "牛奶冰淇淋", "Fleur de lait"),
  "Nocciola Piemonte": l("Nocciola Piemonte", "Piedmont hazelnut", "皮埃蒙特榛子", "Noisette du Piémont"),
  "Ricotta Base 50": l("Ricotta Base 50", "Ricotta Base 50", "乳清干酪 Base 50", "Ricotta Base 50"),
  "Amarena": l("Amarena", "Sour cherry", "酸樱桃", "Griotte"),
  "Stracciatella": l("Stracciatella", "Stracciatella", "巧克力碎片", "Stracciatella"),
  "Ricotta Nutella & Cocco": l("Ricotta Nutella & Cocco", "Ricotta, Nutella and coconut", "乳清干酪、Nutella 与椰子", "Ricotta, Nutella et noix de coco"),
  "Ricotta e Pera": l("Ricotta e Pera", "Ricotta and pear", "乳清干酪与梨", "Ricotta et poire"),
  "Ricotta e Fichi": l("Ricotta e Fichi", "Ricotta and figs", "乳清干酪与无花果", "Ricotta et figues"),
  "Caramello": l("Caramello", "Caramel", "焦糖", "Caramel"),
  "Arachide": l("Arachide", "Peanut", "花生", "Arachide"),
  "Crema alla Vaniglia": l("Crema alla Vaniglia", "Vanilla custard", "香草蛋奶冰淇淋", "Crème à la vanille"),
  "Vaniglia": l("Vaniglia", "Vanilla", "香草冰淇淋", "Vanille"),
  "Caffè": l("Caffè", "Coffee", "咖啡", "Café"),
  "More di Gelso": l("More di Gelso", "Mulberries", "桑葚", "Mures de mûrier"),
  "Fragola sorbetto": l("Fragola sorbetto", "Strawberry sorbet", "草莓雪葩", "Sorbet fraise"),
  "Lampone sorbetto": l("Lampone sorbetto", "Raspberry sorbet", "覆盆子雪葩", "Sorbet framboise"),
  "Mandorla sorbetto": l("Mandorla sorbetto", "Almond sorbet", "杏仁雪葩", "Sorbet amande"),
  "Limone sorbetto": l("Limone sorbetto", "Lemon sorbet", "柠檬雪葩", "Sorbet citron"),
  "Ananas": l("Ananas", "Pineapple", "菠萝", "Ananas"),
  "Mandarino": l("Mandarino", "Mandarin", "橘子", "Mandarine"),
  "Sciroppo di zucchero": l("Sciroppo di zucchero", "Sugar syrup", "糖浆", "Sirop de sucre"),
  "Mango": l("Mango", "Mango", "芒果", "Mangue"),
  "Yogurt": l("Yogurt", "Yogurt", "酸奶", "Yaourt"),
  "Panna Montata": l("Panna Montata", "Whipped cream", "打发奶油", "Crème fouettée"),
  "Cono Norge": l("Cono Norge", "Norge cone", "Norge 蛋筒", "Cornet Norge"),
  "Cono Norge Granella e Cioccolato": l("Cono Norge Granella e Cioccolato", "Norge cone with sprinkles and chocolate", "Norge 巧克力碎粒蛋筒", "Cornet Norge aux éclats et chocolat"),
  "Cialda Norge": l("Cialda Norge", "Norge wafer", "Norge 威化饼", "Gaufrette Norge"),
  "Sigaretta Norge": l("Sigaretta Norge", "Norge wafer roll", "Norge 威化卷", "Cigarette russe Norge"),
  "Croissant Dritto EDT": l("Croissant Dritto EDT", "Straight croissant EDT", "直形羊角面包 EDT", "Croissant droit EDT"),
  "ACQUA": l("ACQUA", "Water", "水", "Eau"),
  "SACCAROSIO (ZUCCHERO)": l("SACCAROSIO (ZUCCHERO)", "Sucrose (sugar)", "蔗糖（糖）", "Saccharose (sucre)"),
  "COPERTURA SUR DEL LAGO": l("COPERTURA SUR DEL LAGO", "Sur del Lago couverture", "Sur del Lago 调温巧克力", "Couverture Sur del Lago"),
  "CACAO AROMATICO IN POLVERE": l("CACAO AROMATICO IN POLVERE", "Aromatic cocoa powder", "芳香可可粉", "Cacao aromatique en poudre"),
  "DESTROSIO": l("DESTROSIO", "Dextrose", "葡萄糖", "Dextrose"),
  "BASE SORBETTO 50": l("BASE SORBETTO 50", "Base Sorbetto 50", "Base Sorbetto 50", "Base Sorbetto 50"),
  "ZUCCHERO D'UVA": l("ZUCCHERO D'UVA", "Grape sugar", "葡萄糖粉", "Sucre de raisin"),
  "CIOCC. BIANCO 35%": l("CIOCC. BIANCO 35%", "White chocolate 35%", "35% 白巧克力", "Chocolat blanc 35 %"),
  "LATTE FATTORIA GIULIA": l("LATTE FATTORIA GIULIA", "Fattoria Giulia milk", "Fattoria Giulia 牛奶", "Lait Fattoria Giulia"),
  "LATTE FRESCO INTERO": l("LATTE FRESCO INTERO", "Fresh whole milk", "新鲜全脂牛奶", "Lait entier frais"),
  "PANNA 36M FATTORIA GIULIA": l("PANNA 36M FATTORIA GIULIA", "Fattoria Giulia 36M cream", "Fattoria Giulia 36M 奶油", "Crème 36M Fattoria Giulia"),
  "PANNA 36M FATTORIA DONI": l("PANNA 36M FATTORIA DONI", "Fattoria Doni 36M cream", "Fattoria Doni 36M 奶油", "Crème 36M Fattoria Doni"),
  "SACCAROSIO": l("SACCAROSIO", "Sucrose", "蔗糖", "Saccharose"),
  "AGRIMONTANA CREMA EMILIO": l("AGRIMONTANA CREMA EMILIO", "Agrimontana Crema Emilio", "Agrimontana Crema Emilio", "Agrimontana Crema Emilio"),
  "LATTE SCREMATO IN POLVERE": l("LATTE SCREMATO IN POLVERE", "Skimmed milk powder", "脱脂奶粉", "Lait écrémé en poudre"),
  "PASTA MANDORLA VAL DI NOTO": l("PASTA MANDORLA VAL DI NOTO", "Val di Noto almond paste", "Val di Noto 杏仁酱", "Pâte d'amande Val di Noto"),
  "PASTA CHIARA DI NOCCIOLA": l("PASTA CHIARA DI NOCCIOLA", "Light hazelnut paste", "浅色榛子酱", "Pâte claire de noisette"),
  "PASTA DI PISTACCHIO": l("PASTA DI PISTACCHIO", "Pistachio paste", "开心果酱", "Pâte de pistache"),
  "RICOTTA VACCINA": l("RICOTTA VACCINA", "Cow's milk ricotta", "牛奶乳清干酪", "Ricotta de lait de vache"),
  "AMARENA": l("AMARENA", "Sour cherry", "酸樱桃", "Griotte"),
  "CIOCCOLATO": l("CIOCCOLATO", "Chocolate", "巧克力", "Chocolat"),
  "NUTELLA": l("NUTELLA", "Nutella", "Nutella", "Nutella"),
  "COCCO": l("COCCO", "Coconut", "椰子", "Noix de coco"),
  "PERA": l("PERA", "Pear", "梨", "Poire"),
  "FICHI": l("FICHI", "Figs", "无花果", "Figues"),
  "PASTA COCCO": l("PASTA COCCO", "Coconut paste", "椰子酱", "Pâte de noix de coco"),
  "GLUCOSIO DISIDRATATO 33DE": l("GLUCOSIO DISIDRATATO 33DE", "Dehydrated glucose 33DE", "33DE 脱水葡萄糖", "Glucose déshydraté 33DE"),
  "ZUCCHERO CARAMELLATO": l("ZUCCHERO CARAMELLATO", "Caramelized sugar", "焦糖化糖", "Sucre caramélisé"),
  "TUORLO": l("TUORLO", "Egg yolk", "蛋黄", "Jaune d'oeuf"),
  "PASTA VANIGLIA": l("PASTA VANIGLIA", "Vanilla paste", "香草酱", "Pâte de vanille"),
  "VANIGLIA BACCHE": l("VANIGLIA BACCHE", "Vanilla beans", "香草荚", "Gousses de vanille"),
  "CAFFE ESPRESSO": l("CAFFE ESPRESSO", "Espresso coffee", "意式浓缩咖啡", "Café espresso"),
  "ESTRATTO ILLY": l("ESTRATTO ILLY", "Illy extract", "Illy 提取物", "Extrait Illy"),
  "GELSI NERI": l("GELSI NERI", "Black mulberries", "黑桑葚", "Mures noires"),
  "SCIROPPO DI ZUCCHERI": l("SCIROPPO DI ZUCCHERI", "Sugar syrup", "糖浆", "Sirop de sucres"),
  "FRAGOLE": l("FRAGOLE", "Fresh strawberries", "新鲜草莓", "Fraises"),
  "LAMPONI POLPA": l("LAMPONI POLPA", "Raspberry pulp", "覆盆子果肉", "Pulpe de framboise"),
  "MARZAPANE MANDORLE": l("MARZAPANE MANDORLE", "Almond marzipan", "杏仁杏仁膏", "Massepain aux amandes"),
  "SUCCO DI LIMONE SORRENTO": l("SUCCO DI LIMONE SORRENTO", "Sorrento lemon juice", "索伦托柠檬汁", "Jus de citron de Sorrente"),
  "SUCCO DI ANANAS": l("SUCCO DI ANANAS", "Pineapple juice", "菠萝汁", "Jus d'ananas"),
  "SUCCO DI MANDARINO": l("SUCCO DI MANDARINO", "Mandarin juice", "橘子汁", "Jus de mandarine"),
  "MALTODESTRINE": l("MALTODESTRINE", "Maltodextrins", "麦芽糊精", "Maltodextrines"),
  "SUCCO DI MANGO": l("SUCCO DI MANGO", "Mango juice", "芒果汁", "Jus de mangue"),
  "YOGURT FRESCO": l("YOGURT FRESCO", "Fresh yogurt", "新鲜酸奶", "Yaourt frais"),
  "PANNA FATTORIA GIULIA": l("PANNA FATTORIA GIULIA", "Fattoria Giulia cream", "Fattoria Giulia 奶油", "Crème Fattoria Giulia"),
  "PANNA FRESCA": l("PANNA FRESCA", "Fresh cream", "新鲜奶油", "Crème fraîche"),
  "Contiene: glutine cioccolato. Può contenere tracce di senape soia, frutta a guscio, possibile contaminazione di uova.": l(
    "Contiene: glutine cioccolato. Può contenere tracce di senape soia, frutta a guscio, possibile contaminazione di uova.",
    "Contains: gluten, chocolate. May contain traces of mustard, soy, tree nuts, possible egg contamination.",
    "含有：麸质、巧克力。可能含有微量芥末、大豆、坚果，并可能有鸡蛋交叉污染。",
    "Contient : gluten, chocolat. Peut contenir des traces de moutarde, soja, fruits à coque, contamination possible par des oeufs."
  ),
  "Contiene: glutine cioccolato. Può contenere tracce di senape soia, frutta a guscio, latte e derivati, possibile contaminazione di uova.": l(
    "Contiene: glutine cioccolato. Può contenere tracce di senape soia, frutta a guscio, latte e derivati, possibile contaminazione di uova.",
    "Contains: gluten, chocolate. May contain traces of mustard, soy, tree nuts, milk and dairy products, possible egg contamination.",
    "含有：麸质、巧克力。可能含有微量芥末、大豆、坚果、牛奶及乳制品，并可能有鸡蛋交叉污染。",
    "Contient : gluten, chocolat. Peut contenir des traces de moutarde, soja, fruits à coque, lait et produits laitiers, contamination possible par des oeufs."
  ),
  "Contiene: glutine. Può contenere tracce di senape soia, latte e derivati, possibile contaminazione di uova.": l(
    "Contiene: glutine. Può contenere tracce di senape soia, latte e derivati, possibile contaminazione di uova.",
    "Contains: gluten. May contain traces of mustard, soy, milk and dairy products, possible egg contamination.",
    "含有：麸质。可能含有微量芥末、大豆、牛奶及乳制品，并可能有鸡蛋交叉污染。",
    "Contient : gluten. Peut contenir des traces de moutarde, soja, lait et produits laitiers, contamination possible par des oeufs."
  ),
  "Contiene: glutine. Può contenere tracce di senape soia latte e derivati, possibile contaminazione di uova.": l(
    "Contiene: glutine. Può contenere tracce di senape soia latte e derivati, possibile contaminazione di uova.",
    "Contains: gluten. May contain traces of mustard, soy, milk and dairy products, possible egg contamination.",
    "含有：麸质。可能含有微量芥末、大豆、牛奶及乳制品，并可能有鸡蛋交叉污染。",
    "Contient : gluten. Peut contenir des traces de moutarde, soja, lait et produits laitiers, contamination possible par des oeufs."
  ),
  "FARINA DI FRUMENTO": l("FARINA DI FRUMENTO", "Wheat flour", "小麦粉", "Farine de blé"),
  "UOVA": l("UOVA", "Eggs", "鸡蛋", "Oeufs"),
  "BURRO": l("BURRO", "Butter", "黄油", "Beurre"),
  "ZUCCHERO": l("ZUCCHERO", "Sugar", "糖", "Sucre"),
  "LIEVITO": l("LIEVITO", "Yeast", "酵母", "Levure"),
  "LATTE INTERO IN POLVERE": l("LATTE INTERO IN POLVERE", "Whole milk powder", "全脂奶粉", "Lait entier en poudre"),
  "SALE": l("SALE", "Salt", "盐", "Sel")
};

function t(it: string): Record<Locale, string>;
function t(it: string[]): Record<Locale, string[]>;
function t(it: string | string[]): Record<Locale, string> | Record<Locale, string[]> {
  if (Array.isArray(it)) {
    return {
      it,
      en: it.map((item) => translatedText[item]?.en ?? item),
      zh: it.map((item) => translatedText[item]?.zh ?? item),
      fr: it.map((item) => translatedText[item]?.fr ?? item)
    };
  }

  return translatedText[it] ?? l(it, it, it, it);
}

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
    icon: "milk"
  },
  soia: {
    label: t("Soia"),
    description: t("Soia e derivati"),
    icon: "sprout"
  },
  "frutta-a-guscio": {
    label: t("Frutta a guscio"),
    description: t("Possibile frutta a guscio"),
    icon: "nut"
  },
  mandorla: {
    label: t("Mandorla"),
    description: t("Mandorla, frutta a guscio"),
    icon: "diamond"
  },
  nocciola: {
    label: t("Nocciola"),
    description: t("Nocciola, frutta a guscio"),
    icon: "hazelnut"
  },
  pistacchio: {
    label: t("Pistacchio"),
    description: t("Pistacchio, frutta a guscio"),
    icon: "leaf"
  },
  cocco: {
    label: t("Cocco"),
    description: t("Cocco"),
    icon: "coconut"
  },
  uova: {
    label: t("Uova"),
    description: t("Uova e derivati"),
    icon: "egg"
  },
  arachidi: {
    label: t("Arachidi"),
    description: t("Arachidi e derivati"),
    icon: "peanut"
  },
  glutine: {
    label: t("Glutine"),
    description: t("Cereali contenenti glutine"),
    icon: "wheat"
  },
  senape: {
    label: t("Senape"),
    description: t("Senape"),
    icon: "jar"
  },
  sesamo: {
    label: t("Sesamo"),
    description: t("Semi di sesamo"),
    icon: "seeds"
  }
};

export const categoryLabels: Record<Category | "all", Record<Locale, string>> = {
  all: t("Tutti"),
  gelato: t("Gelati"),
  sorbetto: t("Sorbetti"),
  extra: t("Coni e extra")
};

export const allergenPresenceLabels: Record<AllergenPresence, Record<Locale, string>> = {
  contains: t("Contiene"),
  "may-contain": t("Possibile presenza")
};

type UiCopy = {
  siteTitle: string;
  siteDescription: string;
  socialDescription: string;
  socialImageAlt: string;
  brandTitle: string;
  brandSubtitle: string;
  languageNavLabel: string;
  heroTitle: string;
  heroIntro: string;
  mainActionsLabel: string;
  primaryAction: string;
  ghostAction: string;
  heroProofLabel: string;
  allCountLabel: string;
  gelatoCountLabel: string;
  sorbettoCountLabel: string;
  filterSectionLabel: string;
  categoryTabsLabel: string;
  searchLabel: string;
  searchPlaceholder: string;
  flavorGridLabel: string;
  allergensHeading: string;
  ingredientFactLabel: string;
  allergenFactLabel: string;
  fullIngredientsHeading: string;
  fullAllergensHeading: string;
  footerStatus: string;
  openFlavor: (name: string) => string;
  closeFlavor: (name: string) => string;
  ingredientCountLabel: (count: number) => string;
  photoAlt: (name: string) => string;
  allergensFor: (name: string) => string;
};

export const uiCopy: Record<Locale, UiCopy> = {
  it: {
    siteTitle: "LaB Ingredienti e Allergeni | Laboratorio del Gelato Praiano",
    siteDescription: "Consulta ingredienti e allergeni dei gelati artigianali, sorbetti, coni ed extra di LaB Laboratorio del Gelato a Praiano.",
    socialDescription: "Scegli il tuo gelato LaB a Praiano con schede chiare su ingredienti, allergeni e possibili tracce.",
    socialImageAlt: "Gelato stracciatella di LaB Laboratorio del Gelato a Praiano",
    brandTitle: "Ingredienti e allergeni",
    brandSubtitle: "Praiano, Amalfi Coast",
    languageNavLabel: "Lingue disponibili",
    heroTitle: "Ingredienti chiari per scegliere il tuo gelato.",
    heroIntro: "Consulta ingredienti e allergeni di gelati, sorbetti, coni e extra. Le indicazioni seguono il documento ingredienti per il pubblico.",
    mainActionsLabel: "Azioni principali",
    primaryAction: "Consulta gusti",
    ghostAction: "Filtra categorie",
    heroProofLabel: "Sintesi catalogo",
    allCountLabel: "gusti e extra",
    gelatoCountLabel: "gelati",
    sorbettoCountLabel: "sorbetti",
    filterSectionLabel: "Filtro categorie",
    categoryTabsLabel: "Categorie",
    searchLabel: "Cerca gusto o ingrediente",
    searchPlaceholder: "Cerca gusto o ingrediente...",
    flavorGridLabel: "Lista ingredienti e allergeni",
    allergensHeading: "Allergeni",
    ingredientFactLabel: "ingredienti",
    allergenFactLabel: "allergeni indicati",
    fullIngredientsHeading: "Ingredienti completi",
    fullAllergensHeading: "Allergeni completi",
    footerStatus: "Versione italiana. Traduzioni disponibili: English, 中文, Français.",
    openFlavor: (name) => `Apri scheda dettagliata di ${name}`,
    closeFlavor: (name) => `Chiudi scheda dettagliata di ${name}`,
    ingredientCountLabel: (count) => `${count} ingredienti`,
    photoAlt: (name) => `Foto di ${name}`,
    allergensFor: (name) => `Allergeni per ${name}`
  },
  en: {
    siteTitle: "LaB Ingredients and Allergens | Laboratorio del Gelato Praiano",
    siteDescription: "Check ingredients and allergens for LaB artisan gelato, sorbets, cones and extras in Praiano.",
    socialDescription: "Choose your LaB gelato in Praiano with clear ingredient, allergen and trace information.",
    socialImageAlt: "LaB Laboratorio del Gelato stracciatella gelato in Praiano",
    brandTitle: "Ingredients and allergens",
    brandSubtitle: "Praiano, Amalfi Coast",
    languageNavLabel: "Available languages",
    heroTitle: "Clear ingredients to choose your gelato.",
    heroIntro: "Check ingredients and allergens for gelato, sorbets, cones and extras. The information follows the public ingredient document.",
    mainActionsLabel: "Main actions",
    primaryAction: "Browse flavors",
    ghostAction: "Filter categories",
    heroProofLabel: "Catalog summary",
    allCountLabel: "flavors and extras",
    gelatoCountLabel: "gelato flavors",
    sorbettoCountLabel: "sorbets",
    filterSectionLabel: "Category filter",
    categoryTabsLabel: "Categories",
    searchLabel: "Search flavor or ingredient",
    searchPlaceholder: "Search flavor or ingredient...",
    flavorGridLabel: "Ingredient and allergen list",
    allergensHeading: "Allergens",
    ingredientFactLabel: "ingredients",
    allergenFactLabel: "listed allergens",
    fullIngredientsHeading: "Full ingredients",
    fullAllergensHeading: "Full allergens",
    footerStatus: "English version. Other languages: Italiano, 中文, Français.",
    openFlavor: (name) => `Open detailed card for ${name}`,
    closeFlavor: (name) => `Close detailed card for ${name}`,
    ingredientCountLabel: (count) => `${count} ingredients`,
    photoAlt: (name) => `Photo of ${name}`,
    allergensFor: (name) => `Allergens for ${name}`
  },
  zh: {
    siteTitle: "LaB 成分与过敏原 | Laboratorio del Gelato Praiano",
    siteDescription: "查看普莱亚诺 LaB 手工冰淇淋、雪葩、蛋筒与配料的成分和过敏原。",
    socialDescription: "在普莱亚诺选择 LaB 冰淇淋，清楚了解成分、过敏原和可能痕量。",
    socialImageAlt: "普莱亚诺 LaB Laboratorio del Gelato 巧克力碎片冰淇淋",
    brandTitle: "成分与过敏原",
    brandSubtitle: "普莱亚诺，阿马尔菲海岸",
    languageNavLabel: "可用语言",
    heroTitle: "清楚了解成分，放心选择冰淇淋。",
    heroIntro: "查看冰淇淋、雪葩、蛋筒与配料的成分和过敏原。信息依据面向顾客的成分文件。",
    mainActionsLabel: "主要操作",
    primaryAction: "查看口味",
    ghostAction: "筛选分类",
    heroProofLabel: "目录概览",
    allCountLabel: "口味与配料",
    gelatoCountLabel: "冰淇淋",
    sorbettoCountLabel: "雪葩",
    filterSectionLabel: "分类筛选",
    categoryTabsLabel: "分类",
    searchLabel: "搜索口味或成分",
    searchPlaceholder: "搜索口味或成分...",
    flavorGridLabel: "成分与过敏原列表",
    allergensHeading: "过敏原",
    ingredientFactLabel: "种成分",
    allergenFactLabel: "项过敏原",
    fullIngredientsHeading: "完整成分",
    fullAllergensHeading: "完整过敏原",
    footerStatus: "中文版。其他语言：Italiano, English, Français。",
    openFlavor: (name) => `打开 ${name} 的详细卡片`,
    closeFlavor: (name) => `关闭 ${name} 的详细卡片`,
    ingredientCountLabel: (count) => `${count} 种成分`,
    photoAlt: (name) => `${name} 的照片`,
    allergensFor: (name) => `${name} 的过敏原`
  },
  fr: {
    siteTitle: "LaB Ingrédients et Allergènes | Laboratorio del Gelato Praiano",
    siteDescription: "Consultez les ingrédients et allergènes des glaces artisanales, sorbets, cornets et extras LaB à Praiano.",
    socialDescription: "Choisissez votre glace LaB à Praiano avec des fiches claires sur ingrédients, allergènes et traces possibles.",
    socialImageAlt: "Glace stracciatella de LaB Laboratorio del Gelato à Praiano",
    brandTitle: "Ingrédients et allergènes",
    brandSubtitle: "Praiano, Côte amalfitaine",
    languageNavLabel: "Langues disponibles",
    heroTitle: "Des ingrédients clairs pour choisir votre glace.",
    heroIntro: "Consultez les ingrédients et allergènes des glaces, sorbets, cornets et extras. Les indications suivent le document public des ingrédients.",
    mainActionsLabel: "Actions principales",
    primaryAction: "Voir les parfums",
    ghostAction: "Filtrer les catégories",
    heroProofLabel: "Résumé du catalogue",
    allCountLabel: "parfums et extras",
    gelatoCountLabel: "glaces",
    sorbettoCountLabel: "sorbets",
    filterSectionLabel: "Filtre des catégories",
    categoryTabsLabel: "Catégories",
    searchLabel: "Rechercher un parfum ou ingrédient",
    searchPlaceholder: "Rechercher un parfum ou ingrédient...",
    flavorGridLabel: "Liste des ingrédients et allergènes",
    allergensHeading: "Allergènes",
    ingredientFactLabel: "ingrédients",
    allergenFactLabel: "allergènes indiqués",
    fullIngredientsHeading: "Ingrédients complets",
    fullAllergensHeading: "Allergènes complets",
    footerStatus: "Version française. Autres langues : Italiano, English, 中文.",
    openFlavor: (name) => `Ouvrir la fiche détaillée de ${name}`,
    closeFlavor: (name) => `Fermer la fiche détaillée de ${name}`,
    ingredientCountLabel: (count) => `${count} ingrédients`,
    photoAlt: (name) => `Photo de ${name}`,
    allergensFor: (name) => `Allergènes pour ${name}`
  }
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
    id: "vaniglia",
    category: "gelato",
    name: t("Vaniglia"),
    ingredients: t([
      "LATTE FRESCO INTERO",
      "PANNA 36M FATTORIA DONI",
      "SACCAROSIO (ZUCCHERO)",
      "PASTA VANIGLIA",
      "DESTROSIO",
      "AGRIMONTANA CREMA EMILIO",
      "LATTE SCREMATO IN POLVERE"
    ]),
    allergens: [contains("latte"), mayContain("soia"), mayContain("frutta-a-guscio")],
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
    ingredients: t(["GELSI NERI", "SCIROPPO DI ZUCCHERI", "ACQUA"]),
    allergens: [mayContain("latte", "Da Base Sorbetto 50")],
    iconSlug: "grapes",
    theme: "mulberry"
  },
  {
    id: "fragola-sorbetto",
    category: "sorbetto",
    name: t("Fragola sorbetto"),
    ingredients: t(["SCIROPPO DI ZUCCHERI", "FRAGOLE", "ACQUA"]),
    allergens: [mayContain("latte", "Da Base Sorbetto 50")],
    iconSlug: "strawberry",
    theme: "strawberry"
  },
  {
    id: "lampone-sorbetto",
    category: "sorbetto",
    name: t("Lampone sorbetto"),
    ingredients: t(["SCIROPPO DI ZUCCHERI", "LAMPONI POLPA", "ACQUA"]),
    allergens: [mayContain("latte", "Da Base Sorbetto 50")],
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
    allergens: [mayContain("latte", "Da Base Sorbetto 50")],
    iconSlug: "citrus",
    theme: "lemon"
  },
  {
    id: "ananas",
    category: "sorbetto",
    name: t("Ananas"),
    ingredients: t(["SCIROPPO DI ZUCCHERI", "SUCCO DI ANANAS", "ACQUA"]),
    allergens: [mayContain("latte", "Da Base Sorbetto 50")],
    iconSlug: "pineapple",
    theme: "pineapple"
  },
  {
    id: "mandarino",
    category: "sorbetto",
    name: t("Mandarino"),
    ingredients: t(["SCIROPPO DI ZUCCHERI", "SUCCO DI MANDARINO", "ACQUA"]),
    allergens: [mayContain("latte", "Da Base Sorbetto 50")],
    iconSlug: "orange",
    theme: "mandarin"
  },
  {
    id: "sciroppo-zucchero",
    category: "sorbetto",
    name: t("Sciroppo di zucchero"),
    ingredients: t(["ACQUA", "SACCAROSIO", "BASE SORBETTO 50", "MALTODESTRINE", "DESTROSIO"]),
    allergens: [mayContain("latte", "Da Base Sorbetto 50")],
    iconSlug: "sugar",
    theme: "syrup"
  },
  {
    id: "mango",
    category: "sorbetto",
    name: t("Mango"),
    ingredients: t(["SCIROPPO DI ZUCCHERI", "SUCCO DI MANGO", "ACQUA"]),
    allergens: [mayContain("latte", "Da Base Sorbetto 50")],
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
