import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangpPage } from './changp.page';

const routes: Routes = [
  {
    path: '',
    component: ChangpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangpPageRoutingModule {}
