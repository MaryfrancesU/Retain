import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChanguPageRoutingModule } from './changu-routing.module';

import { ChanguPage } from './changu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChanguPageRoutingModule
  ],
  declarations: [ChanguPage]
})
export class ChanguPageModule {}
