export interface Movimentacao {
    id?: number; // Identificador único da movimentação
    tipo: 'entrada' | 'saida'; // Tipo de movimentação
    quantidade: number; // Quantidade movimentada
    produtoId: number; // ID do produto relacionado
    fornecedorId?: number; // Opcional: ID do fornecedor
    funcionarioId?: number; // Opcional: ID do funcionário
    data: Date; // Data da movimentação
  }