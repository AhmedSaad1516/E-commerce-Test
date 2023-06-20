import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowFavoriteRoutingModule } from './show-favorite-routing.module';
import { ShowComponent } from './show/show.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    ShowFavoriteRoutingModule,
    NgxStarRatingModule,
    FormsModule
  ]
})
export class ShowFavoriteModule { }
