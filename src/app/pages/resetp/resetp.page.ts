import { AuthenticationService } from "src/app/shared/authentication-service";
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'
import { Router } from '@angular/router';


@Component({
  selector: 'app-resetp',
  templateUrl: './resetp.page.html',
  styleUrls: ['./resetp.page.scss'],
})
export class ResetpPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public alertCtrl: AlertController,
    private router: Router
  ) { }

  present(errorMessage) {
    this.alertCtrl.create({
      header: 'Reset Password Error',
      message: errorMessage,
      buttons: ['OK']
    }).then(res => {
      res.present();
    });
  }

  resetp(email) {
    this.authService.PasswordRecover(email.value)
      .then((res) => {
        this.router.navigateByUrl('/login', { replaceUrl: true })
      }).catch((error) => {
        this.present(error.message)
      })
  }

  ngOnInit() {
  }

}
