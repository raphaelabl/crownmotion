import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RevealDirective } from './reveal.directive';
import { CrownMarkComponent } from './crown-mark.component';

/** Dunkles Abschlussband mit Einladung zur Kontaktaufnahme. */
@Component({
  selector: 'app-cta-band',
  standalone: true,
  imports: [RouterModule, RevealDirective, CrownMarkComponent],
  template: `
    <section class="px-3 sm:px-5 pb-3 sm:pb-5">
      <div class="relative overflow-hidden rounded-[2rem] sm:rounded-[2.75rem] bg-ink-900 text-white">
        <div class="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[46rem] h-[46rem] rounded-full bg-blush-500/25 blur-[120px]"></div>

        <!-- geschwungene Bewegungslinie -->
        <svg class="pointer-events-none absolute inset-x-0 bottom-0 w-full h-40 sm:h-56 text-blush-300/40" viewBox="0 0 1200 200" preserveAspectRatio="none" fill="none">
          <path d="M-20 160 C 200 40, 380 210, 600 110 S 980 20, 1220 120" stroke="currentColor" stroke-width="1.5" />
          <path d="M-20 190 C 220 80, 420 230, 640 140 S 1000 60, 1220 160" stroke="currentColor" stroke-width="1" opacity=".6" />
        </svg>

        <div class="relative container-site py-20 sm:py-28 text-center" appReveal>
          <app-crown-mark [size]="46" color="#fff" accent="#f5b3c9"></app-crown-mark>
          <h2 class="heading mt-8 text-balance max-w-3xl mx-auto">
            {{ title }} <span class="accent text-blush-300">{{ accent }}</span>
          </h2>
          <p class="mt-6 text-base sm:text-lg text-white/70 max-w-xl mx-auto">{{ text }}</p>
          <div class="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a [routerLink]="primaryLink" class="btn btn-blush">{{ primaryLabel }} <span class="btn-arrow">→</span></a>
            @if (secondaryLabel) {
              <a [routerLink]="secondaryLink" class="btn btn-ghost-light">{{ secondaryLabel }}</a>
            }
          </div>
        </div>
      </div>
    </section>
  `,
})
export class CtaBandComponent {
  @Input() title = 'Lass uns gemeinsam';
  @Input() accent = 'tanzen.';
  @Input() text = 'Entdecke meine Kurse oder buche mich für dein Event.';
  @Input() primaryLabel = 'Kontakt aufnehmen';
  @Input() primaryLink = '/kontakt';
  @Input() secondaryLabel = '';
  @Input() secondaryLink = '/kurse';
}
