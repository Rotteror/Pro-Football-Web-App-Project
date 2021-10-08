import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { CustomValidatorService } from '../validator/custom-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private customValidator: CustomValidatorService, private router: Router) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rePassword: ['', [Validators.required]],
    },{
      validator: [this.customValidator.passwordMatchValidator('password','rePassword')]
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
        this.router.navigate(['/']);
      }
    })
    this.form.reset();
  }
}
