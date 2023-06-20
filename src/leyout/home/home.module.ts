import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { ShowComponent } from '../show-favorite/show/show.component';

@NgModule({
  declarations: [
    HomeComponent,
    ShowComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SlickCarouselModule,
    NgxStarRatingModule,
    FormsModule,
    SharedModule
  ]
})
export class HomeModule { }
