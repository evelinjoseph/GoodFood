import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  userUID;
  firstName;
  lastName;
  email;
  password;
  buttonText: string = "Edit";
  isRead: boolean = true;

  constructor(public nacCtrl: NavController, private activatedRoute: ActivatedRoute, private firestore: AngularFirestore, private changeDetection: ChangeDetectorRef, public afAuth: AngularFireAuth, public alertCtrl: AlertController) { }

  async ngOnInit() {
    try{
    var self = this;
    await (this.afAuth.onAuthStateChanged(async function(user) {             
      if (user) {        
        self.userUID = user.uid
          var userRef = (await self.firestore.collection("users").doc(self.userUID).get().toPromise()).data()          
              self.firstName = userRef.firstname;
              self.lastName = userRef.lastname; 
              self.email = userRef.email;
              self.password = userRef.password;  
              self.changeDetection.detectChanges();                 
      }
      else{
        console.log('no user signed in');
      }
    }));    
      
  }
  catch(error){
    console.log(error.message)
  }
  this.changeDetection.detectChanges();
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
      
      const { firstName, lastName } = this
      if(firstName.trim().length != 0 && lastName.trim().length != 0){
        try{
          this.firestore.doc(`users/${this.userUID}`).update({          
            firstname: this.firstName,
            lastname: this.lastName              
          })
        }catch(error){  
          console.log(error.message)
        }   
      }else {
       alert("Please enter a value for name");       
      }  
      
    }   
  }

  async deleteAccount(){
    let self = this;
    const confirm = await this.presentAlertDelete();
    var userRef = (await self.firestore.collection("users").doc(self.userUID).get().toPromise()).data() 
    if (confirm) {
      (await this.afAuth.currentUser).delete().then(function() {
        // User deleted.    
        self.firestore.collection('archive').doc(self.userUID).set({
          email: userRef.email,
          firstname: userRef.firstname,
          lastname: userRef.lastname,
          isRetailer: userRef.isRetailer,
          orders: userRef.orders,
          type: "User Account"
        })
        .then(function() {
            console.log("Document successfully written to Archive!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
        
        self.firestore.doc(`users/${self.userUID}`).delete();
        self.nacCtrl.navigateRoot(['./login'])
        console.log("user deleted")
      }).catch(function(error) {
        console.log(error)
        console.log("Error deleting user")
      });
    }
  }

  async presentAlertDelete() : Promise<boolean> {
    let resolveFunction: (confirm: boolean) => void;
    const promise = new Promise<boolean>(resolve => {
      resolveFunction = resolve;
    });
    const alert = await this.alertCtrl.create({
      header: 'Confirm Delete',
      message: 'Are you sure you want to delete this account? This is a permanent deletion and cannot be undone.',
      buttons: [
        {
          text: 'Yes',
            handler: () => resolveFunction(true)
        }, {
          text: 'No',
          handler: () => resolveFunction(false)
        }
      ]
    });

    await alert.present();
    return promise;
  }
}
