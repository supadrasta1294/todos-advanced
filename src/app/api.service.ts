import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Todo } from "./todo";
import { SessionService } from "./session.service";
import { map } from 'rxjs/operators';
import { TodosComponent } from './todos/todos.component';

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private http: HttpClient, private session: SessionService) {}

  public signIn(username: string, password: string): Observable<any> {
    return this.http.post("http://localhost:3000/sign-in", {
      username,
      password
    });
  }

  public addTodo(todo: Todo): Observable<Todo> {
    const headers = this.getRequestHeaders();

    return this.http
             .post("http://localhost:3000/todos", todo, { headers })
            .pipe(
              map((response)=>{
                return new Todo(response);
              })
            );            
  }
  handleError(handleError: any): Observable<Todo> {
    throw new Error("Method not implemented.");
  }

  public getRequestHeaders() {
    return new HttpHeaders({
      Authorization: "Bearer " + this.session.accessToken
    });
  }

  public getAllTodos():Observable<Todo[]>{
    debugger;
    const headers = this.getRequestHeaders();
    return this.http.get("http://localhost:3000/todos",{headers})
                    .pipe(
                     map((response)=>{
                     const todos= response as any[];
                     return todos.map((todo)=> new Todo(todo));
                    }))
  
  }}
