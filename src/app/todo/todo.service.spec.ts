import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable, Observer } from 'rxjs';
import { Task } from './models/task';
import { TodoService } from './todo.service';
import { Store } from './todo.store';

const todoList: Task[] = [
  {
    id: 2,
    nome: "Reunião com fornecedor",
    finalizado: true,
    iniciado: false
  }
];

function createResponse(body: any) {
  return Observable.create((observable: Observer<any>) => {
    observable.next(body)
  });
}

class MockHttp {
  get() {
    return createResponse(todoList);
  }
}
describe('TodoService', () => {
  let http: HttpClient;
  let service: TodoService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
         HttpClientModule
      ],
      providers: [
        { provide: HttpClient, useClass: MockHttp },
        TodoService,
        Store
      ]
    });
    http = TestBed.inject(HttpClient);
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a task list', () => {
    // spyOn(http, 'get').and.returnValue(createResponse(todoList));

    service.getTodoList$.subscribe((res) => {
      expect(res.length).toBe(1);
      expect(res).toEqual(todoList);
    });
  });
});
