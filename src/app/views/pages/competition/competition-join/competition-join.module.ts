import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompetitionJoinPageRoutingModule } from './competition-join-routing.module';

import { CompetitionJoinPage } from './competition-join.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompetitionJoinPageRoutingModule,
  ],
  declarations: [CompetitionJoinPage]
})
export class CompetitionJoinPageModule {}
