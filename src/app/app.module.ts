import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { SectionCoverComponent } from './section-cover/section-cover.component';
import { SectionLiveComponent } from './section-live/section-live.component';
import { SectionVideoComponent } from './section-video/section-video.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { VideoPlayerComponent } from './video-player/video-player.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    SectionCoverComponent,
    SectionLiveComponent,
    SectionVideoComponent,
    SidebarComponent,
    VideoPlayerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
