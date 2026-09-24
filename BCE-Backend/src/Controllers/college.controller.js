import College from "../Models/college.model.js"
import dotenv from "dotenv";


const getAllCollege = async (req,res) => {
    try{
        const college = await College.find()

        return res.status(200).json({
            success:true,
            message:"ye raha apka pura college",
            data:college
        })
    }
    catch(error){
        res.status(400).json({
            success:false,
            message:"try me kuch galat hai sayad"
        })
    }
}

const getCollegeById = async (req, res) => {
    try {
        const { slug } = req.params;

        const college = await College.findOne({ slug });

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

// const updateCollegeData = async (req, res) => {
//     try {

//         const { id } = req.params;

//         const updatedCollege = await College.findByIdAndUpdate(
//             id,
//             req.body,
//             {
//                 new: true,
//                 runValidators: true
//             }
//         );

//         if(!updatedCollege){
//            return res.status(400)({
//             success:false,
//             message:"nhi hai college list me"
//            }) 
//         }

//     }
//     catch (err) {
//         return res.status(400).json({
//             success: false,
//             message: "kuch to garbar hai daya"
//         })
//     }
// }

export {
    addCollege, 
    // updateCollegeData,
    getCollegeById,
    getAllCollege
}