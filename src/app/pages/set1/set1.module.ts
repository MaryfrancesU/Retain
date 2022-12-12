import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Set1PageRoutingModule } from './set1-routing.module';

import { Set1Page } from './set1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Set1PageRoutingModule
  ],
  declarations: [Set1Page]
})
export class Set1PageModule {}
