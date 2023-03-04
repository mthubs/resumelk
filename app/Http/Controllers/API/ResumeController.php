<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\ResumeListResource;
use App\Http\Resources\ResumeResource;
use App\Models\Resume;
use Illuminate\Http\Request;
use Faker\Factory as Faker;

class ResumeController extends Controller
{
    public function index(Request $request)
    {
        return response()->json([
            'resumes' => ResumeListResource::collection($request->user()->resumesByLatestUpdated)
        ]);
    }

    public function show(Request $request, Resume $resume)
    {
        try {
            return response()->json(ResumeResource::make($resume));
        } catch (\Exception $e) {
            return response()->json([ 'message' => $e->getMessage() ], 400);
        }
    }

    public function create(Request $request)
    {
        $faker = Faker::create();

        $resume = Resume::create([
            'user_id' => $request->user()->id,
            'title' => ucwords($faker->words(2, true)),
        ]);

        return response()->json([
            'id' => $resume->id
        ], 201);
    }

    public function destroy(Request $request, Resume $resume)
    {
        try {
            $resume->delete();
            return response()->json([
                'id' => $resume->id
            ]);
        } catch (\Exception $e) {
            return response()->json([ 'message' => $e->getMessage() ], 400);
        }
    }
}
