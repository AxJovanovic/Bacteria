import { Component } from '@angular/core';
import { OnInit } from "@angular/core";
import { IBacteria } from './bacteria';
import { BacteriaService } from './bacteria-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  errorMessage: any;
  title = 'app';
  bacteria: IBacteria;
  constructor (private _bacteriaService:BacteriaService)
  {

  }
  ngOnInit() : void
  {
    try{
      this._bacteriaService.getBacteria()
        .subscribe(bacteria => 
                    {
                        this.bacteria = bacteria;
                        this.title = this.bacteria.name;
                    },
                   error => this.errorMessage = <any>error);
    }
    catch(exp)
    {this.errorMessage = exp}
  }

  setEnvironment(Temperature:number) : void
  {
    try
    {
      this._bacteriaService.setEnvironment(Temperature);
      console.log("SET ENVIRONMENT CALLED "+ Temperature);
    }
    catch(exp)
    {

    }
  }
}
