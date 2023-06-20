import { Component ,Output,EventEmitter,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from 'src/auth/service/user-service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  @Input() data:any={}
  @Output() item = new EventEmitter
  all:any={}
  alss:any={}
  id:any
  loader:boolean=false
  showFavind:boolean=false
  carts:any[]=[]
  btn:boolean=true
  constructor(private serv :UserServiceService , private router:ActivatedRoute,
  private tostor:ToastrService ,){

  this.id= this.router.snapshot.paramMap.get('id')
}

ngOnInit():void{
  
this.getAll()

}

 getAll(){
   this.loader=true 
   this.serv.showSingelService(this.id).subscribe((data:any)=>{
 this.all=data
 this.alss=data.rating
//  this.ReviewUser=data.data.Review
 this.loader=false

 })
 }

onActive(){
  window.scroll(0,0)
}  

addToCart(event:any){
  if(  this.carts[event] in localStorage){
alert('noo')
  }else{
    this.tostor.success('Add Product Successfuly','',{
      closeButton:true,
      progressBar:true,
      timeOut:2000
    })
    this.carts.push(event)
    localStorage.setItem("cart",JSON.stringify(this.carts))
  }

this.btn=false
console.log(event);

 
  
}
}
