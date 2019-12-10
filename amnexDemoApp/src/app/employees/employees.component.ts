import { Component, OnInit } from "@angular/core";
import { Employee } from "./employee";
import { Emp } from "./emp";

@Component({
  selector: "app-employees",
  templateUrl: "./employees.component.html",
  styleUrls: ["./employees.component.css"]
})
export class EmployeesComponent implements OnInit {
  dt:Date=new Date(2019,10,29);
  object: Object = {
    foo: "bar",
    baz: "qux",
    nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] }
  };
  obj_emp: Employee = new Employee(0, "", "", 0);
  emp_list: Employee[] = [
    new Employee(1, "jinal", "shah", 0),
    new Employee(2, "jinansh", "shah", 12121)
  ];
  emp_list_interface: Emp[] = [
    { f_name: "jinal", l_name: "shah" },
    { l_name: "jinal", f_name: "shah" }
  ];
  constructor() {}

  ngOnInit() {}
  onRefreshClick(): void {
    this.emp_list = [
      new Employee(1, "jinal", "shahsdf", 0),
      new Employee(2, "jinansh", "shah", 12121),
      new Employee(3, "dhruti", "shah", 213123)
    ];
  }
  ontodoDelete(item: Employee): void {
    this.emp_list.splice(this.emp_list.indexOf(item), 1);
    this.emp_list = this.emp_list.concat();
  }
  onEmpAdd(): void {
    //this.emp_list.push(this.obj_emp);

    this.emp_list = this.emp_list.concat(this.obj_emp);
  }
  trackByEmpId(index: number, employee: any): string {
    console.log(employee.emp_id);
    return employee.emp_id;
  }
}
