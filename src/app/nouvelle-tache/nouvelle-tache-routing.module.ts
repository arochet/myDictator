import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NouvelleTachePage } from './nouvelle-tache.page';

const routes: Routes = [
  {
    path: '',
    component: NouvelleTachePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NouvelleTachePageRoutingModule {}
