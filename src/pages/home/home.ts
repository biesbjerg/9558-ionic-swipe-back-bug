import { Component } from '@angular/core';

import { App, NavController } from 'ionic-angular';

import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public app: App) {

  }

  public onPush() {
    this.app.getRootNav().push(AboutPage);
  }

}
