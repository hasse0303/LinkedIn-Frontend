import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from './components/header/popover/popover.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private popoverController: PopoverController
  ) {}

  async show(e: Event) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'my-custom-popover',
      event: e,
      // showBackdrop: false,
      // dismissOnSelect: true,
    });

    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log(role);

  }
}
