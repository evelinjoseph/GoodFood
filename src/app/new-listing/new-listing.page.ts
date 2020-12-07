
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { UserService } from '../user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { firestore } from 'firebase/app';
import * as firebase from 'firebase/app';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Guid } from "ez-guid";

@Component({
  selector: 'app-new-listing',
  templateUrl: './new-listing.page.html',
  styleUrls: ['./new-listing.page.scss'],
})
export class NewListingPage implements OnInit {

  retailerType;
  location;
  retailerUID;
  name: String = "";
  description: String = "";
  price: Number = 0;
  quantity: Number = 0;  
  listingID;
  date;
  
  constructor(public afstore: AngularFirestore, public alertController: AlertController, private activatedRoute: ActivatedRoute, private firestore: AngularFirestore, public user: UserService, private afStorage: AngularFireStorage, public afAuth: AngularFireAuth, public loadingController: LoadingController, private changeDetection: ChangeDetectorRef) { }
  
  ngOnInit() {
      var self = this
      firebase.auth().onAuthStateChanged(async function(user) {        
        if (user) {        
          self.retailerUID = user.uid;
          var userRef = (await self.afstore.collection("users").doc(self.retailerUID).get().toPromise()).data()
          self.retailerType = userRef.retailerType;
          self.location = userRef.location;  
          self.changeDetection.detectChanges(); 
        }

      });
    };          


save()
  {    
    try{
      
      if(this.name.length==0){
        throw new Error('Please Enter a Name');
      }  
      if(this.description.length==0){
        throw new Error('Please Enter a Description');
      } 
      if(this.price<=0){
        throw new Error('Please Enter Price');
      } 
      if(this.quantity<=0){
        throw new Error('Please Enter Quantity');
      }

      //TODO: make error checks better
      
    this.listingID = Guid.create().toShortString();
    console.log(this.listingID);
    this.afstore.doc(`users/${this.retailerUID}`).update({
      listings: firebase.firestore.FieldValue.arrayUnion({
        quantity: this.quantity,
        price: this.price,
        description: this.description,
        name: this.name,
        listingID: this.listingID      
      })
    })

    this.presentAlert("Listing Added Successfully");
    
  }
  catch(error){
    this.presentError(error.message);
  }
    
  }

  publish()
  {    
    try{
      
      if(this.name.length==0){
        throw new Error('Please Enter a Name');
      }  
      if(this.description.length==0){
        throw new Error('Please Enter a Description');
      } 
      if(this.price==0){
        throw new Error('Please Enter Price');
      } 
      if(this.quantity==0){
        throw new Error('Please Enter Quantity');
      }

      //TODO: make error checks better
      this.listingID = Guid.create().toShortString();
      this.date = new Date();
      
      const data = {
        description: this.description,
        listingID: this.listingID,
        name: this.name,
        price: this.price,
        quantity: this.quantity,
        retailerType: this.retailerType,
        location: this.location,
        retailerUID: this.retailerUID,
        dateAdded: this.date
      }     
  
      this.afstore.collection("listings").doc(this.listingID).set(data)
    
    
      this.afstore.doc(`users/${this.retailerUID}`).update({
        listings: firebase.firestore.FieldValue.arrayUnion({
          quantity: this.quantity,
          price: this.price,
          description: this.description,
          name: this.name,
          listingID: this.listingID      
        })
      })

    this.presentAlert("Listing Added and Published Successfully");
    
  }
  catch(error){
    this.presentError(error.message);
  }
    
  }

  public async presentAlert(message) : Promise<boolean> {
      let resolveFunction: (confirm: boolean) => void;
      const promise = new Promise<boolean>(resolve => {
        resolveFunction = resolve;
      });
      
      const alert = await this.alertController.create({
        header: message,
        buttons: [
          {
            text: 'OK',
              handler: () => resolveFunction(true)
          }
        ]
      });
  
      await alert.present();
      return promise;
    }

    public async presentError(errorMessage) : Promise<boolean> {
      let resolveFunction: (confirm: boolean) => void;
      const promise = new Promise<boolean>(resolve => {
        resolveFunction = resolve;
      });
      
      const alert = await this.alertController.create({
        header: 'New Listing Error',
        message: errorMessage,
        buttons: [
          {
            text: 'OK',
              handler: () => resolveFunction(true)
          }
        ]
      });
    
      await alert.present();
      return promise;
    }
}
