import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import uploadImage from "../../utils/cloudnary";
import api from "../api/api.js";

const CollegeInfo = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    // =========================
    // COLLEGE
    // =========================

    const [college, setCollege] = useState(null);
    const [collegeLoading, setCollegeLoading] = useState(true);

    // =========================
    // GALLERY
    // =========================

    const [studentName, setStudentName] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const [image, setImage] = useState(null);
    const [images, setImages] = useState([]);
    const [imageUrl, setImageUrl] = useState("");
    const [uploading, setUploading] = useState(false);

    // =========================
    // REVIEWS
    // =========================

    const [reviews, setReviews] = useState([]);
    const [reviewText, setReviewText] = useState("");
    const [rating, setRating] = useState(5);
    const [submittingReview, setSubmittingReview] = useState(false);


    // =========================
    // GET SINGLE COLLEGE
    // =========================

    useEffect(() => {

        const getCollege = async () => {

            try {

                setCollegeLoading(true);

                const response = await api.get(`/college/${id}`);

                console.log("Single college response:", response.data.data);

                /*
                    Expected backend response:

                    {
                        success: true,
                        college: {...}
                    }

                    OR

                    {
                        success: true,
                        data: {...}
                    }
                */

                const collegeData =
                    response.data.college ||
                    response.data.data;

                setCollege(collegeData || null);

            } catch (error) {

                console.error(
                    "College fetch error:",
                    error
                );

                setCollege(null);

            } finally {

                setCollegeLoading(false);

            }

        };

        if (id) {
            getCollege();
        }

    }, [id]);


    // =========================
    // FILE SELECT
    // =========================

    const handleFileChange = async (e) => {

        try {

            // Check login first
            const { data } = await api.get("/user/me");

            const user = data.user;

            if (!user) {

                alert("Please login first");

                navigate("/login");

                return;

            }

            const selectedFile = e.target.files[0];

            if (!selectedFile) return;

            setImage(selectedFile);

        } catch (error) {

            console.error("Login check failed:", error);

            alert("Please login first");

            navigate("/login");

        }

    };


    // =========================
    // UPLOAD IMAGE
    // =========================

    const handleUpload = async () => {

        if (!image) {

            alert("Pehle image select karo");

            return;

        }

        if (!college?._id) {

            alert("College data not loaded");

            return;

        }


        try {

            setUploading(true);


            // 1. Upload image to Cloudinary
            const uploadedImageUrl = await uploadImage(image);

            console.log(
                "Cloudinary URL:",
                uploadedImageUrl
            );


            // 2. Save image URL in backend
            await api.post("/image", {

                collegeId: college._id,

                imageUrl: uploadedImageUrl,

            });


            // 3. Display uploaded image
            setImageUrl(uploadedImageUrl);


            // 4. Add image to gallery immediately
            setImages((prev) => [
                {
                    _id: Date.now().toString(),
                    imageUrl: uploadedImageUrl,
                },
                ...prev,
            ]);


            // 5. Clear selected file
            setImage(null);


            alert("Image uploaded and saved!");

        } catch (error) {

            console.error(
                "Upload error:",
                error
            );

            alert(
                error.response?.data?.message ||
                error.message ||
                "Image upload failed"
            );

        } finally {

            setUploading(false);

        }

    };


    // =========================
    // GET GALLERY IMAGES
    // =========================

    useEffect(() => {

        const getImages = async () => {

            try {

                if (!id) return;

                const { data } = await api.get(
                    `/image/${id}`
                );

                setImages(data.data || []);

            } catch (error) {

                console.error(
                    "Images fetch failed:",
                    error
                );

            }

        };

        getImages();

    }, [id]);


    // =========================
    // GET REVIEWS
    // =========================

    useEffect(() => {

        const getReviews = async () => {

            try {

                if (!id) return;

                const { data } = await api.get(
                    `/review/${id}`
                );

                console.log(
                    "Reviews response:",
                    data
                );

                setReviews(data.data || []);

            } catch (error) {

                console.error(
                    "Reviews fetch failed:",
                    error
                );

            }

        };

        getReviews();

    }, [id]);


    // =========================
    // REVIEW SUBMIT
    // =========================

    const handleReviewSubmit = async (e) => {

        e.preventDefault();


        if (!reviewText.trim()) {

            alert("Please write a review");

            return;

        }


        if (!rating) {

            alert("Please select a rating");

            return;

        }


        if (!college?._id) {

            alert("College data not loaded");

            return;

        }


        try {

            setSubmittingReview(true);


            // Check login
            const { data } = await api.get(
                "/user/me"
            );

            const user = data.user;


            if (!user) {

                alert("Please login first");

                navigate("/login");

                return;

            }


            console.log(
                "Logged in user:",
                user
            );


            // Submit review
            const { data: reviewResponse } =
                await api.post(
                    "/review/write",
                    {

                        // MongoDB College _id
                        collegeId: college._id,

                        // MongoDB User _id
                        userId: user._id || user.id,

                        rating: Number(rating),

                        review: reviewText.trim(),

                    }
                );


            console.log(
                "Review response:",
                reviewResponse
            );


            const newReview =
                reviewResponse.data;


            if (newReview) {

                setReviews((prev) => [
                    newReview,
                    ...prev,
                ]);

            }


            setReviewText("");

            setRating(5);

            setStudentName(
                user.name ||
                user.username ||
                "Anonymous User"
            );


            alert(
                "Review submitted successfully!"
            );


        } catch (error) {

            console.error(
                "Review submit error:",
                error
            );

            alert(
                error.response?.data?.message ||
                error.message ||
                "Review submission failed"
            );

        } finally {

            setSubmittingReview(false);

        }

    };


    // =========================
    // LOADING
    // =========================

    if (collegeLoading) {

        return (
            <div className="min-h-[60vh] flex items-center justify-center">

                <div className="text-center">

                    <div className="text-5xl mb-4">
                        🎓
                    </div>

                    <p className="text-gray-500">
                        Loading college...
                    </p>

                </div>

            </div>
        );

    }


    // =========================
    // COLLEGE NOT FOUND
    // =========================

    if (!college) {

        return (
            <div className="min-h-[60vh] flex items-center justify-center px-6">

                <div className="text-center">

                    <div className="text-6xl mb-5">
                        🎓
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900">
                        College Not Found
                    </h2>

                    <p className="text-gray-500 mt-2">
                        The college you're looking for doesn't exist.
                    </p>

                </div>

            </div>
        );

    }


    return (

        <section className="bg-white pb-10 min-h-screen">


            {/* =========================
                HERO BANNER
            ========================= */}

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-6">

                <div className="relative h-[280px] sm:h-[380px] overflow-hidden rounded-3xl shadow-xl">

                    <img
                        src={
                            college.image ||
                            "/default-college.jpg"
                        }
                        alt={college.name}
                        className="w-full h-full object-cover"
                    />


                    <div className="absolute inset-0 bg-black/45" />


                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white">

                        <div className="max-w-4xl">

                            <span className="inline-block bg-blue-600 px-4 py-1.5 rounded-full text-sm font-medium mb-3">
                                {college.shortName ||
                                    "Engineering College"}
                            </span>


                            <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
                                {college.name}
                            </h1>


                            <div className="flex flex-wrap gap-3 sm:gap-5 mt-4 text-sm sm:text-base">

                                <span className="flex items-center gap-2">
                                    📍 {college.location}
                                </span>

                                <span className="flex items-center gap-2">
                                    ⭐ {college.rating}/5
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            {/* =========================
                MAIN CONTENT
            ========================= */}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">


                {/* QUICK INFO */}

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">

                        <p className="text-sm text-gray-500">
                            Established
                        </p>

                        <p className="text-xl sm:text-lg font-bold text-gray-900 mt-1">
                            {college.established}
                        </p>

                    </div>


                    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">

                        <p className="text-sm text-gray-500">
                            College Type
                        </p>

                        <p className="text-xl sm:text-lg font-bold text-gray-900 mt-1">
                            {college.type}
                        </p>

                    </div>


                    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">

                        <p className="text-sm text-gray-500">
                            Rating
                        </p>

                        <p className="text-xl sm:text-lg font-bold text-gray-900 mt-1">
                            {college.rating}/5
                        </p>

                    </div>


                    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">

                        <p className="text-sm text-gray-500">
                            Campus
                        </p>

                        <p className="text-xl sm:text-lg font-bold text-gray-900 mt-1">
                            {college.campus}
                        </p>

                    </div>

                </div>


                {/* ABOUT */}

                <div className="mt-12">

                    <div className="flex items-center gap-3 mb-5">

                        <div className="w-1.5 h-8 bg-blue-600 rounded-full" />

                        <h2 className="text-3xl font-bold text-gray-900">
                            About College
                        </h2>

                    </div>


                    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-8">

                        <p className="text-gray-700 leading-8 text-[16px]">
                            {college.about}
                        </p>

                    </div>

                </div>


                {/* INFORMATION CARDS */}

                <div className="grid lg:grid-cols-2 gap-6 mt-10">


                    {/* BASIC INFORMATION */}

                    <div className="border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow">

                        <div className="flex items-center gap-3 mb-6">

                            <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center text-xl overflow-hidden">

                                <img
                                    src={college.logo}
                                    alt={college.name}
                                    className="w-full h-full object-cover"
                                />

                            </div>


                            <div>

                                <h3 className="text-xl font-bold text-gray-900">
                                    Basic Information
                                </h3>

                                <p className="text-sm text-gray-500">
                                    College details
                                </p>

                            </div>

                        </div>


                        <div className="space-y-4">

                            <div className="flex justify-between gap-4 border-b pb-3">

                                <span className="text-gray-500">
                                    University
                                </span>

                                <span className="font-semibold text-gray-900 text-right">
                                    {college.university}
                                </span>

                            </div>


                            <div className="flex justify-between gap-4 border-b pb-3">

                                <span className="text-gray-500">
                                    Approval
                                </span>

                                <span className="font-semibold text-gray-900 text-right">
                                    {college.approval}
                                </span>

                            </div>


                            <div className="flex justify-between gap-4">

                                <span className="text-gray-500">
                                    Campus Size
                                </span>

                                <span className="font-semibold text-gray-900 text-right">
                                    {college.campus}
                                </span>

                            </div>

                        </div>

                    </div>


                    {/* CONTACT */}

                    <div className="border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow">

                        <div className="flex items-center gap-3 mb-6">

                            <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center text-xl">
                                📞
                            </div>


                            <div>

                                <h3 className="text-xl font-bold text-gray-900">
                                    Contact Information
                                </h3>

                                <p className="text-sm text-gray-500">
                                    Get in touch
                                </p>

                            </div>

                        </div>


                        <div className="space-y-4">

                            <div>

                                <p className="text-sm text-gray-500 mb-1">
                                    Phone
                                </p>

                                <p className="font-semibold text-gray-900">
                                    📞 {college.phone}
                                </p>

                            </div>


                            <div>

                                <p className="text-sm text-gray-500 mb-1">
                                    Email
                                </p>

                                <p className="font-semibold text-gray-900 break-all">
                                    ✉️ {college.email}
                                </p>

                            </div>


                            <div>

                                <p className="text-sm text-gray-500 mb-1">
                                    Website
                                </p>

                                <a
                                    href={college.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 font-medium hover:underline break-all"
                                >
                                    🌐 {college.website}
                                </a>

                            </div>

                        </div>

                    </div>

                </div>


                {/* COURSES */}

                <div className="mt-12">

                    <div className="flex items-center gap-3 mb-6">

                        <div className="w-1.5 h-8 bg-blue-600 rounded-full" />

                        <div>

                            <h2 className="text-3xl font-bold text-gray-900">
                                Courses Offered
                            </h2>

                            <p className="text-gray-500 mt-1">
                                Engineering programs available at the college
                            </p>

                        </div>

                    </div>


                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

                        {(college.branches || []).map(
                            (branch) => (

                                <div
                                    key={branch}
                                    className="group border border-gray-200 rounded-2xl p-5 bg-white hover:border-blue-500 hover:shadow-lg transition-all duration-200"
                                >

                                    <div className="flex items-center gap-4">

                                        <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-lg group-hover:bg-blue-600 group-hover:text-white transition">
                                            🎓
                                        </div>


                                        <div>

                                            <p className="font-semibold text-gray-900">
                                                {branch}
                                            </p>

                                            <p className="text-sm text-gray-500">
                                                Engineering Program
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            )
                        )}

                    </div>

                </div>


                {/* FACILITIES */}

                <div className="mt-12">

                    <div className="flex items-center gap-3 mb-6">

                        <div className="w-1.5 h-8 bg-blue-600 rounded-full" />

                        <div>

                            <h2 className="text-3xl font-bold text-gray-900">
                                Facilities
                            </h2>

                            <p className="text-gray-500 mt-1">
                                Facilities available on campus
                            </p>

                        </div>

                    </div>


                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                        {(college.facilities || []).map(
                            (facility) => (

                                <div
                                    key={facility}
                                    className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center hover:bg-blue-50 hover:border-blue-200 hover:shadow-md transition"
                                >

                                    <div className="text-2xl mb-3">
                                        🏫
                                    </div>

                                    <p className="font-semibold text-gray-800">
                                        {facility}
                                    </p>

                                </div>

                            )
                        )}

                    </div>

                </div>


                {/* =========================
                    CAMPUS GALLERY
                ========================= */}

                <section className="mt-12">

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">

                        <div className="flex items-center gap-3">

                            <div className="w-1.5 h-8 bg-blue-600 rounded-full" />

                            <div>

                                <h2 className="text-3xl font-bold text-gray-900">
                                    Campus Gallery
                                </h2>

                                <p className="text-gray-500 mt-1">
                                    Explore and share campus photos
                                </p>

                            </div>

                        </div>

                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">


                        {/* MAIN COLLEGE IMAGE */}

                        <div className="group relative overflow-hidden rounded-2xl shadow-md h-[250px]">

                            <img
                                src={
                                    college.image ||
                                    "/default-college.jpg"
                                }
                                alt={college.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />


                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 pt-16">

                                <p className="text-white font-semibold">
                                    {college.name}
                                </p>

                                <p className="text-gray-200 text-sm">
                                    Campus View
                                </p>

                            </div>

                        </div>


                        {/* UPLOADED IMAGES */}

                        {images.map((item) => (

                            <div
                                key={item._id}
                                onClick={() =>
                                    setSelectedImage(
                                        item.imageUrl
                                    )
                                }
                                className="group relative w-full h-[250px] overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 cursor-zoom-in"
                            >

                                <img
                                    src={item.imageUrl}
                                    alt="College campus"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />

                            </div>

                        ))}


                        {/* IMAGE PREVIEW */}

                        {selectedImage && (

                            <div
                                onClick={() =>
                                    setSelectedImage(null)
                                }
                                className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
                            >

                                <img
                                    src={selectedImage}
                                    alt="College campus"
                                    onClick={(e) =>
                                        e.stopPropagation()
                                    }
                                    className="max-w-full max-h-[90vh] object-contain rounded-lg"
                                />


                                <button
                                    onClick={() =>
                                        setSelectedImage(null)
                                    }
                                    className="absolute top-5 right-5 text-white text-3xl hover:text-gray-300"
                                >
                                    ✕
                                </button>

                            </div>

                        )}


                        {/* UPLOAD CARD */}

                        <div className="h-[250px] border-2 border-dashed border-blue-300 rounded-2xl bg-blue-50 hover:bg-blue-100 hover:border-blue-500 transition-all duration-200 flex flex-col items-center justify-center text-center p-6">

                            <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4">

                                <svg
                                    className="w-8 h-8 text-blue-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >

                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 0115.9 6L16 6a5 5 0 014 8.9M12 12v9m0-9l-3 3m3-3l3 3"
                                    />

                                </svg>

                            </div>


                            <h3 className="text-lg font-semibold text-gray-900">
                                Upload Campus Photo
                            </h3>


                            <p className="text-sm text-gray-500 mt-2">
                                {image
                                    ? image.name
                                    : "No file chosen"}
                            </p>


                            <label
                                htmlFor="campus-upload"
                                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium cursor-pointer"
                            >
                                {image
                                    ? "Change File"
                                    : "Choose File"}
                            </label>


                            <input
                                id="campus-upload"
                                type="file"
                                accept="image/png,image/jpeg,image/webp"
                                onChange={handleFileChange}
                                className="hidden"
                            />


                            <button
                                type="button"
                                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium disabled:opacity-50"
                                onClick={handleUpload}
                                disabled={uploading}
                            >
                                {uploading
                                    ? "Uploading..."
                                    : "Upload"}
                            </button>

                        </div>

                    </div>

                </section>


                {/* =========================
                    REVIEWS
                ========================= */}

                <section className="mt-12">


                    <div className="flex items-center gap-3 mb-6">

                        <div className="w-1.5 h-8 bg-blue-600 rounded-full" />

                        <div>

                            <h2 className="text-3xl font-bold text-gray-900">
                                Student Reviews
                            </h2>

                            <p className="text-gray-500 mt-1">
                                Share your experience about this college
                            </p>

                        </div>

                    </div>


                    {/* WRITE REVIEW */}

                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 mb-8">

                        <h3 className="text-xl font-bold text-gray-900 mb-5">
                            Write a Review
                        </h3>


                        <form onSubmit={handleReviewSubmit}>


                            {/* RATING */}

                            <div className="mb-5">

                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Your Rating
                                </label>


                                <div className="flex gap-2">

                                    {[1, 2, 3, 4, 5].map(
                                        (star) => (

                                            <button
                                                key={star}
                                                type="button"
                                                onClick={() =>
                                                    setRating(star)
                                                }
                                                className={`text-2xl transition ${
                                                    star <= rating
                                                        ? "text-yellow-400"
                                                        : "text-gray-300"
                                                }`}
                                            >
                                                ★
                                            </button>

                                        )
                                    )}

                                </div>

                            </div>


                            {/* REVIEW */}

                            <div className="mb-5">

                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Your Review
                                </label>


                                <textarea
                                    value={reviewText}
                                    onChange={(e) =>
                                        setReviewText(
                                            e.target.value
                                        )
                                    }
                                    placeholder="Share your experience with this college..."
                                    rows="5"
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                />

                            </div>


                            {/* SUBMIT */}

                            <button
                                type="submit"
                                disabled={submittingReview}
                                className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition disabled:opacity-50"
                            >
                                {submittingReview
                                    ? "Submitting..."
                                    : "Submit Review"}
                            </button>

                        </form>

                    </div>


                    {/* REVIEWS LIST */}

                    <div className="space-y-4">

                        {reviews.length === 0 ? (

                            <div className="text-center py-10 text-gray-500">
                                No reviews yet. Be the first to review!
                            </div>

                        ) : (

                            reviews.map((review) => (

                                <div
                                    key={review._id}
                                    className="w-full bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300"
                                >


                                    {/* HEADER */}

                                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between mb-5">


                                        <div className="flex items-center gap-3 min-w-0">

                                            <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">

                                                {(
                                                    review.userId?.username ||
                                                    review.userId?.name ||
                                                    review.name ||
                                                    "U"
                                                )
                                                    .charAt(0)
                                                    .toUpperCase()}

                                            </div>


                                            <div className="min-w-0">

                                                <p className="font-semibold text-gray-900 truncate">

                                                    {review.userId?.username ||
                                                        review.userId?.name ||
                                                        review.name ||
                                                        "Anonymous User"}

                                                </p>


                                                <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                                                    Student Review
                                                </p>

                                            </div>

                                        </div>


                                        {/* DATE */}

                                        <span className="text-xs sm:text-sm text-gray-400 whitespace-nowrap sm:pt-1">

                                            {review.createdAt
                                                ? new Date(
                                                      review.createdAt
                                                  ).toLocaleDateString(
                                                      "en-IN",
                                                      {
                                                          day: "2-digit",
                                                          month: "short",
                                                          year: "numeric",
                                                      }
                                                  )
                                                : ""}

                                        </span>

                                    </div>


                                    {/* RATING */}

                                    <div className="flex items-center gap-3 mb-4">

                                        <div className="flex items-center gap-1">

                                            {[1, 2, 3, 4, 5].map(
                                                (star) => (

                                                    <span
                                                        key={star}
                                                        className={`text-lg sm:text-xl ${
                                                            star <=
                                                            Number(
                                                                review.rating
                                                            )
                                                                ? "text-yellow-400"
                                                                : "text-gray-200"
                                                        }`}
                                                    >
                                                        ★
                                                    </span>

                                                )
                                            )}

                                        </div>


                                        <span className="text-sm font-semibold text-gray-700 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-full">
                                            {review.rating}/5
                                        </span>

                                    </div>


                                    {/* REVIEW TEXT */}

                                    <div className="border-l-4 border-blue-500 bg-gray-50 rounded-r-xl px-4 sm:px-5 py-4">

                                        <p className="text-sm sm:text-base text-gray-700 leading-7 break-words">
                                            {review.review}
                                        </p>

                                    </div>


                                    {/* FOOTER */}

                                    <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">

                                        <span className="text-xs text-gray-400">
                                            Verified Review
                                        </span>


                                        <span className="text-xs text-gray-400">

                                            #
                                            {review._id
                                                ? review._id.slice(-6)
                                                : ""}

                                        </span>

                                    </div>

                                </div>

                            ))

                        )}

                    </div>

                </section>

            </div>

        </section>

    );

};

export default CollegeInfo;

