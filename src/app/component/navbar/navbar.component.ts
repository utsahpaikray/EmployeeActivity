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

   public items = [
     {
      name: 'Project',
      icon: 'folder',
      children: [
        {
        name: 'Paypie',
        link: './paypie',
        icon: 'arrow_forward'
        },
        {name: 'Single Ledger',
        link: './slickpie',
        icon: 'arrow_forward'
        },
        {name: 'Slick Pie',
        link: './singleledger',
        icon: 'arrow_forward'
        },
      ]
     },
     {
      name: 'Admin',
      link: './admin/',
      icon:  'group',
      children: [
        {
          name: 'Superadmin',
          link: './superadmin',
          icon: 'arrow_forward'
        },
      ]
      },
      {
      name: 'Setting',
      link: '.setting',
      icon: 'brightness_low'
      },
      {
      name: 'Attandance',
      link: './attendancesheet/',
      icon:  'notes'
      },
      {
      name: 'Report',
      link: './report/',
      icon:  'pie_chart'
      },
      {
        name: 'Employee-list',
        link: './employeelist/',
        icon:  'assignment'
        },
        {
        name: 'Task-manager',
        link: './taskmanager/',
        icon:  'games'
        }
  ];

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




  ngOnDestroy(): void {

    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}

