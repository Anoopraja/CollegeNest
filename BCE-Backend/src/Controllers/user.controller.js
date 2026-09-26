import User from "../Models/user.model.js"
import bcrypt from "bcrypt"
import dotenv from "dotenv";
import jwt from 'jsonwebtoken'

dotenv.config();
// const secret_key = process.env.SECRET_KEY

const registerUser = async (req, res) => {
    try {
        // console.log("BODY:", req.body);

        const { username, gmail, password } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const user = await User.create({
            username,
            gmail,
            password: hash
        });
        // console.log("USER CREATED:", user);
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: user
        });

    } catch (error) {
        console.log("REGISTER ERROR:", error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const getAllUser = async (req, res) => {
    try {
        const AllUser = await User.find()
        res.status(200).json({
            success: true,
            message: "All users fetched successfully",
            data: AllUser,
        });
    }
    catch (error) {
        console.log("user Fetching ERROR:", error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const getUserById = async (req, res) => {
    try {

        const { username } = req.params;

        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Ye raha aapka user",
            data: user
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Kuch to galat hai"
        });
    }
};


const userLogin = async (req, res) => {
    try {

        const { gmail, password } = req.body

        const user = await User.findOne({ gmail })
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        // console.log("LOGIN PASSWORD:", password);
        // console.log("DATABASE HASH:", user.password);

        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );
        // console.log("PASSWORD MATCH:", isPasswordCorrect);

        if (!isPasswordCorrect) {
            return res.status(400).json({
                success: false,
                message: "Invalid password"
            });
        }


        // JWT TOKEN CREATE
        const token = jwt.sign(
            {
                userId: user._id
            },
            process.env.SECRET_KEY,
            {
                expiresIn: "7d"
            }
        );

        // console.log("JWT TOKEN:", token);

        // TOKEN COOKIE ME SAVE
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.status(200).json({
            success: true,
            message: "Login successful",
            user: {
                id: user._id,
                username: user.username,
                gmail: user.gmail
            }
        });

    }
    catch (error) {
        console.log("LOGIN ERROR:", error);

        res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
}
const updateProfile = async (req, res) => {
    try {

        const { id } = req.params;

        const updateData = req.body;

        const user = await User.findByIdAndUpdate(
           { _id: id },
    updateData,
    { returnDocument: "after" }
        );

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User nahi mila"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Profile successfully update ho gaya",
            user: user
        });

    } catch (err) {

        return res.status(500).json({
            success: false,
            message: "Kuch to gadbad hai",
            error: err.message
        });

    }
};

const userLogout = async (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });
        return res.status(200).json({
            success: true,
            message: "Logout successful"
        });
    } catch (error) {
        console.log("LOGOUT ERROR:", error);
        return res.status({
            success: false,
            message: error.message
        })
    }
}

const getCurrentUser = async (req, res) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ success: false, message: "Not authenticated" });
        }

        const { userId } = jwt.verify(token, process.env.SECRET_KEY);
        const user = await User.findById(userId).select("-password");
        if (!user) {
            return res.status(401).json({ success: false, message: "User not found" });
        }

        return res.status(200).json({ success: true, user: {
            id: user._id,
            username: user.username,
            email: user.gmail,
            college: user.college,
            branch: user.branch,
            year: user.year,
            bio: user.bio,
            profileImage: user.profileImage
        }});
    } catch (error) {
        return res.status(401).json({ success: false, message: "Invalid session" });
    }
};

export { registerUser, getAllUser, userLogin, userLogout, getUserById, updateProfile, getCurrentUser }