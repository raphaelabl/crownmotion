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

  constructor(private readonly dataService: DataService) {}

  ngOnInit() {
    this.dataService.getCourses().subscribe({
      next: data => {
        this.courses = data.filter(course => new Date(course.toDate) > new Date());
        
      },
      error: err => {
        console.log(err)
      }
    });
  }

  getEndTime(startTime: string, durationMinutes: number): string {
    const [hours, minutes] = startTime.split(":").map(Number);

    const totalMinutes = hours * 60 + minutes + durationMinutes;

    const endHours = Math.floor(totalMinutes / 60) % 24;
    const endMinutes = totalMinutes % 60;

    return `${String(endHours).padStart(2, "0")}:${String(endMinutes).padStart(2, "0")}`;
  }

}

