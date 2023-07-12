import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import router from "./routes/userRoutes.js";
import cors from 'cors';

const app = express();
// Parse JSON request bodies
app.use(express.json());

// Parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use(router);

app.get("/",(req,res)=>{
    res.status(200).json("working fine")
})
mongoose
  .connect(process.env.VITE_APP_MONGO)
  .then(() => {
    app.listen(3000,(()=>console.log("running at: 3000")));
  })
  .catch((error) => {
    console.log(error);
  });
