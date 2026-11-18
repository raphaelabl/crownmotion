import { Component, Input } from '@angular/core';

/** Die Krone aus dem Logo als Linienzeichnung – skaliert mit der Schriftgröße. */
@Component({
  selector: 'app-crown-mark',
  standalone: true,
  template: `
    <svg viewBox="0 -2 120 86" [attr.width]="size" [attr.height]="size * 0.7" fill="none" aria-hidden="true">
      <path d="M38 39.5 L60 11 L82 39.5" [attr.stroke]="accent" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M5 20 L60 54 L115 20 V80 H5 Z" [attr.stroke]="color" stroke-width="2.6" stroke-linejoin="round" />
      <path d="M60 54 V80" [attr.stroke]="color" stroke-width="2.6" />
      <circle cx="5" cy="12" r="4" [attr.fill]="accent" />
      <circle cx="60" cy="3" r="4" [attr.fill]="accent" />
      <circle cx="115" cy="12" r="4" [attr.fill]="accent" />
    </svg>
  `,
  styles: [`:host { display: inline-flex; line-height: 0; }`],
})
export class CrownMarkComponent {
  @Input() size = 40;
  @Input() color = 'currentColor';
  @Input() accent = '#f5b3c9';
}
