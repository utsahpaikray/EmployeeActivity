import { Component, OnInit, ViewChild } from '@angular/core';
import { SidenavService } from '../../../services/sidenav/sidenav.service';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private sidenavservices: SidenavService) { }

  ngOnInit() {
  }
  toggleRightSidenav() {
    this.sidenavservices.toggle();
 }

}
