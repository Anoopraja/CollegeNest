// import User from "../Models/user.model.js"
import Review from "../Models/review.model.js"

const writeReviewByCollegeId = async (req, res) => {
    try {
        const { username, rating, review, userId, collegeId } = req.body
        const addReview = await Review.create({
            username, rating, review, userId, collegeId
        })
               console.log("REVIEW BODY:", req.body);


        return res.status(201).json({
            success: true,
            message: "ye lo add ho gya review",
            data: addReview
        })
    }
    catch (err) {
        res.status(400).json({
            success: false,
            message: "try me kuch galat hai sayad"
        })
    }
}

const deleteReview = async (req, res) => {
    try {
        const { reviewId } = req.params;

        const response = await Review.deleteOne({
            _id: reviewId
        });

        if (response.deletedCount === 0) {
            return res.status(404).json({
                success: false,
                message: "Review not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Review deleted successfully"
        });

    } catch (error) {
        console.error("Delete review error:", error);

        return res.status(500).json({
            success: false,
            message: "Something went wrong while deleting review"
        });
    }
};

const getAllReview = async (req, res) => {
    cosnt = await Review.find()
    return res.status(200).json({
        success: true,
        message: "ye rha apka pura review jitna db me hai"
    })
}


const getReviewById = async (req, res) => {
    const { collegeId } = req.params
    const reviewById = await Review.find({ collegeId }).populate("userId", "username");
    return res.status(200).json({
        success: true,
        message: "ye rha apka falane college ka review",
        data: reviewById
    })

}

const deleteReviewById = async (req, res) => {
    try {

        const { _id } = req.params

        const deleteReview = await Review.deleteOne({ _id })
        if (!deleteReview) {
            return res.status(404).json({
                success: false,
                message: "Review nahi mila"
            });
        }
        return res.status(200).json({
            success: true,
            message: "apka falane college ka review delete ho chuka hai",
            data: deleteReview
        })

    } catch (err) {
        return res.status(400).json({
            success: false,
            message: "apka review delete nhi hua ak baar try check kro!"
        })
    }
}

export {
    deleteReviewById,
    getReviewById,
    writeReviewByCollegeId,
    deleteReview,
    getAllReview
}

