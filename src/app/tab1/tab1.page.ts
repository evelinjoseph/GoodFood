import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoadingController, AlertController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  public listings: any[];
  public listingsBackup: any[];
  public retailers: any[];
  public retailersBackup: any[];
  deleteListings: any[];
  searchText = "Search By Food";
  searchBy = "Food";
  dateNow;
  url; 
  retailerUID;
  ID;
  isReady: Boolean = false;


  constructor(private afStorage: AngularFireStorage, private activatedRoute: ActivatedRoute, private nacCtrl: NavController, public afAuth: AngularFireAuth, private firestore: AngularFirestore, private changeDetection: ChangeDetectorRef, public loadingController: LoadingController, public alertController: AlertController) {}


  async ngOnInit() {
    this.presentLoading(); 
    this.listings = await this.initializeItems();
    this.retailers = await this.initializeRetailers(); //do we need this?
    
}


async initializeItems(): Promise<any> {
  let listing: any[] = await this.firestore.collection('listings').valueChanges().pipe(first()).toPromise();
  this.dateNow = new Date(Date.now());
  this.deleteListings = listing.filter(currentListing => {
    if (currentListing.deleteDate && this.dateNow.toUTCString()) {
      return (currentListing.deleteDate.toDate().getTime() <= this.dateNow.getTime());
    }
  });  

  this.deleteListings.forEach(async element => {
    this.firestore.collection('listings').doc(element.listingID).delete()    
    
    let retailerListings: any[] = await this.firestore.collection('users').valueChanges().pipe(first()).toPromise();
    retailerListings = retailerListings.filter(currentListing => {
      if (currentListing.retailerUID && element.retailerUID) {
        return (currentListing.retailerUID.toLowerCase().indexOf(element.retailerUID.toLowerCase()) > -1);
      }
    });    
    retailerListings = retailerListings[0].listings;

    retailerListings = retailerListings.filter(currentListing => {     
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
        quantity:retailerListings[0].quantity,
        isListed: false
      })
    })

    this.firestore.doc(`users/${element.retailerUID}`).update({
      listings: firebase.firestore.FieldValue.arrayRemove({
        name: element.name,
        description: element.description,
        listingID: element.listingID,
        price: element.price,
        quantity:retailerListings[0].quantity,
        isListed: true
      })
    })
  });
  

  listing = listing.filter(currentListing => {
    if (currentListing.deleteDate && this.dateNow.toUTCString()) {
      return (currentListing.deleteDate.toDate().getTime() > this.dateNow.getTime());
    }
  });    

  var self = this;
  listing.forEach(async function(element, ind, array) { 
  var retailerURL;
    var storageRef =  await self.afStorage.ref(`images/${element.retailerUID}.jpg`).getDownloadURL().toPromise().then(function(url) {
      retailerURL = url;
   }).catch(function(error) {
     retailerURL = 'assets/images/default.png';
   });
    const data = {
      deleteDate: element.deleteDate,
      description: element.description,
      listingID: element.listingID,
      location: element.location,
      name: element.name,
      price: element.price,
      quantity: element.quantity,
      retailerType: element.retailerType,     
      retailerUID: element.retailerUID,
      url: retailerURL      
    }   
    array[ind] = data 
  });

  this.listingsBackup = listing;  
  return listing;
}

  async initializeRetailers(): Promise<any> {
    var retailers = await this.firestore.collection('users')
    .valueChanges().pipe(first()).toPromise();
    this.retailersBackup = retailers;
    return retailers;
  }

  search(event){
    this.listings = this.listingsBackup;
    this.retailers = this.retailersBackup;
    const searchTerm = event.srcElement.value;

    if(!searchTerm){
      this.changeDetection.detectChanges(); 
      return;
    }

    if(this.searchBy == "Food"){
      this.listings = this.listings.filter(currentListing => {
        if (currentListing.name && searchTerm) {
          return (currentListing.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
        }
      });  
    }

    else if(this.searchBy == "Location"){
      this.listings = this.listings.filter(currentListing => {
        if (currentListing.location && searchTerm) {
          return (currentListing.location.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
        }
      });
    }

    else if(this.searchBy == "Retailer"){
      this.listings = this.listings.filter(currentListing => {
        if (currentListing.retailerType && searchTerm) {
          return (currentListing.retailerType.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
        }
      });
    }     
    this.changeDetection.detectChanges(); 
  }

  filterSearch(){
    this.presentAlertRadio();
    this.changeDetection.detectChanges(); 
  }

  async presentAlertRadio() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Search By:',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Food',
          value: 'Food',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Retailer',
          value: 'Retailer'
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'Location',
          value: 'Location'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'OK',
          handler: (data:string) => {
            this.searchText = "Search By " + data;
            this.searchBy = data;
            
          }
        }
      ]
    });

    await alert.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      duration: 600,
      translucent: true,
      cssClass: 'transparent',
      backdropDismiss: false
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    this.isReady = true; 
    this.changeDetection.detectChanges(); 
  }
}