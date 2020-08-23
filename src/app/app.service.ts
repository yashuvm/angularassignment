import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  public loading = false;
  private httpHeaders = new HttpHeaders ({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImNhc2EifSwiaWF0IjoxNTY1Njg1OTE3fQ.JpYlEnGEW4rDk6OLkXW7g6NRT8I52Tz_xjd8qHlnIkI' 
  });

  _url='';
  constructor(private http:HttpClient) { }


  getPeople(){
    
    this._url='https://nodejsassignment.herokuapp.com/api/people/get'
    return  this.http.get(this._url,{ headers: this.httpHeaders })
  }

  postpeople(data){
    
    this._url='https://nodejsassignment.herokuapp.com/api/people/create'
    return  this.http.post(this._url,data,{ headers: this.httpHeaders })
  }


  deletePeople(data){
    
    this._url='https://nodejsassignment.herokuapp.com/api/people/delete/'+data;
  
    return  this.http.delete(this._url,{ headers: this.httpHeaders })
  }

  updatePeople(data,id){
    
    this._url='https://nodejsassignment.herokuapp.com/api/people/update/'+id;
  
    return  this.http.put(this._url,data,{ headers: this.httpHeaders })
  }




}
