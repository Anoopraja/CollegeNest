// import User from "../Models/user.model.js"
import Review from "../Models/review.model.js"

const writeReviewByCollegeId = async (req,res)=>{
    try{
        const {rating,review, userId ,collegeId} = req.body
        const addReview = await Review.create({
            rating,review, userId ,collegeId
        })
        
        return res.status(201).json({
            success:false,
            message:"ye lo add ho gya review",
            data:addReview
        })
    }
    catch(err){
         res.status(400).json({
            success:false,
            message:"try me kuch galat hai sayad"
        })
    }
}

const getReviewById = async (req,res)=>{
    const { collegeId } = req.params
    const reviewById = await Review.find({ collegeId })
    return res.status(200).json({
        success:true,
        message:"ye rha apka falane college ka review",
        data: reviewById
    })

}

export {
    getReviewById,
    writeReviewByCollegeId,
}

