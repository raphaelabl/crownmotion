import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Einheitlicher, editorialer Seitenkopf.
 * Titel + kursives Akzentwort, Nummer, kurzer Einleitungstext und optional ein Bild im Bogen.
 */
@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="relative overflow-hidden grain bg-blush-100">
      <!-- weiche Farbflächen -->
      <div class="pointer-events-none absolute -top-32 -right-24 w-[28rem] h-[28rem] rounded-full bg-blush-300/60 blur-3xl"></div>
      <div class="pointer-events-none absolute -bottom-40 -left-24 w-[22rem] h-[22rem] rounded-full bg-white/70 blur-3xl"></div>

      <!-- große Hintergrundnummer -->
      <span class="pointer-events-none select-none absolute right-4 sm:right-10 -bottom-6 sm:-bottom-10 font-serif italic text-[9rem] sm:text-[14rem] lg:text-[18rem] leading-none text-white/70">
        {{ number }}
      </span>

      <div class="container-site relative pt-32 sm:pt-40 pb-16 sm:pb-24 grid gap-10 lg:grid-cols-12 items-end">
        <div class="lg:col-span-7 animate-rise">
          <span class="eyebrow">{{ number }} — {{ eyebrow }}</span>
          <h1 class="display mt-6 text-ink-900 text-balance">
            {{ title }} <span class="accent">{{ accent }}</span>
          </h1>
          @if (subtitle) {
            <p class="lead mt-6 max-w-xl">{{ subtitle }}</p>
          }
          <ng-content></ng-content>
        </div>

        @if (image) {
          <div class="hidden lg:block lg:col-span-4 lg:col-start-9 animate-rise delay-2">
            <div class="arch aspect-[3/4] w-full max-w-[300px] ml-auto ring-[10px] ring-white/60">
              <img [src]="image" alt="" class="w-full h-full object-cover" [style.object-position]="imagePosition" />
            </div>
          </div>
        }
      </div>
    </header>
  `,
})
export class PageHeaderComponent {
  @Input() number = '01';
  @Input() eyebrow = '';
  @Input() title = '';
  @Input() accent = '';
  @Input() subtitle = '';
  @Input() image?: string;
  @Input() imagePosition = 'center';
}
