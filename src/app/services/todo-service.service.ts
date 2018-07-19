import { Injectable } from '@angular/core';
import {Todo} from '../todo/todo'

import {Store} from '@ngrx/store'

 
@Injectable({
  providedIn: 'root'
})
export class todoServiceService {

  public lastTodoId:number = 0
  public alltodos: Todo[] = []

  constructor(private store:Store<any>) {

      store.select('alltodosfromreducer').subscribe( 
        todo =>{
        this.alltodos = todo
      })


   }

  public addTodo(todo:Todo):void{
    /* if(!todo.id){
      todo.id = ++this.lastTodoId      
    }
    this.alltodos.push(todo)
    console.log("from service - addtodo")
    console.log(this.alltodos)
    
    return this */
    this.store.dispatch({
        type:'ADD_TODO',
        payload:{
          id: ++this.lastTodoId,
          title: todo.title,
          status: todo.status
        }
    })

  }

  public getPendingTodo():Todo[]{
    //console.log("hello");
    //console.log(this.alltodos.filter((onetodo) => {onetodo.status == false}));
    return this.alltodos.filter(onetodo =>onetodo.status === false)
  }

  public toggleTodo(todoid:number){
    console.log(todoid);
    this.store.dispatch({
      type:'TOGGLE',
      payload:{id: todoid}
    })                                  
  }

  public getCompleteTodo(): Todo[]{
    return this.alltodos.filter(onetodo => onetodo.status === true)
  }

  public removeTodo(todoid:number):void{
    this.store.dispatch({
      type:'REMOVE_TODO',
      payload:{id: todoid}
    })
  }



}
