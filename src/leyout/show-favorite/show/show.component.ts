import { Component,EventEmitter,Input,Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from 'src/auth/service/user-service.service';

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
  constructor(private serv :UserServiceService ,public matDialog: MatDialog,
    private tostor:ToastrService){

  }



  ngOnInit():void{
    


  }
  addToCart(){
this.item.emit({item:this.data ,quantity:this.ammount })
  }


}
 
