import { Component, OnInit } from '@angular/core';
import { ExpertsService } from './experts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'expertNetwork';

  constructor(
    private expertService: ExpertsService
  ) {}

  ngOnInit() {
    this.expertService.fetchExperts();
  }


}
