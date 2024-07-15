import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';

import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { EmployeeTableComponent } from '../employee-table/employee-table.component';

export interface IEmployee {
  id: number;
  name: string;
  age: number;
  city: string;
}

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [EmployeeTableComponent, EmployeeFormComponent],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
})
export class EmployeeComponent {
  employees: IEmployee[] = [
    { id: 1, name: 'Veneceos', age: 23, city: 'Recife' },
  ];

  @ViewChild(EmployeeTableComponent, { static: false })
  table!: EmployeeTableComponent;
  @ViewChild(EmployeeFormComponent, { static: false })
  form!: EmployeeFormComponent;

  selectEmployee(id: number) {
    const employee = this.employees.find((employee) => employee.id === id);
    if (employee) {
      this.form.selectEmployee(employee);
    }
  }

  addEmployee(employee: IEmployee) {
    this.employees.push(employee);
  }

  updateEmployee(employee: IEmployee) {
    const index = this.employees.findIndex(
      (employeeObj) => employeeObj.id === employee.id
    );
    if (index !== -1) {
      this.employees[index] = employee;
    }
  }

  removeEmployee(id: number) {
    this.employees = this.employees.filter((employee) => employee.id !== id);
  }
}
