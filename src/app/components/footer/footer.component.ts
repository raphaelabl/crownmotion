import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CrownMarkComponent } from '../../shared/crown-mark.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, CrownMarkComponent],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  currentYear = computed(() => new Date().getFullYear());

  readonly links = [
    { label: 'Start', link: '/' },
    { label: 'Über mich', link: '/ueber-mich' },
    { label: 'Tanzstile', link: '/tanzstile' },
    { label: 'Kurse', link: '/kurse' },
    { label: 'Auftritte', link: '/auftritte' },
    { label: 'Galerie', link: '/galerie' },
    { label: 'Kontakt', link: '/kontakt' },
  ];

  readonly socials = [
    { label: 'Instagram', href: 'https://www.instagram.com/emily_henle/' },
    { label: 'YouTube', href: 'https://www.youtube.com/@emily_henle' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@emilyhenle' },
    { label: 'Spotify', href: 'https://open.spotify.com/intl-de/artist/1YFRRRBrANfvdRqZQdBdws' },
  ];
}
