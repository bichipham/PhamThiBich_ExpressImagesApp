import { tokenService } from "../../services/token.service";
import { BadRequestException, UnauthorizedException } from "../helpers/exception.helper";
import prisma from "../prisma/init.prisma";

export const protect = async (req, res, next) => {
    const authorization = req.headers.authorization;
    if (!authorization) throw new UnauthorizedException("Not Authorization"); // 401: logout người dùng

    const [type, accessToken] = authorization?.split(" ");
    if (type !== "Bearer") throw new UnauthorizedException("Type Token Tnvalid");
    if (!accessToken) throw new UnauthorizedException("Not Access Token");

    const { userId } = tokenService.verifyAccesToken(accessToken);

    const user = await prisma.users.findUnique({
        where: {
            id: +userId,
        },
    });

    if(!user) throw new UnauthorizedException("Not User")

    req.user = user

    next();
};
