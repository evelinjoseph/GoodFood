import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx'
import { LoadingController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.page.html',
  styleUrls: ['./paypal.page.scss'],
})
export class PaypalPage {
  paymentAmount = 0;
  currency: string = 'USD';
  currencyIcon: string = '$';
  cart: any[];
  userUID: string;
  date;

  constructor(private nacCtrl: NavController, public afstore: AngularFirestore, private payPal: PayPal, public loadingController: LoadingController, public changeDetection: ChangeDetectorRef) { }
  
  ngOnInit() { 
    var self = this
    this.cart = []
    firebase.auth().onAuthStateChanged(function(user) {        
      if (user) {        
        self.userUID = user.uid
        self.changeDetection.detectChanges();   
        self.getCart();    
      }
    });    
  }
  
  ionViewWillEnter(){
    this.cart = []
    this.getCart();
    this.changeDetection.detectChanges();       
  }

  getCart(){    
    var self = this;
    this.afstore.doc(`users/${this.userUID}`).get().toPromise().then(function(querySnapshot) {
      self.cart = []
      self.paymentAmount = 0;
      var cart1 = querySnapshot.get("cart");
      self.changeDetection.detectChanges(); 
      cart1.forEach(element => {
        self.cart.push(element);
        self.paymentAmount += element.price * element.quantityCart
        console.log(self.paymentAmount)             
        });            
    })
    .catch(function(error) {
        console.log("Error getting documents");
    }); 
    this.changeDetection.detectChanges();     
  }

  payWithPayPal() {
    console.log("Pay ?")
    this.payPal.init({
      PayPalEnvironmentProduction: 'AZdLLjUn69oERT3rIneIeL6pYWh7iFidUWTrDRfpPDh7F9zcETzH9lYNMbRbnWoRwCX506xQJX0sDoQa',
      PayPalEnvironmentSandbox: 'AZdLLjUn69oERT3rIneIeL6pYWh7iFidUWTrDRfpPDh7F9zcETzH9lYNMbRbnWoRwCX506xQJX0sDoQa'
    }).then(() => {
      // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
      this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
        // Only needed if you get an "Internal Service Error" after PayPal login!
//payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
})).then(() => {
  console.log(this.paymentAmount.toString())
  let payment = new PayPalPayment(this.paymentAmount.toString(), this.currency, 'Description', 'sale');
  this.payPal.renderSinglePaymentUI(payment).then((res) => {
    console.log(res);
    // Successfully paid

    // Example sandbox response
    //
    // {
    //   "client": {
    //     "environment": "sandbox",
    //     "product_name": "PayPal iOS SDK",
    //     "paypal_sdk_version": "2.16.0",
    //     "platform": "iOS"
    //   },
    //   "response_type": "payment",
    //   "response": {
    //     "id": "PAY-1AB23456CD789012EF34GHIJ",
    //     "state": "approved",
    //     "create_time": "2016-10-03T13:33:33Z",
    //     "intent": "sale"
    //   }
    // }

    for(var item of this.cart){ 
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
          quantityCart: item.quantityCart,
          price: item.price
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

    }
    this.nacCtrl.navigateRoot(['/tabs/tabs/tab4']);
    this.cart = []
    console.log("checkout complete!")


  }, () => {
    // Error or render dialog closed without being successful
  });
}, () => {
        // Error in configuration
      });
    }, () => {
      // Error in initialization, maybe PayPal isn't supported or something else
    });
  }
}