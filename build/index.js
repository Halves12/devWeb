"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const produtos_1 = require("./produtos");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/produtos", (request, response) => {
    response.status(200).json(produtos_1.produtos);
});
app.get("/produtos-promocao", (request, response) => {
    const produtosPromocao = produtos_1.produtos.filter((produto) => {
        return produto.promocao === true;
    });
    response.status(200).json(produtosPromocao);
    // ou const produtosPromocao = produtos.filter((produto) => produto.promocao);
});
app.post("/criar-produto", (request, response) => {
    const { nome, descricao, preco, promocao } = request.body;
    const id = Math.random().toString();
    const novoProduto = {
        id,
        nome,
        descricao,
        preco,
        promocao,
    };
    produtos_1.produtos.push(novoProduto);
    response.status(201).json(produtos_1.produtos);
});
app.put("/atualiza-produto/:id", (request, response) => {
    const params = request.params.id;
    const atualizaProduto = produtos_1.produtos.find((produto) => {
        return produto.id === params;
    });
    if (!atualizaProduto) {
        return response.status(404).send({ messsage: "Produto não encontrado" });
    }
    console.log(atualizaProduto);
});
app.listen(3000, () => {
    console.log("SERVIDOR ON NA PORTA 3000");
});
