import { Injectable } from '@angular/core';
import { Course, DanceStyle, Performance, GalleryItem } from '../models/data.models';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  getDanceStyles(): DanceStyle[] {
    return [
      {
        id: 1,
        name: 'Contemporary',
        description: 'Ein ausdrucksstarker Tanzstil, der Elemente aus Modern Dance, Ballett und Jazz vereint. Contemporary Dance ermöglicht es, Emotionen und Geschichten durch Bewegung zu erzählen.',
        suitableFor: 'Anfänger bis Fortgeschrittene, die ihre Bewegungsfreiheit entdecken möchten',
        image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop&q=80'
      },
      {
        id: 2,
        name: 'Jazz',
        description: 'Energiereicher und dynamischer Tanzstil mit klaren Linien und rhythmischen Bewegungen. Jazz Dance kombiniert Technik mit Leidenschaft und Ausdruck.',
        suitableFor: 'Alle Niveaus, besonders für diejenigen, die Spaß an rhythmischen Bewegungen haben',
        image: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800&h=600&fit=crop&q=80'
      },
      {
        id: 3,
        name: 'Hip Hop',
        description: 'Urbaner Tanzstil mit starken Beats und coolen Moves. Hip Hop Dance ist kraftvoll, rhythmisch und voller Energie.',
        suitableFor: 'Anfänger bis Fortgeschrittene, die ihre Coolness auf die Bühne bringen wollen',
        image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop&q=80'
      },
      {
        id: 4,
        name: 'Heels',
        description: 'Eleganter und femininer Tanzstil in High Heels. Heels Dance verbindet Stärke mit Weiblichkeit und Selbstbewusstsein.',
        suitableFor: 'Fortgeschrittene, die ihre Weiblichkeit und Kraft ausdrücken möchten',
        image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop&q=80'
      },
      {
        id: 5,
        name: 'Showdance',
        description: 'Spektakulärer Bühnentanz mit hohem Unterhaltungswert. Showdance kombiniert verschiedene Stile zu einer mitreißenden Performance.',
        suitableFor: 'Alle Niveaus, die auf der Bühne glänzen möchten',
        image: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800&h=600&fit=crop&q=80'
      }
    ];
  }

  getCourses(): Course[] {
    return[ 
      {
        id: 1,
        title: 'Contemporary für Anfänger',
        level: 'Anfänger',
        location: 'Tanzstudio Berlin Mitte',
        day: 'Montag',
        time: '18:00 - 19:30',
        description: 'Einstieg in die Welt des Contemporary Dance'
      },
      {
        id: 2,
        title: 'Jazz Dance Mittelstufe',
        level: 'Mittel',
        location: 'Tanzstudio Berlin Mitte',
        day: 'Mittwoch',
        time: '19:00 - 20:30',
        description: 'Vertiefung der Jazz-Technik mit Choreografien'
      },
      {
        id: 3,
        title: 'Hip Hop Open Level',
        level: 'Alle Niveaus',
        location: 'Tanzstudio Berlin Mitte',
        day: 'Freitag',
        time: '17:30 - 19:00',
        description: 'Urbaner Tanz für alle Levels'
      },
      {
        id: 4,
        title: 'Heels Dance Fortgeschritten',
        level: 'Fortgeschritten',
        location: 'Tanzstudio Berlin Mitte',
        day: 'Samstag',
        time: '14:00 - 15:30',
        description: 'Intensive Heels-Technik und Choreografien'
      }
    ];
  }

  getPerformances(): Performance[] {
    return [
      {
        id: 1,
        type: 'Solo',
        title: 'Solo-Performance',
        description: 'Individuelle Solo-Auftritte für Events, Shows und besondere Anlässe',
        suitableFor: ['Hochzeiten', 'Firmenfeiern', 'Gala-Abende', 'Private Events']
      },
      {
        id: 2,
        type: 'Gruppe',
        title: 'Gruppen-Performance',
        description: 'Spektakuläre Gruppen-Shows mit professionellen Tänzerinnen',
        suitableFor: ['Große Events', 'Bühnen-Shows', 'Festivals', 'Produktionen']
      },
      {
        id: 3,
        type: 'Workshop',
        title: 'Tanz-Workshops',
        description: 'Interaktive Workshops für Teams, Firmen oder private Gruppen',
        suitableFor: ['Teambuilding', 'Firmen-Events', 'Private Gruppen', 'Tanzschulen']
      }
    ];
  }

  getGalleryItems(): GalleryItem[] {
    return [
      {
        id: 1,
        type: 'image',
        src: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800',
        alt: 'Contemporary Dance Performance',
        category: 'performance'
      },
      {
        id: 2,
        type: 'image',
        src: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800',
        alt: 'Jazz Dance Training',
        category: 'training'
      },
      {
        id: 3,
        type: 'image',
        src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800',
        alt: 'Hip Hop Performance',
        category: 'performance'
      },
      {
        id: 4,
        type: 'image',
        src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800',
        alt: 'Showdance Show',
        category: 'show'
      },
      {
        id: 5,
        type: 'image',
        src: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800',
        alt: 'Contemporary Training',
        category: 'training'
      },
      {
        id: 6,
        type: 'image',
        src: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800',
        alt: 'Stage Performance',
        category: 'show'
      }
    ];
  }
}

