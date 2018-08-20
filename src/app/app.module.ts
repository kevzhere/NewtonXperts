import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ExpertsComponent } from './experts/experts.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ExpertDetailComponent } from './expert-detail/expert-detail.component';
import { ChannelComponent } from './channel/channel.component';
import { NewExpertComponent } from './new-expert/new-expert.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpertsComponent,
    ExpertDetailComponent,
    ChannelComponent,
    NewExpertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
