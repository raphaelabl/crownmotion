# Tanz ist meine Sprache - Professionelle Tänzerin Website

Eine moderne, responsive Website für eine professionelle Tänzerin, erstellt mit Angular 17 und modernen Web-Technologien.

## 🎯 Features

- **Moderne Angular 17 Architektur** mit Standalone Components
- **Responsive Design** - Mobile-First Ansatz
- **7 Hauptseiten:**
  - Startseite mit Hero-Section
  - Über mich
  - Tanzstile
  - Kurse & Unterricht
  - Auftritte & Buchung
  - Galerie
  - Kontakt mit DSGVO-konformem Formular
- **Elegantes Design** mit viel Weißraum und großen Bildern
- **Sanfte Animationen** für ein Bewegungsgefühl
- **SEO-optimiert**
- **Einfache Pflege** der Inhalte über DataService

## 🚀 Installation & Start

### Voraussetzungen

- Node.js (Version 18 oder höher)
- npm oder yarn

### Installation

```bash
# Dependencies installieren
npm install

# Development Server starten
npm start

# Die Website ist dann unter http://localhost:4200 erreichbar
```

### Build für Production

```bash
# Production Build erstellen
npm run build

# Die fertigen Dateien befinden sich im dist/ Ordner
```

## 📁 Projektstruktur

```
src/
├── app/
│   ├── components/
│   │   ├── about/           # Über mich Seite
│   │   ├── contact/         # Kontakt Seite
│   │   ├── courses/         # Kurse Seite
│   │   ├── dance-styles/    # Tanzstile Seite
│   │   ├── footer/          # Footer Komponente
│   │   ├── gallery/         # Galerie Seite
│   │   ├── home/            # Startseite
│   │   ├── navigation/      # Navigation Komponente
│   │   └── performances/    # Auftritte Seite
│   ├── models/              # TypeScript Interfaces
│   ├── services/            # DataService für Inhalte
│   ├── app.component.ts     # Hauptkomponente
│   └── app.routes.ts        # Routing Konfiguration
├── assets/                  # Bilder, Videos, etc.
├── index.html
├── main.ts
└── styles.scss              # Globale Styles
```

## 🎨 Inhalte anpassen

Alle Inhalte können einfach über den `DataService` angepasst werden:

### Tanzstile bearbeiten
`src/app/services/data.service.ts` → `getDanceStyles()`

### Kurse bearbeiten
`src/app/services/data.service.ts` → `getCourses()`

### Auftritte bearbeiten
`src/app/services/data.service.ts` → `getPerformances()`

### Galerie-Bilder bearbeiten
`src/app/services/data.service.ts` → `getGalleryItems()`

## 🖼️ Bilder hinzufügen

1. Bilder in `src/assets/images/` speichern
2. Im DataService den Pfad anpassen: `src/assets/images/dein-bild.jpg`

## 📧 Kontaktformular

Das Kontaktformular ist DSGVO-konform mit:
- Pflichtfeld für Datenschutzerklärung
- Optionaler Newsletter-Anmeldung
- Validierung aller Felder

**Wichtig:** Für die tatsächliche Formular-Übermittlung muss ein Backend-Service integriert werden (z.B. Email-Service, Form-Service wie Formspree, etc.).

## 🌐 SEO & Meta-Tags

Meta-Tags können in `src/index.html` angepasst werden.

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 968px
- Desktop: > 968px

## 🎭 Design-System

### Farben
- Primär: #d4a574 (Gold/Beige)
- Sekundär: #667eea (Lila)
- Text: #2c2c2c (Dunkelgrau)
- Hintergrund: #ffffff / #fafafa

### Typografie
- Überschriften: 'Playfair Display', serif
- Fließtext: 'Inter', sans-serif

## 🔧 Technologien

- **Angular 17** - Framework
- **TypeScript** - Programmiersprache
- **SCSS** - Styling
- **RxJS** - Reactive Programming
- **Angular Animations** - Animationen

## 📝 Nächste Schritte

1. **Backend Integration:** Kontaktformular mit Backend verbinden
2. **Bilder:** Eigene Bilder hochladen und in Assets speichern
3. **Social Media:** Links zu echten Social Media Profilen hinzufügen
4. **Analytics:** Google Analytics oder ähnliches integrieren
5. **Impressum & Datenschutz:** Rechtliche Seiten erstellen
6. **Mehrsprachigkeit:** i18n für mehrere Sprachen vorbereiten

## 📄 Lizenz

Dieses Projekt wurde für eine professionelle Tänzerin erstellt.

## 🤝 Support

Bei Fragen oder Problemen bitte eine Issue erstellen.

---

**Viel Erfolg mit deiner Website! 💃✨**

