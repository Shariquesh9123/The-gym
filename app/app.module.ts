import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GetStartedComponent } from './Home/get-started/get-started.component';
import { TestimonialsComponent } from './Home/testimonials/testimonials.component';
import { OurServicesComponent } from './Home/our-services/our-services.component';
import { ContactUsComponent } from './Home/contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AllComponent } from './gallery/all/all.component';
import { ImagesComponent } from './gallery/images/images.component';
import { VideosComponent } from './gallery/videos/videos.component';
import { MembershipComponent } from './membership/membership.component';
import { FormsModule } from '@angular/forms';
import { OurTrainersComponent } from './our-trainers/our-trainers.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GetStartedComponent,
    TestimonialsComponent,
    OurServicesComponent,
    ContactUsComponent,
    AboutUsComponent,
    GalleryComponent,
    AllComponent,
    ImagesComponent,
    VideosComponent,
    MembershipComponent,
    OurTrainersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
