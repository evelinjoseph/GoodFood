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
  users: any[];
  subscription;

  constructor( private firestore: AngularFirestore) { 
  }

  async initializeItems() {
   
    this.subscription = await this.firestore.collection('users').valueChanges().subscribe(data=>{
      this.users = data;      
    });

    let listing: any[] = await this.firestore.collection('listings').valueChanges().pipe(first()).toPromise();
    let retailerListings: any[];

    retailerListings = this.users.filter(currentListing => {
      if (currentListing.isRetailer) {
        return (currentListing.isRetailer);
      }
    });  

    this.dateNow = new Date(Date.now());
    this.deleteListings = listing.filter(currentListing => {
      if (currentListing.deleteDate && this.dateNow.toUTCString()) {
        return (currentListing.deleteDate.toDate().getTime() <= this.dateNow.getTime());
      }
    });  

    await this.deleteItems();
  
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
      

      retailerListings = this.users.filter(currentListing => {
        if (currentListing.isRetailer) {
          return (currentListing.isRetailer);
        }
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

  async deleteItems(){
    let userListings = this.users
    console.log(userListings);
    this.deleteListings.forEach(element => {
      userListings.forEach(user => {
        if(user.isRetailer == false){ 
        let userCart = user.cart
        console.log(userCart)
        let deleteUserListing: any[] = userCart.filter(currentListing => {
        if (currentListing.listingID && element.listingID) {
          return (currentListing.listingID.toLowerCase().indexOf(element.listingID.toLowerCase()) > -1);
          }
        }); 

        console.log(deleteUserListing);
        deleteUserListing.forEach(listing => {
          this.firestore.doc(`users/${user.userUID}`).update({
            cart: firebase.firestore.FieldValue.arrayRemove({
              name: listing.name,
              description: listing.description,
              listingID: listing.listingID,
              price: listing.price,
              quantity:listing.quantity,
              quantityCart: listing.quantityCart,
              retailerUID: listing.retailerUID,
              totalPrice: listing.totalPrice
            })
          }).catch(function(error) {
            console.error("Error deleting from cart ", error);
        });
        })       
      }
    })         
    
    });
  }

  async deleteListing(listing){
    let userListings = this.users
    userListings.forEach(user => {
      if(user.isRetailer == false){ 
      let userCart = user.cart
      let deleteUserListing: any[] = userCart.filter(currentListing => {
      if (currentListing.listingID && listing.listingID) {
        return (currentListing.listingID.toLowerCase().indexOf(listing.listingID.toLowerCase()) > -1);
        }
      }); 

      deleteUserListing.forEach(listing => {
        this.firestore.doc(`users/${user.userUID}`).update({
          cart: firebase.firestore.FieldValue.arrayRemove({
            name: listing.name,
            description: listing.description,
            listingID: listing.listingID,
            price: listing.price,
            quantity:listing.quantity,
            quantityCart: listing.quantityCart,
            retailerUID: listing.retailerUID,
            totalPrice: listing.totalPrice
          })
        }).catch(function(error) {
          console.error("Error deleting from cart ", error);
      });
      })       
    }
  });         
  
  }

}
