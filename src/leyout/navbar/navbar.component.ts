import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/auth/service/user-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  carts:any[]=[]
  tokens:any
  constructor(private serv :UserServiceService , private router:Router){
  

  }
  ngOnInit():void{
   this.tokens= localStorage.getItem('token')
    this.carts=JSON.parse(localStorage.getItem('cart')!)
    localStorage.setItem("cart",JSON.stringify(this.carts))

}

    onActive(){
      window.scroll(0,0)
    }
    logout(){
      localStorage.clear()
      this.router.navigateByUrl('/login')
    }

  }
