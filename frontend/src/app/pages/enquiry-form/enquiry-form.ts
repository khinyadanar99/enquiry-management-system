import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { EnquiryService } from '../../services/enquiry';

@Component({
  selector: 'app-enquiry-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './enquiry-form.html',
  styleUrl: './enquiry-form.css',
})
export class EnquiryForm {

	enquiryForm: FormGroup;

	services = [
		'Strategy & Planning',
		'Operations',
		'HR & People',
		'Finance'
	];

  	successMessage = '';
	errorMessage = '';

  	constructor(private fb: FormBuilder, private enquiryService: EnquiryService) {
		this.enquiryForm = this.fb.group({
			full_name: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			phone: [''],
			service: ['', Validators.required],
			description: ['', Validators.required]
		});
	}

  	submitForm() {
		if (this.enquiryForm.invalid) {
			this.enquiryForm.markAllAsTouched();
			return;
    	}

		this.enquiryService
		.createEnquiry(this.enquiryForm.value)
		.subscribe({
			next: (response) => {
				console.log(response);
				this.successMessage = 'Your enquiry has been submitted successfully.';
      			this.errorMessage = '';
				this.enquiryForm.reset();

				
			},

			error: (error) => {
				console.error(error);
				this.successMessage = '';
      			this.errorMessage = 'Failed to submit enquiry. Please try again.';
				this.enquiryForm.reset();
			}
		});
  	}
}