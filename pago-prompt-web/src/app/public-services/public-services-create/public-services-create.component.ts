import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { PublicService } from '../../shared/public-service/public-service';
import { PublicServiceService } from '../public-services.service';


@Component({
  selector: 'app-public-services-create',
  templateUrl: './public-services-create.component.html',
  styleUrls: ['./public-services-create.component.scss']
})
export class PublicServicesCreateComponent implements OnInit {
  @ViewChild('selectElement') selectElement!: ElementRef;

  showContractNumberInput = false;
  contractNumberInputValue = '';

  showSearchBillingBtn = false;
  showBillingDataSection = false;
  selectedPublicServiceType: string = '';

  constructor(
    private router: Router,
    private publicServiceService: PublicServiceService
  ) { }

  onSelectChange(event: any): void {
    this.selectedPublicServiceType = event.target.value;
    this.showContractNumberInput = event.target.value !== '';
    this.contractNumberInputValue = '';
  }


  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('/public-services/list');
  }

  createService() {
    const selectedOption = this.selectElement.nativeElement.selectedOptions[0];
    const selectedValue = selectedOption.value;
    const selectedText = selectedOption.text;

    const id = Math.floor(Math.random() * 1000);
    const newService = new PublicService(id, selectedText, selectedValue);
    this.publicServiceService.addPublicService(newService);
  }

  showSearchBillingButton(event: any): void {
    this.showSearchBillingBtn = event.target.value !== '';
  }

  showBillingData(): void {
    this.showSearchBillingBtn = false;
    this.showBillingDataSection = true;
  }

  onlyNumbers(event: any): void {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
    }
  }
}
