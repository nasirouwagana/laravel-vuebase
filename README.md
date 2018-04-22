# Laravel Vuebase
Integration [Vuebase](https://github.com/nasirouwagana/vuebase) with Laravel 5.6

## Prerequisites
- PHP >=7.1.3

## Features
- Laravel 5.6.17
- Vue 2.5.16
- Vuetify 1.0.16

## Installation
- git clone git@github.com:nasirouwagana/laravel-vuebase.git project-name
- cd project-name
- cp .env.example .env
- Edit .env and set your database connection details, ``APP_URL``, ``API_URL``, ``APP_BASE_URL`` and more.
- composer install
- php artisan key:generate
- npm install

## Usage
#### Development
```bash
php artisan serve
npm run watch
```

#### Production
```bash
npm run production
```
