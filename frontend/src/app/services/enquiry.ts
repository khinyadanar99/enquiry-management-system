import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})

export class EnquiryService {

	private api = 'http://localhost:8000/api/enquiries';

	constructor(private http: HttpClient) {}

	createEnquiry(data: any) {
		return this.http.post(this.api, data);
	}

	getEnquiries() {
		return this.http.get(this.api);
	}

	getEnquiryDetail(id: number) {
		return this.http.get(`${this.api}/${id}`);
	}

	updateEnquiry(id: number, data: any) {
		return this.http.patch(`${this.api}/${id}`, data);
	}
}