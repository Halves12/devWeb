export interface produtosInterface {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  promocao: boolean;
}


  
  export const produtos: produtosInterface[] = [
    {
      id: "1",
      nome: "Smartphone X10",
      descricao: "Smartphone de última geração com câmera tripla e 128GB de armazenamento.",
      preco: 2999.99,
      promocao: true,
    },
    {
      id: "2",
      nome: "Notebook Pro",
      descricao: "Notebook leve e potente com processador i7 e 16GB de RAM.",
      preco: 5999.99,
      promocao: false,
    },
    {
      id: "3",
      nome: "Fone de Ouvido Wireless",
      descricao: "Fone com cancelamento de ruído e bateria de longa duração.",
      preco: 499.99,
      promocao: true,
    },
    {
      id: "4",
      nome: "TV 4K Ultra HD",
      descricao: "Smart TV de 55 polegadas com resolução 4K e suporte a HDR.",
      preco: 3299.99,
      promocao: false,
    },
    {
      id: "5",  
      nome: "Cafeteira Expresso",
      descricao: "Cafeteira automática com função de vapor para leite.",
      preco: 899.99,
      promocao: true,
    },
    {
      id: "6",
      nome: "Relógio Inteligente",
      descricao: "Relógio com monitoramento de atividades físicas e notificações.",
      preco: 799.99,
      promocao: false,
    },
    {
      id: "7",
      nome: "Console de Jogos",
      descricao: "Console de última geração com suporte a jogos 4K.",
      preco: 4499.99,
      promocao: true,
    },
    {
      id: "8",  
      nome: "Cadeira Gamer",
      descricao: "Cadeira ergonômica com ajustes personalizados e design moderno.",
      preco: 1299.99,
      promocao: false,
    },
    {
      id: "9",
      nome: "Câmera Digital",
      descricao: "Câmera DSLR com lente intercambiável e 24MP.",
      preco: 3599.99,
      promocao: true,
    },
    {
      id: "10",
      nome: "Bicicleta Elétrica",
      descricao: "Bicicleta com pedal assistido e bateria de alta duração.",
      preco: 7499.99,
      promocao: false,
    },
  ];
  
  console.log(produtos);
  