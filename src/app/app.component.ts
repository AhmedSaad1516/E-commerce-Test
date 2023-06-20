import { Component} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserServiceService } from 'src/auth/service/user-service.service';
import { Router ,NavigationStart } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lang:any

  constructor(private serv:UserServiceService,private translate: TranslateService,
    private location: Location, private router: Router,
    
    ){

  }

  ngOnInit():void{

 
 
  }
  

onActive(){
  window.scroll(0,0)
}


}
