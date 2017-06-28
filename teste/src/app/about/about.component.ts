import { Component, OnInit, Input, NgModule, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


  
import {Http} from "@angular/http";

import { BrowserModule } from '@angular/platform-browser';

import { environment } from '../../environments/environment';

import { OnSubmit} from './js/about.js';

import { LoadHandwriting } from './js/about1.js';


var mySecret = "BMP94WQ193ZNM68M";
var myKey = "AR630QSEQ1V089FF";
var apiAuth = "Basic " + window.btoa(myKey + ":" + mySecret);
var api_root = "https://api.handwriting.io/";

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})



export class AboutComponent implements OnInit {

  version: string = environment.version;
  handWriting: any;

  constructor() { }


      //handWriting = (LoadHandwriting(apiAuth));
      

  ngOnInit() {
      this.handWriting = [{ id: "2D5QW0F80001", title: "Molly" }];
  }

  //ngAfterViewInit()
  //{
  //    this.handWriting = LoadHandwriting(apiAuth);
  //}

  selectedHandwriting: string;

  letterSize: string;

  letterColor: string;

  img: string;

  text: string;

  loadHandwriting()
  {
     
  }

  setHandwritingSize(size:number) {
      this.letterSize = size + "px";
  }

  setHandwritingColor(color:string)
  {
      this.letterColor = color;
  }

  onSubmit(textValue: string) {
      var imgSrcResult = OnSubmit(apiAuth, this.selectedHandwriting, this.letterSize, this.letterColor, textValue);      
  }
}


