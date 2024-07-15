import { Component, input } from '@angular/core';
import { IEmployee } from '../employee/employee.component';
import { Input } from '@angular/core';

@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.scss',
})
export class EmployeeTableComponent {
  @Input() selectEmployee!: (id: number) => void;
  @Input() employees: IEmployee[] = [];
}
