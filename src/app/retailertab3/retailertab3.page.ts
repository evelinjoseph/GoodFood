import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { UserService } from '../user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { firestore } from 'firebase/app';
import * as firebase from 'firebase/app';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-retailertab3',
  templateUrl: './retailertab3.page.html',
  styleUrls: ['./retailertab3.page.scss'],
})
export class Retailertab3Page implements OnInit {
  userUID;
  retailerType;
  retailerUID;
  name;
  email;
  password;
  url;
  buttonText: string = "Edit";
  isRead: boolean = true;
  isReady: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private firestore: AngularFirestore, public user: UserService, private afStorage: AngularFireStorage, public afAuth: AngularFireAuth, public loadingController: LoadingController, private changeDetection: ChangeDetectorRef) { }
  
  async ngOnInit() {
    this.presentLoading()
    try{
    var self = this;
    await (firebase.auth().onAuthStateChanged(async function(user) {  
      
      if (user) {        
        self.userUID = user.uid

          var userRef = (await self.firestore.collection("users").doc(self.userUID).get().toPromise()).data()
              self.retailerType = userRef.retailerType;
              self.retailerUID = userRef.retailerUID;    
              self.email = userRef.email;
              self.password = userRef.password;
              self.name = userRef.name;

          var storageRef =  self.afStorage.ref(`images/${self.userUID}.jpg`).getDownloadURL().toPromise().then(function(url) {        
              self.url = url; 
          }).catch(function(error) {
            self.url = 'assets/images/default.png';
          });
           
      }
      else{
        console.log('no user signed in');
      }
    }));    
      
  }
  catch(error){
    console.log(error.message)
  }
}

isReadonly() {
  return this.isRead;
}

edit()
  {
    if(this.buttonText == "Edit"){
      this.isRead = false;
      this.buttonText = "Save";
     }
    else{
      this.isRead = true;
      this.buttonText = "Edit";
      
      const { name } = this
      if(name.trim().length != 0){
        try{
          this.firestore.doc(`users/${this.userUID}`).update({          
            name               
          })
        }catch(error){  
          console.log(error.message)
        }   
      }else {
       alert("Please enter a value for name");       
      }  
      
    }   
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      duration: 900,
      translucent: true,
      cssClass: 'transparent',
      backdropDismiss: false
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    this.isReady = true;
    this.changeDetection.detectChanges(); 
  }
}