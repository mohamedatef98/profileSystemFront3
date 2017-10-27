import { Component, OnInit } from '@angular/core';
import { GetProfilesService } from "./getProfiles.service";

@Component({
  selector: 'app-view-profiles',
  templateUrl: './view-profiles.component.html',
  styleUrls: ['./view-profiles.component.css'],
  providers:[GetProfilesService]
})
export class ViewProfilesComponent implements OnInit {


  profiles = [];

  constructor(private service:GetProfilesService){
    this.profiles = this.service.getProfiles();
    console.log(this.profiles);
    
  }

  ngOnInit() {
  }

}
