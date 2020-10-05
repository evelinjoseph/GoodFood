import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../user.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private nacCtrl: NavController, public afAuth: AngularFireAuth, public user: UserService) {}
  async logout() {
    this.afAuth.signOut();
    this.nacCtrl.navigateRoot(['./login'])

  }

}
