import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Set3PageRoutingModule } from './set3-routing.module';

import { Set3Page } from './set3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Set3PageRoutingModule
  ],
  declarations: [Set3Page]
})
export class Set3PageModule {}
