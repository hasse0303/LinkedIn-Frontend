import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { PopoverComponent } from './components/header/popover/popover.component';
import { StartPostComponent } from './components/start-post/start-post.component';
import { ProfileSummaryComponent } from './components/profile-summary/profile-summary.component';
import { AdvertisingComponent } from './components/advertising/advertising.component';
import { PostingModalComponent } from './components/start-post/posting-modal/posting-modal.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { TabComponent } from './components/tab/tab.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [
    HomePage,
    HeaderComponent,
    PopoverComponent,
    StartPostComponent,
    ProfileSummaryComponent,
    AdvertisingComponent,
    PostingModalComponent,
    AllPostsComponent,
    TabComponent
  ],
})
export class HomePageModule {}
