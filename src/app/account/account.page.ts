import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';

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

  constructor(private activatedRoute: ActivatedRoute, private firestore: AngularFirestore, private changeDetection: ChangeDetectorRef, public afAuth: AngularFireAuth) { }

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

}
