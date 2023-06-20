import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeyoutRoutingModule } from './leyout-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from './shared/shared';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LeyoutRoutingModule,
    SharedModule
  ]
})
export class LeyoutModule { }
