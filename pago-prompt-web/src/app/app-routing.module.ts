import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./guards/auth.guard";
import { AlarmsComponent } from './alarms/alarms.component';
import { PublicServicesListComponent } from './public-services/public-services-list/public-services-list.component';
import { PublicServicesCreateComponent } from './public-services/public-services-create/public-services-create.component';

const routes: Routes = [
  { path: 'home', component: DashboardComponent, canActivate: [AuthGuard]  },
  { path: 'alarms', component: AlarmsComponent  },
  { path: 'public-services/list', component: PublicServicesListComponent  },
  { path: 'public-services/create', component: PublicServicesCreateComponent  },
  { path: '', component: LoginComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
