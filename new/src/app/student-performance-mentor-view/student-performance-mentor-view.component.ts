import { Component, OnInit, ViewChild } from '@angular/core';
import { viewClassName } from '@angular/compiler';
import { StudentPerformanceMentorViewService } from './student-performance-mentor-view.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-student-performance-mentor-view',
  templateUrl: './student-performance-mentor-view.component.html',
  styleUrls: ['./student-performance-mentor-view.component.css']
})

export class StudentPerformanceMentorViewComponent implements OnInit {

  constructor(private mentorservice : StudentPerformanceMentorViewService ) { }

  students_data = [];
  academicYear = [];
  departments = [];
  sections = [];
  semesters = [];
  student_details = [];
  course_result = [];
  lab1 = [];
  lab2 = [];
  committee = [];
  project = [];
  Mentor_Meeting = [];
  attendance = [];
  Mini_Project = [];

  student_array:any[];

  dataSource :any;
  displayedColumns: string[];
 
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(): void {

    this.mentorservice.get_student_details()
      .subscribe(data => {
        let students_data = data;

        this.academicYear = students_data['acadmicYear'];
        this.departments = students_data['departments'];
        this.sections = students_data['section'];
        this.semesters = students_data['terms'];

        this.student_details = students_data['student_details'][0];

        this.course_result = this.student_details['course_result'];
        this.lab1 = this.course_result['Lab']

        this.attendance = this.student_details['attendance'];
        this.lab2 = this.attendance['Lab'];

        this.committee = this.student_details['committee'];
        this.Mentor_Meeting = this.committee['Mentor Meeting'];

        this.project = this.student_details['internship'];
        this.Mini_Project = this.project['Mini Project'];

        console.log(this.student_details['name']);
        console.log(this.lab1['mentor_score']);

        this.student_array['name'] = this.student_details['name'];
        this.student_array['USN'] = this.student_details['USN'];

        this.student_array['course_system'] = this.lab1['system_generated_score'];
        this.student_array['course_mentor'] = this.lab1['mentor_score'];
        this.student_array['course_self'] = this.lab1['self_score'];

        console.log(this.lab1['self_score']);

        this.student_array['academic_system'] = this.lab2['system_generated_score'];
        this.student_array['academic_mentor'] = this.lab2['mentor_score'];
        this.student_array['academic_self'] = this.lab2['self_score'];

        console.log(this.lab2['self_score']);

        this.student_array['atten_system'] = this.Mentor_Meeting['system_generated_score'];
        this.student_array['atten_mentor'] = this.Mentor_Meeting['mentor_score'];
        this.student_array['atten_self'] = this.Mentor_Meeting['self_score'];

        console.log(this.Mentor_Meeting['self_score']);

        this.student_array['project_system'] = this.Mini_Project['system_generated_score'];
        this.student_array['project_mentor'] = this.Mini_Project['mentor_score'];
        this.student_array['project_self'] = this.Mini_Project['self_score'];

        console.log(this.Mini_Project['self_score']);
        console.log(this.student_array);

        this.dataSource = new MatTableDataSource(this.student_array);
        this.displayedColumns = ['name', 'USN', 'course_mentor', 'course_self'];
        this.dataSource.paginator = this.paginator;

      })
  }

}