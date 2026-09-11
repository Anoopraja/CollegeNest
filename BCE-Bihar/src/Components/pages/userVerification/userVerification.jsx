import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import authService from "../../appWrite/appwrite";

function VerifyEmail() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [message, setMessage] = useState("Verifying...");

    useEffect(() => {
        const userId = searchParams.get("userId");
        const secret = searchParams.get("secret");

        if (!userId || !secret) {
            setMessage("Invalid verification link.");
            return;
        }

        authService.verifyEmail(userId, secret)
            .then(() => {
                setMessage("Email verified successfully! 🎉");

                setTimeout(() => {
                    navigate("/login");
                }, 2000);
            })
            .catch((error) => {
                console.error(error);
                setMessage("Verification failed or link expired.");
            });
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <h1 className="text-2xl font-bold">
                {message}
            </h1>
        </div>
    );
}

export default VerifyEmail;