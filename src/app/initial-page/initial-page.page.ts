import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoadingController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { ListingsService} from '../listings.service';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.page.html',
  styleUrls: ['./initial-page.page.scss'],
})
export class InitialPagePage implements OnInit {
  isReady: Boolean = false;

  constructor(public listingService: ListingsService, public nacCtrl: NavController, public afAuth: AngularFireAuth, public afstore: AngularFirestore, public loadingController: LoadingController,  public changeDetection: ChangeDetectorRef) {
    //this.presentLoading();
    
   }   

  ngOnInit() {
    
    var self = this;
   
    this.afAuth.onAuthStateChanged(async function(users) {
      if (users) {        
        self.presentLoading();   
        await self.listingService.initializeItems();     
         var docRef = (await self.afstore.collection("users").doc(users.uid).get().toPromise()).data()
         if(docRef.isRetailer == false){
            self.nacCtrl.navigateRoot(['./tabs/tabs/tab1'])
          }
          else{
            self.nacCtrl.navigateRoot(['./retailertabs/retailertabs/retailertab1'])
          }
      } else {         
          self.isReady = true; 
          self.changeDetection.detectChanges(); 
      }
    });    
    
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      duration: 600,
      translucent: true,
      cssClass: 'transparent',
      backdropDismiss: false
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    this.changeDetection.detectChanges(); 
  }

}
