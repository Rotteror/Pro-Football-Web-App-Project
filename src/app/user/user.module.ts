import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { CustomValidatorService } from './validator/custom-validator.service';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule,
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ],
  providers:[
    UserService,
    CustomValidatorService
  ]
})
export class UserModule { }
