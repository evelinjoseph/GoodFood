import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-retailertab1',
  templateUrl: './retailertab1.page.html',
  styleUrls: ['./retailertab1.page.scss'],
})
export class Retailertab1Page implements OnInit {
  retailerUID;
  retailerItems;
  items;
  retailerName;
  isReady = false;

  constructor(public afstore: AngularFirestore, public afAuth: AngularFireAuth, private changeDetection: ChangeDetectorRef, public alertCtrl: AlertController) { }

  ngOnInit() {
    var self = this
    console.log(self.retailerItems)
    this.afAuth.onAuthStateChanged(async function(user) {        
      if (user) {              
        self.retailerUID = user.uid
        self.items = self.afstore.doc(`users/${self.retailerUID}`);
        self.retailerItems = self.items.valueChanges(); 
        self.isReady = true;
        self.changeDetection.detectChanges(); 
      }
      else{
        console.log('no user signed in');
      }
    });
  }

  ionViewWillEnter(){
    if(this.items){
      this.retailerItems = this.items.valueChanges();
      this.changeDetection.detectChanges(); 
      this.isReady = true;
    }    
  }

  getUser(uid) : String{     
    return uid;
  }

}
