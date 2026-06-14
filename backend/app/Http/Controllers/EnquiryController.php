<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Enquiry;
use Illuminate\Http\Request;

class EnquiryController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'full_name' => 'required|max:255',
            'email' => 'required|email',
            'phone_number' => 'nullable|max:50',
            'service' => 'required',
            'description' => 'required'
        ]);

        $enquiry = Enquiry::create([
            'full_name' => $validated['full_name'],
            'email' => $validated['email'],
            'phone_number' => $validated['phone_number'] ?? null,
            'service' => $validated['service'],
            'description' => $validated['description'],
            'status' => 'Pending'
        ]);

        return response()->json([
            'message' => 'Enquiry submitted successfully',
            'data' => $enquiry
        ], 201);
    }

    public function index()
    {
        $enquiries = Enquiry::latest()->get();

        return response()->json($enquiries);
    }

    public function show(Enquiry $enquiry)
    {
        return response()->json($enquiry);
    }

    public function update(Request $request, Enquiry $enquiry)
    {
        $request->validate([
            'status' => 'required|in:Pending,Reviewed'
        ]);

        $enquiry->update([
            'status' => $request->status
        ]);

        return response()->json([
            'message' => 'Status updated successfully',
            'data' => $enquiry
        ]);
    }
}
