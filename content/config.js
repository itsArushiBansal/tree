import { z } from "zod";

// Define schema for the "post" collection
const postSchema = z.object({
  name: z.literal("post"),
  label: z.literal("Posts"),
  path: z.literal("content/posts"),
  fields: z.array(
    z.union([
      z.object({
        type: z.literal("string"),
        name: z.literal("title"),
        label: z.literal("Title"),
        isTitle: z.boolean(),
        required: z.boolean(),
      }),
      z.object({
        type: z.literal("datetime"),
        name: z.literal("posted"),
        label: z.literal("Date Posted"),
        required: z.boolean(),
      }),
      z.object({
        type: z.literal("rich-text"),
        name: z.literal("body"),
        label: z.literal("Body"),
        isBody: z.boolean().optional(),
      }),
    ])
  ),
});

// Define schema for the "project" collection
const projectSchema = z.object({
  name: z.literal("project"),
  label: z.literal("Projects"),
  path: z.literal("content/projects"),
  fields: z.array(
    z.union([
      z.object({
        type: z.literal("string"),
        name: z.literal("title"),
        label: z.literal("Project Title"),
        isTitle: z.boolean(),
        required: z.boolean(),
      }),
      z.object({
        type: z.literal("string"),
        name: z.literal("description"),
        label: z.literal("Description"),
        required: z.boolean(),
      }),
      z.object({
        type: z.literal("datetime"),
        name: z.literal("date"),
        label: z.literal("Project Date"),
        required: z.boolean(),
      }),
      z.object({
        type: z.literal("rich-text"),
        name: z.literal("content"),
        label: z.literal("Content"),
      }),
    ])
  ),
});

// Main config schema
const configSchema = z.object({
  branch: z.string().optional(),
  clientId: z.string().optional(),
  token: z.string().optional(),
  build: z.object({
    outputFolder: z.string().optional(),
    publicFolder: z.string().optional(),
  }),
  media: z.object({
    tina: z.object({
      mediaRoot: z.string().optional(),
      publicFolder: z.string().optional(),
    }),
  }),
  schema: z.object({
    collections: z.array(z.union([postSchema, projectSchema])),
  }),
});

export default configSchema;
