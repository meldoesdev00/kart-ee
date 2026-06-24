import { defineField, defineType } from "sanity";

const etapid = ["I", "II", "III", "IV", "V", "VI"];

const ridaFields = [
  defineField({ name: "nimi", type: "string", title: "Sõitja nimi", validation: (Rule) => Rule.required() }),
  ...etapid.flatMap((roman) => [
    defineField({ name: `etapp${roman}Koht`, type: "number", title: `${roman} etapp — koht` }),
    defineField({ name: `etapp${roman}Punktid`, type: "number", title: `${roman} etapp — punktid` }),
  ]),
  defineField({ name: "kokkuPunktid", type: "number", title: "Kokku punktid" }),
];

export const hooajaPunktitabel = defineType({
  name: "hooajaPunktitabel",
  type: "document",
  title: "Hooaja punktitabel",
  fields: [
    defineField({
      name: "pealkiri",
      type: "string",
      title: "Pealkiri",
      description: 'nt "Tulemused pärast II etappi"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "u11",
      type: "array",
      title: "U11 punktitabel",
      description: "Rea järjekord = koht (lohista ridu ümber järjestamiseks)",
      of: [{
        type: "object",
        fields: ridaFields,
        preview: { select: { title: "nimi", subtitle: "kokkuPunktid" }, prepare: ({ title, subtitle }) => ({ title, subtitle: subtitle ? `${subtitle} punkti` : undefined }) },
      }],
    }),
    defineField({
      name: "u14",
      type: "array",
      title: "U14 punktitabel",
      description: "Rea järjekord = koht (lohista ridu ümber järjestamiseks)",
      of: [{
        type: "object",
        fields: ridaFields,
        preview: { select: { title: "nimi", subtitle: "kokkuPunktid" }, prepare: ({ title, subtitle }) => ({ title, subtitle: subtitle ? `${subtitle} punkti` : undefined }) },
      }],
    }),
  ],
  preview: {
    select: { title: "pealkiri" },
  },
});
