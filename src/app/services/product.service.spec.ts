import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('shoul return a products list ativos', () => {

    const result = service.obterTodos('ativos');
    expect(result.length).toBe(5);
  });

  it('shoul return a products list all', () => {

    const result = service.obterTodos('');
    expect(result.length).toBe(6);
  });

  it('shoul return a products list inativos', () => {
    // spyOn(service, 'obterTodos').and.returnValue(productsFake);

    const result = service.obterTodos('inativos');
    expect(result.length).toBe(1);
  });

  it('shoul return a product', () => {
    // spyOn(service, 'obterPorId').and.returnValue(productFake);

    let result = service.obterPorId(4);
    expect(result.id).toEqual(4);
  });

});
