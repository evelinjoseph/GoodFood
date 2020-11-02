import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController, NavController } from '@ionic/angular';
import { TabsPage } from '../tabs/tabs.page';
import { UserService } from '../user.service';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = ""
  password: string = ""

  constructor(private nacCtrl: NavController, public afAuth: AngularFireAuth, public user: UserService, public afstore: AngularFirestore,public alertController: AlertController) { }

  ngOnInit() {
  }

  async login() {
    try{ 
    const { email, password } = this        
    if(email.length==0){
      throw new Error('Please Enter Email Address');
    }  
    if(password.length==0){
      throw new Error('Please Enter Password');
    }
    var self = this;
      this.afAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(function() {
                // New sign-in will be persisted with local persistence.
        return firebase.auth().signInWithEmailAndPassword(email, password);
      })
      .catch(function(error) {
        self.presentAlert(error.message)
      });
      
      if(firebase.auth().currentUser){
        this.user.setUser({
          email: firebase.auth().currentUser.email,
          uid:firebase.auth().currentUser.uid
        })

       var docRef = (await this.afstore.collection("users").doc(firebase.auth().currentUser.uid).get().toPromise()).data()
        if(docRef.isRetailer == false){
          this.nacCtrl.navigateRoot(['./tabs'])
        }
        else{
          this.nacCtrl.navigateRoot(['./retailertabs'])
        }
      }      
    }
    catch(err){
      console.log(err.message);
      this.presentAlert(err.message);
    }    
  }

  public async presentAlert(errorMessage) : Promise<boolean> {
    let resolveFunction: (confirm: boolean) => void;
    const promise = new Promise<boolean>(resolve => {
      resolveFunction = resolve;
    });
    
    const alert = await this.alertController.create({
      header: 'Login Error',
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
