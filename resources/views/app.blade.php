<!doctype html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name') }}</title>

        <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>

        <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
        <link rel="stylesheet" href="{{ asset(mix('css/app.css')) }}">
        <link rel="icon" href="{{ asset('favicon.png') }}" />
    </head>
    <body>
        <div id="app" data-base="{{ env('APP_BASE_URL') }}"></div>

        @php
            $config = [
                'appName' => config('app.name'),
                'appUrl' => env('APP_URL'),
                'apiUrl' => env('API_URL')
            ];
        @endphp

        <script>
            window.config = '@json($config)'
        </script>

        <script src="{{ asset(mix('js/app.js')) }}"></script>
    </body>
</html>
