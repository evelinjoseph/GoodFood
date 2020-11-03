import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.page.html',
  styleUrls: ['./user-listing.page.scss'],
})
export class UserListingPage implements OnInit {
  item;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.item = this.activatedRoute.snapshot.queryParamMap.get('name'); 
    //collection.doc.id  ??
  }

}
