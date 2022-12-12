import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Set2PageRoutingModule } from './set2-routing.module';

import { Set2Page } from './set2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Set2PageRoutingModule
  ],
  declarations: [Set2Page]
})
export class Set2PageModule {}
