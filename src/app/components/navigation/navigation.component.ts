import { Component, HostListener, OnDestroy, signal } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { CrownMarkComponent } from '../../shared/crown-mark.component';

interface NavItem {
  label: string;
  link: string;
}

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule, CrownMarkComponent],
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnDestroy {
  isMenuOpen = signal(false);
  isScrolled = signal(false);

  readonly items: NavItem[] = [
    { label: 'Start', link: '/' },
    { label: 'Über mich', link: '/ueber-mich' },
    { label: 'Tanzstile', link: '/tanzstile' },
    { label: 'Kurse', link: '/kurse' },
    { label: 'Auftritte', link: '/auftritte' },
    { label: 'Galerie', link: '/galerie' },
  ];

  private readonly sub: Subscription;

  constructor(router: Router, @Inject(DOCUMENT) private readonly document: Document) {
    this.sub = router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => this.closeMenu());
    this.onScroll();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set((this.document.defaultView?.scrollY ?? 0) > 24);
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.closeMenu();
  }

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
    this.lockScroll(this.isMenuOpen());
  }

  closeMenu() {
    this.isMenuOpen.set(false);
    this.lockScroll(false);
  }

  private lockScroll(lock: boolean) {
    this.document.body.style.overflow = lock ? 'hidden' : '';
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
