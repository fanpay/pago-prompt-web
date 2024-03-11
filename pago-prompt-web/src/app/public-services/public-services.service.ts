import { Injectable } from '@angular/core';
import { PublicService } from '../shared/public-service/public-service';

@Injectable({
  providedIn: 'root'
})

export class PublicServiceService {

  publicServices: PublicService[] = [];

  constructor() { }

  addPublicService(service: PublicService) {
    this.publicServices.push(service);
  }

  getPublicServices() {
    return this.publicServices;
  }


}
