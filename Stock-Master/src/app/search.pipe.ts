import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(produtos: any[], searchText: string): any[] {
    if (!produtos || !searchText) {
      return produtos;
    }
    return produtos.filter(produto => 
      produto.nome.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}
