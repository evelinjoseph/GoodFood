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
  date: Date;
  quantityCart = 1;

  constructor(public afstore: AngularFirestore, private changeDetection: ChangeDetectorRef, private user: UserService, public alertCtrl: AlertController) {}

  ngOnInit() {    
    var self = this
    firebase.auth().onAuthStateChanged(function(user) {        
      if (user) {        
        self.userUID = user.uid
        self.items = self.afstore.doc(`users/${self.userUID}`);
        self.userItems = self.items.valueChanges(); 
        self.changeDetection.detectChanges();   
        self.getCart();    
      }
    });

    
  }

  ionViewWillEnter(){
    if(this.items){
      this.userItems = this.items.valueChanges();
      this.getCart();
      this.changeDetection.detectChanges(); 
    }    
  }

  getCart(){
    this.cart = []
    var self = this;
    this.afstore.doc(`users/${this.userUID}`).get().toPromise().then(function(querySnapshot) {
      var cart1 = querySnapshot.get("cart");
      cart1.forEach(element => {
        self.cart.push(element);              
        });
                  
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    }); //this needs to be done in the initialization
     console.log(this.cart)
  }

  getListingID(item){
    
       

    
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
        listingID: item.listingID,
        retailerUID: item.retailerUID,
        quantity: item.quantity,
        quantityCart: item.quantityCart
      })
    })
    this.cart = this.cart.filter(currentListing => {
      if (currentListing.listingID && item.listingID) {
        console.log(!(currentListing.listingID.toLowerCase() === item.listingID.toLowerCase()))
        return (!(currentListing.listingID.toLowerCase() === item.listingID.toLowerCase()));
      }
    });  
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
    // const increment = firebase.firestore.FieldValue.increment(1)
    // //  this.afstore.doc(`users/${this.userUID}`).update({ 
    // //    cart: firebase.firestore.FieldValue.delete}
    // // ) 

    var self = this;
    var quantityValue = item.quantityCart + 1;     

    this.afstore.doc(`users/${this.userUID}`).update({
      cart: firebase.firestore.FieldValue.arrayUnion({
        name: item.name,
        description: item.description,
        listingID: item.listingID,
        retailerUID: item.retailerUID,
        quantity: item.quantity,
        quantityCart: quantityValue
      })
    })

    this.afstore.doc(`users/${this.userUID}`).update({
      cart: firebase.firestore.FieldValue.arrayRemove({
        name: item.name,
        description: item.description,
        listingID: item.listingID,
        retailerUID: item.retailerUID,
        quantity: item.quantity,
        quantityCart: item.quantityCart
      })
    })
    item.quantityCart++;
    console.log("updated")

  }

  dec(item){
    item.quantityCart--;
  }

  async checkOut(cart){
    console.log(cart);
    const confirm = await this.presentAlertCheck();
    if (confirm) {
      for(var item of cart){ 
        this.date = new Date();     
        this.afstore.doc(`users/${this.userUID}`).update({
          orders: firebase.firestore.FieldValue.arrayUnion({
            name: item.name,
            description: item.description,
            listingID: item.listingID,
            retailerUID: item.retailerUID,
            isCurrent: true,
            date: this.date
          })
        })

        this.afstore.doc(`users/${this.userUID}`).update({
          cart: firebase.firestore.FieldValue.arrayRemove({
            name: item.name,
            description: item.description,
            listingID: item.listingID,
            retailerUID: item.retailerUID,
            quantity: item.quantity,
            quantityCart: item.quantityCart
          })
        })  
        
        this.afstore.doc(`users/${item.retailerUID}`).update({
          orders: firebase.firestore.FieldValue.arrayUnion({
            name: item.name,
            description: item.description,
            listingID: item.listingID,
            retailerUID: item.retailerUID,
            userUID: this.userUID,
            isCurrent: true,
            date: this.date
          })
        })

        const decrement = firebase.firestore.FieldValue.increment(-item.quantityCart);

        this.afstore.doc(`listings/${item.listingID}`).update({
          quantity: decrement
        })
        // TODO: make sure there is enough quantity to check-out   
        
        this.cart = []

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
