import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  todoService= inject(TodosService)
text:string=""
changeText(event:Event){
  const target =event.target as HTMLInputElement
  this.text=target.value

}
addTodo():void{
  this.todoService.addTodo(this.text)
  this.text="";
  
}
}
