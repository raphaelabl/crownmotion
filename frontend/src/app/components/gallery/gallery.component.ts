import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { GalleryItem } from '../../models/data.models';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: []
})
export class GalleryComponent implements OnInit {
  galleryItems: GalleryItem[] = [];
  selectedCategory: string = 'all';
  categories = ['all', 'performance', 'training', 'show'];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.galleryItems = this.dataService.getGalleryItems();
  }

  get filteredItems(): GalleryItem[] {
    if (this.selectedCategory === 'all') {
      return this.galleryItems;
    }
    return this.galleryItems.filter(item => item.category === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}

