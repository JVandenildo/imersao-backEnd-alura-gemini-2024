import express from "express";
import multer from "multer";
import {
  listarPosts,
  postarNovoPost,
  uploadImagem,
} from "../controllers/postController.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
// windows
const upload = multer({ dest: "./uploads", storage });
// linux ou mac
// const upload = multer({ dest: "./uploads" })

const routes = (app) => {
  // Middleware to parse JSON request bodies
  app.use(express.json());

  // Define a GET route to retrieve all posts
  app.get("/posts", listarPosts);
  app.post("/posts", postarNovoPost);
  app.post("/upload", upload.single("imagem"), uploadImagem);
};

export default routes;
