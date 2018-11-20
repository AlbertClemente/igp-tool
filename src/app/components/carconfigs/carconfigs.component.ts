import { Component, OnInit } from '@angular/core';
import { CarConfigService } from './shared/carconfig.service';

@Component({
  selector: 'app-carconfigs',
  templateUrl: './carconfigs.component.html',
  providers: [CarConfigService]
})
export class CarconfigsComponent implements OnInit {

  constructor(private carConfigService: CarConfigService) {}

  ngOnInit() {}
}
