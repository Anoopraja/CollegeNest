import College from "../models/college.model.js";

export const getAllColleges = async (req, res) => {
    try {
        const colleges = await College.find();

        console.log("College count:", colleges.length);
        console.log("Colleges:", colleges);

        res.status(200).json({
            success: true,
            count: colleges.length,
            data: colleges,
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const getCollegeById = async (req, res) => {


    try {
        const { id } = req.params;

        const college = await College.findOne({ id: Number(id) });
        if (!college) {
            return res.status(404).json({
                success: false,
                message: "College not found",
            });
        }

        res.status(200).json({
            success: true,
            data: college,
        });


    }
    catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}