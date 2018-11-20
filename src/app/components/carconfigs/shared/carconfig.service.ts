import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { CarConfig } from './carconfig.model';

@Injectable({
  providedIn: 'root'
})
export class CarConfigService {
  carConfigsList: AngularFireList<any>;
  selectedCarConfig: CarConfig = new CarConfig();
  constructor(private firebase: AngularFireDatabase) {}

  getData() {
    this.carConfigsList = this.firebase.list('carconfigs');
    return this.carConfigsList;
  }

  insertCarConfig(carconfig: CarConfig) {
    this.carConfigsList.push({
      acceleration: carconfig.acceleration,
      braking: carconfig.braking,
      cooling: carconfig.cooling,
      downforce: carconfig.downforce,
      fuel_economy: carconfig.fuel_economy,
      handling: carconfig.handling,
      reliability: carconfig.reliability,
      tyre_economy: carconfig.tyre_economy,
      date_config: carconfig.date_config
    });
  }

  updateCarConfig(carconfig: CarConfig) {
    this.carConfigsList.update(carconfig.$key, {
      acceleration: carconfig.acceleration,
      braking: carconfig.braking,
      cooling: carconfig.cooling,
      downforce: carconfig.downforce,
      fuel_economy: carconfig.fuel_economy,
      handling: carconfig.handling,
      reliability: carconfig.reliability,
      tyre_economy: carconfig.tyre_economy,
      date_config: carconfig.date_config
    });
  }

  deleteCarConfig($key: string) {
    this.carConfigsList.remove($key);
  }
}




