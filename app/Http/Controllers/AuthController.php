<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $user = User::where('email', $request->email)
            ->first();

        if (!$user) {
            return response()->json([
                'message' => __('Girilen bilgiler hatalı')
            ], 401);
        }

        $attempt = Auth::attempt($request->only('email', 'password'));

        if (!$attempt) {
            return response()->json([
                'message' => __('Girilen bilgiler hatalı')
            ], 401);
        }

        return response()->json([
            'user' => $user,
        ]);

    }

    public function logout(Request $request)
    {
        Auth::logout();

        return response()->json([
            'status' => 'success',
            'message' => 'Successfully logged out',
        ]);
    }
}
