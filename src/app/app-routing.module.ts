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
} from '../app/component/report/report.component';
import {
  MaincontentComponent
} from './component/maincontent/maincontent.component';
import { PaypieComponent } from './component/project/paypie/paypie.component';
import { SlickpieComponent } from './component/project/slickpie/slickpie.component';
import { SingleledgerComponent } from './component/project/singleledger/singleledger.component';
import { AdminComponent } from './component/admin/admin/admin.component';
import { SettingsComponent } from './component/settings/settings/settings.component';
import {   AttendanceSheetComponent
} from './component/attendance-sheet/attendance-sheet.component';
import {   EmployeelistComponent
} from './component/employeelist/employeelist.component';
import { TaskmanagerComponent } from './component/taskmanager/taskmanager.component';
import { SuperAdminComponent } from './component/admin/user-admin/super-admin.component';
import { PaypieDetailComponent } from './component/paypie-detail/paypie-detail.component';
import { CashflowComponent } from './component/cashflow/cashflow.component';
import { CashflowtableComponent } from './cashflow/cashflowtable/cashflowtable.component';
// tslint:disable-next-line: max-line-length
import { DialogDialogOverviewExampleDialogComponent } from './cashflow/dialog-dialog-overview-example-dialog/dialog-dialog-overview-example-dialog.component'
const routes: Routes = [
  {
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
        path: 'dialogbox',
        component: DialogDialogOverviewExampleDialogComponent
      },
      {
        path: 'cashflow',
        component: CashflowComponent
      },
       {
        path: 'maincontent',
        component: MaincontentComponent
      },
      {
        path: 'paypie',
        component: PaypieComponent
      },
      {
        path: 'slickpie',
        component:   SlickpieComponent

      },
      {
        path: 'slickpie',
        component:   SlickpieComponent

      },
      {
        path: 'cashflowtable',
        component: CashflowtableComponent


      },
      {
        path: 'setting',
        component: SettingsComponent
      },
      {
        path: 'admin',
        component: AdminComponent
      },
      {
        path: 'superadmin',
        component: SuperAdminComponent
      },

      {
        path: 'attendancesheet',
        component:   AttendanceSheetComponent

      },
      {
        path: 'employeelist',
        component: EmployeelistComponent
      },
      {
        path: 'taskmanager',
        component: TaskmanagerComponent
      },
      {
        path: 'paypie-detail',
        component: PaypieDetailComponent
      },

      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'dashboard'
      },



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
