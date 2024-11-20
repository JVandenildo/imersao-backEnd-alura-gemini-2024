import express from "express";
import { listarPosts } from "../controllers/postController.js";

const routes = (app) => {
  // Middleware to parse JSON request bodies
  app.use(express.json());

  // Define a GET route to retrieve all posts
  app.get("/posts", listarPosts);
};

export default routes;
