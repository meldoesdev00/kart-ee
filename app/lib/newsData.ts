export type NewsPost = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  img?: string;
  body: string;
};

export const NEWS: NewsPost[] = [
  {
    slug: "talendid-rajale-registreerimine",
    date: "15. aprill 2026",
    title: "Eesti Kardiliit avab registreerimise Talendid Rajale 2026 programmile",
    excerpt: "Tänasest on avatud registreerimine Eesti Kardiliidu flaglaevprogrammile, mis toob 12 andeka noore sõitja kokku professionaalsete treeneritega kolmeks intensiivseks nädalavahetuseks.",
    img: "/photos/talendidrajale.jpg",
    body: "Tänasest on avatud registreerimine Eesti Kardiliidu Talendid Rajale 2026 programmile. Sari pakub noorele sõitjale võimalust areneda professionaalses keskonnas kogenud treenerite juhendamisel.\n\nProgramm toimub kolmeks intensiivseks nädalavahetuseks erinevatel kardiradadel üle Eesti. Osalejad jagavad rajaaega, tehnilist tuge ja meeskonnatöö kogemust.\n\nRegistreerimiseks saada kiri aadressile kart@kart.ee. Koht on kinnitatud pärast osalustasu laekumist.",
  },
  {
    slug: "kardiakadeemia-hooaeg",
    date: "15. märts 2026",
    title: "Kardiakadeemia esimene hooaeg algas rekordilise osalejate arvuga",
    excerpt: "Kardiakadeemia esimese hooaja avamine tõi kokku enneolematu arvu osalejaid, mis näitab noore kardispordi suurt populaarsust Eestis.",
    body: "Kardiakadeemia avas 2026. aasta märtsis uksed ning esimene hooaeg algas rekordilise osalejate arvuga. Programmi esimesel moodulil, mis keskendub tehnika alustele, osales üle 20 noore sõitja vanuses 8–16 aastat.\n\nTreenerite sõnul on algajate huvi kardispordi vastu kasvanud märgatavalt võrreldes eelmiste aastatega.\n\nSõidutehnika moodul algab mais. Registreerimine on avatud kuni 30. aprillini.",
  },
  {
    slug: "meistrivõistlused-ajakava",
    date: "1. märts 2026",
    title: "Eesti Meistrivõistluste etappide ajakava 2026 on kinnitatud",
    excerpt: "Eesti Kardiliit kinnitas 2026. aasta meistrivõistluste ajakava. Nelja etapiga hooaeg algab juunis ja lõpeb septembris.",
    body: "Eesti Kardiliit on kinnitanud 2026. aasta Eesti Meistrivõistluste ajakava. Seekordne hooaeg koosneb neljast etapist, mis toimuvad juunist septembrini erinevatel Eesti kardiradadel.\n\nVõistlused on avatud kõigile registreeritud sõitjatele Mini, Junior, Senior ja OK klassides.\n\nI etapp toimub 15. juunil Unibet Kardikeskuses Tallinnas. Registreerimine etappidele avaneb aprilli keskel.",
  },
  {
    slug: "karikasari-tulemused",
    date: "20. veebruar 2026",
    title: "Karikasarja esimese etapi lõpptulemused on avaldatud",
    excerpt: "Karikasarja 2026 esimene etapp leidis aset veebruaris. Lõpptulemused on nüüd avaldatud kõigis klassides.",
    body: "Karikasarja 2026 aasta esimene etapp toimus veebruaris Unibet Kardikeskuses Tallinnas. Kokkuvõttes osales üle 60 sõitja kolmes klassis: OK-N, Mini ja Junior.\n\nLõpptulemused on avaldatud ja kättesaadavad Eesti Kardiliidu kodulehel.\n\nJärgmine etapp toimub mais. Registreerimine on avatud kuni 25. aprillini.",
  },
];
