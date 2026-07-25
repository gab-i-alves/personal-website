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
      /** Cover art, served from /public. Used by the bookshelf and the entry page. */
      cover: z.string().optional(),
      dateRead: z.coerce.date().optional()
    })
})

const curriculum = defineCollection({
  loader: glob({ base: './src/content/curriculum', pattern: '**/*.{md,mdx}' }),
  schema: () =>
    z.object({
      // short title for the rail (the part after the em dash in the source heading)
      title: z.string(),
      // full original heading, e.g. "Disciplina D1 — Teoria da Informação"
      heading: z.string(),
      // catalog marker: P1, P2, D1…D12, S1, S2, Capstone
      code: z.string(),
      // which phase the subject belongs to
      phase: z.enum(['prop', 'i', 'ii', 'iii']),
      // thematic track A–E (disciplines only; P/S subjects omit it)
      track: z.enum(['A', 'B', 'C', 'D', 'E']).optional(),
      // sorts subjects within a phase
      order: z.number().default(0),
      // where the subject stands. Self-directed study has no calendar, so this
      // is the only progress signal it gets.
      status: z.enum(['planned', 'active', 'done']).default('planned')
    })
})

/** One lesson of a formal course, and how far through my own method it got.
 *  The four flags are the method itself: read what the teacher assigned, go
 *  deeper on my own, attend the live class, ship something that proves it. */
const lesson = z.object({
  n: z.number(),
  title: z.string(),
  date: z.coerce.date().optional(),
  /** the teacher's assigned pre-reading */
  pre: z.boolean().default(false),
  /** my own deeper pre-class research */
  deep: z.boolean().default(false),
  /** attended, with questions prepared */
  live: z.boolean().default(false),
  /** the receipt: a post, a notebook, exercises — something that proves it */
  artifact: z.boolean().default(false),
  artifactLabel: z.string().optional(),
  artifactUrl: z.string().optional()
})

const mba = defineCollection({
  loader: glob({ base: './src/content/mba', pattern: '**/*.{md,mdx}' }),
  schema: () =>
    z.object({
      title: z.string(),
      heading: z.string(),
      /** catalog marker: D1…D8 */
      code: z.string(),
      order: z.number().default(0),
      status: z.enum(['planned', 'active', 'done']).default('planned'),
      /** human-readable window, e.g. "jul–ago 2026" */
      period: z.string().optional(),
      /** folder for this subject in the study monorepo */
      repo: z.string().optional(),
      /** headline stack, shown as pills on the card */
      stack: z.array(z.string()).default([]),
      lessons: z.array(lesson).default([])
    })
})

const program = defineCollection({
  loader: glob({ base: './src/content/program', pattern: '**/*.{md,mdx}' }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string()
    })
})

export const collections = { posts, about, dailyLogs, shelf, curriculum, program, mba }
