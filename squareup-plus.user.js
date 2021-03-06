// ==UserScript==
// @name         SquareUp Plus
// @description  SquareUp improvements for Good Weather
// @author       Ingy döt Net

// @namespace    https://github.com/
// @updateURL    https://github.com/goodweatherinseattle/tampermonkey/raw/master/squareup-plus.user.js

// @match        https://www.goodweatherinseattle.com/
// @require      http://coffeescript.org/browser-compiler/coffeescript.js

// @grant        unsafeWindow

// @version      0.7
// ==/UserScript==
var user_script_coffee = (<><![CDATA[
#------------------------------------------------------------------------------

window.w = window.unsafeWindow = unsafeWindow

document.setTimeout ->
  document.title = 'Hacked 1'
, 3000

#------------------------------------------------------------------------------
]]></>).toString(); eval(this.CoffeeScript.compile(user_script_coffee));
//# vim: set ft=coffee sw=2:
