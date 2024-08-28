import { defineCollection, z } from 'astro:content';

export const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    featured: z.boolean().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
});

export type BlogType = z.infer<typeof blogSchema>;

export const blogCollection = defineCollection({
    type: 'content',
    // Type-check frontmatter using a schema
    schema: blogSchema,
});
