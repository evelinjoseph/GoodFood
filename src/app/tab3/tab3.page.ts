import { ChangeDetectorRef, Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, NavController } from '@ionic/angular';
import * as firebase from 'firebase/app';

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

  constructor(private nacCtrl: NavController, public afstore: AngularFirestore, private changeDetection: ChangeDetectorRef, public alertCtrl: AlertController) {}

  ngOnInit() { 
    var self = this
    this.cart = []
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
    this.cart = []
    if(this.items){
      this.userItems = this.items.valueChanges();
      this.getCart();
      this.changeDetection.detectChanges(); 
    }    
  }

  getCart(){    
    var self = this;
    this.afstore.doc(`users/${this.userUID}`).get().toPromise().then(function(querySnapshot) {
      self.cart = []
      var cart1 = querySnapshot.get("cart");
      self.changeDetection.detectChanges(); 
      cart1.forEach(element => {
        self.cart.push(element);              
        });            
    })
    .catch(function(error) {
        console.log("Error getting documents");
    }); 
    this.changeDetection.detectChanges();     
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
        quantityCart: item.quantityCart,
        price: item.price
      })
    })
    this.cart = this.cart.filter(currentListing => {
      if (currentListing.listingID && item.listingID) {
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
    if(item.quantityCart + 1 <= item.quantity){

      var quantityValue = item.quantityCart + 1;     

      this.afstore.doc(`users/${this.userUID}`).update({
        cart: firebase.firestore.FieldValue.arrayUnion({
          name: item.name,
          description: item.description,
          listingID: item.listingID,
          retailerUID: item.retailerUID,
          quantity: item.quantity,
          quantityCart: quantityValue,
          price: item.price
        })
      })
  
      this.afstore.doc(`users/${this.userUID}`).update({
        cart: firebase.firestore.FieldValue.arrayRemove({
          name: item.name,
          description: item.description,
          listingID: item.listingID,
          retailerUID: item.retailerUID,
          quantity: item.quantity,
          quantityCart: item.quantityCart,
          price: item.price
        })
      })
      item.quantityCart++;
    }  
  }

  dec(item){    
    if(item.quantityCart - 1 > 0){
      var quantityValue = item.quantityCart - 1;   

      this.afstore.doc(`users/${this.userUID}`).update({
        cart: firebase.firestore.FieldValue.arrayUnion({
          name: item.name,
          description: item.description,
          listingID: item.listingID,
          retailerUID: item.retailerUID,
          quantity: item.quantity,
          quantityCart: quantityValue,
          price: item.price
        })
      })
  
      this.afstore.doc(`users/${this.userUID}`).update({
        cart: firebase.firestore.FieldValue.arrayRemove({
          name: item.name,
          description: item.description,
          listingID: item.listingID,
          retailerUID: item.retailerUID,
          quantity: item.quantity,
          quantityCart: item.quantityCart,
          price: item.price
        })
      })
      item.quantityCart--;
    }
  }

  async checkOut(cart){
    const confirm = await this.presentAlertCheck();

    if (confirm) {
      this.nacCtrl.navigateRoot(['./paypal']);

      // NEED TO WAIT FOR PAYPAL CONFIRMATION BEFORE UPDATING DB

      // for(var item of cart){ 
      //   this.date = new Date();     
      //   this.afstore.doc(`users/${this.userUID}`).update({
      //     orders: firebase.firestore.FieldValue.arrayUnion({
      //       name: item.name,
      //       description: item.description,
      //       listingID: item.listingID,
      //       retailerUID: item.retailerUID,
      //       isCurrent: true,
      //       date: this.date
      //     })
      //   })

      //   this.afstore.doc(`users/${this.userUID}`).update({
      //     cart: firebase.firestore.FieldValue.arrayRemove({
      //       name: item.name,
      //       description: item.description,
      //       listingID: item.listingID,
      //       retailerUID: item.retailerUID,
      //       quantity: item.quantity,
      //       quantityCart: item.quantityCart
      //     })
      //   })  
        
      //   this.afstore.doc(`users/${item.retailerUID}`).update({
      //     orders: firebase.firestore.FieldValue.arrayUnion({
      //       name: item.name,
      //       description: item.description,
      //       listingID: item.listingID,
      //       retailerUID: item.retailerUID,
      //       userUID: this.userUID,
      //       isCurrent: true,
      //       date: this.date
      //     })
      //   })

      //   const decrement = firebase.firestore.FieldValue.increment(-item.quantityCart);

      //   this.afstore.doc(`listings/${item.listingID}`).update({
      //     quantity: decrement
      //   })
      //   // TODO: make sure there is enough quantity to check-out         
      //   

      // }
      //this.cart = []
      // console.log("checkout complete!")

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
