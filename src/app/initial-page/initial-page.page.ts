import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoadingController, NavController } from '@ionic/angular';
import { TabsPage } from '../tabs/tabs.page';
import { UserService } from '../user.service';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.page.html',
  styleUrls: ['./initial-page.page.scss'],
})
export class InitialPagePage implements OnInit {
  isReady: Boolean = false;

  constructor(public nacCtrl: NavController, public afAuth: AngularFireAuth, public afstore: AngularFirestore, public user: UserService, public loadingController: LoadingController,  public changeDetection: ChangeDetectorRef) {
    //this.presentLoading();
    var self = this;
    afAuth.onAuthStateChanged(async function(users) {
      if (users) {
        self.presentLoading();        
         var docRef = (await afstore.collection("users").doc(users.uid).get().toPromise()).data()
         if(docRef.isRetailer == false){
            nacCtrl.navigateRoot(['./tabs'])
          }
          else{
            nacCtrl.navigateRoot(['./retailertabs'])
          }
      } else {         
          self.isReady = true; 
          self.changeDetection.detectChanges(); 
      }
    });    
   }   

  ngOnInit() {
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
