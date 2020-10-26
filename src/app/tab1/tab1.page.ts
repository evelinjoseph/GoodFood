import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../user.service';
import { NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  public listings: any[];
  public listingsBackup: any[];

  constructor(private nacCtrl: NavController, public afAuth: AngularFireAuth, public user: UserService, private firestore: AngularFirestore, private changeDetection: ChangeDetectorRef) {}

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

    this.listingsBackup = listing;
    return listing;
  }

  search(event){
    this.listings = this.listingsBackup;
    const searchTerm = event.srcElement.value;

    if(!searchTerm){
      this.changeDetection.detectChanges(); 
      return;
    }

    this.listings = this.listings.filter(currentListing => {
      if (currentListing.name && searchTerm) {
        return (currentListing.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });   
    this.changeDetection.detectChanges(); 
  }

}
