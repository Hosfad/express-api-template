import express from "express"
import mongoose from "mongoose"
import cron from "node-cron"
import userRouter from "./routers/user.router"
import axios from "axios"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config();









let isWorking = false;
cron.schedule("*/10 * * *s * *", async () => {

  if (isWorking) return;
  isWorking = true;


  isWorking = false;
});


const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_DOMAIN,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Authorization", "Content-Type"],
    maxAge: 86400,
  })
);
app.get("/" ,(req,res) =>{
  res.send("Yooo");
})

app.use(express.json());
app.set("json spaces", 2);

app.use("/user", userRouter);



// Connect to MongoDB
if (!process.env.MONGODB_URL) {
  throw new Error("Missing MongoDB URL in .env");
}

mongoose.connect(process.env.MONGODB_URL);

app.listen(process.env.PORT || 3000, () => {
  console.log(`API listening on port ${process.env.PORT}`);
});
export{};

