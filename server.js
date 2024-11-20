import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";

// Establish a database connection using the provided connection string
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
// Create an Express app
const app = express();
// Middleware to parse JSON request bodies
app.use(express.json());

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Servidor escutando...");
});

// Asynchronous function to fetch all posts from the database
async function getTodosPosts() {
  // Select the 'projeto-imersaoAlura2024' database
  const db = conexao.db("projeto-imersaoAlura2024");
  // Select the 'posts' collection
  const colecao = db.collection("posts");

  // Find all documents in the 'posts' collection and return them as an array
  return colecao.find().toArray();
}

// Define a GET route to retrieve all posts
app.get("/posts", async (req, res) => {
  // Fetch all posts using the asynchronous function
  const posts = await getTodosPosts();
  // Send the posts as a JSON response with a 200 OK status code
  res.status(200).json(posts);
});
