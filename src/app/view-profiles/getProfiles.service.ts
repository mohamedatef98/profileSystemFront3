import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class GetProfilesService {
    constructor(private http: Http) { }
    profiles: {}[] =[];

    getProfiles() {
        this.http.get('https://test-fb4b9.firebaseio.com/.json')
            .subscribe(response => {
                var obj = response.json();
                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        this.profiles.push(obj[key]);
                    }
                }
            })
            return this.profiles;
    }
}