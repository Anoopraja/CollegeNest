import College from "../Models/college.model.js"
import dotenv from "dotenv";
import cache from "../config/cache.js";


const getAllCollege = async (req, res) => {
    try {
        // 1. Check cache
        const cachedData = cache.get("all_colleges");

        if (cachedData) {
            console.log("CACHE HIT");
            return res.status(200).json(cachedData);
        }

        console.log("CACHE MISS");

        // 2. Fetch data from MongoDB
        const college = await College.find();

        const length = await College.countDocuments();

        // 3. Prepare response
        const response = {
            success: true,
            message: "ye raha apka pura college",
            data: {
                college,
                length
            }
        };

        // 4. Store response in cache
        cache.set("all_colleges", response, 300);

        return res.status(200).json(response);

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getCollegeById = async (req, res) => {
    try {
        const { slug } = req.params;

        const college = await College.findOne({ slug });
        cache.del("all_colleges");

        if (!college) {
            return res.status(404).json({
                success: false,
                message: "College nahi mila"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Ye raha aapka college",
            data: college
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "College fetch nahi ho paya",
            error: error.message
        });
    }
};

const addCollege = async (req, res) => {
    try {
        const {                
                id,
                name,
                shortName,
                slug,
                district,
                address,
                location,
                state,
                established,
                type,
                ownership,
                university,
                approval,
                campus,
                website,
                email,
                phone,
                image,
                logo,
                rating,
                admission,
                about,
                branches,
                facilities,
        } = req.body
        const addCollege = await College.create({
                id,
                name,
                shortName,
                slug,
                district,
                address,
                location,
                state,
                established,
                type,
                ownership,
                university,
                approval,
                campus,
                website,
                email,
                phone,
                image,
                logo,
                rating,
                admission,
                about,
                branches,
                facilities,
        })
                cache.del("all_colleges");

        return res.status(200).json({
            success: true,
            message: "ho gya add college ",
            data:addCollege
        })
    }
    catch (error) {
        return res.status(400)({
            success: false,
            message: "kuch to garbar hai bhaiya"
        })
    }
}

const updateCollegeData = async (req, res) => {
    try {

        const { id } = req.params;

        const updatedCollege = await College.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if(!updatedCollege){
           return res.status(400).json({
            success:false,
            message:"nhi hai college list me"
           }) 
        }

        return res.status(200).json({
            success: true,
            message: "College updated successfully",
            data: updatedCollege
        });
    }
    catch (err) {
        return res.status(400).json({
            success: false,
            message: "kuch to garbar hai daya"
        })
    }
}

export {
    addCollege, 
    updateCollegeData,
    getCollegeById,
    getAllCollege
}