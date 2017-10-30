import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { ViewProfilesComponent } from './view-profiles/view-profiles.component';
import { EditProfileComponent } from './view-profiles/profile-card/edit-profile/edit-profile.component';
import { ProfileCardComponent } from './view-profiles/profile-card/profile-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProfileComponent,
    ViewProfilesComponent,
    EditProfileComponent,
    NavBarComponent,
    ProfileCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'profiles', component: ViewProfilesComponent },
      { path: 'profiles/:id', component: EditProfileComponent },
      { path: 'add-profile', component: AddProfileComponent },
      
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
