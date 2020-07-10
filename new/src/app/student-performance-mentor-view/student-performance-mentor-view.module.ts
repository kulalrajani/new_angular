import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentPerformanceMentorViewRoutingModule } from './student-performance-mentor-view-routing.module';
import { StudentPerformanceMentorViewComponent } from './student-performance-mentor-view.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [StudentPerformanceMentorViewComponent],
  imports: [
    CommonModule,
    StudentPerformanceMentorViewRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class StudentPerformanceMentorViewModule { }
