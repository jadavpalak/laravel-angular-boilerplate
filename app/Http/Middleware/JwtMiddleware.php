<?php

namespace App\Http\Middleware;
use Closure;
use JWTAuth;
use Exception;
use ResponseManager;
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
    info("middleware");
    try {
      $user = JWTAuth::parseToken()->authenticate();
      info($user);
    } catch (Exception $e) {
      if ($e instanceof TokenInvalidException){
        return Response()->json(ResponseManager::getError('', 999, 'Token is Invalid'));
      }else if ($e instanceof TokenExpiredException){
        return Response()->json(ResponseManager::getError('', 999, 'Token is Expired'));
      }
      else if ($e instanceof JWTException){
        return Response()->json(ResponseManager::getError('', 999, 'Token is Expired'));
      }else{
        return Response()->json(ResponseManager::getError('', 999, 'Authorization Token not found.'));
      }
    }
    return $next($request);
  }
}
