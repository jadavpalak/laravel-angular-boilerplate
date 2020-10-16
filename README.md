<div align="center">
	<img src="https://repository-images.githubusercontent.com/180004237/f9711e00-3884-11ea-8201-6a2fe2629de5" width="400" alt="Laravel + Angular Logo"/>
</div>

# laravel-angular-boilerplate
Quickstart for Laravel 5.8+ Angular 7.0 projects with JWT auth.

# Includes:

**Front-end:**
- Angular CLI boilerplate template
- JWT authentication service
- Login/Register components (Angular Material)

**Back-end:**
- Boilerplate file
- JWT authentication
- composer vendor files

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


