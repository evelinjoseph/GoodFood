import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoadingController, AlertController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';
import { ListingsService} from '../listings.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  public listings: any[];
  public listingsBackup: any[];
  deleteListings: any[];
  searchText = "Search By Retailer";
  searchBy = "Retailer";
  dateNow;
  url; 
  retailerUID;
  ID;
  isReady: Boolean = false;
  retailers: any[];


  constructor(public listingService: ListingsService, private afStorage: AngularFireStorage, private activatedRoute: ActivatedRoute, private nacCtrl: NavController, public afAuth: AngularFireAuth, private firestore: AngularFirestore, private changeDetection: ChangeDetectorRef, public loadingController: LoadingController, public alertController: AlertController) {}


  async ngOnInit() {
    this.presentLoading(); 
    this.listings = await this.initializeItems();
    
  }

async initializeItems(): Promise<any> {
  let listing: any[] = await this.listingService.initializeItems();  
  this.retailers = this.listingService.getUsers().filter(currentListing => {
    if (currentListing.isRetailer) {
      return (currentListing.isRetailer);
    }
  });  
  var self = this;
  listing.forEach(async function(element, ind, array) { 
  var retailerURL;
    var storageRef =  await self.afStorage.ref(`images/${element.retailerUID}`).getDownloadURL().toPromise().then(function(url) {
      retailerURL = url;
   }).catch(function(error) {
     retailerURL = 'assets/images/default.png';
   });
    const data = {
      deleteDate: element.deleteDate,
      description: element.description,
      listingID: element.listingID,
      location: element.location,
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

  search(event){
    this.listings = this.listingsBackup;
    const searchTerm = event.srcElement.value;

    if(!searchTerm){
      this.changeDetection.detectChanges(); 
      return;
    }

    if(this.searchBy == "Retailer"){
      let matchingRetailers = [];
      matchingRetailers = this.retailers.filter(retailer => {
        return (retailer.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      });     
      
        this.listings = this.listings.filter(currentListing => {
          if(matchingRetailers.length>0 && currentListing.retailerUID){
            for(var i = 0; i<matchingRetailers.length; i++){
              if(currentListing.retailerUID.toLowerCase().indexOf(matchingRetailers[i].retailerUID.toLowerCase())> -1){
                return true;
              }
            } 
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

    else if(this.searchBy == "Retailer Type"){
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
          label: 'Retailer',
          value: 'Retailer',
          checked: true 
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Retailer Type',
          value: 'Retailer Type'
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
      duration: 700,
      translucent: true,
      cssClass: 'transparent',
      backdropDismiss: false
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    this.isReady = true; 
    this.changeDetection.detectChanges(); 
  }

  async doRefresh(event) {
    // this.isReady = false;
    // this.presentLoading();
    this.listings = await this.initializeItems();    
    event.target.complete();
  }

  
    getRetailer(uid) : String{  
      if(this.retailers){
       const user = this.retailers.find(element => element.retailerUID == uid);    
       return user.name;
 
      }
    }

  

}