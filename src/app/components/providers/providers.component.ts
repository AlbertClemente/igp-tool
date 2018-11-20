import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(carConfigForm: NgForm) {
  }


  resetForm(carConfigForm?: NgForm) {
  }
}
