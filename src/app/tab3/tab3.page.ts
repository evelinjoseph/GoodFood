import { ChangeDetectorRef, Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  userUID;
  userItems;

  constructor(public afstore: AngularFirestore, private changeDetection: ChangeDetectorRef) { 

       
  }

  async ngOnInit() {    
    var self = this    
    firebase.auth().onAuthStateChanged(function(user) {  
      
      if (user) {        
        self.userUID = user.uid
        const items = self.afstore.doc(`users/${self.userUID}`);
        self.userItems = items.valueChanges(); 
        self.changeDetection.detectChanges();       
      }
      else{

        console.log('no user signed in');
      }
    });  
       
  }

}
