import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IrisPredictionService {
  
  private baseURL = 'http://127.0.0.1:5000'

  constructor(private http:HttpClient) { }

  predict(data:any){
    const headers = {'content-type':'application/json'};
    const Option = {
      headers: new HttpHeaders(headers)
    }
    return this.http.post(`${this.baseURL}`+'/predict', data ,Option);
  }
}
