import { Injectable } from '@angular/core';
import {Todo} from '../todo/todo'
 
@Injectable({
  providedIn: 'root'
})
export class todoServiceService {

  public lastTodoId:number = 0
  public alltodos: Todo[] = []

  constructor() { }

  public addTodo(todo:Todo): todoServiceService{
    if(!todo.id){
      todo.id = ++this.lastTodoId      
    }
    this.alltodos.push(todo)
    console.log("from service - addtodo")
    console.log(this.alltodos)
    return this
  }


}
