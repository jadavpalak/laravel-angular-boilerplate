<?php

namespace App\Http\Middleware;
use Closure;
use JWTAuth;
use Exception;
use ResponseManager;
use Log;
use Tymon\JWTAuth\Http\Middleware\BaseMiddleware;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Illuminate\Support\Facades\Auth;

class JwtMiddleware extends BaseMiddleware
{
  /**
  * Handle an incoming request.
  *
  * @param  \Illuminate\Http\Request  $request
  * @param  \Closure  $next
  * @return mixed
  */
  public function handle($request, Closure $next)
  {
    try {
      $user = JWTAuth::parseToken()->authenticate();
      if(is_null($user)|| empty($user)){
        Log::warning('JwtMiddleware::handle::' .NO_USER_FOUND);
        return Response()->json(ResponseManager::getError('', 999, NO_USER_FOUND));
      }
    } catch (Exception $e) {
      if ($e instanceof TokenInvalidException){
        Log::warning('JwtMiddleware::handle::' .JWT_TOKEN_INVALID);
        return Response()->json(ResponseManager::getError('', 999, JWT_TOKEN_INVALID));
      }else if ($e instanceof TokenExpiredException){
        Log::warning('JwtMiddleware::handle::' .JWT_TOKEN_EXPIRED);
        return Response()->json(ResponseManager::getError('', 999, JWT_TOKEN_EXPIRED));
      }
      else if ($e instanceof JWTException){
        Log::warning('JwtMiddleware::handle::' .JWT_TOKEN_INVALID);
        return Response()->json(ResponseManager::getError('', 999, JWT_TOKEN_INVALID));
      }else{
        Log::warning('JwtMiddleware::handle::' .JWT_TOKEN_NOT_FOUND);
        return Response()->json(ResponseManager::getError('', 999, JWT_TOKEN_NOT_FOUND));
      }
    }
    return $next($request);
  }
}
