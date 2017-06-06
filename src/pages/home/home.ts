import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LocationTrackerProvider} from "../../providers/location-tracker/location-tracker";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public locationTracker: LocationTrackerProvider
  ) {

  }

  public start() {
    this.locationTracker.startTracking();
  }

  public stop() {
    this.locationTracker.stopTracking();
  }

}
