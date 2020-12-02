
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { UserService } from '../user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { firestore } from 'firebase/app';
import * as firebase from 'firebase/app';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-new-listing',
  templateUrl: './new-listing.page.html',
  styleUrls: ['./new-listing.page.scss'],
})
export class NewListingPage implements OnInit {
  userUID;
  retailerType;
  retailerUID;
  name;
  description;
  price;
  quantity;
  email;
  password;
  url;
  listingID;
  buttonText: string = "save";
  isRead: boolean = true;
  isReady: boolean = false;

  constructor(public afstore: AngularFirestore, public alertController: AlertController, private activatedRoute: ActivatedRoute, private firestore: AngularFirestore, public user: UserService, private afStorage: AngularFireStorage, public afAuth: AngularFireAuth, public loadingController: LoadingController, private changeDetection: ChangeDetectorRef) { }
  
  async ngOnInit() {
      var self = this
      firebase.auth().onAuthStateChanged(function(user) {        
        if (user) {        
          self.retailerUID = user.uid
          self.changeDetection.detectChanges();   
          //self.getListingID();    
          console.log(self.retailerUID)
        }

      });
    };          

isReadonly() {
  return this.isRead;
}

save()
  {
    
    const name = this
    try{
      
      this.afstore.collection(`listings`).add({
      quantity: this.quantity,
      price: this.price,
      description: this.description,
      name: this.name
    })

    this.afstore.doc(`users/${this.retailerUID}`).update({
      listings: firebase.firestore.FieldValue.arrayUnion({
        quantity: this.quantity,
        price: this.price,
        description: this.description,
        name: this.name  
      })
    })

    this.presentAlert();
    
  }
  catch(error){
    console.log(error.message)
  }
    
  }

  public async presentAlert() : Promise<boolean> {
      let resolveFunction: (confirm: boolean) => void;
      const promise = new Promise<boolean>(resolve => {
        resolveFunction = resolve;
      });
      
      const alert = await this.alertController.create({
        header: 'Listing Added Successfully',
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
