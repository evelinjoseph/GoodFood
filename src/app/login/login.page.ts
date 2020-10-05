import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { TabsPage } from '../tabs/tabs.page';
import { UserService } from '../user.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = ""
  password: string = "" 

  constructor(private nacCtrl: NavController, public afAuth: AngularFireAuth, public user: UserService) { }

  ngOnInit() {
  }

  async login() {

    const { email, password } = this
    try{
      

      await this.afAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(function() {
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
        // ...
        // New sign-in will be persisted with session persistence.
        return firebase.auth().signInWithEmailAndPassword(email, password);
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      });
      
      if(firebase.auth().currentUser){
        this.user.setUser({
          email: firebase.auth().currentUser.email,
          uid:firebase.auth().currentUser.uid
        })

      }
      
      console.log(firebase.auth().currentUser)
      this.nacCtrl.navigateRoot(['./tabs'])
      
    }
    catch(err){
      console.dir(err)
      if(err.code == "auth/user-not-found"){

        console.log("User Not Found")

      }
    }    
  }

  

  
    

  

}
