# enquiry-management-system

## Prerequisites

- PHP 8.x
- Composer
- Node.js and npm
- Angular CLI
- SQLite

Ensure the following are installed:

```bash
php -v
composer -V
node -v
npm -v
ng version
```

## Setup Instructions

### Backend Setup
Navigate to the backend folder:
```bash
cd backend
```

Install dependencies:
```bash
composer install
```

Run database migrations:
```bash
php artisan migrate
```

Start the Laravel development server:
```bash
php artisan serve
```

The backend API will be available at:
http://127.0.0.1:8000

### Frontend Setup
Open a new terminal and navigate to the frontend folder:
```bash
cd frontend
```

Install dependencies:
```bash
npm install
```

Start the Angular development server:
```bash
ng serve
```

The frontend application will be available at:
- User Enquiry Form: http://localhost:4200
- Admin Dashboard: http://localhost:4200/admin

## Improvement & Trade-offs
Given more time, I would implement real-time updates between the enquiry form and admin dashboard using WebSockets or polling so that newly submitted enquiries and status changes are reflected immediately without requiring a page refresh. I would also add automated end-to-end tests and a Docker setup to improve reliability and make the project easier to run in different environments. 

If the application needed to support a larger number of enquiries, I would consider using a more scalable table solution (I am familiar with Tanstack Table on React, but not sure what options exist for Angular) with features such as virtualisation or pagination.

For this challenge, I focused on delivering the core requirements and keeping the solution straightforward. I chose SQLite because it is lightweight, easy to set up, and appropriate for the scope of the project. I also followed RESTful conventions where possible, such as using PATCH for partial updates when changing an enquiry's status, and validated the API endpoints using Postman during development. I also made sure correct HTTP status codes were returned (e.g. 422 unprocessable content).

One thing I would like to highlight is that while I have previous experience with React, Express, and PHP, Angular and Laravel were relatively new technologies for me. I chose to use them because they align with the technologies used by Bluefuse, and I wanted to challenge myself to learn the stack while building the project. Through developing this application, I gained practical experience with Angular and Laravel, including building RESTful APIs, working with controllers and resource routes, and integrating the frontend with the backend.
