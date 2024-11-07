import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "posted",
            label: "Date Posted",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      // Collection for Project.astro
      {
        name: "project",
        label: "Projects",
        path: "src/content/projects",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Project Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "headerTitle",
            label: "Header Title",
            required: true,
          },
          {
            type: "string",
            name: "description1",
            label: "Description 1",
            required: true,
          },
          {
            type: "string",
            name: "description2",
            label: "Description 2",
            required: true,
          },
          {
            type: "string",
            name: "sectionTitle",
            label: "Section Title",
            required: true,
          },
          {
            type: "string",
            name: "sectionDescription1",
            label: "Section Description 1",
            required: true,
          },
          {
            type: "string",
            name: "sectionDescription2",
            label: "Section Description 2",
            required: true,
          },
          {
            type: "string",
            name: "youtubeUrl",
            label: "YouTube URL",
            required: true,
          },
        ],
      },
    ],
  },
});
