import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  userForm : FormGroup;

  constructor(){
    this.userForm = new FormGroup(
      {
        name : new FormControl('', [Validators.required, Validators.minLength(3)]),
        email : new FormControl('', [Validators.email, Validators.required]),
        age : new FormControl('')
      }
    )
  }

  onSubmit()
  {
    if(this.userForm.valid)
      alert("Form Submitted !!!");
    else
      alert("Form is invalid");
  }

}
