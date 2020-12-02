import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-retailer-listing',
  templateUrl: './retailer-listing.page.html',
  styleUrls: ['./retailer-listing.page.scss'],
})
export class RetailerListingPage implements OnInit {

  listingID;
  listing;  
  location;
  retailerUID;
  retailer;
  retailerType;
  url;
  isReady: Boolean = false;

  constructor(private activatedRoute: ActivatedRoute, public afAuth: AngularFireAuth, private afstore: AngularFirestore, private afStorage: AngularFireStorage, private changeDetection: ChangeDetectorRef,public loadingController: LoadingController, public alertController: AlertController) { }

  ngOnInit() {
    this.presentLoading();
    this.listingID = this.activatedRoute.snapshot.queryParamMap.get('id'); 
    var self = this
    firebase.auth().onAuthStateChanged(async function(user) {        
      if (user) {        
        self.retailerUID = user.uid
        var userRef = (await self.afstore.collection("users").doc(self.retailerUID).get().toPromise()).data()
        self.retailer = userRef.name;
        self.location = userRef.location;
        self.retailerType = userRef.retailerType;        
        self.listing = userRef.listings;

        self.listing = self.listing.filter(currentListing => {
          if (currentListing.listingID && self.listingID) {
            return (currentListing.listingID.toLowerCase().indexOf(self.listingID.toLowerCase()) > -1);
          }
        });
        
        var storageRef =  self.afStorage.ref(`images/${self.retailerUID}.jpg`).getDownloadURL().toPromise().then(function(url) {        
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

    const data = {
      description: listing.description,
      listingID: listing.listingID,
      name: listing.name,
      price: listing.price,
      quantity: listing.quantity,
      retailerType: this.retailerType,
      location: this.location,
      retailerUID: this.retailerUID
    }

    this.afstore.collection("listings").doc(this.listingID).set(data)

    this.presentAlert();


  }

  public async presentAlert() : Promise<boolean> {
    let resolveFunction: (confirm: boolean) => void;
    const promise = new Promise<boolean>(resolve => {
      resolveFunction = resolve;
    });
    
    const alert = await this.alertController.create({
      header: 'Listing successfully published!',
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
