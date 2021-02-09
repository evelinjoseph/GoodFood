import { Component, OnInit, Query } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.page.html',
  styleUrls: ['./update-password.page.scss'],
})
export class UpdatePasswordPage implements OnInit {
  password: string = "";
  newpassword: string = "";
  cpassword: string = "";

  constructor(public afAuth: AngularFireAuth, private nacCtrl: NavController) { }

  ngOnInit() {
  }

  updatePassword(){
    try{
      let self = this;
      const {password, newpassword, cpassword} = this
      if(password.trim().length==0){
        throw new Error('Please Enter Current Password');
      } 
      if(newpassword.trim().length==0){
        throw new Error('Please Enter New Password');
      } 
      if(cpassword.trim().length==0){
        throw new Error('Please Confirm Password');
      } 
      if(newpassword !== cpassword){      
        throw new Error('Passwords Do Not Match');
      }
      this.afAuth.onAuthStateChanged(function (user){
        if(user){ 
          self.afAuth.signInWithEmailAndPassword(user.email, password).then(function() {
            user.updatePassword(newpassword).then(function() {
              alert("Password Updated");
              self.password = "";
              self.newpassword = "";
              self.cpassword = "";

            }).catch(function(error) {
               alert(error)
            });
          }).catch(function(error) {
            alert(error)
         });      
                 

        }
        else{
          console.log("No user signed in")
        }

      })
      
    }
    catch(error){
      alert(error.message);
    }
  }

}
