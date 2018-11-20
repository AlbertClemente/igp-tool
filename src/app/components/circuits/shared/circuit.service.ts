import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Circuit } from './circuit.model';


@Injectable({
  providedIn: 'root'
})
export class CircuitService {
  circuitList: AngularFireList<any>;
  selectedCircuit: Circuit = new Circuit();
  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.circuitList = this.firebase.list('circuits');
    return this.circuitList;
  }

  insertCircuit(circuit: Circuit) {
    this.circuitList.push({
      race_number: circuit.race_number,
      race_name: circuit.race_name,
      num_laps: circuit.num_laps,
      circuit_type: circuit.circuit_type,
      prob_overtaking: circuit.prob_overtaking,
      lvl_bumpiness: circuit.lvl_bumpiness,
      fuel_consumption: circuit.fuel_consumption,
      tyre_wear: circuit.tyre_wear,
      pit_time: circuit.pit_time,
      car_suspension: circuit.car_suspension,
      ride_height: circuit.ride_height,
      wing_level: circuit.wing_level,
      img_circuit: circuit.img_circuit,
      img_splash_circuit: circuit.img_splash_circuit
    });
  }

  updateCircuit(circuit: Circuit) {
    this.circuitList.update(circuit.$key, {
      race_number: circuit.race_number,
      race_name: circuit.race_name,
      num_laps: circuit.num_laps,
      circuit_type: circuit.circuit_type,
      prob_overtaking: circuit.prob_overtaking,
      lvl_bumpiness: circuit.lvl_bumpiness,
      fuel_consumption: circuit.fuel_consumption,
      tyre_wear: circuit.tyre_wear,
      pit_time: circuit.pit_time,
      car_suspension: circuit.car_suspension,
      ride_height: circuit.ride_height,
      wing_level: circuit.wing_level,
      img_circuit: circuit.img_circuit,
      img_splash_circuit: circuit.img_splash_circuit
    });
  }

  deleteCircuit($key: string) {
    this.circuitList.remove($key);
  }
}
