import { defineCollection, z } from 'astro:content'

const videos = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      heroImage: image()
    })
})

const risograph = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      heroImage: image()
    })
})

const fabrication = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      heroImage: image()
    })
})

export const collections = {
  videos: videos,
  risograph: risograph,
  fabrication: fabrication
}
