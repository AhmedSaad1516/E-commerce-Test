import { Component,EventEmitter,Input,Output } from '@angular/core';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent {
@Input() data:any={}
@Output() item = new EventEmitter
addbtn:boolean=false
ammount:number=0
  constructor(){

  }



  ngOnInit():void{
    


  }
  addToCart(){
this.item.emit({item:this.data ,quantity:this.ammount })
  }


}
 
