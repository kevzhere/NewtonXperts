import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-new-expert',
  templateUrl: './new-expert.component.html',
  styleUrls: ['./new-expert.component.css']
})
export class NewExpertComponent implements OnInit {

  newExpertForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    company: [''],
    title: [''],
    profileUrl: ['']
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

}
