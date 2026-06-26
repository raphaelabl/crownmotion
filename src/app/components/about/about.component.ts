import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Experience, Qualifications } from 'src/app/models/data.models';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrls: []
})
export class AboutComponent implements OnInit{

  qualifications: Qualifications[] = [];
  experiences: Experience[] = [];

  constructor(private dataService: DataService){}


  ngOnInit(): void {
    this.dataService.getExperiences().subscribe({
      next: data => {
        this.experiences = data
      }
    })

    this.dataService.getQualifications().subscribe({
      next: data => {
        this.qualifications = data.sort((a, b) =>  b.year - a.year)
      }
    })
  }

  
}

