import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { first } from 'rxjs/operators';

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

  constructor(public afAuth: AngularFireAuth, private afstore: AngularFirestore, private changeDetection: ChangeDetectorRef, public alertCtrl: AlertController) {}

  async ngOnInit() {
    var self = this
    this.afAuth.onAuthStateChanged(async function(user) {        
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

  async ionViewWillEnter(){
    if(this.items){
      this.retailerItems = this.items.valueChanges();
      this.changeDetection.detectChanges();
    }    
  }
  
  async delete(listing){

    const confirm = await this.presentAlertDelete();
    if (confirm) {
    this.afstore.doc(`users/${this.retailerUID}`).update({
      listings: firebase.firestore.FieldValue.arrayRemove({
        name: listing.name,
        description: listing.description,
        listingID: listing.listingID,
        price: listing.price,
        quantity:listing.quantity,
        isListed: listing.isListed
      })
    })
    
    this.afstore.collection('listings').doc(listing.listingID).delete();

    // TODO: may need to delete from carts?
  }
  }

  async unpublish(listing){

    const confirm = await this.presentAlertUnpublish();
    if (confirm) {

      this.afstore.doc(`users/${this.retailerUID}`).update({
        listings: firebase.firestore.FieldValue.arrayUnion({
          name: listing.name,
          description: listing.description,
          listingID: listing.listingID,
          price: listing.price,
          quantity:listing.quantity,
          isListed: false
        })
      })

    this.afstore.doc(`users/${this.retailerUID}`).update({
      listings: firebase.firestore.FieldValue.arrayRemove({
        name: listing.name,
        description: listing.description,
        listingID: listing.listingID,
        price: listing.price,
        quantity:listing.quantity,
        isListed: listing.isListed
      })
    })
    
    this.afstore.collection('listings').doc(listing.listingID).delete();

    // TODO: may need to delete from carts?
  }
  }

  async presentAlertDelete() : Promise<boolean> {
    let resolveFunction: (confirm: boolean) => void;
    const promise = new Promise<boolean>(resolve => {
      resolveFunction = resolve;
    });
    const alert = await this.alertCtrl.create({
      header: 'Confirm Delete',
      message: 'Are you sure you want to delete this listing?',
      buttons: [
        {
          text: 'Yes',
            handler: () => resolveFunction(true)
        }, {
          text: 'No',
          handler: () => resolveFunction(false)
        }
      ]
    });

    await alert.present();
    return promise;
  }

  async presentAlertUnpublish() : Promise<boolean> {
    let resolveFunction: (confirm: boolean) => void;
    const promise = new Promise<boolean>(resolve => {
      resolveFunction = resolve;
    });
    const alert = await this.alertCtrl.create({
      header: 'Confirm Delete',
      message: 'Are you sure you want to unpublish this listing?',
      buttons: [
        {
          text: 'Yes',
            handler: () => resolveFunction(true)
        }, {
          text: 'No',
          handler: () => resolveFunction(false)
        }
      ]
    });

    await alert.present();
    return promise;
  }
 
}