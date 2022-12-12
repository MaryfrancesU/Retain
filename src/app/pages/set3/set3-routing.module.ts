import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Set3Page } from './set3.page';

const routes: Routes = [
  {
    path: '',
    component: Set3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Set3PageRoutingModule {}
