import { Routes, RouterModule } from "@angular/router";
import { TodoDisplayComponent } from "./todo-display.component";
import { AddTodoComponent } from "./add-todo/add-todo.component";
import { EditTodoComponent } from "./edit-todo/edit-todo.component";
const arr: Routes = [
  {
    path:'',
    children: [
      { path: "", component: TodoDisplayComponent },
      { path: "add", component: AddTodoComponent },
      { path: "edit/:id", component: EditTodoComponent }
    ]
  }
];
export const todoroutes = RouterModule.forChild(arr);
