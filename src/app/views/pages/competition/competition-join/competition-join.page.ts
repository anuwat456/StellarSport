import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AlertController, ModalController } from '@ionic/angular';
import { Camera } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-competition-join',
  templateUrl: './competition-join.page.html',
  styleUrls: ['./competition-join.page.scss'],
})
export class CompetitionJoinPage implements OnInit {

  constructor( 
    private alertController: AlertController,
    private activatedRoute: ActivatedRoute,
    private router: Router, 
    private camera: Camera,
    private modalController: ModalController
    ) { }

  ngOnInit() {
  }

  async onCompetitionJoin() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'ยืนยันข้อมูล',
      message: 'แบดมินตันชาย 18 ปี',
      buttons: [
        {
          text: 'แก้ไข',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'ยืนยัน',
          handler: () => {
            console.log('Confirm Okay');
            this.router.navigate(['../../'], { relativeTo: this.activatedRoute });
          }
        }
      ]
    });

    await alert.present();
  }

  dimissModal(): void {
    this.modalController.dismiss().then().catch();
  }

}
