import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  userUID;
  userItems;
  items;
  retailerName;
  isReady = false;
  retailers: any[];

  constructor(public listingService: ListingsService, public afstore: AngularFirestore, public afAuth: AngularFireAuth, private changeDetection: ChangeDetectorRef, public alertCtrl: AlertController) { }

  ngOnInit() {
    var self = this
    this.afAuth.onAuthStateChanged(async function(user) {        
      if (user) {        
        self.userUID = user.uid
        self.items = self.afstore.doc(`users/${self.userUID}`);
        self.userItems = self.items.valueChanges(); 
        self.changeDetection.detectChanges();   
        await self.listingService.initializeItems();
        self.retailers = self.listingService.getUsers();
        self.retailers = self.retailers.filter(currentUser => {
          if (currentUser.isRetailer) {
            return (currentUser.isRetailer);
          }
        });  
        console.log(self.retailers);
        self.isReady = true;   
      }
      else{
        console.log('no user signed in');
      }
    });
  }

  ionViewWillEnter(){
    if(this.items){
      this.userItems = this.items.valueChanges();
      this.changeDetection.detectChanges(); 
      this.isReady = true;
    }    
  }

   getRetailer(uid) : String{  
     if(this.retailers){
      const user = this.retailers.find(element => element.retailerUID == uid);
   
      return user.name +  " (" + uid + ")";

     }
     
    
  }
  
  


}
