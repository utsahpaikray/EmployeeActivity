import { Component, OnInit, OnDestroy, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { SidenavService } from 'src/app/services/sidenav/sidenav.service';
import { MatSidenav } from '@angular/material';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnDestroy {
  
   isShow = true;
 
  toggleDisplay() {
    this.isShow = !this.isShow;
  }
 // @ViewChild('rightSidenav') public sidenav: MatSidenav;
  @ViewChild('rightSidenav', { static: true }) sidenav: MatSidenav;
  // tslint:disable-next-line: variable-name
  _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private sidenavservices: SidenavService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit(): void {
    this.sidenavservices.setSidenav(this.sidenav);
  }
  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 10}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from({length: 20}, () =>
      ``);

  // tslint:disable-next-line: variable-name
  // private _mobileQueryListener: () => void;
  // shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test
  //   (window.location.host));


  ngOnDestroy(): void {
    // tslint:disable-next-line: deprecation
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
