import { ThisReceiver } from '@angular/compiler';
import { Component ,OnInit,Output,EventEmitter,Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  favorite:any[] = []
  all:any={}
  alss:any={}
  id:any
  formfavorite!:FormGroup
  contactForm!:FormGroup
  loader:boolean=false
  ALLReview:any[]=[]
  Review:any[]=[]
  rating:any={}
  Reviewid:any={}
  ReviewUser:any[]=[]
  sendContact:boolean=false
  sendContactError=false
  showFav:boolean=false
  showFavind:boolean=false
  carts:any[]=[]
  btn:boolean=true
  constructor(private serv :UserServiceService , private router:ActivatedRoute,
  private tostor:ToastrService , private fb:FormBuilder){

  this.id= this.router.snapshot.paramMap.get('id')
}



ngOnInit():void{
  this.createForm()
this.getAll()
this.getAllReview()
this.createFormContact()
}
createForm(){
  this.formfavorite=this.fb.group({
    service_id:['',[Validators.required]]
  })
}


createFormContact(){
  this.contactForm=this.fb.group({
    name:['',[Validators.required,Validators.email]],
    email:['',[Validators.required]],
    message:['',[Validators.required]]

  })
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
addtoFavorite(id:any){
  this.loader=true

this.serv.addFavorite({'service_id':this.id}).subscribe((data:any)=>{
  
if(data.message == "The Favourite exite"){
  this.showFavind=true
  this.showFav=false
  this.loader=false
}
if(data.message == "Favorite successfully created ")
{
  this.showFavind=false
  this.showFav=true
  this.loader=false
}


})
}
 getAllReview(){
   this.serv.showReview(this.id).subscribe((data:any)=>{

 this.Review=data.data.comments
 this.rating=data.data.rating
 this.ReviewUser=data.data.user
  this.Reviewid=data.data.id

   })
 }

getAllReviewAll(){
  this.serv.showReviewAll().subscribe((data:any)=>{
console.log(data.data);


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
