import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
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
  userItems

  constructor(private nacCtrl: NavController, public afAuth: AngularFireAuth, public user: UserService, public afstore: AngularFirestore) { }

  ngOnInit() {
  }

  async login() {

    const { email, password } = this
    try{     

      this.afAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(function() {
                // New sign-in will be persisted with local persistence.
        return firebase.auth().signInWithEmailAndPassword(email, password);
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        alert(error.message);
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
      console.dir(err)
      if(err.code == "auth/user-not-found"){

        console.log("User Not Found")

      }
    }    
  }
}
