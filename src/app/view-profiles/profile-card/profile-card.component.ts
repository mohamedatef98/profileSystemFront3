import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
  //Custom Property Binding to get each profile from the viewProfiles component
  @Input() profile:any;

  constructor() { }

  ngOnInit() {
  }

}
