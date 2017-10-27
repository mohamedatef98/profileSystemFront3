import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { ViewProfilesComponent } from './view-profiles/view-profiles.component';
import { ProfileCardComponent } from './view-profiles/profile-card/profile-card.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
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
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'view-profiles', component: ViewProfilesComponent },
      { path: 'add-profile', component: AddProfileComponent },
      { path: 'edit-profile', component: EditProfileComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
