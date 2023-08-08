import { defineCollection, z } from "astro:content";

// Women collection schema
const womensCollection = defineCollection({
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    categories: z.array(z.string()).default(["others"]),
    tags: z.array(z.string()).default(["others"]),
  }),
});

// Mens collection schema
const mensCollection = defineCollection({
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    categories: z.array(z.string()).default(["others"]),
    tags: z.array(z.string()).default(["others"]),
  }),
});

// Nony-binary collection schema
const nonbinaryCollection = defineCollection({
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    categories: z.array(z.string()).default(["others"]),
    tags: z.array(z.string()).default(["others"]),
  }),
});

// Nony-binary collection schema
const kidsCollection = defineCollection({
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    categories: z.array(z.string()).default(["others"]),
    tags: z.array(z.string()).default(["others"]),
  }),
});


// // Author collection schema
// const authorsCollection = defineCollection({
//   schema: z.object({
//     id: z.string().optional(),
//     title: z.string(),
//     meta_title: z.string().optional(),
//     image: z.string().optional(),
//     description: z.string().optional(),
//     social: z
//       .object({
//         facebook: z.string().optional(),
//         twitter: z.string().optional(),
//         instagram: z.string().optional(),
//       })
//       .optional(),
//     draft: z.boolean().optional(),
//   }),
// });

// Pages collection schema
const pagesCollection = defineCollection({
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    layout: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// Export collections
export const collections = {
  women: womensCollection,
  men: mensCollection,
  nonbinary: nonbinaryCollection,
  kids: kidsCollection,
  pages: pagesCollection
};
