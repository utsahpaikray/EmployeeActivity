import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-cashflow',
  templateUrl: './cashflow.component.html',
  styleUrls: ['./cashflow.component.scss']
})
export class CashflowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {
    console.debug("Scroll Event");
  }
}
