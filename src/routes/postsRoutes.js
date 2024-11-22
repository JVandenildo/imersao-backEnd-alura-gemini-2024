// Importa o framework Express para criar aplicações web
import express from "express";

// Importa o middleware Multer para lidar com envio de arquivos (uploads)
import multer from "multer";

// Importa funções do controlador de posts para lidar com as rotas
import {
  listarPosts, // Função para listar todos os posts
  postarNovoPost, // Função para criar um novo post
  uploadImagem, // Função para lidar com o upload de imagens
  atualizarNovoPost,
} from "../controllers/postController.js";

import cors from "cors";

const corsOptions = {
  origin: "http://localhost:8000",
  optionsSuccessStatus: 200,
};

// Configura o armazenamento em disco para os arquivos enviados
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Define o diretório de destino para os arquivos (neste caso, a pasta "uploads/")
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    // Utiliza o nome original do arquivo
    cb(null, file.originalname);
  },
});

// Configura o Multer para ambientes Windows (armazena o arquivo e a configuração de armazenamento)
const upload = multer({ dest: "./uploads", storage });

// Configura o Multer para ambientes Linux ou Mac (retire o comentário se necessário)
// const upload = multer({ dest: "./uploads" });

// Função para definir as rotas da aplicação
const routes = (app) => {
  // Middleware para analisar corpos de requisições JSON
  app.use(express.json());
  app.use(cors(corsOptions));

  // Rota GET para listar todos os posts
  app.get("/posts", listarPosts);

  // Rota POST para criar um novo post
  app.post("/posts", postarNovoPost);

  // Rota POST para fazer upload de imagens
  app.post("/upload", upload.single("imagem"), uploadImagem);

  app.put("/upload/:id", atualizarNovoPost);
};

// Exporta a função de rotas como padrão
export default routes;
