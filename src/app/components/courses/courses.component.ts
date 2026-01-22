import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Course } from '../../models/data.models';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './courses.component.html',
  styleUrls: []
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getCourses().subscribe({
      next: data => {
        this.courses = data
        
      },
      error: err => {
        console.log(err)
      }
    });
  }

}

