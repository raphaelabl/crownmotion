import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RevealDirective } from '../../shared/reveal.directive';
import { CrownMarkComponent } from '../../shared/crown-mark.component';
import { CtaBandComponent } from '../../shared/cta-band.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, RevealDirective, CrownMarkComponent, CtaBandComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  readonly styles = ['Modern', 'Contemporary', 'Jazz', 'Hip Hop', 'Commercial', 'Ballett', 'Heels', 'Showdance', 'Musical'];

  readonly offers = [
    {
      title: 'Unterricht & Workshops',
      text: 'Individuell angepasste Kurse für alle Niveaus – oder gezielte Workshops für dein Team, deine Schule oder deinen Verein.',
      link: '/kurse',
      cta: 'Zu den Kursen',
    },
    {
      title: 'Musical Theater',
      text: 'Entdecke die zauberhafte Welt des Musicals – die Kunst, in der sich Tanz, Schauspiel und Gesang verbinden.',
      link: '/tanzstile',
      cta: 'Mehr erfahren',
    },
    {
      title: 'Vielseitigkeit',
      text: 'Modern/Contemporary, Jazz, HipHop, Commercial, Ballett, Heels und Showdance – für jeden Geschmack.',
      link: '/tanzstile',
      cta: 'Tanzstile ansehen',
    },
    {
      title: 'Events & Shows',
      text: 'Professionelle Auftritte für Bälle, Hochzeiten, Feiern aller Art und besondere Anlässe.',
      link: '/auftritte',
      cta: 'Auftritt buchen',
    },
  ];
}
