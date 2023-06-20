import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/auth/service/user-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  loader: boolean = false;
  loginn: boolean = true;
  unlogin: boolean = false;
  user: any = null;
  showError: boolean = false;
  errorLogin: boolean = false;
  visible: boolean = true;
  changetype: boolean = true;
  constructor(
    private fb: FormBuilder,
    private serv: UserServiceService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.creatFormLogin();
  }
  creatFormLogin() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    this.loader = true;
    this.serv.LoginUser(this.loginForm.value).subscribe(
      (data: any) => {
        localStorage.setItem('token', data.token);
        this.toastr.success('Logged in successfully', '', {
          progressBar: true,
          closeButton: true,
          timeOut: 1000,
        });

        let audio = new Audio();
        audio.src =
          '../../../assets/notification-sound/success-notification-alert-one-shot-fx_A_major.wav';
        audio.load();
        audio.play();
        this.loader = false;
        this.router.navigateByUrl('/home');
      },
      (error) => {
        this.errorLogin = true;
        this.loader = false;
      }
    );
  }

  viewpass() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }
}
