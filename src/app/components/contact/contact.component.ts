import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Registration } from 'src/app/models/data.models';
import { DataService } from 'src/app/services/data.service';
import { PageHeaderComponent } from 'src/app/shared/page-header.component';
import { RevealDirective } from 'src/app/shared/reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, PageHeaderComponent, RevealDirective],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = signal(false);
  success = signal(false);
  sending = signal(false);
  error = signal(false);

  readonly subjects = [
    { value: 'kurs', label: 'Kurs-Anfrage' },
    { value: 'auftritt', label: 'Auftritt buchen' },
    { value: 'workshop', label: 'Workshop-Anfrage' },
    { value: 'sonstiges', label: 'Sonstiges' },
  ];

  readonly socials = [
    { label: 'Instagram', href: 'https://www.instagram.com/emily_henle/' },
    { label: 'YouTube', href: 'https://youtube.com/@emily_henle' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@emilyhenle' },
    { label: 'Spotify', href: 'https://open.spotify.com/intl-de/artist/1YFRRRBrANfvdRqZQdBdws' },
  ];

  constructor(private fb: FormBuilder, private http: DataService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(400)]],
      privacy: [false, Validators.requiredTrue],
      newsletter: [false],
    });
  }

  onSubmit() {
    this.submitted.set(true);
    this.error.set(false);

    if (this.contactForm.invalid) return;

    const registration: Registration = {
      name: this.contactForm.value.name ?? '',
      email: this.contactForm.value.email ?? '',
      phone: this.contactForm.value.phone ?? '',
      subject: this.contactForm.value.subject ?? '',
      message: this.contactForm.value.message ?? '',
      privacy: this.contactForm.value.privacy ?? false,
    };

    this.sending.set(true);
    this.http.postRegistration(registration).subscribe({
      next: () => {
        this.sending.set(false);
        this.success.set(true);
        this.contactForm.reset({ privacy: false, newsletter: false, subject: '' });
        this.submitted.set(false);
      },
      error: () => {
        this.sending.set(false);
        this.error.set(true);
      },
    });
  }

  get f() {
    return this.contactForm.controls;
  }
}
