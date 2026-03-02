import express from "express";
import 'dotenv/config'
import connectDB from "./database/db.js";
import userRoute from "./routes/userRoute.js"
import cors from "cors"

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use(cors({
    origin: ["http://localhost:5173", "https://ib-email-auth-system.netlify.app"],
    credentials: true
}));

app.use('/user', userRoute);

app.listen(PORT, () =>{
    connectDB();
    console.log(`Server is Listening at port ${PORT}`);
});