export const userSwagger = {
  "/user/register": {
    post: {
      tags: ["Users"],
      summary: "Register new user",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                email: { type: "string" },
                password: { type: "string" },
                name: { type: "string" },
              },
            },
          },
        },
      },
      responses: {
        201: { description: "User registered" },
      },
    },
  },
  "/user/login": {
    post: {
      tags: ["Users"],
      summary: "User login",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                email: { type: "string" },
                password: { type: "string" },
              },
            },
          },
        },
      },
      responses: {
        200: { description: "User logged in" },
      },
    },
  },
  "/user/get-info": {
    get: {
      tags: ["Users"],
      summary: "Get user info",
      security: [{ bearerAuth: [] }],
      responses: {
        200: { description: "User info" },
      },
    },
  },
  "/user/upload-image": {
    post: {
      tags: ["Users"],
      summary: "Upload new image",
      security: [{ bearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          "multipart/form-data": {
            schema: {
              type: "object",
              properties: {
                image: { type: "string", format: "binary" },
              },
            },
          },
        },
      },
      responses: {
        201: { description: "Image uploaded" },
      },
    },
  },
  "/user/{id}/images": {
    get: {
      tags: ["Users"],
      summary: "Get all images created by user",
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
        200: { description: "List of user images" },
      },
    },
  },
  "/user/delete-image/{id}": {
    delete: {
      tags: ["Users"],
      summary: "Delete an image",
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
        200: { description: "Image deleted" },
      },
    },
  },
  "/user/comment": {
    post: {
      tags: ["Users"],
      summary: "Comment on an image",
      security: [{ bearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                imageId: { type: "integer" },
                content: { type: "string" },
              },
            },
          },
        },
      },
      responses: {
        201: { description: "Comment created" },
      },
    },
  },
  "/user/save-image/{id}": {
    post: {
      tags: ["Users"],
      summary: "Save or unsave an image",
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
        200: { description: "Image saved/unsaved" },
      },
    },
  },
  "/user/save-image": {
    get: {
      tags: ["Users"],
      summary: "Get saved images of user",
      security: [{ bearerAuth: [] }],
      responses: {
        200: { description: "List of saved images" },
      },
    },
  },
  "/user/update-profile": {
    post: {
      tags: ["Users"],
      summary: "Update user profile",
      security: [{ bearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          "multipart/form-data": {
            schema: {
              type: "object",
              properties: {
                name: { type: "string" },
                age: { type: "integer" },
                avatar: { type: "string", format: "binary" },
              },
            },
          },
        },
      },
      responses: {
        200: { description: "Profile updated" },
      },
    },
  },
};
