import express, { response } from "express";
import cors from "cors";
import { produtos, produtosInterface } from "./produtos";
import { updateProdutos } from './produtos';


const app = express();

app.use(express.json());
app.use(cors());

app.get("/produtos", (request, response)=>{
response.status(200).json(produtos)
});

app.get("/produtos-promocao", (request, response)=>{
const produtosPromocao = produtos.filter((produto) => {
return produto.promocao === true;
});

response.status(200).json(produtosPromocao)

// ou const produtosPromocao = produtos.filter((produto) => produto.promocao);
})

app.post("/criar-produto", (request, response)=>{
const {nome, descricao, preco, promocao} = request.body;

const id = Math.random().toString();

const novoProduto: produtosInterface = {
    id,
    nome,
    descricao,
    preco,
    promocao,
};

produtos.push(novoProduto);

response.status(201).json(produtos) 
});

app.put("/atualizar-produto/:id", (request, response)=>{
const params = request.params.id

 const atualizarProduto = produtos.find((produto) => {
     return produto.id === params;
 }) 
 
 if(!atualizarProduto){
     return response.status(400).send({message: "Produto não encontrado"})
 }

  // Atualizando as informações do produto

  const body = request.body
 
  atualizarProduto.nome = body.nome || atualizarProduto.nome;
  atualizarProduto.descricao = body.descricao || atualizarProduto.descricao;
  atualizarProduto.preco = body.preco || atualizarProduto.preco;
  atualizarProduto.promocao = body.promocao || atualizarProduto.promocao;

  response.status(200).json(produtos)
 
 
 
})

app.delete("/deletar-produto/:id", (request, response)=>{
const params = request.params.id

const deletarProduto = produtos.find((produto) => {
    return produto.id === params;
})

if(!deletarProduto){
    return response.status(400).send({message: "Produto não encontrado"})
}
       
// Removendo o produto da lista de produtos (usando filter)


const updatedProdutos = produtos.filter((produto) => produto.id !== params);


// Atualizando a lista de produtos
updateProdutos(updatedProdutos);

// Respondendo com sucesso
updateProdutos(updatedProdutos); // atualizar produtos usando a função updateProdutos
return response.status(200).json(updatedProdutos);

})





app.listen(3000, ()=>{
console.log("SERVIDOR ON NA PORTA 3000")
})