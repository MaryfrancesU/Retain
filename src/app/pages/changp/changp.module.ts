import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangpPageRoutingModule } from './changp-routing.module';

import { ChangpPage } from './changp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangpPageRoutingModule
  ],
  declarations: [ChangpPage]
})
export class ChangpPageModule {}
