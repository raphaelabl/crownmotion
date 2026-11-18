import { Component, HostListener, Inject, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { DataService } from '../../services/data.service';
import { ContentImage } from '../../models/data.models';
import { PageHeaderComponent } from '../../shared/page-header.component';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, RevealDirective],
  templateUrl: './gallery.component.html',
})
export class GalleryComponent implements OnInit, OnDestroy {
  contentImages: ContentImage[] = [];
  loading = true;

  /** Index des geöffneten Bildes, oder null wenn die Lightbox zu ist. */
  activeIndex = signal<number | null>(null);

  private touchStartX = 0;
  private touchStartY = 0;

  constructor(private dataService: DataService, @Inject(DOCUMENT) private readonly document: Document) {}

  ngOnInit() {
    this.dataService.getGalleryItems().subscribe({
      next: data => {
        this.contentImages = data.sort((a, b) => (a.pos ?? 999999) - (b.pos ?? 999999));
        this.loading = false;
      },
      error: err => {
        console.log(err);
        this.loading = false;
      },
    });
  }

  /** Bilder, deren Datei nicht geladen werden kann, werden ausgeblendet. */
  onImageError(item: ContentImage) {
    this.contentImages = this.contentImages.filter(i => i.id !== item.id);
  }

  get activeImage(): ContentImage | null {
    const i = this.activeIndex();
    return i === null ? null : this.contentImages[i] ?? null;
  }

  openImage(index: number) {
    this.activeIndex.set(index);
    this.document.body.style.overflow = 'hidden';
  }

  close() {
    this.activeIndex.set(null);
    this.document.body.style.overflow = '';
  }

  imageSwitch(direction: number) {
    const i = this.activeIndex();
    if (i === null || !this.contentImages.length) return;
    const n = this.contentImages.length;
    this.activeIndex.set((i + direction + n) % n);
  }

  @HostListener('document:keydown', ['$event'])
  onKey(e: KeyboardEvent) {
    if (this.activeIndex() === null) return;
    if (e.key === 'Escape') this.close();
    if (e.key === 'ArrowRight') this.imageSwitch(1);
    if (e.key === 'ArrowLeft') this.imageSwitch(-1);
  }

  onTouchStart(e: TouchEvent) {
    this.touchStartX = e.changedTouches[0].clientX;
    this.touchStartY = e.changedTouches[0].clientY;
  }

  onTouchEnd(e: TouchEvent) {
    const dx = e.changedTouches[0].clientX - this.touchStartX;
    const dy = e.changedTouches[0].clientY - this.touchStartY;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      this.imageSwitch(dx < 0 ? 1 : -1);
    } else if (dy > 90 && Math.abs(dy) > Math.abs(dx)) {
      this.close();
    }
  }

  ngOnDestroy(): void {
    this.document.body.style.overflow = '';
  }
}
