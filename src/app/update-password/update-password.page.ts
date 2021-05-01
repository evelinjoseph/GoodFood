import { Component, OnInit, Query } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController, NavController } from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.page.html',
  styleUrls: ['./update-password.page.scss'],
})
export class UpdatePasswordPage implements OnInit {
  password: string = "";
  newpassword: string = "";
  cpassword: string = "";

  constructor(public alertController: AlertController, public afAuth: AngularFireAuth, private nacCtrl: NavController) { }

  ngOnInit() {
  }

  updatePassword(){
    
    try{
      let self = this;
      const {password, newpassword, cpassword} = this
      if(password.trim().length==0){
        throw new Error('Please Enter Current Password');
      } 
      if(newpassword.trim().length==0){
        throw new Error('Please Enter New Password');
      } 
      if(cpassword.trim().length==0){
        throw new Error('Please Confirm Password');
      } 
      if(newpassword !== cpassword){      
        throw new Error('Passwords Do Not Match');
      }
      self.afAuth.signInWithEmailAndPassword(firebase.auth().currentUser.email, password).then(function() {
        firebase.auth().currentUser.updatePassword(newpassword).then(function() {
              self.presentConfirmation("Password Updated");
              self.password = "";
              self.newpassword = "";
              self.cpassword = "";
              self.nacCtrl.navigateRoot(['/account'])

            }).catch(function(error) {
               self.presentAlert(error)
            });
          }).catch(function(error) {
            self.presentAlert(error)
         });
    }
    catch(error){
      this.presentAlert(error.message);
    }
  }

  public async presentAlert(errorMessage) : Promise<boolean> {
    let resolveFunction: (confirm: boolean) => void;
    const promise = new Promise<boolean>(resolve => {
      resolveFunction = resolve;
    });
    
    const alert = await this.alertController.create({
      header: 'Registration Error',
      message: errorMessage,
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

  public async presentConfirmation(message) : Promise<boolean> {
    let resolveFunction: (confirm: boolean) => void;
    const promise = new Promise<boolean>(resolve => {
      resolveFunction = resolve;
    });
    
    const alert = await this.alertController.create({
      header: 'Password Update Confirmation',
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

  ngOnDestroy() {
    this.password = "";
    this.newpassword = "";
    this.cpassword = "";
    console.log("Left update password")
  }

}
