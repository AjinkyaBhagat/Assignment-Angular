import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  image='../.././assets/header.png';
  age:any;
  showAge:any;
  allData={
    firstname:"",
    lastname:"",
    username:"",
    email:""
  }
  red:string='red';
  blue:string='blue';
  

  ageCalculator(){
    if(this.age){
      const convertAge = new Date(this.age);
      const timeDiffernace = Math.abs(Date.now() - convertAge.getTime());
      this.showAge = Math.floor((timeDiffernace / (1000 * 3600 * 24))/365);
     
    }
  }

  
  displayEmail="";
  getEmail(val:string){
    this.displayEmail=val;
  }  

  displayUsername="";
  getUserName(val:string)
  {
    this.displayUsername=val;
  }

 btnClick(){
  console.log(this.allData)
}
  constructor() { }

  ngOnInit(): void {
    
  }

}
