import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { UserService } from '../user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  firstname: string = "";
  lastname: string = "";
  email: string = "";
  password: string = "";
  cpassword: string = "";

  constructor(private nacCtrl: NavController, public afAuth: AngularFireAuth, public afstore: AngularFirestore, public user:UserService, public alertController: AlertController) { }

  ngOnInit() {
  }

  async register() {

    const { firstname, lastname, email, password, cpassword} = this
    if(password !== cpassword){
      alert("Passwords don't match")
      return console.error("Passwords don't match")
    }

    try{

      const res = await this.afAuth.createUserWithEmailAndPassword(email, password)

      this.afstore.doc(`users/${res.user.uid}`).set({
        email,
        firstname,
        lastname,
        password
      })

      this.user.setUser({
        email,
        uid: res.user.uid
    })
    console.log(res)
    this.nacCtrl.navigateRoot(["./tabs"])

  }catch(error){
    console.dir(error)
    alert(error.message);
  }
}
}