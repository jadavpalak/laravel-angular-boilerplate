<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use ResponseManager;

class Controller extends BaseController
{
  use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

  /**
  * @author:####
  * Created on : April 30, 2019
  *
  * Method name: home
  * This method is used for return home page data.
  *
  * @return  data,Response code,message.
  * @exception throw if any error occur when return data to user.
  */
  public function home(){
    return Response()->json(ResponseManager::getResult('', 200, SUCCESS));
  }
}
