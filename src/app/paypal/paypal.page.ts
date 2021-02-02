import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx'
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { first } from 'rxjs/operators';

declare var Email: any;

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.page.html',
  styleUrls: ['./paypal.page.scss'],
})
export class PaypalPage implements OnInit {
  paymentAmount = 0;
  currency: string = 'USD';
  cart = [];
  userUID;
  date;
  listing;
  currentRetailer;
  retailers: any[];

  constructor(public afAuth: AngularFireAuth, private nacCtrl: NavController, public alertController: AlertController, public afstore: AngularFirestore, private payPal: PayPal, public loadingController: LoadingController, public changeDetection: ChangeDetectorRef){
   
  
  }

  ngOnInit() {
    let self = this
    this.cart = []
    this.paymentAmount = 0;
    
    this.afAuth.onAuthStateChanged(async function(user) {        
      if (user) {        
        self.userUID = user.uid        
        await self.getCart();  
        self.changeDetection.detectChanges();
        self.retailers = await self.afstore.collection('users').valueChanges().pipe(first()).toPromise();
        console.log(self.retailers);

        try{
          for(var item of self.cart){ 
            self.listing = await self.afstore.collection('listings').valueChanges().pipe(first()).toPromise();
            let thisListing: any[] = self.listing.filter(currentListing => {
              if (currentListing.listingID && item.listingID) {
                return (currentListing.listingID.toLowerCase().indexOf(item.listingID.toLowerCase()) > -1);
              }
            });
            thisListing.forEach(element => {
              if(item.quantityCart>element.quantity){
                throw new Error("Sorry, unfortunately there is not enough quantity to complete the " + element.name + " order. Please edit the quantity to be less than or equal to " + element.quantity +".");
                
              }           
            });
          } 
          
        }
        catch(error){
          console.log(error);
          self.presentAlert(error);
          self.nacCtrl.navigateRoot(['/tabs/tabs/tab3']);
        } 

      }
    });

    setTimeout(() => {
        // Render the PayPal button into #paypal-button-container
        <any>window['paypal'].Buttons({

          // Set up the transaction
          createOrder: function (data, actions) {
           
            console.log(self.paymentAmount.toFixed(2));

            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: self.paymentAmount.toFixed(2)
                }
              }]
            });
          },
  
