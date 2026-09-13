import app from "./src/app.js";
import connectDB from "./src/db/db.js";

const PORT = 5000;

connectDB();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});