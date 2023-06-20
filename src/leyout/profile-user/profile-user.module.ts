import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileUserRoutingModule } from './profile-user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from '../shared/shared';


@NgModule({
  declarations: [
ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileUserRoutingModule,
    ReactiveFormsModule ,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatDatepickerModule,
    MatFormFieldModule,
    SharedModule
  ]
})
export class ProfileUserModule { }
