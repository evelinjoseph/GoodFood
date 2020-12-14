import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx'
import { LoadingController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.page.html',
  styleUrls: ['./paypal.page.scss'],
})
export class PaypalPage {

  constructor(private payPal: PayPal, public loadingController: LoadingController, public changeDetection: ChangeDetectorRef) { }
  
  paymentAmount: string = '3.33';
  currency: string = 'USD';
  currencyIcon: string = '$';

  payWithPayPal() {
    console.log("Pay ?")
    this.payPal.init({
      PayPalEnvironmentProduction: 'AZdLLjUn69oERT3rIneIeL6pYWh7iFidUWTrDRfpPDh7F9zcETzH9lYNMbRbnWoRwCX506xQJX0sDoQa',
      PayPalEnvironmentSandbox: 'sb-0byah4075422@business.example.com'
    }).then(() => {
      // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
      this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
        // Only needed if you get an "Internal Service Error" after PayPal login!
//payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
})).then(() => {
  let payment = new PayPalPayment(this.paymentAmount, this.currency, 'Description', 'sale');
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