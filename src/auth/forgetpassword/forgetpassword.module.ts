import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgetpasswordRoutingModule } from './forgetpassword-routing.module';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    ForgetpasswordComponent
  ],
  imports: [
    CommonModule,
    ForgetpasswordRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ]
})
export class ForgetpasswordModule { }
