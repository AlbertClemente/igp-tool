import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProviderService } from '../shared/providers.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-car-config',
  templateUrl: './car-config.component.html',
  styleUrls: ['./car-config.component.css']
})
export class CarConfigComponent implements OnInit {

  constructor(
    public providerService: ProviderService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(providerForm: NgForm) {
    if (providerForm.value.$key == null) {
      this.providerForm.insertCarConfig(providerForm.value);
    } else {
      this.providerForm.updateCarConfig(providerForm.value);
      this.resetForm(providerForm);
      this.toastr.success('Enviado correctamente', 'CarConfig Register');
    }
  }

  resetForm(providerForm?: NgForm) {

  }

}
