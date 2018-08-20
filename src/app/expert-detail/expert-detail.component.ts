import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { ExpertsService } from '../experts.service';

@Component({
  selector: 'app-expert-detail',
  templateUrl: './expert-detail.component.html',
  styleUrls: ['./expert-detail.component.css']
})
export class ExpertDetailComponent implements OnInit {

  expert;
  isLoading$ = this.expertService.isLoadingHeroes();
  edit = true;
  expertFormBuilder = this.fb.group({
    id: [''],
    company: [''],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    title: [''],
    profileUrl: ['']
  });

  constructor(
    private expertService: ExpertsService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.expertFormBuilder.disable();
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => this.expertService.findExpert(id))
    ).subscribe(foundExpert => {
      this.expert = foundExpert;
      this.expertFormBuilder.patchValue(foundExpert);
    });
  }

  editDetail() {
    if (this.edit) {
      this.edit = !this.edit;
      this.expertFormBuilder.enable();
    } else {
      this.edit = !this.edit;
      this.expertFormBuilder.disable();
    }
  }

  updateExpert() {
    this.expertService.updateExpert(this.expert.id, this.expertFormBuilder.value);
  }
}
