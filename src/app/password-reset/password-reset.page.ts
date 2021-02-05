import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase/app"

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
})
export class PasswordResetPage implements OnInit {

emailAddress;

  constructor() { }

  ngOnInit() {
  }

  resetPassword(){
    var auth = firebase.auth();
//var emailAddress = "polamaluisland43@gmail.com";

auth.sendPasswordResetEmail(this.emailAddress).then(function() {
  // Email sent.
}).catch(function(error) {
  // An error happened.
});
  }

}
