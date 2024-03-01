import { Injectable, signal } from '@angular/core';
import { FilterEnum } from '../types/filter-enum';
import { Todo } from '../types/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todoSig= signal<Todo[]>([])
  filterSig=signal<FilterEnum>(FilterEnum.all)

  constructor() { }
  addTodo(text:string):void{
    const newTodo:Todo={
      text,isCompleted:false,
      id:Math.random().toString(16)
    }
    this.todoSig.update(todos=> [ ...todos,newTodo])
  }
}
