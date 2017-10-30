/*The service responsible for sending a PUT request to the backend with the changed profile data and the 
id of that corresponding profile*/
import { Http,Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class EditProfile {
    constructor(private http: Http) { }
    

    //This method is executed when submitting the edit form
    editProfile(data:any,iD:number){
        data = data.value + {id:iD};

        //headers to specify the sent data type
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.put("http://127.0.0.1:8000/persons/.json'",
        JSON.stringify(data),
        {headers:headers}).subscribe();


    }
}