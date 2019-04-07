export const constants = {

  /*
  * START
  * GENERAL
  */
  STATUS: 'status',
  MESSAGE: 'message',
  FLAG: 'flag',
  CODE: 'code',
  /*
  * END
  */


  /*
  * START
  * REJEX
  */
  EMAIL_REGEX: '^[A-Za-z0-9]+(\.[_A-Za-z0-9]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z]{2,15})$',
  NUMBERS_ONLY: '^[0-9]*$',
  PHONE_REGEX: '^[0-9]{10}$',
  FLOAT_NUMBAR: '[+-]?([0-9]*[.])?[0-9]+',
  PHONE_NO: '^[0-9]{1,10}$',
  ZIP_REGEX: /^[0-9]{5}$/,
  WEB_SITE: /^((http|https|gopher|telnet|ftp)?(:\/\/))?(www\.)?[a-zA-Z0-9-_\.]+(\.[a-zA-Z0-9]{2,})([-a-zA-Z0-9:%_\+.~#?&\/\/=]*)$/,
  /*
  * END
  */

  DASHBOARD:'/dashboard',
  LOGIN:'/login',



  LOGIN_ERROR:'Sorry, could not login.Please try again.',
  JWT_TOKEN_ERROR: 'Please login to continue.',
  CONTACT_ADMIN: 'Please contact to adminstration.'
}
