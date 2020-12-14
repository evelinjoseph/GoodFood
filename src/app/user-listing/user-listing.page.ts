import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { UserService } from '../user.service';
import { firestore } from 'firebase/app';
import * as firebase from 'firebase/app';
import { AlertController, LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.page.html',
  styleUrls: ['./user-listing.page.scss'],
})
export class UserListingPage implements OnInit {
  ID;
  listing;
  name;
  description;
  location;
  price;
  quantity;
  retailerType;
  retailerUID;
  retailer;
  url;
  //disabled: Boolean = false; 
  isReady: Boolean = false;

  constructor(private nacCtrl: NavController, public alertController: AlertController, private activatedRoute: ActivatedRoute, private firestore: AngularFirestore, public user: UserService, private afStorage: AngularFireStorage, private changeDetection: ChangeDetectorRef, public loadingController: LoadingController) { }

  async ngOnInit() {
    this.presentLoading();
    try{
    this.ID = this.activatedRoute.snapshot.queryParamMap.get('id'); 
    var self = this;
    //collection.doc.id  ??to add to db when we get to it

    var listingRef = (await this.firestore.collection("listings").doc(this.ID).get().toPromise()).data()
        this.listing = listingRef;   
        this.name = listingRef.name;
        this.description = listingRef.description;
        this.location = listingRef.location;
        this.price = listingRef.price;
        this.quantity = listingRef.quantity;
        this.retailerType = listingRef.retailerType;
        this.retailerUID = listingRef.retailerUID; 
        
    var storageRef =  this.afStorage.ref(`images/${this.retailerUID}.jpg`).getDownloadURL().toPromise().then(function(url) {        
          self.url = url;
       }).catch(function(error) {
         self.url = 'assets/images/default.png';
       });

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

  async cart(listing){
    
    //this.disabled = true; 

    this.firestore.doc(`users/${firebase.auth().currentUser.uid}`).update({
      cart: firestore.FieldValue.arrayUnion({
        name: listing.name,
        description: listing.description,
        listingID: listing.listingID,
        retailerUID: listing.retailerUID,
        quantity: listing.quantity,
        quantityCart: 1
      })
    })

    const confirm = await this.presentAlert()

    this.nacCtrl.navigateRoot(['tabs/tabs/tab3']);

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

  public async presentAlert() : Promise<boolean> {
    let resolveFunction: (confirm: boolean) => void;
    const promise = new Promise<boolean>(resolve => {
      resolveFunction = resolve;
    });
    
    const alert = await this.alertController.create({
      header: 'Successfully Added to Cart!',
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

