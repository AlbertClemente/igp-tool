import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { ProviderCarConfig } from './providers.model';


@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  providersList: AngularFireList<any>;
  selectedProvider: ProviderCarConfig = new ProviderCarConfig();
  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.providersList = this.firebase.list('providers');
    return this.providersList;
  }
}
