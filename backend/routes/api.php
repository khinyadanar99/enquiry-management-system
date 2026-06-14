<?php

use App\Http\Controllers\EnquiryController;

Route::post('/enquiries', [EnquiryController::class, 'store']);

Route::get('/enquiries', [EnquiryController::class, 'index']);

Route::get('/enquiries/{enquiry}', [EnquiryController::class, 'show']);

Route::patch('/enquiries/{enquiry}', [EnquiryController::class, 'update']);
