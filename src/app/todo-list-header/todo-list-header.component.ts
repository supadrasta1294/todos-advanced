import { Component, OnInit,EventEmitter,Output} from '@angular/core';
import { ApiService } from '../api.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent implements OnInit {

  constructor(private api:ApiService) { }

  newTodo:Todo = new Todo();

  @Output()
  add:EventEmitter<any> = new EventEmitter();
  ngOnInit() {
  }

  addTodo()
  {
    //debugger;
  //  console.log( this.newTodo.title);
    this.add.emit(this.newTodo.title);
    this.newTodo=new Todo();

  }
}
