import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
})
export class PasswordResetPage implements OnInit {

emailAddress = "";

  constructor(public afAuth: AngularFireAuth, public nacCtrl: NavController, public alertController: AlertController) { }

  ngOnInit() {
  }

  resetPassword(){
    let self = this;    
    this.afAuth.sendPasswordResetEmail(this.emailAddress).then(function() {
      self.presentAlert("Password Reset Link Sent to Email");
      self.nacCtrl.navigateRoot(['./login'])
      // Email sent.
    }).catch(function(error) {
      self.presentAlert(error);
    });
  }

  public async presentAlert(message) : Promise<boolean> {
    let resolveFunction: (confirm: boolean) => void;
    const promise = new Promise<boolean>(resolve => {
      resolveFunction = resolve;
    });
    
    const alert = await this.alertController.create({
      header: 'Password Reset',
      message: message,
      buttons: [
        {
          text: 'OK',
            handler: () => resolveFunction(true)
        }
      ]
    });
  
    await alert.present();
    return promise;
  }  

}
