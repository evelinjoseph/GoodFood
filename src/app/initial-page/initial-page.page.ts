import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController } from '@ionic/angular';
import { TabsPage } from '../tabs/tabs.page';
import { UserService } from '../user.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.page.html',
  styleUrls: ['./initial-page.page.scss'],
})
export class InitialPagePage implements OnInit {

  constructor(public nacCtrl: NavController, public afAuth: AngularFireAuth, public user: UserService) {
    afAuth.onAuthStateChanged(function(users) {
      if (users) {
        nacCtrl.navigateRoot(['./tabs'])
      } else {
        
      }
    });

   }

  ngOnInit() {
  }

}
