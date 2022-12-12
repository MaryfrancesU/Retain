import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { Set1Page } from 'src/app/pages/set1/set1.page';
import { Set2Page } from 'src/app/pages/set2/set2.page';
import { Set3Page } from 'src/app/pages/set3/set3.page';



const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'set1',
    component: Set1Page,
  },
  {
    path: 'set2',
    component: Set2Page,
  },
  {
    path: 'set3',
    component: Set3Page,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
