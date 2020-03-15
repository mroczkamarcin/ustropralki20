import { Component, OnInit } from '@angular/core';
import { devices } from '../devices';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent {

  devices = devices;

  constructor() { }

  ngOnInit() {
  }

}