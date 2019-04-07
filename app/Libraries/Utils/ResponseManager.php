<?php

namespace App\Libraries\Utils;

class ResponseManager {

    public static $response = array('flag' => '', 'data' => '', 'message' => '', 'code' =>'');

    public static function getError($data = '', $code = 10, $message = '', $flag = false) {
        self::$response['flag'] = $flag;
        self::$response['code'] = $code;
        self::$response['data'] = $data;
        self::$response['message'] = $message;
        return self::$response;
    }

    public static function getResult($data = '', $code = 200, $message = '', $flag = true) {
        self::$response['flag'] = $flag;
        self::$response['code'] = $code;
        self::$response['data'] = $data;
        self::$response['message'] = $message;
        return self::$response;
    }

}
