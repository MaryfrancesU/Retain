import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Set1Page } from './set1.page';

const routes: Routes = [
  {
    path: '',
    component: Set1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Set1PageRoutingModule {}
