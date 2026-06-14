import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnquiryService } from '../../services/enquiry';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin implements OnInit {

	enquiries = signal<any[]>([]);

	selectedEnquiry = signal<any | null>(null);

	searchTerm = signal('');
	selectedService = signal('');
	selectedStatus = signal('');

	services = [
		'Strategy & Planning',
		'Operations',
		'HR & People',
		'Finance'
	];

  	filteredEnquiries = computed(() => {
  		return this.enquiries().filter(enquiry => {

			const matchesName =
			enquiry.full_name
				.toLowerCase()
				.includes(this.searchTerm().toLowerCase());

			const matchesService =
			!this.selectedService() ||
			enquiry.service === this.selectedService();

			const matchesStatus =
			!this.selectedStatus() ||
			enquiry.status === this.selectedStatus();

			return matchesName && matchesService && matchesStatus;
		});
	});

  	constructor(private enquiryService: EnquiryService) {}

  	ngOnInit(): void {
    	this.loadEnquiries();
  	}

  	loadEnquiries() {
		this.enquiryService.getEnquiries().subscribe({
			next: (data: any) => {
				this.enquiries.set(data);
			},
			error: (error) => {
				console.error(error);
			}
		});
  	}

	viewDetails(enquiry: any) {
		this.selectedEnquiry.set(enquiry);
	}

  	updateStatus(enquiry: any, status: string) {

		this.enquiryService
			.updateEnquiry(enquiry.id, {
				status: status
			})
			.subscribe({
				next: () => {
				this.enquiries.update((list) =>
					list.map((e) => (e.id === enquiry.id ? { ...e, status } : e))
				);
				},
				error: (error) => {
				console.error(error);
				}
			});
  	}

	closeModal() {
		this.selectedEnquiry.set(null);
	}
}