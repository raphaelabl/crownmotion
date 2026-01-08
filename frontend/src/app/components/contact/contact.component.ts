import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: []
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = signal(false);
  success = signal(false);

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
      privacy: [false, Validators.requiredTrue],
      newsletter: [false]
    });
  }

  onSubmit() {
    this.submitted.set(true);

    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      this.success.set(true);
      this.contactForm.reset();
      this.submitted.set(false);
      
      setTimeout(() => {
        this.success.set(false);
      }, 5000);
    }
  }

  get f() {
    return this.contactForm.controls;
  }
}

