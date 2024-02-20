import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {

  submitForm(form: NgForm) {
    // Handle form submission logic here
    if (form.valid) {
      console.log('Form submitted successfully!');
      // You can perform additional actions like saving the form data
    } else {
      console.error('Form is invalid!');
    }
  }

}
