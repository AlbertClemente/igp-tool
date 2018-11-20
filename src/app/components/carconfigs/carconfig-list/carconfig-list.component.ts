import { Component, OnInit } from '@angular/core';
import { CarConfigService } from '../shared/carconfig.service';
import { CarConfig } from '../shared/carconfig.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-carconfig-list',
  templateUrl: './carconfig-list.component.html',
  styleUrls: ['./carconfig-list.component.css']
})
export class CarconfigListComponent implements OnInit {
  carConfigList: CarConfig[];
  constructor(private carConfigService: CarConfigService, private toastr: ToastrService) { }

  ngOnInit() {
    const x = this.carConfigService.getData();
    x.snapshotChanges().subscribe(item => {
      this.carConfigList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.carConfigList.push(y as CarConfig);
      });
    });
  }

  onEdit(carConf: CarConfig) {
    this.carConfigService.selectedCarConfig = Object.assign({}, carConf);
  }

  onDelete(key: string) {
    if (confirm('¿Seguro que quieres borrar esta entrada?') === true) {
      this.carConfigService.deleteCarConfig(key);
      this.toastr.warning('Borrada satisfactoriamente', 'CarConfig Register');
    }
  }
}
