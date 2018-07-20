import {Component} from '@angular/core';
import {todoServiceService} from './services/todo-service.service'
import {Todo} from './todo/todo'

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent {
  title = 'app';
  newtodo : Todo = new Todo()

  constructor(private todoservice : todoServiceService) {

  }

  addTodoLocal = function () {
    //console.log(this.newtodo)
    
    //this.todo = ""
    this.todoservice.addTodo(this.newtodo)
    this.newtodo = new Todo()
  }

   public get pendingtodo() : Array < Todo > {

    //console.log("PENDING TODO");
    //console.log(this.todoservice.getPendingTodo());  

    return this.todoservice.getPendingTodo()
  } 

  public toggletodo({id}): void{
    console.log(id);
    this.todoservice.toggleTodo(id)
  }

  public get completetodo():Array<Todo>{
    return this.todoservice.getCompleteTodo()
  }

  public removetodo({id}):void{
    this.todoservice.removeTodo(id)
  }

}
