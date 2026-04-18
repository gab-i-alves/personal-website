import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const posts = defineCollection({
  // Load Markdown and MDX files in the `src/content/posts/` directory.
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: () =>
    z.object({
      title: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      image: z.string().optional()
    })
})

const about = defineCollection({
  // Load Markdown files in the `src/content/about/` directory.
  loader: glob({ base: './src/content/about', pattern: '**/*.md' }),
  // Type-check frontmatter using a schema
  schema: z.object({})
})

const dailyLogs = defineCollection({
  // Load Markdown and MDX files in the `src/content/daily-logs/` directory.
  loader: glob({ base: './src/content/daily-logs', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: () =>
    z.object({
      date: z.coerce.date(),
      mood: z.string().optional(),
      tags: z.array(z.string()).optional(),
      photo: z.string().optional()
    })
})

const shelf = defineCollection({
  loader: glob({ base: './src/content/shelf', pattern: '**/*.{md,mdx}' }),
  schema: () =>
    z.object({
      title: z.string(),
      author: z.string().optional(),
      category: z.enum(['fiction', 'nonfiction', 'advice', 'science', 'history']),
      medium: z.enum(['book', 'essay', 'short-story', 'video', 'podcast', 'paper', 'blog-post', 'other']),
      rating: z.number().min(1).max(10).optional(),
      writingScore: z.number().min(1).max(10).optional(),
      duration: z.string().optional(),
      tags: z.array(z.string()).default([]),
      favorite: z.boolean().default(false),
      url: z.string().optional(),
      dateRead: z.coerce.date().optional()
    })
})

export const collections = { posts, about, dailyLogs, shelf }
