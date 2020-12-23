import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
//import { Map, tileLayer, marker, icon } from 'leaflet';
import * as Leaflet from 'leaflet';
import * as firebase from 'firebase/app';
import { first } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  map: Leaflet.Map;
  locationMarker;
  marker: Leaflet.marker;
  restaurants = [];
  mapResult;

  constructor(public plt: Platform, private firestore: AngularFirestore, public changeDetection: ChangeDetectorRef, private nativeGeocoder: NativeGeocoder) {}

  async ngOnInit() {
    await this.getRestaurants();
    this.changeDetection.detectChanges();
    if (this.map != undefined || this.map != null) { this.map.remove(); }
    if(this.restaurants){
      this.loadMap();
    }  
  }

  async ionViewWillEnter(){
    
    await this.getRestaurants();
    this.changeDetection.detectChanges();
    if (this.map != undefined || this.map != null) { this.map.remove(); }
    if(this.restaurants){
      this.loadMap();
    }  
  }

  async getRestaurants(){    
    this.restaurants = await this.firestore.collection('users').valueChanges().pipe(first()).toPromise();
    this.restaurants = this.restaurants.filter(currentListing => {
     if(currentListing.isRetailer){
      return (currentListing.isRetailer);
     }    
    });
    this.changeDetection.detectChanges();   
  }

  loadMap(){

    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
  };

    this.map = Leaflet.map('mapId').setView([29.42412, -98.49363], 10);   
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      
    }).addTo(this.map); 

  //   this.map.locate({ setView: true }).on("locationfound", (event: any) => { 
      
  //     this.locationMarker = Leaflet.marker([event.latitude, event.longitude], {
  //         draggable: false
  //     }).addTo(this.map);
  
  //     this.locationMarker.bindPopup("You are here!").openPopup();      
  // });

  // this.restaurants.forEach((restaurant) => {
  //   console.log(restaurant.location)
  //   this.nativeGeocoder.forwardGeocode(restaurant.location, options)
  // .then((result: NativeGeocoderResult[]) => this.mapResult.push(result[0]))  
  // .catch((error: any) => console.log(error));
  // console.log(this.mapResult)

  // this.mapResult.forEach((result) => {
  //   Leaflet.marker([result.latitude, result.longitude], {draggable: false})
  //   .bindPopup(`<b>${restaurant.name}</b>`, { autoClose: false })
  //   .on('click', () => console.log(restaurant.name))
  //   .addTo(this.map).openPopup();
  // }); 
  // });
  // this.mapResult = []
  this.changeDetection.detectChanges();

  console.log(this.restaurants)

  this.restaurants.forEach((restaurant) => {
    console.log(restaurant.location)
    this.nativeGeocoder.forwardGeocode(restaurant.location, options)
  .then((result: NativeGeocoderResult[]) => { 
      Leaflet.marker([result[0].latitude, result[0].longitude], {draggable: false})
      .bindPopup(`<b>${restaurant.name}</b>`, { autoClose: false })
      .on('click', () => console.log(restaurant.name))
      .addTo(this.map).openPopup();
    }).catch((error: any) => console.log(error));       
  });

  this.changeDetection.detectChanges();
   
  }  

  ngOnDestroy() {
    this.map.remove();
  }
}
