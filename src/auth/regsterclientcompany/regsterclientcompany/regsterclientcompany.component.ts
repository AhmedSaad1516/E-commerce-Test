import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/auth/service/user-service.service';
@Component({
  selector: 'app-regsterclientcompany',
  templateUrl: './regsterclientcompany.component.html',
  styleUrls: ['./regsterclientcompany.component.css']
})
export class RegsterclientcompanyComponent {
  registerUser!:FormGroup
  loader:boolean=false
  hide = true;
  visible:boolean = true;
  changetype:boolean =true;
  changetypee:boolean=true
  visibleee:boolean=true
  constructor(private fb :FormBuilder,private serv:UserServiceService,
    private toastr: ToastrService,
    private router:Router) { } 

    ngOnInit(): void {

      this.creatForm()
    }

    creatForm(){
this.registerUser=this.fb.group({
  name:['',[Validators.required]],
  email:['',[Validators.required,Validators.email]],
  address:['',[Validators.required]],
  phone:['',[Validators.required]],
  password:['',[Validators.required,Validators.minLength(6)]],
  password_confirmation:['',[Validators.required,Validators.minLength(6)]],
  companyId:['',[Validators.required,Validators.minLength(6),Validators.maxLength(14)]],

})
    }



    Register(){
      this.loader=true
   
this.serv.registerclientcompany(this.registerUser.value).subscribe((data:any)=>{
this.toastr.success('Account successfully created','',{
  progressBar:true,
  closeButton:true,
  timeOut:1000
})

let audio = new Audio
audio.src='../../../assets/notification-sound/success-notification-alert-one-shot-fx_A_major.wav'
audio.load()
audio.play()
this.router.navigateByUrl('/login')
this.loader=false

}, error =>{
this.toastr.error('error')
let audio = new Audio
audio.src='../../../assets/notification-sound/success-notification-alert-one-shot-fx_A_major.wav'
audio.load()
audio.play()
this.router.navigateByUrl('/Restger')
this.loader=false

})
}

viewpass(){
  this.visible = !this.visible;
  this.changetype = !this.changetype;
}

viewpasss(){
  this.visibleee = !this.visibleee;
  this.changetypee = !this.changetypee;
}
}
