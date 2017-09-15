export function nav() {
  "use strict";
  // RESPONSIVE NAV JS
  // http://jsfiddle.net/csswizardry/ev598/
  // http://jsfiddle.net/shanomurphy/zp376/
  // https://codepen.io/atelierbram/pen/ALzCs
  // 
  // HIDE THE NAV BAR
  // https://codepen.io/pirrera/pen/rayoLW/

  /* The target nav */
  var responsiveNav = document.getElementById('js-nav-collapsible'); 

  /* The toggle button */
  var toggleBtn = document.getElementById('navCollapsibleToggle');

  /* Has Class Function */
  function hasClass(e,t){return(new RegExp(' '+t+' ')).test(' '+e.className+' ')}

  /* Toggle Class Function */
  function toggleClass(e,t){var n=' '+e.className.replace(/[\t\r\n]/g,' ')+' ';if(hasClass(e,t)){while(n.indexOf(' '+t+' ')>=0){n=n.replace(' '+t+' ',' ')}e.className=n.replace(/^\s+|\s+$/g,'')}else{e.className+=' '+t}}

  /* Removes a class attribute if defined */
  function removeClass(e,t){var n=' '+e.className.replace(/[\t\r\n]/g,' ')+' ';if(hasClass(e,t)){while(n.indexOf(' '+t+' ')>=0){n=n.replace(' '+t+' ',' ')}e.className=n.replace(/^\s+|\s+$/g,'')}}

  /* Hide an element unless scrolled to the top or bottom */
  function hide(element) {
    if (!element) return true;

    var elHeight = 0,
        elTop = 0,
        dHeight = 0,
        wHeight = 0,
        wScrollCurrent = 0,
        wScrollBefore = 0,
        wScrollDiff = 0;

    window.addEventListener('scroll', function() {
        elHeight = element.offsetHeight;
        dHeight = document.body.offsetHeight;
        wHeight = window.innerHeight;
        wScrollCurrent = window.pageYOffset;
        wScrollDiff = wScrollBefore - wScrollCurrent;
        elTop = parseInt(window.getComputedStyle(element).getPropertyValue('top')) + wScrollDiff;

        if (wScrollCurrent <= 0)
            element.style.top = '0px';

        else if (wScrollDiff > 0) {
            element.style.top = (elTop > 0 ? 0 : elTop) + 'px';
            removeClass(element,'nav-collapsible_open');
        }

        else if (wScrollDiff < 0) {
            if (wScrollCurrent + wHeight >= dHeight - elHeight)
                element.style.top = ((elTop = wScrollCurrent + wHeight - dHeight) < 0 ? elTop : 0) + 'px';

            else
                element.style.top = (Math.abs(elTop) > elHeight ? -elHeight : elTop) + 'px';

            removeClass(element,'nav-collapsible_open');
        }

        wScrollBefore = wScrollCurrent;
    });

  }

  /* Toggle 'nav-collapsible_open' when button is clicked */
  toggleBtn.onclick = function() {
  }

  /* Toggle 'nav-collapsible_open' when button is clicked */
  toggleBtn.onclick = function() {
    toggleClass(this.parentNode, 'nav-collapsible_open');
  }

  /* Enable hiding the navigation bar */
  hide(responsiveNav);

  /* Add a class of 'js' to the HTML element */
  var root = document.documentElement;
  root.className = root.className + ' js';

}
nav();

