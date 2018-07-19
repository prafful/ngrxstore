import { Component } from '@angular/core';
import {todoServiceService} from './services/todo-service.service'
import {Todo} from './todo/todo'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  newtodo:Todo = new Todo()

  constructor(private todoservice:todoServiceService){}
  
  addTodoLocal = function(){
    console.log(this.newtodo)
    this.newtodo = new Todo()
    //this.todo = ""
    this.todoservice.addTodo(this.newtodo)
    
   
  }

}
