import { TestBed } from '@angular/core/testing';
import { Product } from '../models/product';

import { ProductService } from './product.service';

const productsFake: Product[] = [
  {
    id: 1,
    nome: 'Teste',
    ativo: true,
    valor: 100,
    imagem: 'celular.jpg'
  },
  {
    id: 2,
    nome: 'Teste 2',
    ativo: true,
    valor: 200,
    imagem: 'gopro.jpg'
  },
  {
    id: 3,
    nome: 'Teste 3',
    ativo: true,
    valor: 300,
    imagem: 'laptop.jpg'
  }
];

const productFake: Product = {
  id: 4,
  nome: 'Teste 4',
  ativo: true,
  valor: 400,
  imagem: 'mouse.jpg'
}
describe('ProductService', () => {
  let service: ProductService;


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('shoul return a products list', () => {
    spyOn(service, 'obterTodos').and.returnValue(productsFake);

    let result = service.obterTodos('ativos');
    expect(result.length).toBe(3);

    expect(result).toEqual(productsFake);
  });

  it('shoul return a product', () => {
    spyOn(service, 'obterPorId').and.returnValue(productFake);

    let result = service.obterPorId(4);

    expect(result).toEqual(productFake);
    expect(result.id).toEqual(4);
  });

});
