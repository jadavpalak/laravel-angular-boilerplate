<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Log;
use DB;
use JWTAuth;
use Validator;
use ResponseManager;
use App\User;
use Illuminate\Support\Facades\Crypt;

/**
* @author : ####
* Created on : ###
*
* Class name: AuthController
* Create a class for AuthController.
*/
class AuthController extends Controller
{
  public function register(Request $request){
    Log::info('AuthController::register::START');
    $result = DB::transaction(function () use ($request) {
      try {
        $input = $request->all();
        if(null != $input && '' != $input && array_key_exists('data',$input)){
          $validation = User::validateRegisterUser($input['data']);
          if ($validation != null && $validation != "" && $validation->fails()) {
            $breakline = $validation->messages()->all();
            $message = implode("\n", $breakline);
            Log::warning('AuthController::register::' . $message);
            return Response()->json(ResponseManager::getError('', 10, $message));
          }
          $data['name'] = $input['data']['name'];
          $data['email'] = $input['data']['email'];
          $data['password'] = bcrypt($input['data']['password']);
          $user = User::create($data);
          if(null!=$data && ''!=$data){
            Log::info('AuthController::register::END');
            return Response()->json(ResponseManager::getResult('', 200, REGISTER_SUCC));
          }else{
            Log::warning('AuthController::register::' . REGISTER_FAILED);
            return Response()->json(ResponseManager::getError('', 10, REGISTER_FAILED));
          }
        }else{
          Log::warning('AuthController::register::' . INPUT_NULL);
          return Response()->json(ResponseManager::getError('', 10, INPUT_NULL));
        }
      }catch (Exception $ex) {
        Log::error('AuthController::register::');
        throw new Exception($ex);
      }
    });
    return $result;
  }

  /**
  * @author:####
  * Created on : ###
  *
  * Method name: login
  * This method is used for login the user.
  *
  * @param  {varchar} email - email of the user.
  * @param  {varchar} password - password of the user.
  * @return  jwt token,Response code,message.
  * @exception throw if any error occur when login to user.
  */
  public function login(Request $request){
    Log::info('AuthController::login::START');
    $result = DB::transaction(function () use ($request) {
      try {
        $credentials = $request->only('email', 'password');
        $validation = User::validateUser($credentials);
        if ($validation != null && $validation != "" && $validation->fails()) {
          $breakline = $validation->messages()->all();
          $message = implode("\n", $breakline);
          Log::warning('AuthController::login::' . $message);
          return Response()->json(ResponseManager::getError('', 10, $message));
        }
        $user = User::where('email',$credentials['email'])->first();
        if(null == $user || '' == $user){
          Log::warning('AuthController::login::' . INVALID_EMAIL);
          return Response()->json(ResponseManager::getError('', 10, INVALID_EMAIL));
        }
        $customClaims = ['key1' => $credentials['email'], 'key2' => Crypt::encrypt($credentials['password'])];
        if (!$token = JWTAuth::attempt($credentials,$customClaims)) {
          Log::warning('AuthController::login::' . INVALID_EMAIL);
          return Response()->json(ResponseManager::getError('', 10, INVALID_EMAIL));
        }else{
          $data['token'] = $token;
          $data['user'] = $user;
          Log::info('AuthController::login::END');
          return Response()->json(ResponseManager::getResult($data, 200, SUCCESS));
        }
      }catch (Exception $ex) {
        Log::error('AuthController::login::');
        throw new Exception($ex);
      }

    });
    return $result;
  }

  /**
  * @author:####
  * Created on : ###
  *
  * Method name: Logout
  * This method is used for logout the user.
  *
  * @return Response code,message.
  * @exception throw if any error occur when logout to user.
  */
  public function logout(Request $request)
  {
    Log::info('AuthController::logout::START');
    try {
      $token = JWTAuth::getToken();
      if(null!=$token && ''!=$token){
        JWTAuth::invalidate($token);
        Log::info('AuthController::logout::END');
        return Response()->json(ResponseManager::getResult('', 200, SUCCESS));
      }else{
        Log::info('AuthController::logout::END');
        return Response()->json(ResponseManager::getError('', 10, LOGOUT_FAILED));
      }
    } catch (JWTException $e) {
      /* something went wrong whilst attempting to encode the token */
      Log::info('AuthController::logout::'.LOGOUT_FAILED);
      return Response()->json(ResponseManager::getError('', LOGOUT_FAILED));
    }

  }

}
