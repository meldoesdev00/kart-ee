import { defineField, defineType } from "sanity";

export const etappSeade = defineType({
  name: "etappSeade",
  title: "Etapi seaded",
  type: "document",
  fields: [
    defineField({
      name: "etappNr",
      title: "Etapp nr (nt \"02\")",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "etappLabel",
      title: "Pealkiri (nt \"II etapp\")",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "etappNimi",
      title: "Rada (nt \"EST1 Karting Aravete\")",
      type: "string",
      validation: (R) => R.required(),
    }),
  ],
  preview: {
    select: { title: "etappLabel", subtitle: "etappNimi" },
  },
});
