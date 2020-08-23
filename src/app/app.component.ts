import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _peopleget: AppService, private router : Router) {

  }

  getpeopleRestul: any = []




  getarrytable;
  ngOnInit() {
  
this.callingapi();

   

  }


  callingapi() {
    this._peopleget.getPeople()
      .subscribe(
        data => {

          this.getpeopleRestul = data;
          this.getarrytable = this.getpeopleRestul.result;

        },
        error => console.log(error)
      )
  }

  title = 'assignment';
  Currentpeople = ""
  tempdata;
  username;
  firstname;
  lastname;
  adddata(data) {
    this.tempdata = data;
    if(this.tempdata.username && this.tempdata.firstname && this.tempdata.lastname){
      this._peopleget.postpeople(this.tempdata)
      .subscribe(
        data => {
          alert("Added successfully");
          this.callingapi();
          this.router.navigate(['/']).then(()=>{location.reload();});

        },
        error => console.log(error)
      )
    }else{

    alert("Please Enter All 3 fields."); 
    }
  }

  deletepeople(id){
    this._peopleget.deletePeople(id)
    .subscribe(
      data => {
        alert("Delete successfully");
        this.callingapi();
        

      },
      error => console.log(error)
    )
  }


  updatepeople(id){
    let ids=id._id
    let temp = {
      "firstname": id.firstname,
     "lastname": id.lastname,
     "username": id.username
    }
    this._peopleget.updatePeople(temp,ids)
    .subscribe(
      data => {
        alert("Updated successfully");
        this.callingapi();
        

      },
      error => console.log(error)
    )
  }




}
