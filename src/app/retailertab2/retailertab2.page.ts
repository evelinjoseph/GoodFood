import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-retailertab2',
  templateUrl: './retailertab2.page.html',
  styleUrls: ['./retailertab2.page.scss'],
})
export class Retailertab2Page implements OnInit {

  public listings: any[];
  retailerUID;
  retailerItems;
  items;
  retailerType;
  location;

  constructor(public afAuth: AngularFireAuth, private afstore: AngularFirestore, private changeDetection: ChangeDetectorRef, public alertController: AlertController) {}

  async ngOnInit() {
    var self = this
    firebase.auth().onAuthStateChanged(async function(user) {        
      if (user) {        
        self.retailerUID = user.uid
        self.items = self.afstore.doc(`users/${self.retailerUID}`);
        self.retailerItems = self.items.valueChanges(); 

        var userRef = (await self.afstore.collection("users").doc(self.retailerUID).get().toPromise()).data()
        self.retailerType = userRef.retailerType;
        self.location = userRef.location;
        self.changeDetection.detectChanges();   
      }
      else{
        console.log('no user signed in');
      }
    });
  }

  ionViewWillEnter(){
    if(this.items){
      this.retailerItems = this.items.valueChanges();
      this.changeDetection.detectChanges(); 
    }    
  }
 
}