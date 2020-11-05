import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { UserService } from '../user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { firestore } from 'firebase/app';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-retailertab3',
  templateUrl: './retailertab3.page.html',
  styleUrls: ['./retailertab3.page.scss'],
})
export class Retailertab3Page implements OnInit {
  ID;
  quantity;
  retailerType;
  retailerUID;
  retailer;
  email;

  constructor(private activatedRoute: ActivatedRoute, private firestore: AngularFirestore, public user: UserService, private afStorage: AngularFireStorage, public afAuth: AngularFireAuth) { }

  async ngOnInit() {
    try{
    var self = this;

    var u = firebase.auth().currentUser;

    //collection.doc.id  ??to add to db when we get to it

    var listingRef = (await this.firestore.collection("users").doc(u.uid).get().toPromise()).data()
        this.retailerType = listingRef.retailerType;
        this.retailerUID = listingRef.retailerUID;    
        this.email = listingRef.email;

    var retailerRef = this.firestore.doc(`users/${this.retailerUID}`);    
      retailerRef.get().toPromise().then(function(doc) {        
          if (doc.exists) {               
               self.retailer = doc.data().name;
          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
          }
      }).catch(function(error) {
          console.log("Error getting document:", error);
      });
      
  }
  catch(error){
    console.log(error.message)
  }
}
}