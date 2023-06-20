import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from 'src/auth/service/user-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  footer:any={}
  facebook:any=''
  instagram_url:any=''
  twitter_url:any=''
  tiktok_url:any=''
  phone:any=''
  term:any[]=[]
  address:any=''
  email:any=''
  constructor(private fb :FormBuilder,private serv:UserServiceService,public dialog: MatDialog,
    private toastr: ToastrService,
    private router:Router) { } 

    ngOnInit(): void {
 this.getAllDataFooter()
 this.showTerms()
    }


    getAllDataFooter(){
      this.serv.footer().subscribe((data:any)=>{
    this.footer=data[0].content
    this.phone=data[0].phone
this.address=data[0].address
this.email=data[0].email
    this.facebook=data[0].facebook_url
    this.instagram_url=data[0].instagram_url
    this.twitter_url=data[0].twitter_url
    this.tiktok_url=data[0].tiktok_url
    console.log(this.facebook);
    
      })
    }


    openForm(){
     
      
         
       }
       showTerms(){
        this.serv.showTerm().subscribe((data:any)=>{
          this.term=data[0]
          console.log(this.term);
          
        })
       }
}
