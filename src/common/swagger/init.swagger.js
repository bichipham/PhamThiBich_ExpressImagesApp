import { imageSwagger } from "./image.swagger";
import { userSwagger } from "./user.swagger";

export const swaggerDocument = {
    openapi: "3.1.1",
    info: {
        title: "Cyber Community",
        version: "1.0.0",
    },
    servers: [
        {
            url: "http://localhost:3069/api",
            description: "Server BE Local",
        },
        {
            url: "http://54.255.248.50/api",
            description: "Server BE Product",
        },
    ],
    components: {
        securitySchemes: {
            bichi: {
                type: "http",
                scheme: "bearer",
            },
        },
    },
    paths: {
        ...imageSwagger,
        ...userSwagger,
    },
};
