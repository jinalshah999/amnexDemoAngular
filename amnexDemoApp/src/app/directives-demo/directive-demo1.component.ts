import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { HueGroup } from './huegroup';
import { Light } from './light';
import { Item } from './items';

@Component({
  selector: 'app-directive-demo1',
  templateUrl: './directive-demo1.component.html',
  styleUrls: ['./directive-demo1.component.css']
})
export class DirectiveDemo1Component implements OnInit {

  months: string[] = ['January', 'Feburary', 'March', 'April', 'May',
    'June', 'July', 'August', 'September',
    'October', 'November', 'December'];

  employeeList: Employee[] = [
    new Employee('1', 'Steve', 'Male', 'Development'),
    new Employee('2', 'Bob', 'Male', 'Design'),
    new Employee('3', 'Alexa', 'Female', 'QA')
  ];

  hueLightData: HueGroup[] = [
    { Name: 'group 1', Lights: [new Light('light 1'), new Light('light 2')] },
    { Name: 'group 2', Lights: [new Light('light 3'), new Light('light 4')] }
  ];

  items: Item[] = [
    new Item('Select', 0),
    new Item('One', 1),
    new Item('Two', 2),
    new Item('Three', 3),
    new Item('Four', 4),
    new Item('Five', 5)
  ];
  selectedValue: string = 'Select';

  constructor() { }

  ngOnInit() {
  }

  trackByEmployeeId(index: number, employee: any): string {
    return employee.Id;
  }

  GetMoreEmployee() {
    this.employeeList = [
      new Employee('1', 'Steve', 'Male', 'Development'),
      new Employee('2', 'Bob', 'Male', 'Design'),
      new Employee('3', 'Alexa', 'Female', 'QA'),
      new Employee('4', 'Isabella', 'Female', 'BA')
    ];
  }
}
