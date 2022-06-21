import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-component',
  templateUrl: './sidebar-component.component.html',
  styleUrls: ['./sidebar-component.component.css']
})
export class SidebarComponentComponent implements OnInit {

  constructor(private router:Router) { }

  Details(){
    this.router.navigate(["studentdetails"]);
  }

  ngOnInit(): void {
  }

}
