# laravel-angular-boilerplate
Quickstart for Laravel 5.8+ Angular 7.0 projects

# Includes:

**Front-end:**
- Angular boilerplate template
- JWT authentication service
- Login/Register components

**Back-end:**
- Boilerplate file
- JWT authentication

# Installation:
``` git clone https://github.com/jadavpalak/laravel-angular-boilerplate.git  ```

``` cd laravel-angular-boilerplate ```

 ```composer install```
 
 ``` cd public/app  ```
 
 ```npm install ```
 
 # Database setup
 
``` Create new file .env same as .env.example according to your environment. run command php artisan key:generate to generate application. ```

Run these commands to create the tables within the database you have already created and create admin.

``` php artisan migrate:refresh --seed  ```


# Run:

To start laravel server:

``` php artisan serve ```

To start angular server got root->public->app:

``` ng serve or npm start ```


