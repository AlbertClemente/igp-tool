import { Component, OnInit } from '@angular/core';
import { CircuitService } from './shared/circuit.service';


@Component({
  selector: 'app-circuits',
  templateUrl: './circuits.component.html',
  styleUrls: ['./circuits.component.css'],
  providers: [CircuitService]
})
export class CircuitsComponent implements OnInit {

  constructor(private circuitService: CircuitService) { }

  ngOnInit() {
  }

}
