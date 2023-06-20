import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
HttpErrorResponse
} from '@angular/common/http';
import { catchError,Observable,throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router:Router,private toater:ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError((error:HttpErrorResponse)=>{
      if(error){
    
        if(error.status==404){
          this.router.navigateByUrl('/login')
          localStorage.removeItem('token')
        }
        if(error.status==401){
          this.router.navigateByUrl('/login')
      
          localStorage.removeItem('token')
        }
        if(error.status==405){
          this.router.navigateByUrl('/login')
          localStorage.removeItem('token')
        }
        
        
      }
      return throwError(()=> new Error(error.message))
    }));
  }
}
