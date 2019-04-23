<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Spatie\Permission\Traits\HasRoles;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Validator;

class User extends Authenticatable implements JWTSubject
{
  use Notifiable,HasRoles;

  /**
  * The attributes that are mass assignable.
  *
  * @var array
  */
  protected $fillable = [
    'name', 'email', 'password',
  ];

  /**
  * The attributes that should be hidden for arrays.
  *
  * @var array
  */
  protected $hidden = [
    'password', 'remember_token',
  ];

  /**
  * The attributes that should be cast to native types.
  *
  * @var array
  */
  protected $casts = [
    'email_verified_at' => 'datetime',
  ];

  /**
  * Get the identifier that will be stored in the subject claim of the JWT.
  * @return mixed
  */
  public function getJWTIdentifier()
  {
    return $this->getKey();
  }
  /**
  * Return a key value array, containing any custom claims to be added to the JWT.
  * @return array
  */
  public function getJWTCustomClaims()
  {
    return [
      'key1' => $this->email,
      'key2' => $this->password,
      'key3'=>$this->name
    ];
  }

  public static function validateUser($data){
    $rules = [
      'email'=>'required|email|max:191',
      'password'=>'required|min:8|max:30'
    ];
    $messages = [
      'required' => ':attribute field is required.',
      'email' => ':attribute must be a valid.',
      'min' => ':attribute must be at least :min characters.',
      'max' => ':attribute should not be greater than :max characters.',
    ];
    $data = Validator::make($data,$rules,$messages);
    $data->setAttributeNames(array(
      'email' => ucfirst('email'),
      'password' => ucfirst('password')
    ));
    return $data;
  }


  public static function validateRegisterUser($data){
    $rules = [
      'name'=>'required|max:255',
      'email'=>'required|email|max:191|unique:users,email',
      'password'=>'required|min:8|max:30|confirmed'
    ];
    $messages = [
      'required' => ':attribute field is required.',
      'email' => ':attribute must be a valid.',
      'unique' => ':attribute has already been taken.',
      'min' => ':attribute must be at least :min characters.',
      'max' => ':attribute should not be greater than :max characters.',
      'confirmed' => ':attribute confirmation does not match.',
    ];
    $data = Validator::make($data,$rules,$messages);
    $data->setAttributeNames(array(
      'name' => ucfirst('name'),
      'email' => ucfirst('email'),
      'password' => ucfirst('password'),
    ));
    return $data;
  }
}
