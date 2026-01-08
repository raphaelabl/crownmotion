import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';
import { DanceStyle } from '../../models/data.models';

@Component({
  selector: 'app-dance-styles',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dance-styles.component.html',
  styleUrls: []
})
export class DanceStylesComponent implements OnInit {
  danceStyles: DanceStyle[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.danceStyles = this.dataService.getDanceStyles();
  }
}
