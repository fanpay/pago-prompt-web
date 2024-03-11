import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicServicesListComponent } from './public-services-list/public-services-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PublicServiceService } from './public-services.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [PublicServicesListComponent],
  providers: [PublicServiceService],
  declarations: [PublicServicesListComponent]
})
export class PublicServicesModule { }
