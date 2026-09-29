import jwt from "jsonwebtoken"
import User from "../Models/user.model.js"

const adminOnly = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                message: "Not authenticated"
            });
        }

        const { userId } = jwt.verify(
            token,
            process.env.SECRET_KEY
        );

        const user = await User.findById(userId);

        if (!user || user.role !== "admin") {
            return res.status(403).json({
                message: "Admin access required"
            });
        }

        req.user = user;

        next();

    } catch (error) {
        return res.status(401).json({
            message: "Invalid authentication"
        });
    }
};

export default adminOnly