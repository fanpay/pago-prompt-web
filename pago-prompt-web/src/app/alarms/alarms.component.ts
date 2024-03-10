import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-alarms',
  templateUrl: './alarms.component.html',
  styleUrl: './alarms.component.scss'
})
export class AlarmsComponent implements OnInit {

  alarmsForm!: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.alarmsForm = this.formBuilder.group({
      inputDays: ["1", [Validators.required, Validators.minLength(1)]],
    })
  }

  goBack() {
    this.router.navigateByUrl('/home');
  }

}
