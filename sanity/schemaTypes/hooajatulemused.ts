import { defineArrayMember, defineField, defineType } from "sanity";

export const hooajaTulemused = defineType({
  name: "hooajaTulemused",
  title: "Hooaja tulemused",
  type: "document",
  fields: [
    defineField({
      name: "pealkiri",
      title: "Võistluse nimi",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "jarjekord",
      title: "Järjekord (väiksem number = esimene)",
      type: "number",
      validation: (R) => R.required().integer().positive(),
    }),
    defineField({
      name: "lingid",
      title: "Lingid",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "nimetus",
              title: "Nimetus",
              description: "nt „U11 hooaja tulemused"",
              type: "string",
              validation: (R) => R.required(),
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
              validation: (R) => R.required(),
            }),
          ],
          preview: {
            select: { title: "nimetus", subtitle: "url" },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "pealkiri", subtitle: "jarjekord" },
    prepare({ title, subtitle }) {
      return { title, subtitle: `Järjekord: ${subtitle}` };
    },
  },
  orderings: [
    {
      title: "Järjekord",
      name: "jarjekordAsc",
      by: [{ field: "jarjekord", direction: "asc" }],
    },
  ],
});
