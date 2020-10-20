import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { TabsPage } from '../tabs/tabs.page';
import { UserService } from '../user.service';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.page.html',
  styleUrls: ['./initial-page.page.scss'],
})
export class InitialPagePage implements OnInit {

  constructor(public nacCtrl: NavController, public afAuth: AngularFireAuth, public afstore: AngularFirestore, public user: UserService) {
    afAuth.onAuthStateChanged(async function(users) {
      if (users) {
         var docRef = (await afstore.collection("users").doc(users.uid).get().toPromise()).data()
         console.log(docRef)
         if(docRef.isRetailer == false){
            nacCtrl.navigateRoot(['./tabs'])
          }
          else{
            nacCtrl.navigateRoot(['./retailertabs'])
          }
      } else {
        
      }
    });
   }

  ngOnInit() {
  }

}
