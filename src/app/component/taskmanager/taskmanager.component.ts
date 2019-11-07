import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskmanager',
  templateUrl: './taskmanager.component.html',
  styleUrls: ['./taskmanager.component.scss']
})
export class TaskmanagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line: only-arrow-functions

  }
  public expand(query) {

    document.querySelector(query).classList.toggle('parent-expand');
   // tslint:disable-next-line: whitespace
    const x= document.getElementById('demo');
    if (x.innerHTML === 'Expand') {
      x.innerHTML = 'Close';
    } else {
      x.innerHTML = 'Expand';
    }
  }
}
