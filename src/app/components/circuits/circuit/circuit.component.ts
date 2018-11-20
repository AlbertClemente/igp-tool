import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CircuitService } from '../shared/circuit.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-circuit',
  templateUrl: './circuit.component.html',
  styleUrls: ['./circuit.component.css']
})
export class CircuitComponent implements OnInit {
  constructor(
    public circuitService: CircuitService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(circuitForm: NgForm) {
    if (circuitForm.value.$key == null) {
      this.circuitService.insertCircuit(circuitForm.value);
    } else {
      this.circuitService.updateCircuit(circuitForm.value);
      this.resetForm(circuitForm);
      this.toastr.success('Enviado correctamente', 'Circuit Register');
    }
  }

  resetForm(circuitForm?: NgForm) {
    if (circuitForm != null) {
      circuitForm.reset();
      this.circuitService.selectedCircuit = {
        $key: null,
        race_number: 0,
        race_name: '',
        num_laps: 0,
        circuit_type: '',
        prob_overtaking: 0,
        lvl_bumpiness: 0,
        fuel_consumption: 0,
        tyre_wear: 0,
        pit_time: 0,
        car_suspension: '',
        ride_height: 0,
        wing_level: 0,
        img_circuit: '',
        img_splash_circuit: ''
      };
    }
  }
}
