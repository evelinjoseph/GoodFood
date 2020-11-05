import { ChangeDetectorRef, Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { UserService } from '../user.service'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  userUID;
  userItems;
  items;
  cart = [];

  constructor(public afstore: AngularFirestore, private changeDetection: ChangeDetectorRef, private user: UserService) { 

       
  }

  async ngOnInit() {    
    var self = this    
    await (firebase.auth().onAuthStateChanged(function(user) {  
      
      if (user) {        
        self.userUID = user.uid
        self.items = self.afstore.doc(`users/${self.userUID}`);
        self.userItems = self.items.valueChanges(); 
        self.changeDetection.detectChanges();   
        self.variables(self.userItems);    
      }
      else{

        console.log('no user signed in');
      }
    }));  
           
  }

  variables(userItems1){
    var self = this;

    this.afstore.doc(`users/${this.userUID}`).get().toPromise().then(function(querySnapshot) {
      var cart1 = querySnapshot.get("cart");
      cart1.forEach(element => {
        self.cart.push(element.listingID);        
      });
      
      
  })
  .catch(function(error) {
      console.log("Error getting documents: ", error);
  });
  }

}
