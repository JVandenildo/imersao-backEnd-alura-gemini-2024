import conectarAoBanco from "../config/dbConfig.js";

// Establish a database connection using the provided connection string
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Asynchronous function to fetch all posts from the database
export async function getTodosPosts() {
  // Select the 'projeto-imersaoAlura2024' database
  const db = conexao.db("projeto-imersaoAlura2024");
  // Select the 'posts' collection
  const colecao = db.collection("posts");

  // Find all documents in the 'posts' collection and return them as an array
  return colecao.find().toArray();
}
