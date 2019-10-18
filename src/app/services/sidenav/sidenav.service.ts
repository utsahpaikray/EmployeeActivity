import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  constructor() { }
  private sidenav: MatSidenav;

  public setSidenav(sidenav: MatSidenav) {
      this.sidenav = sidenav;
  }
  public open() {
      return this.sidenav.open();
  }


  public close() {
      return this.sidenav.close();
  }

  public toggle(): void {
    console.log(this.sidenav);
    this.sidenav.toggle();
 }
}
