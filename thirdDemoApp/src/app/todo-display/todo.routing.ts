import { Routes, RouterModule } from "@angular/router";
import { TodoDisplayComponent } from "./todo-display.component";
import { AddTodoComponent } from "./add-todo/add-todo.component";
import { EditTodoComponent } from "./edit-todo/edit-todo.component";
import { TodoResolverService } from './todo-resolver.service';

const arr: Routes = [
  {
    path:'',
    children: [
      { path: "",resolve:{xyz:TodoResolverService}, component: TodoDisplayComponent },
      { path: "add", component: AddTodoComponent },
      { path: "edit/:id", component: EditTodoComponent }
    ]
  }
];
export const todoroutes = RouterModule.forChild(arr);
