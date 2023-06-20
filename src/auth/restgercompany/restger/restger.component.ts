import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from 'src/auth/service/user-service.service';

@Component({
  selector: 'app-restger',
  templateUrl: './restger.component.html',
  styleUrls: ['./restger.component.css']
})
export class RestgerComponent {
  registerForm!:FormGroup
  loader:boolean=false
  showForm:boolean=true
  showFormValue:boolean=false
  photoName :any
  url :any= "";
  visible:boolean = true;
  changetype:boolean =true;
  changetypee:boolean=true
  visibleee:boolean=true
  constructor(private fb :FormBuilder,private serv:UserServiceService,public dialog: MatDialog,
    private toastr: ToastrService,
    private router:Router) { } 

    ngOnInit(): void {
this.creatFormRegister()

    }

    creatFormRegister(){
      this.registerForm=this.fb.group({
        name:['',[Validators.required]],
        email:['',[Validators.required,Validators.email]],
        address:['',[Validators.required]],
        phone:['',[Validators.required]],
        password:['',[Validators.required,Validators.minLength(6)]],
        password_confirmation:['',[Validators.required,Validators.minLength(6)]],
        companyId:['',[Validators.required,Validators.minLength(6),Validators.maxLength(14)]],
        photo:['',[Validators.required]],
      })
    }

    selectPhtot(event:any){

      this.photoName=event.target.value
      this.registerForm.get('photo')?.setValue(event.target.files[0])
    if(event.target.files[0]){
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0])
    reader.onload = (event:any)=>{
    this.url = event.target.result
   
    
    } 
    
    }
    this.loader=false
    
    }
    Register(){
      let model = this.createFormData()
this.serv.registerCompany(model).subscribe((data:any)=>{
  this.toastr.success('The account has been activated','',{
    progressBar:true,
    closeButton:true,
    timeOut:1000
  })
  
  let audio = new Audio
  audio.src='../../../assets/notification-sound/success-notification-alert-one-shot-fx_A_major.wav'
  audio.load()
  audio.play()
  this.router.navigateByUrl('/restgerCompany')
  this.loader=false
  this.showForm=false
  this.showFormValue=true
}, error =>{
  this.toastr.error(error.errors)
let audio = new Audio
audio.src='../../../assets/notification-sound/success-notification-alert-one-shot-fx_A_major.wav'
audio.load()
audio.play()
this.router.navigateByUrl('/restgerCompany')
this.loader=false
this.showForm=true
})
    }


    createFormData(){
      let newdata = new FormData
      Object.entries(this.registerForm.value).forEach(([key , value]:any)=>{
newdata.append(key , value)
      })
      return newdata
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
