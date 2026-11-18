import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Performance } from '../../models/data.models';
import { PageHeaderComponent } from '../../shared/page-header.component';
import { RevealDirective } from '../../shared/reveal.directive';
import { CtaBandComponent } from '../../shared/cta-band.component';

@Component({
  selector: 'app-performances',
  standalone: true,
  imports: [CommonModule, RouterModule, PageHeaderComponent, RevealDirective, CtaBandComponent],
  templateUrl: './performances.component.html',
})
export class PerformancesComponent implements OnInit {
  performances: Performance[] = [];
  loading = true;

  readonly promises = [
    {
      title: 'Individuelle Choreografien',
      text: 'Jede Performance wird individuell auf dich & dein Event angepasst.',
    },
    {
      title: 'Beratung & Planung',
      text: 'Ich unterstütze dich professionell bei der Planung und Umsetzung deines Auftritts.',
    },
    {
      title: 'Flexible Termine',
      text: 'Wir finden gemeinsam einen Zeitraum für die perfekte Vorbereitung.',
    },
  ];

  readonly occasions = ['Bälle', 'Hochzeiten', 'Mitternachtseinlagen', 'Firmenfeiern', 'Geburtstage', 'Galas', 'Musicals'];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getPerformances().subscribe({
      next: data => {
        this.performances = data;
        this.loading = false;
      },
      error: err => {
        console.log(err);
        this.loading = false;
      },
    });
  }

  pad(i: number): string {
    return String(i + 1).padStart(2, '0');
  }
}
