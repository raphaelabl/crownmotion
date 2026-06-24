import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Registration } from 'src/app/models/data.models';
import { DataService } from 'src/app/services/data.service';

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

  registration: Registration = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    privacy: false
  };

  constructor(private fb: FormBuilder, private http: DataService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(400)]],
      privacy: [false, Validators.requiredTrue],
      newsletter: [false]
    });
  }

  onSubmit() {


    this.submitted.set(true);

    if (this.contactForm.valid) {

      this.registration = {
        name: this.contactForm.value.name ?? "",
        email: this.contactForm.value.email ?? "",
        phone: this.contactForm.value.phone ?? "",
        subject: this.contactForm.value.subject ?? "",
        message: this.contactForm.value.message ?? "",
        privacy: this.contactForm.value.privacy ?? false
      };

      this.http.postRegistration(this.registration).subscribe({
        next: data => {
          this.success.set(true);
          this.contactForm.reset();
          this.submitted.set(false);

          setTimeout(() => {
            this.success.set(false);
          }, 5000);
        },
        error: err => {
          this.success.set(false);
        }
      })


      

    }
  }

  get f() {
    return this.contactForm.controls;
  }
}

