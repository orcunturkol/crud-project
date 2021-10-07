import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";
const app = express();

app.use('/posts', postRoutes);
app.use(cors());

const CONNECTION_URL = "mongodb+srv://carphorus:rWvizHldXbJKoQNW@cluster0.c0bkd.mongodb.net/memoriesProject?retryWrites=true&w=majority";
const PORT = process.env.port || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, ()=> console.log(`Server is running on port: ${PORT}`)))
.catch((err) => console.log(err));