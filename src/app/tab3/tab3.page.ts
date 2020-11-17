import { ChangeDetectorRef, Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { UserService } from '../user.service'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  userUID;
  userItems;
  items;
  cart = [];
  listing;
  name;
  description;
  location;
  price;
  quantity;
  retailerType;
  retailerUID;

  constructor(public afstore: AngularFirestore, private changeDetection: ChangeDetectorRef, private user: UserService, public alertCtrl: AlertController) {}

  ngOnInit() {    
    var self = this
    firebase.auth().onAuthStateChanged(function(user) {        
      if (user) {        
        self.userUID = user.uid
        self.items = self.afstore.doc(`users/${self.userUID}`);
        self.userItems = self.items.valueChanges(); 
        self.changeDetection.detectChanges();   
        //self.getListingID();    
      }
    });
     
  }

  ionViewWillEnter(){
    if(this.items){
      this.userItems = this.items.valueChanges();
      this.changeDetection.detectChanges(); 
    }    
  }

  getListingID(){
    var self = this;

    console.log(this.userItems)

    this.afstore.doc(`users/${this.userUID}`).get().toPromise().then(function(querySnapshot) {
      var cart1 = querySnapshot.get("cart");
      cart1.forEach(element => {
        self.cart.push(element.listingID);              
        });           
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
  }

  async getItems(cartItem){
    
      var listingRef = (await this.afstore.collection("listings").doc(cartItem).get().toPromise()).data()
        this.listing = listingRef;   
        this.name = listingRef.name;
        this.description = listingRef.description;
        this.location = listingRef.location;
        this.price = listingRef.price;
        this.quantity = listingRef.quantity;
        this.retailerType = listingRef.retailerType;
        this.retailerUID = listingRef.retailerUID; 
  }

  async delete(item){

    const confirm = await this.presentAlertDelete();
    if (confirm) {
    this.afstore.doc(`users/${this.userUID}`).update({
      cart: firebase.firestore.FieldValue.arrayRemove({
        name: item.name,
        description: item.description,
        listingID: item.listingID
      })
    })
  }
  }

  async presentAlertDelete() : Promise<boolean> {
    let resolveFunction: (confirm: boolean) => void;
    const promise = new Promise<boolean>(resolve => {
      resolveFunction = resolve;
    });
    const alert = await this.alertCtrl.create({
      header: 'Confirm Delete',
      message: 'Are you sure you want to delete this item from your cart?',
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

  async checkOut(cart){
    const confirm = await this.presentAlertCheck();
    if (confirm) {
      for(var item of cart){       
        this.afstore.doc(`users/${this.userUID}`).update({
          checkedOut: firebase.firestore.FieldValue.arrayUnion({
            name: item.name,
            description: item.description,
            listingID: item.listingID,
            isCurrent: true,
            date: new Date()
          })
        })

        this.afstore.doc(`users/${this.userUID}`).update({
          cart: firebase.firestore.FieldValue.arrayRemove({
            name: item.name,
            description: item.description,
            listingID: item.listingID
          })
        })      
  
      }
      console.log("checkout complete!")
    }   

  }

  public async presentAlertCheck() : Promise<boolean> {
    let resolveFunction: (confirm: boolean) => void;
    const promise = new Promise<boolean>(resolve => {
      resolveFunction = resolve;
    });
    const alert = await this.alertCtrl.create({
      header: 'Confirm Check-Out',
      message: 'Are you sure you want to check out these items from your cart?',
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
