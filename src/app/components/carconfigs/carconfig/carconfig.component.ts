import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CarConfigService } from '../shared/carconfig.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-carconfig',
  templateUrl: './carconfig.component.html',
  styleUrls: ['./carconfig.component.css']
})
export class CarconfigComponent implements OnInit {
  constructor(
    public carConfigService: CarConfigService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(carConfigForm: NgForm) {
    if (carConfigForm.value.$key == null) {
      this.carConfigService.insertCarConfig(carConfigForm.value);
    } else {
      this.carConfigService.updateCarConfig(carConfigForm.value);
      this.resetForm(carConfigForm);
      this.toastr.success('Enviado correctamente', 'CarConfig Register');
    }
  }

  resetForm(carConfigForm?: NgForm) {
    if (carConfigForm != null) {
      carConfigForm.reset();
      this.carConfigService.selectedCarConfig = {
        $key: null,
        acceleration: 0,
        braking: 0,
        cooling: 0,
        downforce: 0,
        fuel_economy: 0,
        handling: 0,
        reliability: 0,
        tyre_economy: 0,
        date_config: ''
      };
    }
  }
}
