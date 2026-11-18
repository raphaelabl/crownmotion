import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';
import { DanceStyle } from '../../models/data.models';
import { PageHeaderComponent } from '../../shared/page-header.component';
import { RevealDirective } from '../../shared/reveal.directive';
import { CtaBandComponent } from '../../shared/cta-band.component';

@Component({
  selector: 'app-dance-styles',
  standalone: true,
  imports: [CommonModule, RouterModule, PageHeaderComponent, RevealDirective, CtaBandComponent],
  templateUrl: './dance-styles.component.html',
})
export class DanceStylesComponent implements OnInit {
  danceStyles: DanceStyle[] = [];
  loading = true;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getDanceStyles().subscribe({
      next: data => {
        this.danceStyles = data;
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
