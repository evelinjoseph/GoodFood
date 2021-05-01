import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController, NavController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { ListingsService} from '../listings.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
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
  date: Date;
  subtotal = 0;
  isReady = false;
  retailers: any[];

  constructor(public listingService: ListingsService, public afauth: AngularFireAuth, private nacCtrl: NavController, public afstore: AngularFirestore, private changeDetection: ChangeDetectorRef, public alertCtrl: AlertController) {}

  ngOnInit() { 
    var self = this
    this.cart = []
    this.subtotal = 0;
    this.afauth.onAuthStateChanged(async function(user) {        
      if (user) {        
        self.userUID = user.uid
        self.items = self.afstore.doc(`users/${self.userUID}`);
        self.userItems = self.items.valueChanges();
        await self.listingService.initializeItems();
        self.retailers = self.listingService.getUsers().filter(currentUser => {
          if (currentUser.isRetailer) {
            return (currentUser.isRetailer);
          }
        });   
        self.changeDetection.detectChanges(); 
        self.getCart();  

      }
    });    
  }

  ionViewWillEnter(){
    this.cart = []
    this.subtotal = 0;
    if(this.items){
      this.userItems = this.items.valueChanges();
      this.retailers = this.listingService.getUsers().filter(currentListing => {
        if (currentListing.isRetailer) {
          return (currentListing.isRetailer);
        }
      }); 
      this.getCart();
      this.changeDetection.detectChanges(); 

      
    }    
  }

  async getCart(){    
    var self = this;
    await this.afstore.doc(`users/${this.userUID}`).get().toPromise().then(function(querySnapshot) {
      self.cart = []
      self.subtotal = 0
      var cart1 = querySnapshot.get("cart");
      self.changeDetection.detectChanges(); 
      cart1.forEach(element => {
        self.cart.push(element);  
        self.subtotal += element.totalPrice          
        });            
    })
    .catch(function(error) {
        console.log("Error getting documents");
    }); 

    this.changeDetection.detectChanges();  
    this.isReady = true;   
  }

  async delete(item){

    const confirm = await this.presentAlertDelete();
    if (confirm) {
    this.afstore.doc(`users/${this.userUID}`).update({
      cart: firebase.firestore.FieldValue.arrayRemove({
        description: item.description,
        listingID: item.listingID,
        retailerUID: item.retailerUID,
        quantity: item.quantity,
        quantityCart: item.quantityCart,
        price: item.price,
        totalPrice: item.totalPrice
      })
    })
    this.cart = this.cart.filter(currentListing => {
      if (currentListing.listingID && item.listingID) {
        return (!(currentListing.listingID.toLowerCase() === item.listingID.toLowerCase()));
      }
    }); 
    this.subtotal -= item.totalPrice; 
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

  inc(item){   
    if(item.quantityCart + 1 <= item.quantity){

      var quantityValue = item.quantityCart + 1; 
      var priceValue = item.totalPrice + item.price;

      this.afstore.doc(`users/${this.userUID}`).update({
        cart: firebase.firestore.FieldValue.arrayUnion({
          description: item.description,
          listingID: item.listingID,
          retailerUID: item.retailerUID,
          quantity: item.quantity,
          quantityCart: quantityValue,
          price: item.price,
          totalPrice: priceValue
        })
      })
  
      this.afstore.doc(`users/${this.userUID}`).update({
        cart: firebase.firestore.FieldValue.arrayRemove({
          description: item.description,
          listingID: item.listingID,
          retailerUID: item.retailerUID,
          quantity: item.quantity,
          quantityCart: item.quantityCart,
          price: item.price,
          totalPrice: item.totalPrice
        })
      })
      item.quantityCart++;
      item.totalPrice += item.price;
      this.subtotal += item.price;
      
    }  
  }

  dec(item){    
    if(item.quantityCart - 1 > 0){
      var quantityValue = item.quantityCart - 1;  
      var priceValue = item.totalPrice - item.price;

      this.afstore.doc(`users/${this.userUID}`).update({
        cart: firebase.firestore.FieldValue.arrayUnion({
          description: item.description,
          listingID: item.listingID,
          retailerUID: item.retailerUID,
          quantity: item.quantity,
          quantityCart: quantityValue,
          totalPrice: priceValue,
          price: item.price
        })
      })
  
      this.afstore.doc(`users/${this.userUID}`).update({
        cart: firebase.firestore.FieldValue.arrayRemove({
          description: item.description,
          listingID: item.listingID,
          retailerUID: item.retailerUID,
          quantity: item.quantity,
          quantityCart: item.quantityCart,
          price: item.price,
          totalPrice: item.totalPrice
        })
      })
      item.quantityCart--;
      item.totalPrice -= item.price;
      this.subtotal -= item.price;
    }
  }


  getRetailer(uid) : String{  
    if(this.retailers){
     const user = this.retailers.find(element => element.retailerUID == uid);    
     return user.name;

    }
  }

  async checkOut(cart){
    const confirm = await this.presentAlertCheck();
    if (confirm) {
      this.nacCtrl.navigateRoot(['./paypal']);
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
          text: 'No',
          handler: () => resolveFunction(false)
        },
        {
          text: 'Yes',
            handler: () => resolveFunction(true)
        }
      ]
    });

    await alert.present();
    return promise;
  }
}
