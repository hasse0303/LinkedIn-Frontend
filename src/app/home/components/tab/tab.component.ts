import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PostingModalComponent } from '../start-post/posting-modal/posting-modal.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {}

  async presentPostModal(){
    const modal = await this.modalController.create({
      component: PostingModalComponent,
      cssClass: 'my-custom-class2'
    })
    await modal.present();
    const {data, role} = await modal.onDidDismiss();
    console.log('role', role, "data", data);

  }
}
