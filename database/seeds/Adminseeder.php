<?php

use Illuminate\Database\Seeder;
use App\User;
class Adminseeder extends Seeder
{
  /**
  * Run the database seeds.
  *
  * @return void
  */
  public function run()
  {

    $exist = User::where('email','admin@gmail.com')->first();
    if(null == $exist || ''==$exist){
      $data['name'] = 'admin';
      $data['email'] = 'admin@gmail.com';
      $data['password'] = bcrypt('123456789');
      $user = User::create($data);
    }
  }
}
