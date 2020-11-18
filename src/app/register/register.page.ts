import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { UserService } from '../user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  firstname: string = "";
  lastname: string = "";
  email: string = "";
  password: string = "";
  cpassword: string = "";

  constructor(private nacCtrl: NavController, public afAuth: AngularFireAuth, public afstore: AngularFirestore, public user:UserService, public alertController: AlertController) { }

  ngOnInit() {
  }

  async register() {
   try{
      const { firstname, lastname, email, password, cpassword} = this
      if(password !== cpassword){      
        throw new Error('Passwords Do Not Match');
      } 
      if(firstname.length==0){
        throw new Error('Please Enter First Name');
      }
      if(lastname.length==0){
        throw new Error('Please Enter Last Name');
      }
      const res = await this.afAuth.createUserWithEmailAndPassword(email, password)
      this.afstore.doc(`users/${res.user.uid}`).set({
        email,
        firstname,
        lastname,
        password,
        isRetailer: false,
        cart: [],
        orders: [],
      })

      this.user.setUser({
        email,
        uid: res.user.uid
    })
    this.nacCtrl.navigateRoot(["./tabs"])
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
}