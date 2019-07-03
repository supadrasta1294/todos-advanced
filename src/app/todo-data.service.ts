import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Todo } from './todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private api:ApiService) {
    
  }

  addTodo(todo:Todo):Observable<Todo>{
return this.api.addTodo(todo);
  }

  GetAllTodos():Observable<Todo[]>{
    return this.api.getAllTodos()
    
      }
}
