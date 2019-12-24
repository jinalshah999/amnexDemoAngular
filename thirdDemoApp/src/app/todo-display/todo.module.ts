import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { TodoDisplayComponent } from './todo-display.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { todoroutes } from './todo.routing';

@NgModule({
  declarations:[
    TodoDisplayComponent,
    AddTodoComponent,
    EditTodoComponent
  ],
  imports:[
    CommonModule,
    todoroutes
  ]
})

export class TodoModule{}
