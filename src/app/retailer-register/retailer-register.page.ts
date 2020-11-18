import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController } from '@ionic/angular';
import { UserService } from '../user.service';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-retailer-register',
  templateUrl: './retailer-register.page.html',
  styleUrls: ['./retailer-register.page.scss'],
})
export class RetailerRegisterPage implements OnInit {
  name: string = "";
  email: string = "";
  password: string = "";
  cpassword: string = "";

  constructor(private nacCtrl: NavController, public afAuth: AngularFireAuth, public afstore: AngularFirestore, public user:UserService, public alertController: AlertController, public emailComposer: EmailComposer) { }

  ngOnInit() {
  }

  async register() {
    try{
      const { name, email, password, cpassword} = this
      if(password !== cpassword){      
        throw new Error('Passwords Do Not Match');
      } 
      if(name.length==0){
        throw new Error('Please Enter a Name');
      }     
        const res = await this.afAuth.createUserWithEmailAndPassword(email, password)
        this.afstore.doc(`users/${res.user.uid}`).set({
          email,
          name,
          password,
          isVerified: false,
          isRetailer: true,
          retailerUID: res.user.uid,
          orders: []
        })

        this.user.setUser({
          email,
          uid: res.user.uid
        })

        const emailConfirmation = await this.presentAlertCheck();

        if (emailConfirmation) {

        let newEmail = {
          to: 'goodfoodinnova@gmail.com',
          subject: 'New Retailer Verification',
          body: 'Hello, please verify retailer: ' + name + ' with email: ' + email + ' and uid: ' + res.user.uid + '. Thank you!',
          isHtml: true,
        }

        this.emailComposer.isAvailable().then((available: boolean) => {
          if(available) {
            alert("isAvailable");
          }
        });
        this.emailComposer.open(newEmail);
      }
      this.nacCtrl.navigateRoot(["./retailertabs"])   
  }catch(error){
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

public async presentAlertCheck() : Promise<boolean> {
  let resolveFunction: (confirm: boolean) => void;
  const promise = new Promise<boolean>(resolve => {
    resolveFunction = resolve;
  });
  
  const alert = await this.alertController.create({
    header: 'Confirm Navigation',
    message: 'You are about to be navigated out of this application. Click OK to continue.',
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
