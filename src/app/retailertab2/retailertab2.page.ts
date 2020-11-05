import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../user.service';
import { AlertController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-retailertab2',
  templateUrl: './retailertab2.page.html',
  styleUrls: ['./retailertab2.page.scss'],
})
export class Retailertab2Page implements OnInit {

  public listings: any[];
  public listingsBackup: any[];
  public retailers: any[];
  public retailersBackup: any[];

  constructor(private nacCtrl: NavController, public afAuth: AngularFireAuth, public user: UserService, private firestore: AngularFirestore, private changeDetection: ChangeDetectorRef, public alertController: AlertController) {}

  async logout() {
    this.afAuth.signOut();
    this.nacCtrl.navigateRoot(['./login'])

  }

  async ngOnInit() {
    this.listings = await this.initializeItems();  
  }

  async initializeItems(): Promise<any> {
    const listing = await this.firestore.collection('listings')
    .valueChanges().pipe(first()).toPromise();

    console.log("reading db")
    this.listingsBackup = listing;
    return listing;
  }
}