import { Component, inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { ContentImage } from '../../models/data.models';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: []
})
export class GalleryComponent implements OnInit {
  contentImages: ContentImage[] = [];

  @ViewChild('imageView') imageView!: TemplateRef<any>;

  dialogImage: ContentImage = {
    id: 0,
    title: '',
    image: '',
    pos: 0
  }

  constructor(private dataService: DataService, private dialog: MatDialog) {}

  ngOnInit() {
    this.dataService.getGalleryItems().subscribe({
      next: data => {
        this.contentImages = data.sort((a, b) => (a.pos ?? 999999) - (b.pos ?? 999999));
      },
      error: err => {
        console.log(err)
      }
    });
  }

  openImage(id: ContentImage) {

    console.log("test")
    this.dialogImage = id

    let dialogRef = this.dialog.open(this.imageView, { panelClass: 'fullscreen-dialog' });
  }

  imageSwitch(direction: number) {
    let currentIndex = this.contentImages.findIndex(image => image.id === this.dialogImage.id);
    let newIndex = (currentIndex + direction);

    if(newIndex < 0) {
      newIndex = this.contentImages.length - 1;
    }
    if(newIndex >= this.contentImages.length) {
      newIndex = 0;
    }

    this.dialogImage = this.contentImages[newIndex];

  }

}

