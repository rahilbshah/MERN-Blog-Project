import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AuthRoute from "./routes/AuthRoute.js";
import UserRoute from "./routes/UsersRoute.js";
import PostsRoute from "./routes/PostsRoute.js";
import CategoryRoute from "./routes/CategoriesRoute.js";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose.connection.on("disconnected", () => {
  console.log("MongoDb Disconnected");
});

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify:true
    });
    console.log("Connected to MongoDb");
  } catch (error) {
    console.log(error);
  }
};

app.listen(5000, () => {
  connect();
  console.log("Backend is Running");
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been Uploaded");
});

app.use(express.json());

app.use("/api/auth", AuthRoute);
app.use("/api/user", UserRoute);
app.use("/api/posts", PostsRoute);
app.use("/api/categories", CategoryRoute);
