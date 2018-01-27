import { IBacteria } from "./bacteria";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class BacteriaService
{
    private _bacteriaUrl = 'http://localhost:19608/WEB-INF/resources/authors';

    constructor(private _http:HttpClient)
    {
    }

    getBacteria():Observable<IBacteria>
    {
        return this._http.get<IBacteria>(this._bacteriaUrl)
                         .do(data=>console.log('GetBacteria '+ JSON.stringify(data)))
                         .catch(this.handleError);
    }

    setEnvironment(Temperature: number):void
    {
        this._http.post<IBacteria>(this._bacteriaUrl, { "Temperature":Temperature.toString()})        
        .subscribe(
            (val) => {
                console.log("POST call successful value returned in body", 
                            val);
            },
            response => {
                console.log("POST call in error", response);
            },
            () => {
                console.log("The POST observable is now completed.");
            });
    }

    private handleError(err: HttpErrorResponse)
    {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}