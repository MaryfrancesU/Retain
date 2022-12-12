import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular'
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router: Router, private alertCtrl: AlertController,) {}

  seeSet1(){
    this.router.navigateByUrl('/tabs/tab1/set1', { replaceUrl: true });
  }
  seeSet2(){
    this.router.navigateByUrl('/tabs/tab1/set2', { replaceUrl: true });
  }
  seeSet3(){
    this.router.navigateByUrl('/tabs/tab1/set3', { replaceUrl: true });
  }

  future(){
    this.alertCtrl.create({
      header: 'Alert',
      message: 'The page for this particular set doesn\'t exist yet.',
      buttons: ['OK']
    }).then(res => {
      res.present();
    });
  }

}
