import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular'

import firebase from "firebase";
import { AngularFireAuth } from "@angular/fire/auth";
import { AuthenticationService } from "src/app/shared/authentication-service";


@Component({
  selector: 'app-changu',
  templateUrl: './changu.page.html',
  styleUrls: ['./changu.page.scss'],
})

export class ChanguPage implements OnInit {

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
      header: 'Email Change Error',
      message: errorMessage,
      buttons: ['OK']
    }).then(res => {
      res.present();
    });
  }

  updateEmail(email, confirm) {
    if (email.value == confirm.value){
      this.authService.changeEmail(email.value)
        .then(() => {
          this.dismissModal();
          window.location.reload();
      }).catch((error) => {
        this.present(error.message);
      })
    }
    else{
      this.present("Emails must match");
    }
  }

  ngOnInit() {
  }

} 
