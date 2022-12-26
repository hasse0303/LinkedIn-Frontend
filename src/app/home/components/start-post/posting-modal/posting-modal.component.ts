import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-posting-modal',
  templateUrl: './posting-modal.component.html',
  styleUrls: ['./posting-modal.component.scss'],
})
export class PostingModalComponent implements OnInit {
  @ViewChild('form') form: NgForm;
  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {}

  onDismiss(data?: any, role?: string){
    this.modalController.dismiss(data, role);
  }

  onPost() {
    const body = this.form.value.body;
    const data = {
      post: {
        body,
        createdAt: new Date()
      }
    };
    this.onDismiss(data, 'post');
  }
}
