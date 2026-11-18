import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Experience, Qualifications } from 'src/app/models/data.models';
import { PageHeaderComponent } from 'src/app/shared/page-header.component';
import { RevealDirective } from 'src/app/shared/reveal.directive';
import { CtaBandComponent } from 'src/app/shared/cta-band.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, PageHeaderComponent, RevealDirective, CtaBandComponent],
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {
  qualifications: Qualifications[] = [];
  experiences: Experience[] = [];

  readonly roles = ['Tänzerin', 'Choreografin', 'Musical-Performerin', 'Tanzlehrerin', 'Songwriterin'];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getExperiences().subscribe({
      next: data => {
        this.experiences = data;
      },
    });

    this.dataService.getQualifications().subscribe({
      next: data => {
        this.qualifications = data.sort((a, b) => b.year - a.year);
      },
    });
  }
}
