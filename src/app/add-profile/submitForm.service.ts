/*The service responsible for sending the data from the form to the backend tocreate a new profile in 
the data base*/
import {Http,Headers} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SubmitForm {
    constructor(private http:Http){
    }

    //This method is executed when the form is submitted
    submitForm(data:any){

        //This header specifies the data type
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        //the POST request
        this.http.post("http://127.0.0.1:8000/ASUmembers/",
        JSON.stringify(data),
        {headers:headers}).subscribe();
    }
}






































/* import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class SubmitForm {
    constructor(private http: HttpClient) { }
    
    submitForm(data:any){
        var status ;
        return this.http.post(
            'http://127.0.0.1:8000/persons/.json',
            JSON.stringify(data),
            {headers: new HttpHeaders().set("Content-Type","application/json")}
        ).subscribe(response=>{status= response.status});
    }
} */
