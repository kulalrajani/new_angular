import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentPerformanceRoutingModule } from './student-performance-routing.module';
import { StudentPerformanceComponent } from './student-performance.component';


@NgModule({
  declarations: [StudentPerformanceComponent],
  imports: [
    CommonModule,
    StudentPerformanceRoutingModule
  ]
})
export class StudentPerformanceModule { }
