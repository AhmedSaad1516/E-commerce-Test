import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckcodeRoutingModule } from './checkcode-routing.module';
import { CheckcodeComponent } from './checkcode/checkcode.component';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    CheckcodeComponent
  ],
  imports: [
    CommonModule,
    CheckcodeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ]
})
export class CheckcodeModule { }
