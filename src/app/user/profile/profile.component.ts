import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/user';
import { UserService } from '../user.service';
import { faCalendarAlt, faBackspace, faFutbol, faBullseye, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user!: IUser | undefined
  editUser: FormGroup;
  icons = {
    faCalendarAlt,
    faBackspace,
    faFutbol,
    faBullseye,
    faArrowAltCircleLeft
  }

  constructor(private userService: UserService, private fb: FormBuilder) {
    this.loadUser();
    this.editUser = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      aboutMe: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    })
  }



  ngOnInit(): void {
  }

  loadUser(): void {
    const id = localStorage.getItem('_id')
    if (!id) { return }
    this.user = undefined;
    this.userService.getUserById(id).subscribe(u => {
      this.user = u;
      this.editUser.patchValue({
        username: this.user.username,
        email: this.user.email,
        fullName: this.user.fullName,
        address: this.user.address,
        phone: this.user.phone,
        aboutMe: this.user.aboutMe,
      })
    });
  }

  editUserHandler(): void {
    const userId = this.user?._id;
    const data = this.editUser.value;
    if (data.invalid) {
      return;
    }
    
    const confirmed = confirm('Are you sure you want to edit your info!');
    if (confirmed) {
      this.userService.editUserInfo(userId, data).subscribe({
        next: () => {

        },
        error: (err) => {
          console.log(err.error.message);
        }
      })
    }
  }

}
