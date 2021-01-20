import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Platform, IonSlides } from '@ionic/angular';
//import { Map, tileLayer, marker, icon } from 'leaflet';
import * as Leaflet from 'leaflet';
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

  @ViewChild(IonSlides) slides: IonSlides;

  constructor(public plt: Platform, private firestore: AngularFirestore, public changeDetection: ChangeDetectorRef, private nativeGeocoder: NativeGeocoder) {}

  async ngOnInit() {
    await this.getRestaurants();
    this.changeDetection.detectChanges();
    if (this.map != undefined || this.map != null) { this.map.remove(); }
    if(this.restaurants){
      this.loadMap();
    }  
  }

  // async ionViewWillEnter(){
    
  //   await this.getRestaurants();
  //   this.changeDetection.detectChanges();
  //   if (this.map != undefined || this.map != null) { this.map.remove(); }
  //   if(this.restaurants){
  //     this.loadMap();
  //   }  
  // }

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

    this.map.locate().on("locationfound", (event: any) => { 
      console.log("got current loc")
      this.map.flyTo(new Leaflet.LatLng(event.latitude, event.longitude), 11);           
      this.locationMarker = Leaflet.marker([event.latitude, event.longitude], {
          draggable: false
      }).addTo(this.map);    
  
      this.locationMarker.bindPopup("You are here!").openPopup();      
  });

  console.log(this.restaurants)

  this.restaurants.forEach((restaurant, index) => {
    console.log(restaurant.location)
    this.nativeGeocoder.forwardGeocode(restaurant.location, options)
  .then((result: NativeGeocoderResult[]) => { 
      Leaflet.marker([result[0].latitude, result[0].longitude], {draggable: false})
      .bindPopup(`<b>${restaurant.name}</b>`, { autoClose: false })
      .on('click', (event: any) => {
        this.map.flyTo(event.latlng, 16); 
        this.slides.slideTo(index);        
        console.log(restaurant.name)
      })
      .addTo(this.map).openPopup();
    }).catch((error: any) => console.log(error));       
  });

  this.changeDetection.detectChanges();
   
  }
  
  slideChanged(event) {
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };

    this.slides.getActiveIndex().then(index => {
      this.nativeGeocoder.forwardGeocode(this.restaurants[index].location, options)
      .then((result: NativeGeocoderResult[]) => { 
        this.map.flyTo(new Leaflet.LatLng(result[0].latitude, result[0].longitude), 16)
      }).catch((error: any) => console.log(error));   

    });
}

  ngOnDestroy() {
    this.map.remove();
  }
}
