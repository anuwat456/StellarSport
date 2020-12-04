import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompetitionPage } from './competition.page';

const routes: Routes = [
  {
    path: '',
    component: CompetitionPage
  },
  {
    path: 'competition-join',
    loadChildren: () => import('./competition-join/competition-join.module').then( m => m.CompetitionJoinPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompetitionPageRoutingModule {}
