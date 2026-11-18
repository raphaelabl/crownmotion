import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Course } from '../../models/data.models';
import { PageHeaderComponent } from '../../shared/page-header.component';
import { RevealDirective } from '../../shared/reveal.directive';
import { CtaBandComponent } from '../../shared/cta-band.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RouterModule, PageHeaderComponent, RevealDirective, CtaBandComponent],
  templateUrl: './courses.component.html',
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  loading = true;

  constructor(private readonly dataService: DataService) {}

  ngOnInit() {
    this.dataService.getCourses().subscribe({
      next: data => {
        this.courses = data.filter(course => new Date(course.toDate) > new Date());
        this.loading = false;
      },
      error: err => {
        console.log(err);
        this.loading = false;
      },
    });
  }

  getEndTime(startTime: string, durationMinutes: number): string {
    const [hours, minutes] = startTime.split(':').map(Number);
    const totalMinutes = hours * 60 + minutes + durationMinutes;
    const endHours = Math.floor(totalMinutes / 60) % 24;
    const endMinutes = totalMinutes % 60;
    return `${String(endHours).padStart(2, '0')}:${String(endMinutes).padStart(2, '0')}`;
  }

  /** Level 1–3 als gefüllte Punkte (Beginner / Intermediate / Advanced). */
  levelDots(level: number): boolean[] {
    const l = Math.max(1, Math.min(3, Number(level) || 1));
    return [1, 2, 3].map(n => n <= l);
  }
}
