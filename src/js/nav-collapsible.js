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

  /* The document */
  var root = document.documentElement;

  /* Move the root down by the height of the nav bar */
  root.style.marginTop =  responsiveNav.offsetHeight.toString() + "px";

  /* The toggle button */
  var toggleBtn = document.getElementById('navCollapsibleToggle');

  /* Has Class Function */
  function hasClass(e,t){return(new RegExp(' '+t+' ')).test(' '+e.className+' ')}

  /* Toggle Class Function */
  function toggleClass(e,t){var n=' '+e.className.replace(/[\t\r\n]/g,' ')+' ';if(hasClass(e,t)){while(n.indexOf(' '+t+' ')>=0){n=n.replace(' '+t+' ',' ')}e.className=n.replace(/^\s+|\s+$/g,'')}else{e.className+=' '+t}}

  /* Removes a class attribute if defined */
  function removeClass(e,t){if(hasClass(e,t)){var n=' '+e.className.replace(/[\t\r\n]/g,' ')+' ';while(n.indexOf(t)>=0){n=n.replace(' '+t+' ',' ')}e.className=n.trim()}}

  /* Adds a class attribute */
  function addClass(e,t){if(!hasClass(e,t)){e.className+=' '+t}}

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

    var timer = null;
    window.addEventListener('scroll', function() {
        if(timer !== null) {
            clearTimeout(timer);        
        }

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
            removeClass(element,'nav-collapsible_show');
        }

        else if (wScrollDiff < 0) {
            if (wScrollCurrent + wHeight >= dHeight - elHeight)
                element.style.top = ((elTop = wScrollCurrent + wHeight - dHeight) < 0 ? elTop : 0) + 'px';

            else
                element.style.top = (Math.abs(elTop) > elHeight ? -elHeight : elTop) + 'px';

            removeClass(element,'nav-collapsible_open');
            removeClass(element,'nav-collapsible_show');
        }

        wScrollBefore = wScrollCurrent;

        /* After a second, slide down the navigation bar */
        timer = setTimeout(function() {
            addClass(element,'nav-collapsible_show');
            element.style.top = '0px';
        }, 1000);
        
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
  root.className = root.className + ' js';
}
nav();

