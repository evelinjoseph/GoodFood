import { ChangeDetectorRef, Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { UserService } from '../user.service'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  userUID;
  userItems;
  items;
  cart = [];
  listing;
  name;
  description;
  location;
  price;
  quantity;
  retailerType;
  retailerUID;

  constructor(public afstore: AngularFirestore, private changeDetection: ChangeDetectorRef, private user: UserService) { 

       
  }

  async ngOnInit() {    
    var self = this    
    await (firebase.auth().onAuthStateChanged(function(user) {  
      
      if (user) {        
        self.userUID = user.uid
        self.items = self.afstore.doc(`users/${self.userUID}`);
        self.userItems = self.items.valueChanges(); 
        self.changeDetection.detectChanges();   
        self.getListingID();    
      }
      else{

        console.log('no user signed in');
      }
    }));  
           
  }

  getListingID(){
    var self = this;

    this.afstore.doc(`users/${this.userUID}`).get().toPromise().then(function(querySnapshot) {
      var cart1 = querySnapshot.get("cart");
      cart1.forEach(element => {
        self.cart.push(element.listingID);              
        });           
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
  }

  async getItems(cartItem){
    
      var listingRef = (await this.afstore.collection("listings").doc(cartItem).get().toPromise()).data()
        this.listing = listingRef;   
        this.name = listingRef.name;
        this.description = listingRef.description;
        this.location = listingRef.location;
        this.price = listingRef.price;
        this.quantity = listingRef.quantity;
        this.retailerType = listingRef.retailerType;
        this.retailerUID = listingRef.retailerUID; 
  }
}
