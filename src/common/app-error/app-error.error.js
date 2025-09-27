import { responseError } from "../helpers/response.helper";
import jwt from "jsonwebtoken";
import { statusCodes } from "../helpers/status-code.helper";

/**
 * - Hàm này là nơi xử lý lỗi
 * - Tất cả lỗi đều đổ vào hàm này
 */
export const appError = (err, req, res, next) => {
    console.log(`middleware đặc biệt:`, err);

    // 401 => logout
    // 403 => api refresh-token
    if (err instanceof jwt.JsonWebTokenError) err.code = statusCodes.UNAUTHORIZED;
    if (err instanceof jwt.TokenExpiredError) err.code = statusCodes.FORBIDDEN;

    const resData = responseError(err?.message, err?.code, err?.stack);
    res.status(resData.statusCode).json(resData);
};
