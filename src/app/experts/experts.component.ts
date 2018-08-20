import { Component, OnInit } from '@angular/core';
import { ExpertsService } from '../experts.service';

@Component({
  selector: 'app-experts',
  templateUrl: './experts.component.html',
  styleUrls: ['./experts.component.css']
})
export class ExpertsComponent implements OnInit {

  experts;

  constructor(
    private expertService: ExpertsService
  ) { }

  ngOnInit() {
    this.expertService.getExperts()
      .subscribe(experts => this.experts = experts);
  }

}
