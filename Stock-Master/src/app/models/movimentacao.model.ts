export interface Movimentacao {
    id?: number; 
    tipo: 'entrada' | 'saida'; 
    quantidade: number; 
    produtoId: number; 
    fornecedorId?: number; 
    funcionarioId?: number; 
    data: Date; 
  }