import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestPasswordRoutingModule } from './rest-password-routing.module';
import { RestpasswordComponent } from './restpassword/restpassword.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    RestpasswordComponent
  ],
  imports: [
    CommonModule,
    RestPasswordRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ]
})
export class RestPasswordModule { }
