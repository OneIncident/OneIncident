import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { IncidentRecordComponent } from '../incident-record/incident-record.component';
import { CounterDirective } from './counter.directive';


@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule],
  declarations: [IncidentRecordComponent, CounterDirective],
  exports: [IncidentRecordComponent, CounterDirective]
})
export class IncidentRecordModule {}