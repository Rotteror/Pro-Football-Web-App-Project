import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  //TO DO -> ADD Custom RePassaword Validation

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rePassword: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  registerHandler(): void {
    const data = this.form.value;
    if (this.form.invalid) { return };
    this.userService.register(data).subscribe({
      next: (result)=> {
        localStorage.setItem('_id', result._id);
      }
    })
    this.form.reset();
  }
}
