import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from 'src/auth/service/user-service.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent {
  loginForm!:FormGroup
  loader:boolean=false
  showError:boolean=false
  constructor(private fb :FormBuilder,private serv:UserServiceService,
    private toastr: ToastrService,
    private router:Router) { } 

    ngOnInit(): void {
this.creatFormLogin()
    }

    creatFormLogin(){
    this.loginForm=this.fb.group({
      email:['',[Validators.required,Validators.email]],

    })
    }

    Submit(){
      this.loader=true
      this.serv.forgetPassword(this.loginForm.value).subscribe((data:any)=>{
        if(data.status == false){
          this.toastr.error('The Email Is Falid')
          this.router.navigateByUrl('/forgetpassword')
          this.loader=false

        }
        else{
          this.toastr.success('The success')
              this.router.navigateByUrl('/checkcode')
              this.loader=false
            this.showError=true

        }
      } , error =>{
        this.loader=false
        this.showError=true
      })
    }
}
