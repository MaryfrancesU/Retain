import { AuthenticationService } from "src/app/shared/authentication-service";
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public alertCtrl: AlertController,
    private router: Router
  ) { }

  present(errorMessage) {
    this.alertCtrl.create({
      header: 'Signup Errror',
      message: errorMessage,
      buttons: ['OK']
    }).then(res => {
      res.present();
    });
  }

  signUp(email, password){
    this.authService.RegisterUser(email.value, password.value)      
    .then((res) => {
      this.router.navigateByUrl('/tabs', { replaceUrl: true });
    }).catch((error) => {
      this.present(error.message)
    })
  }

  ngOnInit() {
  }

}
