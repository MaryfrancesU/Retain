import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular'

import firebase from "firebase";
import { AngularFireAuth } from "@angular/fire/auth";
import { AuthenticationService } from "src/app/shared/authentication-service";


@Component({
  selector: 'app-changp',
  templateUrl: './changp.page.html',
  styleUrls: ['./changp.page.scss'],
})
export class ChangpPage implements OnInit {

  constructor(
    public alertCtrl: AlertController,
    private modalCtrl: ModalController,
    public ngFireAuth: AngularFireAuth,
    public authService: AuthenticationService
  ) { }

  user = firebase.auth().currentUser;

  dismissModal(){
    this.modalCtrl.dismiss();
  }

  present(errorMessage) {
    this.alertCtrl.create({
      header: 'Password Change Error',
      message: errorMessage,
      buttons: ['OK']
    }).then(res => {
      res.present();
    });
  }

  updatePass(pass, confirm) {
    if (pass.value == confirm.value){
      this.authService.changePassword(pass.value)
        .then(() => {
          this.dismissModal();
          window.location.reload();
      }).catch((error) => {
        this.present(error.message);
      })
    }
    else{
      this.present("Passwords must match");
    }
  }

  ngOnInit() {
  }

}
