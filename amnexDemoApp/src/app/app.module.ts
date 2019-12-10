import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { TodosComponent } from './todos/todos.component';
import { DirectiveDemo1Component } from "./directives-demo/directive-demo1.component";
import { EmployeesComponent } from './employees/employees.component';
import { CustomDirectiveDemoComponent } from "./customdirectivesdemo/custom-directive-demo.component";
import { HighlighterdirectiveDynamicDirective } from "./customdirectivesdemo/highlighterdirective-dynamic.directive";
import { HighlighterdirectiveDirective } from "./customdirectivesdemo/highlighterdirective.directive";
import { RoundBlockDirectiveDirective } from "./customdirectivesdemo/round-block-directive.directive";
import { CustomeDirectiveDemo2Component } from './custome-directive-demo2/custome-directive-demo2.component';
import { HighlightDirective } from './highlight.directive';
import { CreditcardDirective } from './creditcard.directive';
import { FilterPipe } from './employees/filter.pipe';
import { ProductsComponent } from './products/products.component';
import { FilterProductPipe } from './products/filter-product.pipe';
import { SidebarProductComponent } from './products/sidebar-product/sidebar-product.component';
import { ProductComponent } from "./test1/product.component";
import { SortingPipe } from "./test1/sorting.pipe";
import { ChildComponent } from './child/child.component';
import { TododemowsComponent } from './tododemows/tododemows.component';
import { AddTodoComponent } from './tododemows/add-todo/add-todo.component';
import { TasklistComponent } from './tododemows/tasklist/tasklist.component';
@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    TodosComponent,
    DirectiveDemo1Component,
    EmployeesComponent,
    CustomDirectiveDemoComponent,
    HighlighterdirectiveDynamicDirective,
    HighlighterdirectiveDirective,
    RoundBlockDirectiveDirective,
    CustomeDirectiveDemo2Component,
    HighlightDirective,
    CreditcardDirective,
    FilterPipe,
    ProductsComponent,
    FilterProductPipe,
    SidebarProductComponent,
    ProductComponent,
    SortingPipe,
    ChildComponent,
    TododemowsComponent,
    AddTodoComponent,
    TasklistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
