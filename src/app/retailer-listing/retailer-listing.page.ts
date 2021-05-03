import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { ListingsService } from '../listings.service';

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
  time;
  pDate;
  buttonText: string = "Edit";
  isRead: boolean = true;  

  constructor(public listingService: ListingsService,private nacCtrl: NavController, private activatedRoute: ActivatedRoute, public afAuth: AngularFireAuth, private afstore: AngularFirestore, private afStorage: AngularFireStorage, private changeDetection: ChangeDetectorRef,public loadingController: LoadingController, public alertController: AlertController) { }

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
        self.pickupTime = userRef.pickupTime.toDate().toLocaleString();

        self.listing = self.listing.filter(currentListing => {
          if (currentListing.listingID && self.listingID) {
            return (currentListing.listingID.toLowerCase().indexOf(self.listingID.toLowerCase()) > -1);
          }
        });

        if(self.listing[0].isListed){
          var listingRef = (await self.afstore.collection("listings").doc(self.listingID).get().toPromise()).data()
          self.pickupTime = listingRef.deleteDate.toDate().toLocaleString();
        }
        
        
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
    this.pickupDate = new Date(this.pickupTime);

    const data = {
      description: listing.description,
      listingID: listing.listingID,
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
        listingID: listing.listingID,
        isListed: true      
      })
    })

    this.afstore.doc(`users/${this.retailerUID}`).update({
      listings: firebase.firestore.FieldValue.arrayRemove({
        quantity: listing.quantity,
        price: listing.price,
        description: listing.description,
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
          
          description: listing.description,
          listingID: listing.listingID,
          price: listing.price,
          quantity:listing.quantity,
          isListed: false
        })
      })

    this.afstore.doc(`users/${this.retailerUID}`).update({
      listings: firebase.firestore.FieldValue.arrayRemove({
        
        description: listing.description,
        listingID: listing.listingID,
        price: listing.price,
        quantity:listing.quantity,
        isListed: listing.isListed
      })
    })

    await this.listingService.deleteListing(listing)
    this.afstore.collection('listings').doc(listing.listingID).delete();
    this.nacCtrl.navigateRoot(["./retailertabs/retailertabs/retailertab2"]);
    this.changeDetection.detectChanges(); 
   
    
    
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

  setPickupTime(pickupTime){  

    let date = new Date(pickupTime);  
    this.time =  date.toString();
    console.log(this.time)
  }

  setPickupDate(pickupDate){
    console.log(pickupDate)
    this.pDate = (new Date(pickupDate)).toDateString();  
    console.log(this.pDate)
  }

  edit(listing)
  {
    if(this.buttonText == "Edit"){
      this.isRead = false;
      this.buttonText = "Save";
     }
    else{
      this.isRead = true;
      this.buttonText = "Edit";  
      //set pickuptime
      //change deleteDate in firestore      
      this.time = new Date(this.time);
      this.pDate = new Date(this.pDate);
      let newDate = new Date(this.pDate.getFullYear(), this.pDate.getMonth(), this.pDate.getDate(),this.time.getHours(), this.time.getMinutes(), this.time.getSeconds(), this.time.getMilliseconds())
      console.log(newDate)

      const data = {
        description: listing.description,
        listingID: listing.listingID,
        price: listing.price,
        quantity: listing.quantity,
        retailerType: this.retailerType,
        location: this.location,
        retailerUID: this.retailerUID,
        deleteDate: new Date(this.pDate.getFullYear(), this.pDate.getMonth(), this.pDate.getDate(), this.time.getHours(), this.time.getMinutes(), this.time.getSeconds(), this.time.getMilliseconds())
      }
  
      this.afstore.collection("listings").doc(this.listingID).set(data);
      this.pickupTime = newDate.toLocaleString();
      

      
    }   
  }
 

}
