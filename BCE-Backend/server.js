import app from "./src/app.js"
import ConnectDB from "./src/DB/DB.js"
import dotenv from "dotenv"

dotenv.config()

ConnectDB()

app.listen(3000, () => {
    console.log('Server is running on port ');
}) 