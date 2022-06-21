import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
  }   

  onedit(){
    let id = this.router.snapshot.params.id;
    alert(id);
  }

}
