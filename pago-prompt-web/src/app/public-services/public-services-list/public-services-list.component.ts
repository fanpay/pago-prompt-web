import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublicService } from '../../shared/public-service/public-service';
import { PublicServiceService } from '../public-services.service';


@Component({
  selector: 'app-public-services-list',
  templateUrl: './public-services-list.component.html',
  styleUrls: ['./public-services-list.component.scss']
})
export class PublicServicesListComponent implements OnInit {

  publicServices: Array<PublicService> = [];
  selected: boolean = false;
  selectedService: PublicService | null = null;

  constructor(
    private router: Router,
    private publicServiceService: PublicServiceService
  ) { }

  selectService(service: PublicService): void {
    this.selectedService = service;
  }

  ngOnInit() {
    this.publicServices = this.publicServiceService.getPublicServices();
  }

  createService() {
    this.router.navigateByUrl('/public-services/create');
  }

  deleteService(): void {
    if (this.selectedService) {
      const index = this.publicServices.indexOf(this.selectedService);

      if (index !== -1) {
        this.publicServices.splice(index, 1);
      }
    }
  }

  goBack() {
    this.router.navigateByUrl('/home');
  }
}
