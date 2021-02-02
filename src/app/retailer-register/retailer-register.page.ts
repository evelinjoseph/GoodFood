import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController } from '@ionic/angular';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

declare var Email: any;


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
  location: string = "";
  retailerType: string = "";
  pickupTime; 

  constructor(private nacCtrl: NavController, public afAuth: AngularFireAuth, public afstore: AngularFirestore, public alertController: AlertController, public emailComposer: EmailComposer) { }

  ngOnInit() { 
  
  }

  async register() {
    try{
      const { name, email, password, cpassword, location, retailerType} = this
      if(password !== cpassword){      
        throw new Error('Passwords Do Not Match');
      } 
      if(name.length==0){
        throw new Error('Please Enter a Name');
      }  
      if(location.length==0){
        throw new Error('Please Enter an Address');
      } 
      if(retailerType.length==0){
        throw new Error('Please Enter Retailer Type (Restaurant, Food Truck, Cafe)');
      } 
      // TODO: add location and type checks   
        const res = await this.afAuth.createUserWithEmailAndPassword(email, password)
        this.afstore.doc(`users/${res.user.uid}`).set({
          email,
          name,
          password,
          isVerified: false,
          isRetailer: true,
          retailerUID: res.user.uid,
          location,
          retailerType,
          listings: [],
          orders: [],
          pickupTime: new Date(this.pickupTime)
          // TODO: add location, retailerType, picture, pick-up time
          // TODO: seperate address fields
          // TODO: make sure that 12 AM is not an option in pickuptime
        })
      
      //https://accounts.google.com/b/0/DisplayUnlockCaptcha

      Email.send({
        SecureToken : "c11c8a65-d4f9-45b7-8c2a-61f9c48e0ea7",
        To : 'goodfoodinnova@gmail.com',
        From : 'goodfoodinnova@gmail.com',
        Subject : "New Retailer Verification",
        Body : 'Hello, please verify retailer: ' + name + ' with email: ' + email + ' and uid: ' + res.user.uid + '. Thank you!'
      }).then(
        async message => { 
          if(message == "OK"){
            console.log(message)
            alert("A message has been sent to ensure your account is verified!")
          }
          else{
            console.log("SMTP.js Error: " + message)
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
                  console.log("isAvailable");
                }
              }).catch((error) => { console.log('EmailComposer Error: ' + error.message) });
              this.emailComposer.open(newEmail);
            }
          }         
        
      });    
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

  setPickupTime(pickupTime){
    let date = new Date(pickupTime);  
    this.pickupTime =  date.toString();
  }

}


