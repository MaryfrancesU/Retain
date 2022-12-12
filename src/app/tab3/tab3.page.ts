import { User } from "../shared/user";
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular'
import { ModalController } from '@ionic/angular';
import { ChanguPage } from '../pages/changu/changu.page';
import { ChangpPage } from '../pages/changp/changp.page';

import { AuthenticationService } from "../shared/authentication-service";
import { AngularFireAuth } from "@angular/fire/auth";
import firebase from "firebase";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  constructor(
    public modalCtrl: ModalController,
    private alertCtrl: AlertController,
    public ngFireAuth: AngularFireAuth,
    public authService: AuthenticationService
  ) { }

  user = firebase.auth().currentUser;
  uEmail = this.user.email;
  uDisp = this.user.displayName;
  
  async changuModal() {
    const modal = await this.modalCtrl.create({
      component: ChanguPage,
      cssClass: 'my-custom-class'
    });

    return await modal.present();
  }

  async changpModal() {
    const modal = await this.modalCtrl.create({
      component: ChangpPage,
      cssClass: 'my-custom-class'
    });

    return await modal.present();
  }

  rateUs(){
    this.alertCtrl.create({
      header: 'Rate Our App',
      message: 'Of course, this app doesn\'t actually exist on any app store, so it can\'t be rated.',
      buttons: ['OK']
    }).then(res => {
      res.present();
    });
  }

  ngOnInit() {
  }


}
