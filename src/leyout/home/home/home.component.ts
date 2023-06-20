import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/auth/service/user-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  loader:boolean=false
  all:any[]=[]
rateee:any[]=[]
show:boolean=true
showw:boolean=false
cat:any[]=[]
carts:any[]=[]
addbtn:boolean=false
addbtns:boolean=true
ammount:number=0
constructor(private serv:UserServiceService , private router:Router,

private fb:FormBuilder,private toaster:ToastrService

  ){}



ngOnInit():void{
  this.getDataHome()
  this.getAll()
}

getDataHome(){
  this.loader=true

  this.serv.getAllHome().subscribe((data:any)=>{
this.all=data
this.rateee=data.rating
this.loader=false

  })
}
getAll(){
  this.loader=true
  this.serv.getAllCategu().subscribe((data:any)=>{
    this.cat=data
    this.loader=false
  })
}

select(event:any){
  let itemg = event.target.value
  if(itemg =='all'){
    this.getDataHome()
  }else{

 this.getByCat(itemg)
  }
  
}

getByCat(keyword:string){
  this.loader=true
  this.serv.getAllSelect(keyword).subscribe((data:any)=>{
this.all=data
this.loader=false
  })
}
open(){

  this.show=false
  this.showw=true
}
openn(){
  this.show=true
  this.showw=false
}

addToCart(event:any){
  if("cart" in localStorage){
this.carts=JSON.parse(localStorage.getItem('cart')!)
let values = this.carts.find(item => item.item.id == event.item.id)
if(values){
  this.toaster.show('Product Is Already In Your Cart','',{
    closeButton:true,
    progressBar:true,
    timeOut:2000
  })
}else{
  this.carts.push(event)
  localStorage.setItem("cart",JSON.stringify(this.carts))
  this.toaster.success('Add Product Successfuly','',{
    closeButton:true,
    progressBar:true,
    timeOut:2000
  })
}

  }else{
    this.carts.push(event)
localStorage.setItem("cart",JSON.stringify(this.carts))
  }
 
  
}


}
