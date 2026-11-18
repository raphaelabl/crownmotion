import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import seo from '../../seo.json';

/**
 * Setzt Titel, Beschreibung, Canonical-Link und Open-Graph-Tags passend zur aktuellen Seite.
 * Die Werte stehen in src/seo.json – dieselbe Datei nutzt scripts/prerender-seo.mjs für die statischen Seiten.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(
    private router: Router,
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private doc: Document,
  ) {}

  init(): void {
    this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd)).subscribe(e => {
      const path = e.urlAfterRedirects.split(/[?#]/)[0].replace(/^\/+|\/+$/g, '');
      const page = seo.routes.find(r => r.path === path) ?? seo.routes[0];
      const url = seo.site + (page.path ? '/' + page.path : '/');

      this.title.setTitle(page.title);
      this.meta.updateTag({ name: 'description', content: page.description });
      this.meta.updateTag({ property: 'og:title', content: page.title });
      this.meta.updateTag({ property: 'og:description', content: page.description });
      this.meta.updateTag({ property: 'og:url', content: url });

      let link = this.doc.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!link) {
        link = this.doc.createElement('link');
        link.rel = 'canonical';
        this.doc.head.appendChild(link);
      }
      link.href = url;
    });
  }
}
