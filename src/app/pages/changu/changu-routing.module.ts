import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChanguPage } from './changu.page';

const routes: Routes = [
  {
    path: '',
    component: ChanguPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChanguPageRoutingModule {}
