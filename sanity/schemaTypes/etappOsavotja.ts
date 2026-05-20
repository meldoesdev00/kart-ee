import { defineField, defineType } from "sanity";

export const etappOsavotja = defineType({
  name: "etappOsavotja",
  title: "Etapi osavõtja",
  type: "document",
  fields: [
    defineField({ name: "etappNr",   title: "Etapp nr",     type: "string" }),
    defineField({ name: "etappNimi", title: "Etapi nimi",   type: "string" }),
    defineField({ name: "nimi",      title: "Sõitja nimi",  type: "string" }),
    defineField({ name: "vanuseklass", title: "Vanuseklass", type: "string" }),
    defineField({ name: "kool",      title: "Kool",         type: "string" }),
  ],
  preview: {
    select: { title: "nimi", subtitle: "vanuseklass" },
    prepare({ title, subtitle }) {
      return { title, subtitle };
    },
  },
  orderings: [
    {
      title: "Etapp, siis nimi",
      name: "etappThenNimi",
      by: [{ field: "etappNr", direction: "asc" }, { field: "nimi", direction: "asc" }],
    },
  ],
});
