import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  DashboardComponent
} from './component/dashboard/dashboard.component';
import {
  LoginComponent
} from '../app/component/auth/login/login.component';
import {
  SignupComponent
} from '../app/component/auth/signup/signup.component';
import {
  MasterComponent
} from '../app/component/master/master/master.component';
import {
  NavbarComponent
} from '../app/component/navbar/navbar.component';
import {
  ReportComponent
} from '../app/component/report/report.component'

const routes: Routes = [{
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: SignupComponent
  },
  {
    path: 'master',
    children: [{
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'report',
        component: ReportComponent
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'dashboard'
      }

    ],
    component: MasterComponent
  },
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'register'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
