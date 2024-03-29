import { Component } from '@angular/core';

import { NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar, private nacCtrl: NavController, public afAuth: AngularFireAuth, public afstore: AngularFirestore) {
   
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
    });
  }

  account() {
    var self = this;
    this.afAuth.onAuthStateChanged(async function(users) {
      if (users) {
         var docRef = (await self.afstore.collection("users").doc(users.uid).get().toPromise()).data()
         if(docRef.isRetailer == false){
            self.nacCtrl.navigateRoot(['/account'])
          }
          else{
            self.nacCtrl.navigateRoot(['/retailertabs/retailertabs/retailertab3'])
          }
      } 
    });

  }

  about() {
    
            this.nacCtrl.navigateRoot(['/about'])
          

  }

  async logout() {
    this.afAuth.signOut().then(function() {
     console.log("logout complete")
      
    }, function(error) {
      
      console.log(error);

    });
    this.nacCtrl.navigateRoot(['./login'])

  }

  ngOnDestroy(){
    console.log("left account")
  }

  
}
