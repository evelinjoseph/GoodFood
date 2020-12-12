import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
//import { Map, tileLayer, marker, icon } from 'leaflet';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  map: Leaflet.Map;

  constructor(public plt: Platform) {}

  ngOnInit() {
    
  }

   ionViewDidEnter(){
    this.loadMap();
  }

  loadMap(){
    this.map = Leaflet.map('mapId').setView([29.42412, -98.49363], 10);

   
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
  }).addTo(this.map);

    

       
  }

  ngOnDestroy() {
    this.map.remove();
  }
}
