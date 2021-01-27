import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-retailer-listing',
  templateUrl: './retailer-listing.page.html',
  styleUrls: ['./retailer-listing.page.scss'],
})
export class RetailerListingPage implements OnInit {

  listingID;
  listing: any[];  
  location;
  retailerUID;
  retailer;
  retailerType;
  url;
  isReady: Boolean = false;
  pickupTime;
  date;
  pickupDate: Date;

  // TODO: add the option to remove the listing that is currently published from the user view without deleting it for the retailer

  constructor(private nacCtrl: NavController, private activatedRoute: ActivatedRoute, public afAuth: AngularFireAuth, private afstore: AngularFirestore, private afStorage: AngularFireStorage, private changeDetection: ChangeDetectorRef,public loadingController: LoadingController, public alertController: AlertController) { }

  ngOnInit() {
    this.presentLoading();
    this.listingID = this.activatedRoute.snapshot.queryParamMap.get('id'); 
    var self = this
    this.afAuth.onAuthStateChanged(async function(user) {        
      if (user) {        
        self.retailerUID = user.uid
        var userRef = (await self.afstore.collection("users").doc(self.retailerUID).get().toPromise()).data()
        self.retailer = userRef.name;
        self.location = userRef.location;
        self.retailerType = userRef.retailerType;        
        self.listing = userRef.listings;        
        self.pickupTime = userRef.pickupTime; 

        self.listing = self.listing.filter(currentListing => {
          if (currentListing.listingID && self.listingID) {
            return (currentListing.listingID.toLowerCase().indexOf(self.listingID.toLowerCase()) > -1);
          }
        });
        
        var storageRef =  self.afStorage.ref(`images/${self.retailerUID}`).getDownloadURL().toPromise().then(function(url) {        
          self.url = url;
       }).catch(function(error) {
         self.url = 'assets/images/default.png';
       });

       self.changeDetection.detectChanges(); 
      }
      else{
        console.log('no user signed in');
      }
    });    
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      duration: 900,
      translucent: true,
      cssClass: 'transparent',
      backdropDismiss: false
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    this.isReady = true;
    this.changeDetection.detectChanges(); 
  }

  publish(listing) {
    
    this.date = new Date();
    this.pickupDate = new Date(this.pickupTime.toDate());

    const data = {
      description: listing.description,
      listingID: listing.listingID,
      name: listing.name,
      price: listing.price,
      quantity: listing.quantity,
      retailerType: this.retailerType,
      location: this.location,
      retailerUID: this.retailerUID,
      deleteDate: new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate(), this.pickupDate.getHours(), this.pickupDate.getMinutes(), this.pickupDate.getSeconds(), this.pickupDate.getMilliseconds())
    }

    this.afstore.collection("listings").doc(this.listingID).set(data);
    

    this.afstore.doc(`users/${this.retailerUID}`).update({
      listings: firebase.firestore.FieldValue.arrayUnion({
        quantity: listing.quantity,
        price: listing.price,
        description: listing.description,
        name: listing.name,
        listingID: listing.listingID,
        isListed: true      
      })
    })

    this.afstore.doc(`users/${this.retailerUID}`).update({
      listings: firebase.firestore.FieldValue.arrayRemove({
        quantity: listing.quantity,
        price: listing.price,
        description: listing.description,
        name: listing.name,
        listingID: listing.listingID,
        isListed: false      
      })
    })
    this.changeDetection.detectChanges(); 
    this.presentAlert();
    this.nacCtrl.navigateRoot(["./retailertabs/retailertabs/retailertab2"]);
    this.changeDetection.detectChanges(); 
  }

  public async presentAlert() : Promise<boolean> {
    let resolveFunction: (confirm: boolean) => void;
    const promise = new Promise<boolean>(resolve => {
      resolveFunction = resolve;
    });
    
    const alert = await this.alertController.create({
      header: 'Listing Successfully Published!',
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
    this.nacCtrl.navigateRoot(["./retailertabs/retailertabs/retailertab2"]);
    this.changeDetection.detectChanges(); 
   
    // TODO: may need to delete from carts?
  }
  }

  async presentAlertUnpublish() : Promise<boolean> {
    let resolveFunction: (confirm: boolean) => void;
    const promise = new Promise<boolean>(resolve => {
      resolveFunction = resolve;
    });
    const alert = await this.alertController.create({
      header: 'Confirm Unpublish',
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
