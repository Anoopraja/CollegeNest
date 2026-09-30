import React, { useEffect, useRef, useState } from "react";
import api from "../api/api.js";

const Community = () => {
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [onlineUsers, setOnlineUsers] = useState(0);
    const [loading, setLoading] = useState(true);

    const messagesEndRef = useRef(null);

    // Get logged-in user
    useEffect(() => {
        const getUser = async () => {
            try {
                const { data } = await api.get("/user/me");

                setUser(data.user || data);
            } catch (error) {
                console.log("User fetch error:", error);
            } finally {
                setLoading(false);
            }
        };

        getUser();
    }, []);


    // Auto scroll when new message arrives
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages]);


    // Temporary message sender
    // Later replace this with Socket.IO
    const sendMessage = () => {
        if (!message.trim()) return;

        const newMessage = {
            id: Date.now(),
            userId: user?._id,
            username: user?.username || "You",
            college: user?.college || "CollegeNest Student",
            message: message.trim(),
            createdAt: new Date(),
        };

        setMessages((prev) => [...prev, newMessage]);

        setMessage("");
    };


    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };


    const formatTime = (date) => {
        return new Date(date).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        });
    };


    if (loading) {
        return (
            <section className="min-h-screen bg-slate-50 flex items-center justify-center">
                <div className="text-sm text-slate-500">
                    Loading community...
                </div>
            </section>
        );
    }


    return (
        <section className="min-h-screen bg-slate-50 py-4 sm:py-6">

            <div className="max-w-5xl mx-auto px-3 sm:px-5">

                {/* Chat Container */}
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">

                    {/* Header */}
                    <header className="h-[72px] border-b border-slate-200 px-4 sm:px-6 flex items-center justify-between">

                        <div className="flex items-center gap-3">

                            {/* Logo */}
                            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                                CN
                            </div>


                            {/* Chat Info */}
                            <div>

                                <div className="flex items-center gap-2">

                                    <h1 className="font-bold text-slate-900 text-base sm:text-lg">
                                        CollegeNest Community
                                    </h1>

                                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>

                                </div>

                                <p className="text-xs sm:text-sm text-slate-500">
                                    Public Live Chat • All Colleges
                                </p>

                            </div>

                        </div>


                        {/* Online */}
                        <div className="flex items-center gap-2">

                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>

                            <span className="text-xs sm:text-sm text-slate-500">
                                {onlineUsers || "Online"}
                            </span>

                        </div>

                    </header>


                    {/* Chat Area */}
                    <div className="h-[calc(100vh-220px)] min-h-[500px] max-h-[720px] flex flex-col">

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto px-3 sm:px-6 py-5">

                            {messages.length === 0 ? (

                                /* Empty Chat */
                                <div className="h-full flex items-center justify-center">

                                    <div className="text-center max-w-sm">

                                        <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl font-bold">
                                            CN
                                        </div>

                                        <h2 className="mt-5 text-lg font-semibold text-slate-900">
                                            Welcome to CollegeNest Community
                                        </h2>

                                        <p className="mt-2 text-sm text-slate-500 leading-6">
                                            This is a public live chat for students
                                            from all 38 colleges. Start the
                                            conversation.
                                        </p>

                                        <div className="mt-4 inline-flex items-center gap-2 px-3 py-2 bg-green-50 text-green-600 rounded-full text-xs font-medium">
                                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                            Live Community
                                        </div>

                                    </div>

                                </div>

                            ) : (

                                <div className="space-y-5">

                                    {messages.map((item) => {

                                        const isMe =
                                            item.userId === user?._id;

                                        return (
                                            <div
                                                key={item.id}
                                                className={`flex gap-3 ${
                                                    isMe
                                                        ? "justify-end"
                                                        : "justify-start"
                                                }`}
                                            >

                                                {/* Other User Avatar */}
                                                {!isMe && (
                                                    <div className="w-9 h-9 shrink-0 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold text-sm">
                                                        {item.username
                                                            ?.charAt(0)
                                                            ?.toUpperCase()}
                                                    </div>
                                                )}


                                                <div
                                                    className={`max-w-[80%] sm:max-w-[65%] ${
                                                        isMe
                                                            ? "items-end"
                                                            : "items-start"
                                                    } flex flex-col`}
                                                >

                                                    {/* User Info */}
                                                    {!isMe && (
                                                        <div className="flex items-center gap-2 mb-1 px-1">

                                                            <span className="text-sm font-semibold text-slate-800">
                                                                {item.username}
                                                            </span>

                                                            <span className="text-[10px] text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                                                                {item.college}
                                                            </span>

                                                        </div>
                                                    )}


                                                    {/* Message Bubble */}
                                                    <div
                                                        className={`px-4 py-2.5 rounded-2xl text-sm leading-6 ${
                                                            isMe
                                                                ? "bg-blue-600 text-white rounded-br-md"
                                                                : "bg-slate-100 text-slate-700 rounded-bl-md"
                                                        }`}
                                                    >
                                                        {item.message}
                                                    </div>


                                                    {/* Time */}
                                                    <span className="text-[10px] text-slate-400 mt-1 px-1">
                                                        {formatTime(
                                                            item.createdAt
                                                        )}
                                                    </span>

                                                </div>


                                                {/* My Avatar */}
                                                {isMe && (
                                                    <div className="w-9 h-9 shrink-0 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-sm">
                                                        {item.username
                                                            ?.charAt(0)
                                                            ?.toUpperCase()}
                                                    </div>
                                                )}

                                            </div>
                                        );
                                    })}

                                    <div ref={messagesEndRef} />

                                </div>

                            )}

                        </div>


                        {/* Input Area */}
                        <div className="border-t border-slate-200 p-3 sm:p-4 bg-white">

                            <div className="flex items-end gap-2">

                                {/* Attachment */}
                                <button
                                    type="button"
                                    className="hidden sm:flex w-10 h-10 shrink-0 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 transition"
                                >
                                    +
                                </button>


                                {/* Input */}
                                <textarea
                                    value={message}
                                    onChange={(e) =>
                                        setMessage(e.target.value)
                                    }
                                    onKeyDown={handleKeyDown}
                                    rows="1"
                                    placeholder={
                                        user
                                            ? "Type a message..."
                                            : "Login to join the chat"
                                    }
                                    disabled={!user}
                                    className="flex-1 resize-none max-h-32 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:bg-slate-50 disabled:cursor-not-allowed"
                                />


                                {/* Send */}
                                <button
                                    type="button"
                                    onClick={sendMessage}
                                    disabled={!user || !message.trim()}
                                    className="w-10 h-10 shrink-0 bg-blue-600 text-white rounded-xl flex items-center justify-center text-lg hover:bg-blue-700 active:scale-95 transition disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed"
                                >
                                    ↑
                                </button>

                            </div>


                            <div className="hidden sm:flex items-center justify-between mt-2 px-1">

                                <p className="text-[11px] text-slate-400">
                                    Enter to send • Shift + Enter for new line
                                </p>

                                <p className="text-[11px] text-slate-400">
                                    Public chat
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Community;

