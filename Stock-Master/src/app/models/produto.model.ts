export interface Produto {
    id?: number; 
    nome: string;
    quantidade: number;
    preco: number;
    minStock: number;
    fornecedorId: number;
  }