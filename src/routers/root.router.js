import express from "express";
import userRouter from './user.router';
import imageRouter from './image.router';
import swaggerUi from "swagger-ui-express";
import { swaggerDocument } from "../common/swagger/init.swagger";

const rootRouter = express.Router();
rootRouter.use("/docs", swaggerUi.serve);
rootRouter.get("/docs", swaggerUi.setup(swaggerDocument, {swaggerOptions: {persistAuthorization: true}}));
rootRouter.use("/user", userRouter);
rootRouter.use("/image", imageRouter);



export default rootRouter;
