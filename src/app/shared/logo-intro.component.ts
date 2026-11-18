import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

/**
 * Intro beim ersten Aufruf: Die Krone setzt sich aus den Buchstaben von EMILY zusammen.
 * E (um 90° gedreht) = Boden + drei Stäbe · M = Außenseiten + V · I = Mittelstab
 * L = linke Seite + Boden · Y = V + Mittelstab.
 * Bei jedem Aufruf der Startseite (nicht bei direktem Aufruf von Unterseiten), aus bei „Bewegung reduzieren“.
 * Mit ?intro in der Adresse auf jeder Seite erzwingbar.
 */
@Component({
  selector: 'app-logo-intro',
  standalone: true,
  template: `
    @if (visible) {
      <div class="intro" [class.leaving]="leaving" role="presentation" (click)="skip()">
        <div class="backdrop"></div>
        <div class="stage">
          <svg viewBox="-8 -6 136 96" class="crown" aria-hidden="true">
            <!-- E: startet aufrecht, dreht sich um 90° und wird zum Boden mit drei Stäben -->
            <g class="e">
              <path pathLength="1" class="ink draw-e" d="M5 80 H115" />
              <path pathLength="1" class="ink draw-e" d="M5 80 V20" />
              <path pathLength="1" class="ink draw-e" d="M60 80 V54" />
              <path pathLength="1" class="ink draw-e" d="M115 80 V20" />
            </g>
            <!-- M: das V zwischen den Außenseiten -->
            <path pathLength="1" class="ink draw-m" d="M5 20 L60 54 L115 20" />

            <!-- Hervorhebungen der einzelnen Buchstaben -->
            <path class="hl hl-m" d="M5 80 V20 L60 54 L115 20 V80" />
            <path class="hl hl-i" d="M60 54 V80" />
            <path class="hl hl-l" d="M5 20 V80 H60" />
            <path class="hl hl-y" d="M5 20 L60 54 L115 20 M60 54 V80" />

            <!-- Krone: rosa Spitze und Punkte -->
            <path pathLength="1" class="accent-line" d="M38 39.5 L60 11 L82 39.5" />
            <circle class="dot d1" cx="5" cy="12" r="4" />
            <circle class="dot d2" cx="60" cy="3" r="4" />
            <circle class="dot d3" cx="115" cy="12" r="4" />
          </svg>

          <div class="letters" aria-hidden="true">
            <span class="l-e">E</span><span class="l-m">M</span><span class="l-i">I</span><span class="l-l">L</span><span class="l-y">Y</span>
          </div>
          <p class="word">Crown <em>Motion</em></p>
        </div>
        <button type="button" class="skip" (click)="skip(); $event.stopPropagation()">Überspringen</button>
      </div>
    }
  `,
  styles: [`
    :host { --ink: #1d1b1c; --pink: #f06292; --blush: #f5b3c9; }
    .intro {
      position: fixed; inset: 0; z-index: 2000;
      display: grid; place-items: center;
      transition: opacity .7s ease, transform .9s cubic-bezier(.7,0,.3,1);
      cursor: pointer;
    }
    .backdrop { position: absolute; inset: 0; background: radial-gradient(60% 50% at 50% 45%, #fdeef3 0%, #fffbfc 70%);
                transition: opacity .7s ease .1s; }
    .intro.leaving { opacity: 0; transform: translateY(-4%); pointer-events: none; }
    .stage { position: relative; display: flex; flex-direction: column; align-items: center; gap: 1.75rem; }
    .crown { width: min(56vw, 260px); overflow: visible; }

    path { fill: none; stroke-linecap: round; stroke-linejoin: round; }
    /* Unsichtbar bis zum Zeichnen: Safari (iPhone) malt sonst bei runden Linienenden kleine Punkte */
    .ink { stroke: var(--ink); stroke-width: 2.6; stroke-dasharray: 1; stroke-dashoffset: 1; opacity: 0; }

    /* E zeichnen, dann drehen */
    .e { transform-box: view-box; transform-origin: 60px 50px; transform: rotate(90deg) scale(.62);
         animation: e-turn 1s cubic-bezier(.65,0,.25,1) 1s both; }
    .draw-e { animation: draw .7s ease-out .25s both; }
    .draw-m { animation: draw .6s ease-out 2.1s both; }

    .hl { stroke: var(--pink); stroke-width: 4.5; opacity: 0; }
    .hl-m { animation: flash .75s ease 2.1s; }
    .hl-i { animation: flash .6s ease 2.85s; }
    .hl-l { animation: flash .6s ease 3.4s; }
    .hl-y { animation: flash .6s ease 3.95s; }

    .accent-line { stroke: var(--blush); stroke-width: 2.2; stroke-dasharray: 1; stroke-dashoffset: 1;
                   opacity: 0; animation: draw .6s ease-out 4.55s both; }
    .dot { fill: var(--blush); transform-box: fill-box; transform-origin: center; transform: scale(0); opacity: 0;
           animation: pop .45s cubic-bezier(.3,1.6,.5,1) both; }
    .d1 { animation-delay: 4.9s; } .d2 { animation-delay: 5s; } .d3 { animation-delay: 5.1s; }

    .letters { display: flex; gap: .9rem; font-family: Fraunces, serif; font-size: clamp(1.4rem, 4vw, 1.9rem);
               letter-spacing: -.02em; color: var(--ink); }
    .letters span { opacity: .18; animation: letter 1s ease both; }
    .l-e { animation: letter-long 2s ease .25s both !important; }
    .l-m { animation-delay: 2.1s !important; }
    .l-i { animation-delay: 2.85s !important; }
    .l-l { animation-delay: 3.4s !important; }
    .l-y { animation-delay: 3.95s !important; }
    .letters { animation: letters-done .6s ease 4.6s forwards; }

    .word { font-family: Fraunces, serif; font-size: clamp(1.1rem, 3vw, 1.35rem); letter-spacing: -.02em;
            color: var(--ink); opacity: 0; margin-top: -2.6rem; animation: fade-in .7s ease 4.9s forwards; }
    .word em { color: var(--pink); }

    .skip { position: absolute; bottom: max(1.5rem, env(safe-area-inset-bottom)); left: 50%; transform: translateX(-50%);
            font: 600 .72rem Manrope, sans-serif; letter-spacing: .22em; text-transform: uppercase;
            color: #6b6467; background: none; border: 0; padding: .75rem 1rem; cursor: pointer; }
    .skip:hover { color: var(--ink); }

    @keyframes draw { 0% { stroke-dashoffset: 1; opacity: 0; } 2%, 100% { opacity: 1; } 100% { stroke-dashoffset: 0; } }
    @keyframes e-turn { to { transform: rotate(0deg) scale(1); } }
    @keyframes flash { 0%, 100% { opacity: 0; } 30%, 70% { opacity: 1; } }
    @keyframes pop { 0% { transform: scale(0); opacity: 0; } 20%, 100% { opacity: 1; } 100% { transform: scale(1); } }
    @keyframes letter { 0%, 100% { opacity: .18; color: var(--ink); } 25%, 70% { opacity: 1; color: var(--pink); } }
    @keyframes letter-long { 0%, 100% { opacity: .18; color: var(--ink); } 15%, 80% { opacity: 1; color: var(--pink); } }
    @keyframes letters-done { to { opacity: 0; transform: translateY(-.5rem); } }
    @keyframes fade-in { to { opacity: 1; } }
  `],
})
export class LogoIntroComponent implements OnInit, OnDestroy {
  visible = false;
  leaving = false;
  private timers: ReturnType<typeof setTimeout>[] = [];
  private static readonly DURATION = 6200;

  ngOnInit(): void {
    const forced = /[?&]intro\b/.test(location.search);
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const home = location.pathname === '/' || location.pathname === '';
    if (!forced && (reduced || !home)) return;

    this.visible = true;
    document.documentElement.classList.add('intro-running');
    this.timers.push(setTimeout(() => this.skip(), LogoIntroComponent.DURATION));
  }

  @HostListener('document:keydown.escape')
  skip(): void {
    if (!this.visible || this.leaving) return;
    this.leaving = true;
    document.documentElement.classList.remove('intro-running');
    this.timers.push(setTimeout(() => (this.visible = false), 900));
  }

  ngOnDestroy(): void {
    this.timers.forEach(clearTimeout);
    document.documentElement.classList.remove('intro-running');
  }
}
