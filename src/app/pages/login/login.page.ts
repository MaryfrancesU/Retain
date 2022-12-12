import { AuthenticationService } from "src/app/shared/authentication-service";
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public alertCtrl: AlertController,
    private router: Router
  ) { }

  present(errorMessage) {
    this.alertCtrl.create({
      header: 'Login Error',
      message: errorMessage,
      buttons: ['OK']
    }).then(res => {
      res.present();
    });

    this.router.navigateByUrl('/tabs', { replaceUrl: true });
  }

  logIn(email, password) {
    this.authService.SignIn(email.value, password.value)
      .then((res) => {
        this.router.navigateByUrl('/tabs', { replaceUrl: true })
      }).catch((error) => {
        this.present(error.message);
      })
  }

  ngOnInit() {
  }

}
