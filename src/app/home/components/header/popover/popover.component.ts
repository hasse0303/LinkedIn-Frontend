import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(
    private route: Router,
    private popoverController: PopoverController
  ) { }

  ngOnInit() {}

  singout(){
    this.route.navigate(['/auth']);
    this.popoverController.dismiss();
  }
}
