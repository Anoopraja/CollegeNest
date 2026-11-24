import { useState, useEffect, useCallback, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    MapPin, Star, Phone, Mail, Globe, Pencil, X, Trash2, Upload, GraduationCap,
    Building2, CalendarDays, BadgeCheck, MoreVertical, Camera, ShieldCheck,
} from "lucide-react";
import uploadImage from "../../utils/cloudnary";
import api from "../api/api.js";

/* ---------- helpers ---------- */
const toList = (v) => {
    if (Array.isArray(v)) return v.length ? v : [""];
    if (typeof v === "string" && v.trim()) return v.split(",").map((s) => s.trim());
    return [""];
};

const buildForm = (c = {}) => ({
    name: c.name || "", shortName: c.shortName || "", slug: c.slug || "",
    district: c.district || "", address: c.address || "", location: c.location || "",
    state: c.state || "", established: c.established ?? "", type: c.type || "",
    ownership: c.ownership || "", university: c.university || "", approval: c.approval || "",
    campus: c.campus || "", website: c.website || "", email: c.email || "", phone: c.phone || "",
    image: c.image || "", logo: c.logo || "", rating: c.rating ?? "", admission: c.admission || "",
    about: c.about || "", branches: toList(c.branches), facilities: toList(c.facilities),
});

const FIELDS = [
    ["name", "College name", "text"], ["shortName", "Short name", "text"],
    ["slug", "Slug", "text"], ["district", "District", "text"],
    ["address", "Address", "text"], ["location", "Location", "text"],
    ["state", "State", "text"], ["established", "Established", "number"],
    ["type", "College type", "text"], ["ownership", "Ownership", "text"],
    ["university", "University", "text"], ["approval", "Approval", "text"],
    ["campus", "Campus", "text"], ["website", "Website", "text"],
    ["email", "Email", "email"], ["phone", "Phone", "text"],
    ["image", "Banner image URL", "text"], ["logo", "Logo URL", "text"],
    ["rating", "Rating", "number"], ["admission", "Admission", "text"],
];

const input =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-blue-950 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100";

const Stars = ({ value, size = 16 }) => (
    <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
            <Star
                key={s}
                size={size}
                className={s <= Math.round(value) ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"}
            />
        ))}
    </div>
);

const Heading = ({ id, title, note }) => (
    <div id={id} className="mb-6 scroll-mt-24">
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-blue-950 sm:text-4xl">{title}</h2>
        {note && <p className="mt-1.5 text-slate-500">{note}</p>}
    </div>
);

const ListEditor = ({ label, singular, items, onChange }) => (
    <div className="mt-6">
        <p className="mb-2 text-sm font-medium text-slate-700">{label}</p>
        <div className="space-y-2">
            {items.map((item, i) => (
                <div key={`${singular}-${i}`} className="flex gap-2">
                    <input
                        className={input}
                        value={item}
                        placeholder={`${singular} ${i + 1}`}
                        onChange={(e) => onChange(items.map((x, j) => (j === i ? e.target.value : x)))}
                    />
                    <button
                        type="button"
                        onClick={() => onChange(items.filter((_, j) => j !== i))}
                        className="rounded-xl border border-slate-200 px-3 text-slate-400 transition hover:border-red-200 hover:bg-red-50 hover:text-red-500"
                        aria-label={`Remove ${singular}`}
                    >
                        <X size={16} />
                    </button>
                </div>
            ))}
        </div>
        <button
            type="button"
            onClick={() => onChange([...items, ""])}
            className="mt-3 text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
            + Add {singular.toLowerCase()}
        </button>
    </div>
);