          // Finalize the transaction
          onApprove: function (data, actions) {
            return actions.order.capture()
              .then(function (details) {
                // Show a success message to the buyer
                console.log(self.cart)
                for(var item of self.cart){ 
                  self.date = new Date();     
                  self.afstore.doc(`users/${self.userUID}`).update({
                    orders: firebase.firestore.FieldValue.arrayUnion({
                      name: item.name,
                      description: item.description,
                      listingID: item.listingID,
                      retailerUID: item.retailerUID,
                      isCurrent: true,
                      date: self.date
                    })
                  })
            
                  self.afstore.doc(`users/${self.userUID}`).update({
                    cart: firebase.firestore.FieldValue.arrayRemove({
                      name: item.name,
                      description: item.description,
                      listingID: item.listingID,
                      retailerUID: item.retailerUID,
                      quantity: item.quantity,
                      quantityCart: item.quantityCart,
                      price: item.price,
                      totalPrice: item.totalPrice
                    })
                  })  
                  
                  self.afstore.doc(`users/${item.retailerUID}`).update({
                    orders: firebase.firestore.FieldValue.arrayUnion({
                      name: item.name,
                      description: item.description,
                      listingID: item.listingID,
                      retailerUID: item.retailerUID,
                      userUID: self.userUID,
                      isCurrent: true,
                      date: self.date
                    })
                  })

                  //add Email
                  self.currentRetailer = self.retailers.filter(currentListing => {
                    if (currentListing.retailerUID && item.retailerUID) {
                      return (currentListing.retailerUID.toLowerCase().indexOf(item.retailerUID.toLowerCase()) > -1);
                    }
                  });
                  console.log(self.currentRetailer);
                  console.log(`${self.currentRetailer[0].email}`);
                  Email.send({
                    SecureToken : "c11c8a65-d4f9-45b7-8c2a-61f9c48e0ea7",
                    To : `${self.currentRetailer[0].email}`,
                    From : 'goodfoodinnova@gmail.com',
                    Subject : "New Good Food Order",
                    Body : 'Hello ' + self.currentRetailer[0].name + ', you have an order for your listing: ' + item.name + '. Please check the Good Food application for more details. Thank you!'
                  }).then(
                    message => console.log(message)
                  );    

            
                  if(item.quantityCart>0){
                    const decrement = firebase.firestore.FieldValue.increment(-item.quantityCart);
                    console.log(self.listing)
                    let thisListing: any[] = self.listing.filter(currentListing => {
                    if (currentListing.listingID && item.listingID) {
                      return (currentListing.listingID.toLowerCase().indexOf(item.listingID.toLowerCase()) > -1);
                    }
                    });

                    console.log(thisListing);
            
                    thisListing.forEach(element => {
                      if(item.quantityCart==element.quantity){
                        console.log(self.currentRetailer[0].listings)
                        var quantityArr = self.currentRetailer[0].listings.filter(currentListing => {
                          if (currentListing.listingID && item.listingID) {
                            return (currentListing.listingID.toLowerCase().indexOf(item.listingID.toLowerCase()) > -1);
                          }
                        }); 

                        self.afstore.collection('archive').doc(item.listingID).set({
                          name: item.name,
                          description: item.description,
                          listingID: item.listingID,
                          price: item.price,
                          type: "Listing",
                          deleteTime: new Date()
                        })
                        .then(function() {
                            console.log("Document successfully written!");
                        })
                        .catch(function(error) {
                            console.error("Error writing document: ", error);
                        });
                        
                        self.afstore.collection('listings').doc(item.listingID).delete();
                        //change isListed
                        self.afstore.doc(`users/${item.retailerUID}`).update({
                          listings: firebase.firestore.FieldValue.arrayUnion({
                            name: item.name,
                            description: item.description,
                            listingID: item.listingID,
                            price: item.price,
                            quantity: quantityArr[0].quantity,
                            isListed: false
                          })
                        })

                        self.afstore.doc(`users/${item.retailerUID}`).update({
                          listings: firebase.firestore.FieldValue.arrayRemove({
                            name: item.name,
                            description: item.description,
                            listingID: item.listingID,
                            price: item.price,
                            quantity: quantityArr[0].quantity,
                            isListed: true
                          })
                        })
                       
                      }
                      else{           
                      self.afstore.doc(`listings/${item.listingID}`).update({
                        quantity: decrement
                      })
                    }
                    });
                  }
                }
                self.nacCtrl.navigateRoot(['/tabs/tabs/tab4']);
                self.cart = []
                console.log("checkout complete!")
                alert('Transaction completed by ' + details.payer.name.given_name + '!');

              })
              .catch(err => {
                console.log(err);
                self.presentAlert(err);
                self.nacCtrl.navigateRoot(['/tabs/tabs/tab3']);
              })
          }
        }).render('#paypal-button-container');
      }, 100)  
        
  }
  
  ionViewWillEnter(){
    this.cart = []
    this.paymentAmount = 0;
    let self = this;
    this.afAuth.onAuthStateChanged(async function(user) {        
      if (user) {        
        self.userUID = user.uid        
        await self.getCart();  
        self.changeDetection.detectChanges();
      }
    });    
  }

  async getCart(){    
    var self = this;
    await this.afstore.doc(`users/${this.userUID}`).get().toPromise().then(function(querySnapshot) {
      self.cart = []
      self.paymentAmount = 0;
      var cart1 = querySnapshot.get("cart");
      self.changeDetection.detectChanges(); 
      cart1.forEach(element => {
        self.cart.push(element);
        self.paymentAmount += element.totalPrice          
        });
                    
    })
    .catch(function(error) {
        console.log("Error getting documents");
    }); 
    
    console.log(this.cart)
    this.changeDetection.detectChanges();     
  }

  async payWithPayPal() {
    try{
      for(var item of this.cart){ 
        this.listing = await this.afstore.collection('listings').valueChanges().pipe(first()).toPromise();
        let thisListing: any[] = this.listing.filter(currentListing => {
          if (currentListing.listingID && item.listingID) {
            return (currentListing.listingID.toLowerCase().indexOf(item.listingID.toLowerCase()) > -1);
          }
        });
        thisListing.forEach(element => {
          if(item.quantityCart>element.quantity){
            throw new Error("Sorry, unfortunately there is not enough quantity to complete the " + element.name + " order. Please edit the quantity to be less than or equal to " + element.quantity +".");
          }           
        });
    } 
      
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
          price: item.price,
          totalPrice: item.totalPrice
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

      if(item.quantityCart>0){
        const decrement = firebase.firestore.FieldValue.increment(-item.quantityCart);
        let thisListing: any[] = this.listing.filter(currentListing => {
        if (currentListing.listingID && item.listingID) {
          return (currentListing.listingID.toLowerCase().indexOf(item.listingID.toLowerCase()) > -1);
        }
        });

        thisListing.forEach(element => {
          if(item.quantityCart==element.quantity){
            console.log(element);
            console.log(item);
            


            this.afstore.collection('listings').doc(item.listingID).delete()
            //TODO: add to archive
          }
          else{           
          this.afstore.doc(`listings/${item.listingID}`).update({
            quantity: decrement
          })
        }
        });
      }
    }
    this.nacCtrl.navigateRoot(['/tabs/tabs/tab4']);
    this.cart = []
    console.log("checkout complete!")


  }, (error) => {
    // Error or render dialog closed without being successful
    console.log(error);
   
  });
  }, (error) => {
        // Error in configuration
        console.log(error)
        
      });
    }, (error) => {
      // Error in initialization, maybe PayPal isn't supported or something else
      console.log(error)
    });

  }
  catch(error){
    console.log(error);
    this.presentAlert(error);
    this.nacCtrl.navigateRoot(['/tabs/tabs/tab3']);
  }  

  }
  
  public async presentAlert(errorMessage) : Promise<boolean> {
    let resolveFunction: (confirm: boolean) => void;
    const promise = new Promise<boolean>(resolve => {
      resolveFunction = resolve;
    });
    
    const alert = await this.alertController.create({
      header: 'Order Error',
      message: errorMessage,
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