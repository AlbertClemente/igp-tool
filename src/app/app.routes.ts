import { Routes } from '@angular/router';

import { CircuitsComponent } from './components/circuits/circuits.component';
import { CarconfigsComponent } from './components/carconfigs/carconfigs.component';
import { ProvidersComponent } from './components/providers/providers.component';
export const ROUTES: Routes = [
    {path: 'circuitos', component: CircuitsComponent },
    { path: 'configuraciones', component: CarconfigsComponent },
    { path: 'proveedores', component: ProvidersComponent },
    { path: '', pathMatch: 'full', redirectTo: 'circuitos' },
    { path: '**', pathMatch: 'full', redirectTo: 'circuitos' }
  ];