/* ---------- component ---------- */
const CollegeInfo = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [college, setCollege] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);
    const isAdmin = currentUser?.role === "admin";

    const [editing, setEditing] = useState(false);
    const [saving, setSaving] = useState(false);
    const [form, setForm] = useState(buildForm());

    const [images, setImages] = useState([]);
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [lightbox, setLightbox] = useState(null);

    const [reviews, setReviews] = useState([]);
    const [reviewText, setReviewText] = useState("");
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [submitting, setSubmitting] = useState(false);
    const [menuId, setMenuId] = useState(null);

    /* ----- load ----- */
    useEffect(() => {
        api.get("/user/me").then(({ data }) => setCurrentUser(data.user || null)).catch(() => setCurrentUser(null));
    }, []);

    useEffect(() => {
        if (!id) return;
        (async () => {
            try {
                setLoading(true);
                const { data } = await api.get(`/college/${id}`);
                setCollege(data.college || data.data || null);
            } catch (e) {
                console.error("College fetch error:", e);
                setCollege(null);
            } finally {
                setLoading(false);
            }
        })();
    }, [id]);

    const fetchImages = useCallback(async (cid) => {
        try {
            const { data } = await api.get(`/image/${cid}`);
            setImages(data.data || []);
        } catch (e) {
            console.error("Images fetch failed:", e.response?.data || e);
        }
    }, []);

    useEffect(() => {
        if (!college?._id) return;
        fetchImages(college._id);
        api.get(`/review/${college._id}`)
            .then(({ data }) => setReviews(data.data || []))
            .catch((e) => console.error("Reviews fetch failed:", e.response?.data || e));
    }, [college?._id, fetchImages]);

    /* ----- review stats ----- */
    const stats = useMemo(() => {
        const counts = [0, 0, 0, 0, 0];
        reviews.forEach((r) => {
            const n = Math.round(Number(r.rating));
            if (n >= 1 && n <= 5) counts[n - 1] += 1;
        });
        const avg = reviews.length
            ? reviews.reduce((s, r) => s + Number(r.rating || 0), 0) / reviews.length
            : Number(college?.rating || 0);
        return { counts, avg };
    }, [reviews, college?.rating]);

    /* ----- actions ----- */
    const openEditor = () => {
        if (!isAdmin) return;
        setForm(buildForm(college));
        setEditing(true);
    };

    const clean = (l) => l.map((s) => s.trim()).filter(Boolean);

    const saveCollege = async () => {
        if (!isAdmin || !college?._id) return;
        try {
            setSaving(true);
            const { data } = await api.patch(`/college/update/${college._id}`, {
                ...form,
                branches: clean(form.branches),
                facilities: clean(form.facilities),
                rating: Number(form.rating),
                established: Number(form.established),
            });
            const updated = data.college || data.data;
            if (updated) setCollege(updated);
            setEditing(false);
        } catch (e) {
            alert(e.response?.data?.message || "College update failed");
        } finally {
            setSaving(false);
        }
    };

    const requireLogin = () => {
        if (currentUser) return true;
        alert("Please login first");
        navigate("/user/login");
        return false;
    };

    const submitReview = async (e) => {
        e.preventDefault();
        if (!requireLogin()) return;
        if (!rating) return alert("Please select a rating");
        if (!reviewText.trim()) return alert("Please write a review");
        try {
            setSubmitting(true);
            const { data } = await api.post("/review/write", {
                collegeId: college._id,
                userId: currentUser._id || currentUser.id,
                username: currentUser.username || currentUser.name || "Anonymous User",
                rating: Number(rating),
                review: reviewText.trim(),
            });
            if (data.data) setReviews((p) => [data.data, ...p]);
            setReviewText("");
            setRating(0);
        } catch (err) {
            alert(err.response?.data?.message || err.message || "Review submission failed");
        } finally {
            setSubmitting(false);
        }
    };

    const deleteReview = async (rid) => {
        if (!isAdmin) return;
        try {
            await api.delete(`/review/delete/${rid}`);
            setReviews((p) => p.filter((r) => r._id !== rid));
        } catch (e) {
            console.error("Review delete failed:", e);
        }
    };

    const pickFile = (e) => {
        if (!requireLogin()) return;
        const f = e.target.files[0];
        if (f) setFile(f);
    };

    const upload = async () => {
        if (!file) return alert("Please choose an image first");
        try {
            setUploading(true);
            const up = await uploadImage(file);
            await api.post("/image", { collegeId: college._id, imageUrl: up.imageUrl, publicId: up.publicId });
            setFile(null);
            await fetchImages(college._id);
        } catch (err) {
            alert(err.response?.data?.message || err.message || "Image upload failed");
        } finally {
            setUploading(false);
        }
    };

    const deleteImage = async (iid) => {
        if (!isAdmin) return;
        try {
            await api.delete(`/image/delete/${iid}`);
            setImages((p) => p.filter((i) => i._id !== iid));
            setLightbox(null);
        } catch {
            alert("Image could not be deleted");
        }
    };

    const jump = (anchor) => document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });

    /* ----- states ----- */
    if (loading) {
        return (
            <div className="flex min-h-[70vh] items-center justify-center">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />
            </div>
        );
    }

    if (!college) {
        return (
            <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
                <GraduationCap size={48} className="text-slate-300" />
                <h2 className="mt-4 font-serif text-3xl font-semibold text-blue-950">College not found</h2>
                <p className="mt-2 text-slate-500">This college may have been removed or the link is wrong.</p>
            </div>
        );
    }

    const branches = toList(college.branches).filter(Boolean);
    const facilities = toList(college.facilities).filter(Boolean);
    const place = [college.address, college.district, college.state].filter(Boolean).join(", ");

    const facts = [
        ["Established", college.established, CalendarDays],
        ["Type", college.type, Building2],
        ["Campus", college.campus, MapPin],
        ["Approval", college.approval, ShieldCheck],
    ];

    const navItems = [
        ["Overview", "overview"], ["Write a review", "write-review"],
        ["Upload", "upload"], ["Gallery", "gallery"], ["Reviews", "reviews"],
    ];

    return (
        <section className="min-h-screen bg-blue-50/50 pb-20 text-slate-800">
            {/* ===== 1. BANNER ===== */}
            <header className="relative h-[460px] w-full overflow-hidden bg-blue-950 sm:h-[520px]">
                <img src={college.image || "/default-college.jpg"} alt={college.name} className="h-full w-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-900/55 to-blue-900/10" />
                <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-4 pb-20 sm:px-6">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-end">
                        <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/30 bg-white shadow-2xl">
                            {college.logo ? (
                                <img src={college.logo} alt="" className="h-full w-full object-cover" />
                            ) : (
                                <GraduationCap size={40} className="text-slate-400" />
                            )}
                        </div>
                        <div className="min-w-0 text-white">
                            <p className="text-sm font-medium text-blue-200">{college.shortName || "Engineering college"}</p>
                            <h1 className="mt-1 font-serif text-4xl font-semibold leading-tight sm:text-6xl">{college.name}</h1>
                            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-200">
                                <span className="flex items-center gap-1.5"><MapPin size={16} /> {college.location}</span>
                                <span className="flex items-center gap-2">
                                    <Stars value={stats.avg} />
                                    <span className="font-semibold text-white">{stats.avg ? stats.avg.toFixed(1) : "–"}</span>
                                    <span className="text-slate-300">({reviews.length} reviews)</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* sticky nav */}
            <nav className="sticky top-0 z-30 border-b border-slate-200 bg-white/85 backdrop-blur">
                <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 sm:px-6">
                    {navItems.map(([label, anchor]) => (
                        <button
                            key={anchor}
                            onClick={() => jump(anchor)}
                            className="shrink-0 border-b-2 border-transparent px-4 py-3.5 text-sm font-medium text-slate-600 transition hover:border-blue-600 hover:text-blue-950"
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </nav>

            <div className="mx-auto max-w-7xl px-4 pt-15 sm:px-6">
                {/* ===== 2. COLLEGE INFO ===== */}
                <div className="relative -mt-12 grid grid-cols-2 divide-blue-100 rounded-2xl bg-white shadow-xl shadow-blue-900/5 ring-1 ring-blue-100 lg:grid-cols-4 lg:divide-x">
                    {facts.map(([label, value, Icon]) => (
                        <div key={label} className="flex items-center gap-4 p-5">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                <Icon size={20} />
                            </div>
                            <div className="min-w-0">
                                <p className="text-xs text-slate-500">{label}</p>
                                <p className="truncate font-semibold text-blue-950">{value || "–"}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_340px]">
                    <div className="space-y-14">
                        <div>
                            <Heading id="overview" title={`About ${college.shortName || "the college"}`} />
                            <p className="max-w-3xl whitespace-pre-line text-[17px] leading-8 text-slate-700">{college.about}</p>
                        </div>

                        <div>
                            <Heading title="Courses offered" note="Engineering programs available at this college" />
                            <div className="flex flex-wrap gap-3">
                                {branches.map((b, i) => (
                                    <span
                                        key={`${b}-${i}`}
                                        className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-sm transition hover:border-blue-300 hover:bg-blue-50"
                                    >
                                        <GraduationCap size={16} className="text-blue-600" /> {b}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <Heading title="Campus facilities" />
                            <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                                {facilities.map((f, i) => (
                                    <div key={`${f}-${i}`} className="flex items-center gap-3 border-b border-slate-200 py-3">
                                        <BadgeCheck size={20} className="shrink-0 text-blue-600" />
                                        <span className="font-medium text-slate-800">{f}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* sidebar */}
                    <aside className="lg:sticky lg:top-20 lg:self-start">
                        <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-6 text-white shadow-xl shadow-blue-600/20">
                            <h3 className="font-serif text-2xl font-semibold">Get in touch</h3>
                            <div className="mt-5 space-y-4 text-sm">
                                <p className="flex items-start gap-3"><Phone size={18} className="mt-0.5 shrink-0 text-blue-200" /> {college.phone}</p>
                                <p className="flex items-start gap-3 break-all"><Mail size={18} className="mt-0.5 shrink-0 text-blue-200" /> {college.email}</p>
                                <a href={college.website} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 break-all hover:text-white">
                                    <Globe size={18} className="mt-0.5 shrink-0 text-blue-200" /> {college.website}
                                </a>
                            </div>
                            {college.website && (
                                <a
                                    href={college.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 block rounded-xl bg-white py-3 text-center font-semibold text-blue-700 transition hover:bg-blue-50"
                                >
                                    Visit website
                                </a>
                            )}
                        </div>

                        <dl className="mt-5 rounded-2xl bg-white p-6 text-sm shadow-sm ring-1 ring-blue-100">
                            {[
                                ["University", college.university],
                                ["Ownership", college.ownership],
                                ["Admission", college.admission],
                                ["Address", place],
                            ].filter(([, v]) => v).map(([k, v]) => (
                                <div key={k} className="flex justify-between gap-4 border-b border-slate-100 py-3 first:pt-0 last:border-0 last:pb-0">
                                    <dt className="text-slate-500">{k}</dt>
                                    <dd className="text-right font-medium text-blue-950">{v}</dd>
                                </div>
                            ))}
                        </dl>
                    </aside>
                </div>

                {/* ===== 3. ADMIN EDIT ===== */}
                {isAdmin && (
                    <div className="mt-14 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-dashed border-blue-300 bg-blue-50 p-5">
                        <div>
                            <p className="font-semibold text-blue-950">Admin tools</p>
                            <p className="text-sm text-slate-600">Edit this college's details, courses and facilities.</p>
                        </div>
                        <button onClick={openEditor} className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-700">
                            <Pencil size={16} /> Edit college
                        </button>
                    </div>
                )}

                {/* ===== 4. WRITE A REVIEW ===== */}
                <div className="mt-20 grid gap-8 lg:grid-cols-[320px_1fr]">
                    <div>
                        <Heading id="write-review" title="Write a review" note="Studied here? Help the next batch decide." />
                    </div>
                    <form onSubmit={submitReview} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-blue-100 sm:p-8">
                        <p className="mb-2 text-sm font-medium text-slate-700">Your rating</p>
                        <div className="flex gap-1" onMouseLeave={() => setHoverRating(0)}>
                            {[1, 2, 3, 4, 5].map((s) => (
                                <button
                                    key={s}
                                    type="button"
                                    onMouseEnter={() => setHoverRating(s)}
                                    onClick={() => setRating(s)}
                                    aria-label={`${s} star${s > 1 ? "s" : ""}`}
                                    className="p-0.5 transition hover:scale-110"
                                >
                                    <Star size={32} className={s <= (hoverRating || rating) ? "fill-amber-400 text-amber-400" : "fill-slate-100 text-slate-300"} />
                                </button>
                            ))}
                        </div>
                        <textarea
                            rows={5}
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            placeholder="Teaching, placements, hostel, campus life — what stood out?"
                            className={`${input} mt-5 resize-none`}
                        />
                        <button
                            type="submit"
                            disabled={submitting}
                            className="mt-5 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
                        >
                            {submitting ? "Posting..." : "Post review"}
                        </button>
                    </form>
                </div>

                {/* ===== 5. UPLOAD ===== */}
                <div className="mt-20 grid gap-8 lg:grid-cols-[320px_1fr]">
                    <Heading id="upload" title="Add a campus photo" note="PNG, JPG or WebP. Photos appear in the gallery below." />
                    <label
                        htmlFor="campus-upload"
                        className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-blue-200 bg-white p-10 text-center transition hover:border-blue-500 hover:bg-blue-50"
                    >
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                            <Upload size={24} />
                        </div>
                        <p className="mt-4 font-semibold text-blue-950">{file ? file.name : "Choose a photo to upload"}</p>
                        <p className="mt-1 text-sm text-slate-500">{file ? "Click to pick a different file" : "Click here to browse your files"}</p>
                        <input id="campus-upload" type="file" accept="image/png,image/jpeg,image/webp" onChange={pickFile} className="hidden" />
                        <button
                            type="button"
                            onClick={(e) => { e.preventDefault(); upload(); }}
                            disabled={uploading || !file}
                            className="mt-6 rounded-xl bg-blue-600 px-6 py-2.5 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-40"
                        >
                            {uploading ? "Uploading..." : "Upload photo"}
                        </button>
                    </label>
                </div>

                {/* ===== 6a. GALLERY ===== */}
                <div className="mt-20">
                    <Heading id="gallery" title="Campus gallery" note={`${images.length + 1} photos`} />
                    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
                        <figure className="relative break-inside-avoid overflow-hidden rounded-2xl">
                            <img src={college.image || "/default-college.jpg"} alt={college.name} className="w-full object-cover" />
                            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-12 text-sm font-medium text-white">
                                Main campus
                            </figcaption>
                        </figure>
                        {images.map((item) => (
                            <figure key={item._id} onClick={() => setLightbox(item)} className="group relative cursor-zoom-in break-inside-avoid overflow-hidden rounded-2xl">
                                <img src={item.imageUrl} alt="College campus" className="w-full object-cover transition duration-500 group-hover:scale-105" />
                                <div className="absolute inset-0 flex items-end bg-blue-900/0 p-4 opacity-0 transition group-hover:bg-blue-900/30 group-hover:opacity-100">
                                    <Camera size={18} className="text-white" />
                                </div>
                            </figure>
                        ))}
                    </div>
                </div>

                {/* ===== 6b. REVIEWS ===== */}
                <div className="mt-20">
                    <Heading id="reviews" title="What students say" />
                    <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
                        <div className="self-start rounded-2xl bg-white p-6 shadow-sm ring-1 ring-blue-100 lg:sticky lg:top-20">
                            <p className="font-serif text-6xl font-semibold text-blue-950">{stats.avg ? stats.avg.toFixed(1) : "–"}</p>
                            <div className="mt-2"><Stars value={stats.avg} size={20} /></div>
                            <p className="mt-2 text-sm text-slate-500">Based on {reviews.length} review{reviews.length === 1 ? "" : "s"}</p>
                            <div className="mt-5 space-y-2">
                                {[5, 4, 3, 2, 1].map((n) => {
                                    const c = stats.counts[n - 1];
                                    const pct = reviews.length ? (c / reviews.length) * 100 : 0;
                                    return (
                                        <div key={n} className="flex items-center gap-3 text-sm">
                                            <span className="w-3 text-slate-500">{n}</span>
                                            <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                                                <div className="h-full rounded-full bg-blue-600" style={{ width: `${pct}%` }} />
                                            </div>
                                            <span className="w-6 text-right text-slate-400">{c}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="space-y-4">
                            {reviews.length === 0 ? (
                                <div className="rounded-2xl border border-dashed border-blue-200 bg-white p-10 text-center text-slate-500">
                                    No reviews yet. Write the first one above.
                                </div>
                            ) : (
                                reviews.map((r) => (
                                    <article key={r._id} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-blue-100">
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex min-w-0 items-center gap-3">
                                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 font-serif text-lg font-semibold text-white">
                                                    {(r.username || "A").charAt(0).toUpperCase()}
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="truncate font-semibold text-blue-950">{r.username || "Anonymous User"}</p>
                                                    <p className="text-xs text-slate-500">
                                                        {r.createdAt
                                                            ? new Date(r.createdAt).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })
                                                            : ""}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Stars value={Number(r.rating)} />
                                                {isAdmin && (
                                                    <div className="relative">
                                                        <button onClick={() => setMenuId(menuId === r._id ? null : r._id)} className="text-slate-400 hover:text-slate-700" aria-label="Review options">
                                                            <MoreVertical size={18} />
                                                        </button>
                                                        {menuId === r._id && (
                                                            <button
                                                                onClick={() => { deleteReview(r._id); setMenuId(null); }}
                                                                className="absolute right-0 top-7 z-10 flex items-center gap-2 whitespace-nowrap rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-red-500 shadow-lg hover:bg-red-50"
                                                            >
                                                                <Trash2 size={14} /> Delete review
                                                            </button>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <p className="mt-4 break-words leading-7 text-slate-700">{r.review}</p>
                                    </article>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== lightbox ===== */}
            {lightbox && (
                <div onClick={() => setLightbox(null)} className="fixed inset-0 z-[100] flex items-center justify-center bg-blue-950/95 p-4">
                    <img src={lightbox.imageUrl} alt="College campus" onClick={(e) => e.stopPropagation()} className="max-h-[90vh] max-w-full rounded-lg object-contain" />
                    {isAdmin && (
                        <button
                            onClick={(e) => { e.stopPropagation(); deleteImage(lightbox._id); }}
                            className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-700"
                        >
                            <Trash2 size={16} /> Delete
                        </button>
                    )}
                    <button onClick={() => setLightbox(null)} className="absolute right-5 top-5 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20" aria-label="Close">
                        <X size={22} />
                    </button>
                </div>
            )}

            {/* ===== admin edit drawer ===== */}
            {isAdmin && editing && (
                <div className="fixed inset-0 z-[90] flex justify-end">
                    <div className="absolute inset-0 bg-blue-950/50" onClick={() => !saving && setEditing(false)} />
                    <div className="relative flex h-full w-full max-w-2xl flex-col bg-blue-50/50 shadow-2xl">
                        <div className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
                            <div>
                                <h2 className="font-serif text-2xl font-semibold text-blue-950">Edit college</h2>
                                <p className="text-sm text-slate-500">Changes go live when you save.</p>
                            </div>
                            <button onClick={() => setEditing(false)} className="rounded-full p-2 text-slate-500 hover:bg-slate-100" aria-label="Close editor">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6">
                            <div className="grid gap-4 sm:grid-cols-2">
                                {FIELDS.map(([name, label, type]) => (
                                    <div key={name}>
                                        <label className="mb-1.5 block text-sm font-medium text-slate-700">{label}</label>
                                        <input
                                            className={input}
                                            type={type}
                                            name={name}
                                            value={form[name]}
                                            onChange={(e) => setForm((p) => ({ ...p, [name]: e.target.value }))}
                                            min={name === "rating" ? "0" : undefined}
                                            max={name === "rating" ? "5" : undefined}
                                            step={name === "rating" ? "0.1" : undefined}
                                        />
                                    </div>
                                ))}
                            </div>
                            <ListEditor label="Branches" singular="Branch" items={form.branches} onChange={(branches) => setForm((p) => ({ ...p, branches }))} />
                            <ListEditor label="Facilities" singular="Facility" items={form.facilities} onChange={(facilities) => setForm((p) => ({ ...p, facilities }))} />
                            <div className="mt-6">
                                <label className="mb-1.5 block text-sm font-medium text-slate-700">About</label>
                                <textarea rows={6} className={`${input} resize-none`} value={form.about} onChange={(e) => setForm((p) => ({ ...p, about: e.target.value }))} />
                            </div>
                        </div>

                        <div className="flex gap-3 border-t border-slate-200 bg-white px-6 py-4">
                            <button onClick={saveCollege} disabled={saving} className="rounded-xl bg-blue-600 px-6 py-2.5 font-semibold text-white hover:bg-blue-700 disabled:opacity-50">
                                {saving ? "Saving..." : "Save changes"}
                            </button>
                            <button onClick={() => setEditing(false)} disabled={saving} className="rounded-xl bg-slate-100 px-6 py-2.5 font-semibold text-slate-700 hover:bg-slate-200 disabled:opacity-50">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default CollegeInfo;
