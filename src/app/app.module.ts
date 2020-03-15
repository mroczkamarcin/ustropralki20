import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DeviceListComponent } from './device-list/device-list.component';
import { ConfirmationScreenComponent } from './confirmation-screen/confirmation-screen.component';
import { BusyScreenComponent } from './busy-screen/busy-screen.component';


@NgModule({
  imports:      [ 
  BrowserModule, 
  FormsModule,
  RouterModule.forRoot([
      { path: '', component: DeviceListComponent },
      { path: 'confirmation', component: ConfirmationScreenComponent },
      { path: 'busy', component: BusyScreenComponent }
    ])   
  ],
  declarations: [ AppComponent, TopBarComponent, DeviceListComponent, ConfirmationScreenComponent, BusyScreenComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
