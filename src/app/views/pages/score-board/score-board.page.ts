import { Component, OnInit, ViewChild  } from '@angular/core';

import { PopoverController } from '@ionic/angular';

import { ScoreComponent } from "./score/score.component";

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.page.html',
  styleUrls: ['./score-board.page.scss'],
})
export class ScoreBoardPage implements OnInit {

  constructor(
    public popoverController: PopoverController
  ) { }

  ngOnInit() {
  }

  async onShowScore(ev: any) {
    const popover = await this.popoverController.create({
      component: ScoreComponent,
      event: ev,
    });
    return await popover.present();
  }
}
