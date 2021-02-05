import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
})
export class PasswordResetPage implements OnInit {

emailAddress = "";

  constructor(public afAuth: AngularFireAuth, public nacCtrl: NavController) { }

  ngOnInit() {
  }

  resetPassword(){
    let self = this;
    
    this.afAuth.sendPasswordResetEmail(this.emailAddress).then(function() {
      alert("Password Reset Link Sent to Email");
      self.nacCtrl.navigateRoot(['./login'])
      // Email sent.
    }).catch(function(error) {
      alert(error);
    });
  }

}
