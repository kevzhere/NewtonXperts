import { Component, OnInit, Input } from '@angular/core';

import { Channel } from '../channel';
import { FormBuilder } from '@angular/forms';
import { ExpertsService } from '../experts.service';
@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {

  @Input() channel: Channel;

  edit = true;
  test: Channel;
  channelFormBuilder = this.fb.group({
    id: [''],
    expertID: [''],
    email: [''],
    phone: [''],
    profileUrl: ['']
  });

  constructor(
    private fb: FormBuilder,
    private expertService: ExpertsService
  ) { }

  ngOnInit() {
    this.channelFormBuilder.disable();
    this.channelFormBuilder.patchValue(this.channel);
  }

  editDetail() {
    this.test = this.channelFormBuilder.value;
    console.log('form value', this.channelFormBuilder.value);
    console.log('test value', this.test);

    if (this.edit) {
      this.edit = !this.edit;
      this.channelFormBuilder.enable();
    } else {
      this.edit = !this.edit;
      this.channelFormBuilder.disable();
    }
  }

  updateChannel() {
    this.expertService.updateChannel(this.channel.expertId, this.channel.id, this.channelFormBuilder.value);
  }
}
