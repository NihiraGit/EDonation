import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from './registration.service';
import { User } from './user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Welcome to the app!';
  user = new User();

  
 
 displayedColumns=["DonorId","NGOId","DonationType","Amount","Date"];
 rows = [
    {
      "DonorId":"1",
      "NGOId":"123",
      "DonationType":"Health",
      "Amount":"12345",
      "Date":"2020-1-1"
    },
    {
      "DonorId":"2",
      "NGOId":"123",
      "DonationType":"Health",
      "Amount":"123456",
      "Date":"2020-10-1"
    },
    {
      "DonorId":"3",
      "NGOId":"12345",
      "DonationType":"Health",
      "Amount":"12345678",
      "Date":"2020-10-12"
    }
  ];

  constructor(private _service:RegistrationService) { }

  ngOnInit(): void {
    
  }
  loginUser() {
    this._service.loginUserFromRemote(this.user).subscribe(
      data=> console.log("response recieved"),
      error=> console.log("exeception occured")
    );
    
    
  }
}

 
  
    
  
  

