import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { Input } from '@angular/core';
import { IEmployee } from '../employee/employee.component';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss',
})
export class EmployeeFormComponent {
  form = new FormGroup({
    id: new FormControl(Math.random()),
    name: new FormControl(''),
    age: new FormControl(18),
    city: new FormControl(''),
  });
  alert: string = '';

  @Input() employees: IEmployee[] = [];
  @Input() addItem!: (item: IEmployee) => void;
  @Input() removeEmployee!: (id: number) => void;
  @Input() updateEmployee!: (employee: IEmployee) => void;

  hasEmployee() {
    return this.employees.find(
      (employee) => employee.id === this.form.value.id
    );
  }

  getFormValues() {
    return this.form.value as IEmployee;
  }

  selectEmployee(employee: IEmployee) {
    this.form.patchValue(employee);
  }

  validateForm() {
    const values = this.form.value;
    if (!values.name) {
      this.alert = 'É necessário informar um nome';
      return false;
    }
    if (!values.age) {
      this.alert = 'É necessário informar uma idade';
      return false;
    }
    if (!values.city) {
      this.alert = 'É necessário informar uma cidade';
      return false;
    }
    this.alert = '';
    return true;
  }

  submitForm() {
    const isValid = this.validateForm();
    const values = this.getFormValues();
    if (isValid) {
      this.addItem(values);
      this.clearForm();
    }
  }

  clearForm() {
    this.alert = '';
    this.form.reset({ id: Math.random() });
  }
}
