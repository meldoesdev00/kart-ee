import { defineField, defineType } from "sanity";

const tulemusFields = [
  defineField({ name: "koht", type: "number", title: "Koht" }),
  defineField({ name: "nimi", type: "string", title: "Sõitja nimi" }),
  defineField({ name: "parimRing", type: "string", title: "Parim ring" }),
  defineField({ name: "punktid", type: "number", title: "Punktid" }),
];

export const etappTulemused = defineType({
  name: "etappTulemused",
  type: "document",
  title: "Etapp",
  fields: [
    defineField({
      name: "etappNr",
      type: "number",
      title: "Etapi number",
      description: "Järjekorranumber (1, 2, 3...)",
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "etappNimi",
      type: "string",
      title: "Etapi nimi",
      description: 'nt "I etapp" või "II etapp"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "kuupaev",
      type: "string",
      title: "Kuupäev",
      description: 'nt "26. aprill 2026"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "asukoht",
      type: "string",
      title: "Asukoht",
      description: 'nt "Unibet Kardikeskus, Tallinn"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "u11",
      type: "array",
      title: "U11 tulemused",
      of: [{ type: "object", fields: tulemusFields }],
    }),
    defineField({
      name: "u14",
      type: "array",
      title: "U14 tulemused",
      of: [{ type: "object", fields: tulemusFields }],
    }),
  ],
  orderings: [
    {
      title: "Etapi number (uuem ees)",
      name: "etappNrDesc",
      by: [{ field: "etappNr", direction: "desc" }],
    },
  ],
});
