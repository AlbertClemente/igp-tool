import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { CircuitsComponent } from './components/circuits/circuits.component';
import { CircuitComponent } from './components/circuits/circuit/circuit.component';
import { CircuitListComponent } from './components/circuits/circuit-list/circuit-list.component';
import { CarconfigsComponent } from './components/carconfigs/carconfigs.component';
import { CarconfigComponent } from './components/carconfigs/carconfig/carconfig.component';
import { CarconfigListComponent } from './components/carconfigs/carconfig-list/carconfig-list.component';
import { HomeComponent } from './components/home/home.component';
import { ProvidersComponent } from './components/providers/providers.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { ROUTES } from './app.routes';
import { DatePipe } from '@angular/common';
import { ProvidersConfigsComponent } from './components/providers/providers-configs/providers-configs.component';
import { CarConfigComponent } from './components/providers/car-config/car-config.component';

@NgModule({
  declarations: [
    AppComponent,
    CircuitsComponent,
    CircuitComponent,
    CircuitListComponent,
    CarconfigsComponent,
    CarconfigComponent,
    CarconfigListComponent,
    HomeComponent,
    NavbarComponent,
    ProvidersComponent,
    ProvidersConfigsComponent,
    CarConfigComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(ROUTES, { useHash: false })
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
