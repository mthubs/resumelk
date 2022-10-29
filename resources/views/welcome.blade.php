<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Resumelk</title>

    <link rel="icon" type="image/x-icon" href="/images/logo.png">

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,700,900&display=swap" rel="stylesheet" />

    <link href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" rel="stylesheet" />

    <link rel="stylesheet" href="{{ asset('css/custom.css') }}">

    @vite(['resources/js/app.js'])
</head>
<body>
<div id="app">
    <router-view></router-view>
</div>
</body>
</html>
