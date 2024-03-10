import { IrisPredictionService } from './iris-prediction.service';
import { IrisPrediction } from './iris-prediction';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iris_prediction';

  constructor(private IrisPredictionService:IrisPredictionService){}

  IrisPrediction:IrisPrediction = new IrisPrediction("","","","");
  list: any=[]

  predict(){
    // Put the values of the object of class IrisPrediction into the created list
    this.list = (Object.values(this.IrisPrediction));

    // Map all the values in the lists as numbers
    this.list = this.list.map(Number);

    // Store the list in an object(key:value pair), because JSON data is sent to the back-end and JSON is in the form of key:value pair only
    var obj = {
      'data':this.list
    };

    // Convert to JSON
    var json = JSON.stringify(obj);

    // console.log(json);

    this.IrisPredictionService.predict(json).subscribe(data=>{
      // Printing the JSON received from back-end
      alert(data);
      })
  }
}

// The data being received from the back-end is in the form of string, but the front-end can only read JSON format or number. Hence, from the back-end, we first
// convert to JSON format and then send, so that the front-end is able to parse that JSON object.
