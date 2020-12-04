import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { CompetitionJoinPage } from "./competition-join/competition-join.page";

@Component({
  selector: 'app-competition',
  templateUrl: './competition.page.html',
  styleUrls: ['./competition.page.scss'],
})
export class CompetitionPage implements OnInit {

  level = 0;
  nextPage = CompetitionJoinPage;

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  async onCompetitionJoin() {
    const modal = await this.modalController.create({
      component: CompetitionJoinPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
