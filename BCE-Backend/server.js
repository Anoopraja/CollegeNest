import app from "./src/app.js"
import ConnectDB from "./src/DB/DB.js"
import dotenv from "dotenv"

dotenv.config()

ConnectDB()

app.listen(process.env.PORT, () => {
    console.log('Server is running on port ');
}) 