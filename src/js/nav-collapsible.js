export function nav() {
  "use strict";
  // RESPONSIVE NAV JS
  // http://jsfiddle.net/csswizardry/ev598/
  // http://jsfiddle.net/shanomurphy/zp376/
  // https://codepen.io/atelierbram/pen/ALzCs

  /* The target nav */
  var responsiveNav = document.getElementById('js-nav-collapsible'); 

  /* The toggle button */
  var toggleBtn = document.getElementById('navCollapsibleToggle');

  /* Has Class Function */
  function hasClass(e,t){return(new RegExp(' '+t+' ')).test(' '+e.className+' ')}

  /* Toggle Class Function */
  function toggleClass(e,t){var n=' '+e.className.replace(/[\t\r\n]/g,' ')+' ';if(hasClass(e,t)){while(n.indexOf(' '+t+' ')>=0){n=n.replace(' '+t+' ',' ')}e.className=n.replace(/^\s+|\s+$/g,'')}else{e.className+=' '+t}}

  /* Toggle 'nav-collapsible_open' when button is clicked */
  toggleBtn.onclick = function() {
    toggleClass(this.parentNode, 'nav-collapsible_open');
  }

  /* Add a class of 'js' to the HTML element */
  var root = document.documentElement;
  root.className = root.className + ' js';

}
nav();
