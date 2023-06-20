import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from 'src/auth/service/user-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
carts:any[]=[]
total:any=0
showBtn:boolean=true
loader:boolean=false
  constructor(private serv :UserServiceService , private fb:FormBuilder,
    private toastr:ToastrService , private router:Router){
  
  }
  ngOnInit():void{
  

this.getDataCart()

}

getDataCart(){
  if('cart' in localStorage){
    this.carts=JSON.parse(localStorage.getItem('cart')!)

  }
 this.getCartTotal()

}

getCartTotal(){
this.total=0
for(let x in this.carts){
  this.total +=this.carts[x].item.price * this.carts[x].quantity;
}
}

min(index: number) {
  if (this.carts[index].quantity <=0 ) {
    
  } else {
    this.carts[index].quantity--;
    this.getCartTotal()
    localStorage.setItem('cart', JSON.stringify(this.carts));
  }
}
plus(index:number){
    this.carts[index].quantity++
    this.getCartTotal()
    localStorage.setItem("cart",JSON.stringify(this.carts))
  



}
detect(){
  localStorage.setItem("cart",JSON.stringify(this.carts))

}
delete(index:number){
  this.loader=true
  this.carts.splice(index , 1)
  this.getCartTotal()
  localStorage.setItem("cart",JSON.stringify(this.carts))
  this.toastr.success('Delete Product Successfuly','',{
    closeButton:true,
    progressBar:true,
    timeOut:2000
  })
  this.loader=false
}
deleteAll(){
  this.loader=true
  this.carts=[]
  this.getCartTotal()
  localStorage.setItem("cart",JSON.stringify(this.carts))
  this.toastr.success('Delete All Product Successfuly','',{
    closeButton:true,
    progressBar:true,
    timeOut:2000
  })
  this.loader=false
}

sendToBack(){
  
  let  prod = this.carts.map(item => {
   return {
      productId:item.item.id,
      quantity:item.quantity
    }
  })
  let model = {
    userId:5,
    date: new Date(),
    products:prod
  }
  this.loader=true
  this.serv.sendToBack(model).subscribe((data:any)=>{
    this.toastr.success('Your Order Is Successfuly Send ','',{
      closeButton:true,
      progressBar:true,
      timeOut:2000
    })
  })
  this.carts=[]
  this.getCartTotal()
  localStorage.setItem("cart",JSON.stringify(this.carts))
  this.showBtn=false
  this.loader=false
}
onActive(){
  window.scroll(0,0)
}  
}
