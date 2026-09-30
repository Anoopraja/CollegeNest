import multer from "multer";

const storage = multer.memoryStorage();

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 10 * 1024 * 1024
    },
    fileFilter: (_req, file, callback) => {
        if (file.mimetype.startsWith("image/")) {
            callback(null, true);
            return;
        }

        callback(new Error("Only image files are allowed"));
    }
});

export default upload;