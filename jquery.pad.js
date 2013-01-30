(function(window, $) {
  $.pad = function(str, length, padchar, side) {
    str = str.toString();
    if ( typeof length == 'undefined' ) length = 1;
    if ( typeof padchar == 'undefined' ) padchar = ' ';
    if ( typeof side == 'undefined' ) side = 'l';
    if ( str.length < length ) {
      if ( side[0] == 'l' )
        return Array((length - str.length) + 1).join(padchar) + str;
      return str + Array((length - str.length) + 1).join(padchar);
    }
    return str;
  };
  $.lpad = function(str, length, padchar) {
    return $.pad(str, length, padchar, 'l');
  };
  $.rpad = function(str, length, padchar) {
    return $.pad(str, length, padchar, 'r');
  };
})(window, jQuery);
