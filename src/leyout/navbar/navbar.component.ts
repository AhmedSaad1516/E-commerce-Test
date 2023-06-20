import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { LoginComponent } from 'src/auth/login/login/login.component';
import { RestgerUserComponent } from 'src/auth/restger-user/restger-user.component';
import { UserServiceService } from 'src/auth/service/user-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  login:boolean=true
  unlogin:boolean=false
  user:any = null
  profile:any={}
  com:any = null
  uu='user'
  typee='company'
  urll:any=''
  loginn:boolean=true
  logg:boolean=false
  lang:any="en"
  offf:boolean=false
  roleLogin:any=''
  footer:any={}
  facebook:any=''
  instagram_url:any=''
  twitter_url:any=''
  tiktok_url:any=''
  phone:any=''
  term:any[]=[]
  address:any=''
  email:any=''

  carts:any[]=[]
  tokens:any
  constructor(private serv :UserServiceService , public dialog: MatDialog,private translate:TranslateService,
    private tostor:ToastrService , private router:Router){
      this.lang = this.translate.currentLang

  }
  ngOnInit():void{
   this.tokens= localStorage.getItem('token')

    this.carts=JSON.parse(localStorage.getItem('cart')!)
    localStorage.setItem("cart",JSON.stringify(this.carts))


}





    openNav(){
      this.offf=true
    }


    closenav(){
      this.offf=false

    }
    onActive(){
      window.scroll(0,0)
    }






    logout(){
      localStorage.clear()
      this.router.navigateByUrl('/login')
    }

  }
