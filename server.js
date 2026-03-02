import express from "express";
import 'dotenv/config'
import connectDB from "./database/db.js";
import userRoute from "./routes/userRoute.js"
import cors from "cors"

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use(cors({
    origin: [
        "http://localhost:5173", 
        "https://ib-email-auth-system.netlify.app"
    ],
    credentials: true
}));

app.use('/user', userRoute);

connectDB();

/* ===== LOCAL SERVER ONLY ===== */
if (process.env.NODE_ENV !== "production") {
    app.listen(PORT, () => {
        console.log(`Server is Listening at port ${PORT}`);
    });
}

/* ===== EXPORT FOR VERCEL ===== */
export default app;