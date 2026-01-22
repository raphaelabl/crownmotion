import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Experience } from 'src/app/models/data.models';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrls: []
})
export class AboutComponent implements OnInit{

  constructor(private dataService: DataService){}

  experiences: Experience[] = [
    /*{
      year: '2015 - heute',
      title: 'Professionelle Tänzerin & Choreografin',
      description: 'Freiberufliche Tätigkeit mit Fokus auf Contemporary, Jazz und Showdance'
    },
    {
      year: '2018 - 2022',
      title: 'Tanzpädagogin',
      description: 'Unterricht an verschiedenen Tanzschulen in Berlin'
    },
    {
      year: '2012 - 2015',
      title: 'Tanzausbildung',
      description: 'Intensive Ausbildung in Contemporary Dance und Jazz'
    }*/
  ];

  ngOnInit(): void {
    this.dataService.getExperiences().subscribe({
      next: data => {
        this.experiences = data
      }
    })
  }

  qualifications = [
    'Ausbildung in Contemporary Dance',
    'Zertifikat in Tanzpädagogik',
    'Workshops bei internationalen Choreografen',
    'Bühnen- und Unterrichtserfahrung seit 2015'
  ];
}

