import { Component, OnInit } from '@angular/core';
import { CircuitService } from '../shared/circuit.service';
import { Circuit } from '../shared/circuit.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-circuit-list',
  templateUrl: './circuit-list.component.html',
  styleUrls: ['./circuit-list.component.css']
})
export class CircuitListComponent implements OnInit {
  circuitList: Circuit[];
  constructor(private circuitService: CircuitService, private toastr: ToastrService) { }

  ngOnInit() {
    const x = this.circuitService.getData();
    x.snapshotChanges().subscribe(item => {
      this.circuitList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.circuitList.push(y as Circuit);
      });
    });
  }

  onEdit(circ: Circuit) {
    this.circuitService.selectedCircuit = Object.assign({}, circ);
  }

  onDelete(key: string) {
    if (confirm('¿Seguro que quieres borrar esta entrada?') === true) {
      this.circuitService.deleteCircuit(key);
      this.toastr.warning('Borrada satisfactoriamente', 'Circuit Register');
    }
  }
}
