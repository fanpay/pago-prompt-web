import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicServicesListComponent } from './public-services-list/public-services-list.component';


const routes: Routes = [{
 path: 'public-services',
 children: [

    {
      path: 'list',
      component: PublicServicesListComponent
    }
 ]
}];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class PublicServicesRoutingModule { }
