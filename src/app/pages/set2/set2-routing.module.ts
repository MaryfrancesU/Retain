import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Set2Page } from './set2.page';

const routes: Routes = [
  {
    path: '',
    component: Set2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Set2PageRoutingModule {}
