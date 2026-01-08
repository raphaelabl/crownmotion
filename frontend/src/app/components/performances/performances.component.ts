import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Performance } from '../../models/data.models';

@Component({
  selector: 'app-performances',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './performances.component.html',
  styleUrls: []
})
export class PerformancesComponent implements OnInit {
  performances: Performance[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.performances = this.dataService.getPerformances();
  }
}

