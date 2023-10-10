import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.page.html',
  styleUrls: ['./google-map.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GoogleMapPage implements OnInit {
  newMap!: GoogleMap;
  constructor() { }

  ngOnInit() {
    this.createMap()
  }
  async createMap() {
    const apiKey = 'AIzaSyDdFVGXmyTdsM7FE7ZDGY7N1Bifdz_i4cM'; // Thay thế YOUR_GOOGLE_MAPS_API_KEY bằng API key của bạn
    const mapElement = document.getElementById('map');

    try {
      if (mapElement) {
        this.newMap = await GoogleMap.create({
          id: 'd1b278c681787fab',
          element: mapElement,
          apiKey: apiKey,
          config: {
            center: {
              lat: 11.954801799643425,
              lng: 108.44418343865658,
            },
            zoom: 15,
          },
        });
      } else {
        console.error('Container element with ID "map" does not exist.');
      }
    } catch (error) {
      console.error('Error initializing Google Maps', error);
    }
  }
}
