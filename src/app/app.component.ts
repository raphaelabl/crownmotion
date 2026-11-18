import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoIntroComponent } from './shared/logo-intro.component';
import { SeoService } from './shared/seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, FooterComponent, LogoIntroComponent],
  template: `
    <app-logo-intro></app-logo-intro>
    <app-navigation></app-navigation>
    <main class="min-h-screen">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
})
export class AppComponent {
  title = 'Crown-Motion';

  constructor(seo: SeoService) {
    seo.init();
  }
}
