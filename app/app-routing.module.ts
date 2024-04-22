import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetStartedComponent } from './Home/get-started/get-started.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HeaderComponent } from './header/header.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './Home/contact-us/contact-us.component';
import { MembershipComponent } from './membership/membership.component';
import { OurTrainersComponent } from './our-trainers/our-trainers.component';

const routes: Routes = [ 
  { path: '', component: GetStartedComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'Gallery', component: GalleryComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'Membership', component: MembershipComponent },
  { path: 'Our-trainers', component: OurTrainersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }