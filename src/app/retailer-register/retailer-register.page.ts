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

    const { name, email, password, cpassword} = this
    if(password !== cpassword){
      alert("Passwords don't match")
      return console.error("Passwords don't match")
    }

    try{
      const res = await this.afAuth.createUserWithEmailAndPassword(email, password)

      this.afstore.doc(`retailers/${res.user.uid}`).set({
        email,
        name,
        password,
        isVerified: false
      })

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
           
    console.log(res)
    this.nacCtrl.navigateRoot(["./tabs"])

  }catch(error){
    console.dir(error)
    alert(error.message);
  }
}
}
