import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompetitionJoinPage } from './competition-join.page';

const routes: Routes = [
  {
    path: '',
    component: CompetitionJoinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompetitionJoinPageRoutingModule {}
