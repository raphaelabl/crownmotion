import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { ContentImage } from '../../models/data.models';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: []
})
export class GalleryComponent implements OnInit {
  contentImages: ContentImage[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getGalleryItems().subscribe({
      next: data => {
        this.contentImages = data
      },
      error: err => {
        console.log(err)
      }
    });
  }

}

