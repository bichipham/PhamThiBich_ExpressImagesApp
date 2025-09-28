export const imageSwagger = {
  "/image/": {
    get: {
      tags: ["Images"],
      summary: "Get all images",
      security: [{ bearerAuth: [] }],
      parameters: [
        {
          name: "page",
          in: "query",
          required: false,
          schema: { type: "integer", default: 1 },
          description: "Page number (default = 1)",
        },
        {
          name: "size",
          in: "query",
          required: false,
          schema: { type: "integer", default: 10 },
          description: "Page size (default = 10)",
        },
        {
          name: "keyword",
          in: "query",
          required: false,
          schema: { type: "string" },
          description: "Search images by name",
        },
      ],
      responses: {
        200: { description: "List of images" },
      },
    },
  },
  "/image/{id}": {
    get: {
      tags: ["Images"],
      summary: "Get image by id",
      security: [{ bearerAuth: [] }],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "integer" },
        },
      ],
      responses: {
        200: { description: "Image detail" },
      },
    },
  },
  "/image/{id}/comment": {
    get: {
      tags: ["Images"],
      summary: "Get all comments of an image",
      security: [{ bearerAuth: [] }],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "integer" },
        },
      ],
      responses: {
        200: { description: "List of comments with user info" },
      },
    },
  },
  "/image/{id}/is-saved-by-user": {
    get: {
      tags: ["Images"],
      summary: "Check if image is saved by current user",
      security: [{ bearerAuth: [] }],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "integer" },
        },
      ],
      responses: {
        200: { description: "Saved status (true/false)" },
      },
    },
  },
};
