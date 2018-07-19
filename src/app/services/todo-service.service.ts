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
    /* //console.log(this.alltodos.filter((onetodo) => {
                                                    onetodo.status === false
                                                    return onetodo
                                                  })); */
    return this
  }

  public getPendingTodo():Todo[]{
    //console.log("hello");
    //console.log(this.alltodos.filter((onetodo) => {onetodo.status == false}));
    return this.alltodos.filter(onetodo =>onetodo.status === false)
  }

  public toggleTodo(todo:Todo){
    console.log(todo);
    let updatedtodo = this.updatetodobyid(todo.id, {
                                                      status:!todo.status
                                                    })

    console.log(updatedtodo);     
    return updatedtodo                                      
  }

  private updatetodobyid(id: number, values:Object ={}):Todo{

    let todo = this.gettodobyid(id)
    if(!todo){
      return null
    }
    Object.assign(todo, values)
    return todo

  }

  private gettodobyid(id:number):Todo{
    return this.alltodos.filter(todo => todo.id === id).pop()
  }

  public getCompleteTodo(): Todo[]{
    return this.alltodos.filter(onetodo => onetodo.status === true)
  }

  public removeTodo(todo):todoServiceService{
    this.alltodos = this.alltodos.filter( td => td.id != todo.id)
    return this
  }



}
