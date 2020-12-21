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
  locationMarker;

  constructor(public plt: Platform) {}

  ngOnInit() {
    
  }

   ionViewDidEnter(){
    if (this.map != undefined || this.map != null) { this.map.remove(); }
    this.loadMap();
  }

  loadMap(){
    this.map = Leaflet.map('mapId', {
      zoomDelta: 0.25,
      zoomSnap: 0
  }).setView([29.42412, -98.49363], 10);   
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      
    }).addTo(this.map); 

    this.map.locate({ setView: true }).on("locationfound", (event: any) => {     
      
      this.locationMarker = Leaflet.marker([event.latitude, event.longitude], {
          draggable: false
      }).addTo(this.map);
  
      this.locationMarker.bindPopup("You are here!").openPopup();
  });
  }  

  ngOnDestroy() {
    this.map.remove();
  }
}
