import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from 'src/auth/service/user-service.service';

@Component({
  selector: 'app-restpassword',
  templateUrl: './restpassword.component.html',
  styleUrls: ['./restpassword.component.css']
})
export class RestpasswordComponent {
  restForm!:FormGroup
  loader:boolean=false
  showError:boolean=false
   constructor(private fb :FormBuilder,private serv:UserServiceService,
     private toastr: ToastrService,
     private router:Router) { } 
 
     ngOnInit(): void {
 this.creatFormRest()
     }
 
     creatFormRest(){
     this.restForm=this.fb.group({
       email:['',[Validators.required,Validators.email]],
       password:['',[Validators.required]]
 
 
     })
     }
 
     Submit(){
       this.loader=true
       this.serv.rsetpassword(this.restForm.value).subscribe((data:any)=>{
         if(data.status == false){
           this.toastr.error('The Email Is Falid')
           this.router.navigateByUrl('/restpassword')
           this.loader=false
 
         }
         else{
           this.toastr.success('The success')
               this.router.navigateByUrl('/login')
               this.loader=false
 
         }
       })
     }
}
