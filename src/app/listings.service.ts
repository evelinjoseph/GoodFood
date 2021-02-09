import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  deleteListings: any[];
  dateNow;
  url; 
  retailerUID;

  constructor( private firestore: AngularFirestore) { 
  }

  async initializeItems() {
    let listing: any[] = await this.firestore.collection('listings').valueChanges().pipe(first()).toPromise();
    let retailerListings: any[] = await this.firestore.collection('users').valueChanges().pipe(first()).toPromise();
    this.dateNow = new Date(Date.now());
    this.deleteListings = listing.filter(currentListing => {
      if (currentListing.deleteDate && this.dateNow.toUTCString()) {
        return (currentListing.deleteDate.toDate().getTime() <= this.dateNow.getTime());
      }
    });  
  
    this.deleteListings.forEach(async element => {
      this.firestore.collection('listings').doc(element.listingID).delete()  
      
      //add to archive    
      this.firestore.collection('archive').doc(element.listingID).set({
        name: element.name,
        description: element.description,
        listingID: element.listingID,
        price: element.price,
        type: "Listing",
        deleteTime: new Date()
      })
      .then(function() {
          console.log("Document successfully written!");
      })
      .catch(function(error) {
          console.error("Error writing document: ", error);
      });
      
     
      let currentRetailerListing = retailerListings.filter(currentListing => {
        if (currentListing.retailerUID && element.retailerUID) {
          return (currentListing.retailerUID.toLowerCase().indexOf(element.retailerUID.toLowerCase()) > -1);
        }
      });    
      currentRetailerListing = currentRetailerListing[0].listings;
  
      currentRetailerListing = currentRetailerListing.filter(currentListing => {     
          if (currentListing.listingID && element.listingID) {       
            return (currentListing.listingID.toLowerCase().indexOf(element.listingID.toLowerCase()) > -1);
          }        
        });
      
      this.firestore.doc(`users/${element.retailerUID}`).update({
        listings: firebase.firestore.FieldValue.arrayUnion({
          name: element.name,
          description: element.description,
          listingID: element.listingID,
          price: element.price,
          quantity:currentRetailerListing[0].quantity,
          isListed: false
        })
      })
  
      this.firestore.doc(`users/${element.retailerUID}`).update({
        listings: firebase.firestore.FieldValue.arrayRemove({
          name: element.name,
          description: element.description,
          listingID: element.listingID,
          price: element.price,
          quantity:currentRetailerListing[0].quantity,
          isListed: true
        })
      })
    });
    
  
    listing = listing.filter(currentListing => {
      if (currentListing.deleteDate && this.dateNow.toUTCString()) {
        return (currentListing.deleteDate.toDate().getTime() > this.dateNow.getTime());
      }
    });    
    
    return listing;
  }
}
