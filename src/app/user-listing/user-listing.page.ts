import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.page.html',
  styleUrls: ['./user-listing.page.scss'],
})
export class UserListingPage implements OnInit {
  ID;
  name;
  description;
  location;
  price;
  quantity;
  retailerType;
  retailerUID;
  retailer;

  constructor(private activatedRoute: ActivatedRoute, private firestore: AngularFirestore) { }

  async ngOnInit() {
    try{
    this.ID = this.activatedRoute.snapshot.queryParamMap.get('id'); 
    var self = this;
    //collection.doc.id  ??to add to db when we get to it

    var listingRef = (await this.firestore.collection("listings").doc(this.ID).get().toPromise()).data()      
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
  }
  catch(error){
    console.log(error.message)
  }
}
}

