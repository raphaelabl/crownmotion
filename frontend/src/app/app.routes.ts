import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'ueber-mich',
    loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'tanzstile',
    loadComponent: () => import('./components/dance-styles/dance-styles.component').then(m => m.DanceStylesComponent)
  },
  {
    path: 'kurse',
    loadComponent: () => import('./components/courses/courses.component').then(m => m.CoursesComponent)
  },
  {
    path: 'auftritte',
    loadComponent: () => import('./components/performances/performances.component').then(m => m.PerformancesComponent)
  },
  {
    path: 'galerie',
    loadComponent: () => import('./components/gallery/gallery.component').then(m => m.GalleryComponent)
  },
  {
    path: 'kontakt',
    loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

