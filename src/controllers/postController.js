import { getTodosPosts } from "../models/postModels.js";

export async function listarPosts(req, res) {
  // Fetch all posts using the asynchronous function
  const posts = await getTodosPosts();
  // Send the posts as a JSON response with a 200 OK status code
  res.status(200).json(posts);
}
