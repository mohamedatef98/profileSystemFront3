import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class SubmitForm {
    constructor(private http: HttpClient) { }
    
    submitForm(data:any){
        return this.http.post(
            'https://test-fb4b9.firebaseio.com/.json',
            JSON.stringify(data),
            {headers: new HttpHeaders().set("Content-Type","application/json")}
        ).subscribe();
    }
}