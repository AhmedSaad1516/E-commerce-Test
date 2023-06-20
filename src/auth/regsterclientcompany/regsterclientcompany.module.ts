import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegsterclientcompanyRoutingModule } from './regsterclientcompany-routing.module';
import { RegsterclientcompanyComponent } from './regsterclientcompany/regsterclientcompany.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegsterclientcompanyComponent
  ],
  imports: [
    CommonModule,
    RegsterclientcompanyRoutingModule,
    ReactiveFormsModule
  ]
})
export class RegsterclientcompanyModule { }
