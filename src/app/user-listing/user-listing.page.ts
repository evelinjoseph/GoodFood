import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { UserService } from '../user.service';
import { firestore } from 'firebase/app';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.page.html',
  styleUrls: ['./user-listing.page.scss'],
})
export class UserListingPage implements OnInit {
  ID;
  listing;
  name;
  description;
  location;
  price;
  quantity;
  retailerType;
  retailerUID;
  retailer;

  constructor(private activatedRoute: ActivatedRoute, private firestore: AngularFirestore, public user: UserService, private afStorage: AngularFireStorage) { }

  async ngOnInit() {
    try{
    this.ID = this.activatedRoute.snapshot.queryParamMap.get('id'); 
    var self = this;
    //collection.doc.id  ??to add to db when we get to it

    var listingRef = (await this.firestore.collection("listings").doc(this.ID).get().toPromise()).data()
        this.listing = listingRef;   
        this.name = listingRef.name;
        this.description = listingRef.description;
        this.location = listingRef.location;
        this.price = listingRef.price;
        this.quantity = listingRef.quantity;
        this.retailerType = listingRef.retailerType;
        this.retailerUID = listingRef.retailerUID;    

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
    
    var storageRef =  this.afStorage.ref(`images/${this.retailerUID}.jpg`).getDownloadURL().toPromise().then(function(url) {        
    document.querySelector('img').src = url;
    }).catch(function(error) {
      console.log("Error:", error);
    });
      
  }
  catch(error){
    console.log(error.message)
  }
}

  cart(listing){
    this.firestore.doc(`users/${firebase.auth().currentUser.uid}`).update({
      cart: firestore.FieldValue.arrayUnion({
        name: listing.name,
        description: listing.description,
        listingID: listing.listingID
      })
    })
  }
}
