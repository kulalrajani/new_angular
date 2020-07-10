import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerformanceConfigurationRoutingModule } from './performance-configuration-routing.module';
import { PerformanceConfigurationComponent } from './performance-configuration.component';


@NgModule({
  declarations: [PerformanceConfigurationComponent],
  imports: [
    CommonModule,
    PerformanceConfigurationRoutingModule
  ]
})
export class PerformanceConfigurationModule { }
