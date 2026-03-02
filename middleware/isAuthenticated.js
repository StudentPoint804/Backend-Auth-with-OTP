import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";

export const isAuthenticated = async (req, res, next) => {
    try {

        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).send({
                success: false,
                message: "Access Token is Missing or Invalid"
            })
        }
        const token = authHeader.split(" ")[1]

        jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid or Expired Token"
                });
            }

            const user = await User.findById(decoded.id || decoded.userId);

            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: "User Not Found"
                });
            }

            req.userId = user._id;
            next();
        });
    } catch (error) {

        return res.status(505).send({
            success: false,
            message: error.message
        })

    }
}