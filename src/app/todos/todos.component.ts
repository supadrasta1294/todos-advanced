import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { ApiService } from '../api.service';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

todos:Todo[];
  constructor(private todoDataService:TodoDataService) { }

  ngOnInit() {
    this.getAllTodos();
  }
  getAllTodos() {
    this.todoDataService.GetAllTodos()
    .subscribe((todos)=>{
this.todos=todos;

 })
  
  }

  onAddTodo(todo){
    debugger;
    console.log(todo);

    this.todoDataService.addTodo(todo)
    .subscribe((newtodo)=>{


 })
  
  }
}
