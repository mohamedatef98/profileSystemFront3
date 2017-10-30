import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';
@Component({
  selector: 'app-view-profiles',
  templateUrl: './view-profiles.component.html',
  
})
export class ViewProfilesComponent implements OnInit {


  profiles = [];

  constructor(private http:Http){
    this.http.get('http://127.0.0.1:8000/persons/')
    .subscribe(response => {
        this.profiles = response.json();
            }
        )
    
  }

  ngOnInit() {
  }

}
