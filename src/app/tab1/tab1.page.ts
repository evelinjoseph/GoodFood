import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../user.service';
import { AlertController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';

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
  searchText = "Search By Food";
  searchBy = "Food";

  constructor(private nacCtrl: NavController, public afAuth: AngularFireAuth, public user: UserService, private firestore: AngularFirestore, private changeDetection: ChangeDetectorRef, public alertController: AlertController) {}

  async logout() {
    this.afAuth.signOut();
    this.nacCtrl.navigateRoot(['./login'])

  }

  async ngOnInit() {
    this.listings = await this.initializeItems();
    this.retailers = await this.initializeRetailers();
  
  }

  async initializeItems(): Promise<any> {
    const listing = await this.firestore.collection('listings')
    .valueChanges().pipe(first()).toPromise();
    this.listingsBackup = listing;
    return listing;
  }

  async initializeRetailers(): Promise<any> {
    const retailers = await this.firestore.collection('users')
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
}
