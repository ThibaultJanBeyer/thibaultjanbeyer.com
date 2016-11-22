"use strict";function myLoop(t,e,n){setTimeout(function(){e.call(n,t.countdown,t.duration,t.countup),t.countup++,--t.countdown>=0&&myLoop(t,e,n)},t.duration)}var WORKS_OPEN=!1,WRITER_OPEN=!1,WINDOW_SCROLL_TOP,forEach=function(t,e,n){for(var o=0;o<t.length;o++)e.call(n,o,t[o])};!function(){setTimeout(function(){document.getElementsByClassName("preloader")[0].classList.add("preloader--loaded")},1500)}();var thibaultImgMain=document.getElementById("thibault-img-main");myLoop({countdown:9,duration:150,countup:0},function(t,e,n){thibaultImgMain.setAttribute("src","assets/img/thibault-jan-beyer_"+t+".jpg")}),function(){setTimeout(function(){myLoop({countdown:9,duration:150,countup:0},function(t,e,n){thibaultImgMain.setAttribute("src","assets/img/thibault-jan-beyer_"+n+".jpg")})},2e3);var t=!0,e=!1,n=document.getElementById("welcome"),o=n.offsetHeight/4;n.offsetHeight;setInterval(function(){e===!1&&WINDOW_SCROLL_TOP>=o&&(myLoop({countdown:9,duration:150,countup:0},function(t,e,n){thibaultImgMain.setAttribute("src","assets/img/thibault-jan-beyer_"+t+".jpg")}),e=!0,t=!1),t===!1&&o>WINDOW_SCROLL_TOP&&(myLoop({countdown:9,duration:150,countup:0},function(t,e,n){thibaultImgMain.setAttribute("src","assets/img/thibault-jan-beyer_"+n+".jpg")}),t=!0,e=!1)},850)}(),function(){function t(n){setTimeout(function(){e(n)?n.classList.add("loaded"):t(n)},2e3)}function e(t){return t.complete?"undefined"==typeof t.naturalWidth||0!==t.naturalWidth:!1}for(var n=document.querySelectorAll("img[data-src]"),o=document.getElementById("welcome"),i=0;3>i;i++)n[i].setAttribute("src",n[i].getAttribute("data-src")),n[i].onload=t(n[i]);setInterval(function(){WORKS_OPEN===!0&&forEach(n,function(e,n){var i=n.getBoundingClientRect();i.bottom>=0&&i.top<o.offsetHeight&&n.hasAttribute("data-src")===!0&&(n.setAttribute("src",n.getAttribute("data-src")),n.onload=t(n))})},1e3)}();var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};!function(t){function e(t){var e=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'];return n(e.join(","),t).filter(function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)})}function n(t,e){return Array.prototype.slice.call((e||document).querySelectorAll(t))}function o(t,n){var o=e(t),i=o.indexOf(document.activeElement);n.shiftKey&&0===i?(o[o.length-1].focus(),n.preventDefault()):n.shiftKey||i!==o.length-1||(o[0].focus(),n.preventDefault())}function i(t){var n=e(t);n.length&&n[0].focus()}var r,s=function(t,e){function s(e){u.shown&&!t.contains(e.target)&&i(t)}function c(){u.shown=!0,t.removeAttribute("aria-hidden"),e.setAttribute("aria-hidden","true"),r=document.activeElement,i(t),document.body.addEventListener("focus",s,!0),history.pushState?history.pushState(null,null,"#moreWorks"):window.location.hash="#moreWorks",thibaultImgMain.classList.add("more-works--hider"),e.classList.add("more-works--pusher"),t.classList.remove("more-works--start"),document.body.classList.add("more-works--locker"),document.getElementsByTagName("html")[0].classList.add("more-works--locker"),WORKS_OPEN=!0}function a(){t.classList.add("more-works--start"),e.classList.remove("more-works--pusher"),setTimeout(function(){u.shown=!1,t.setAttribute("aria-hidden","true"),e.removeAttribute("aria-hidden"),r&&r.focus(),document.body.removeEventListener("focus",s,!0),thibaultImgMain.classList.remove("more-works--hider"),document.body.classList.remove("more-works--locker"),document.getElementsByTagName("html")[0].classList.remove("more-works--locker"),WORKS_OPEN=!1,history.pushState&&history.pushState(null,null,"#")},1e3)}var l="data-a11y-dialog",u=this;e=e||document.querySelector("#main"),this.shown=!1,this.show=c,this.hide=a,n("["+l+'-show="'+t.id+'"]').forEach(function(t){t.addEventListener("click",c)}),n("["+l+"-hide]",t).concat(n("["+l+'-hide="'+t.id+'"]')).forEach(function(t){t.addEventListener("click",a)}),document.addEventListener("keydown",function(e){u.shown&&27===e.which&&(e.preventDefault(),a()),u.shown&&9===e.which&&o(t,e)}),setInterval(function(){var t=window.location.hash;t.indexOf("moreWorks")>=0&&!WORKS_OPEN?c():t.indexOf("moreWorks")<0&&WORKS_OPEN&&a()},2e3)};"undefined"!=typeof module&&"undefined"!=typeof module.exports?module.exports=s:"function"==typeof define&&define.amd?define("A11yDialog",[],function(){return s}):"object"===("undefined"==typeof t?"undefined":_typeof(t))&&(t.A11yDialog=s)}(window);var dialogEl=document.getElementById("more-works"),dialog=new A11yDialog(dialogEl);!function(){function t(){r=!0}var e=document.getElementsByClassName("scroll"),n=document.getElementById("welcome"),o=[],i=[],r=!1;window.onscroll=t,setInterval(function(){r&&(r=!1,WINDOW_SCROLL_TOP=void 0!==window.scrollY?window.scrollY:(document.documentElement||document.body.parentNode||document.body).scrollTop,forEach(e,function(t,e){var r=e.getAttribute("data-scroll--speed")||100,s=e.getBoundingClientRect();s.bottom>=0&&s.top<n.offsetHeight?(o[t]||(o[t]=WINDOW_SCROLL_TOP),e.classList.contains("scroll--permanent")?(i[t]=(WINDOW_SCROLL_TOP-o[t])/r*-1,e.style.transform="translate3D(0, "+i[t]+"%, 0)"):e.classList.contains("scroll--writer")&&!e.classList.contains("scroll--writer-start")&&(e.classList.add("scroll--writer-start"),WRITER_OPEN=!0)):e.classList.contains("scroll--writer")&&e.classList.contains("scroll--writer-start")&&(e.classList.remove("scroll--writer-start"),WRITER_OPEN=!1)}))},15)}();var smoothScroll=function(t,e){var n,o=window.pageYOffset,i=t.offsetTop,r=i-o,s=r/(e/16),c=function(){window.scrollBy(0,s),n()};n=s>=0?function(){var t=window.pageYOffset;(t>=i-s||window.innerHeight+t>=document.body.offsetHeight)&&clearInterval(a)}:function(){var t=window.pageYOffset;(i||0)>=t&&clearInterval(a)};var a=setInterval(c,16)},scrollToggle=document.querySelectorAll('a[href^="#"]');[].forEach.call(scrollToggle,function(t){t.addEventListener("click",function(e){e.preventDefault();var n=t.getAttribute("href"),o=document.querySelector(n);o&&smoothScroll(o,500)},!1)}),function(){function t(t){var n=e(t,"toggle--scope"),o=n.querySelector(":scope > .toggle");o.classList.contains("toggle--close")?(o.classList.remove("hidden"),t.classList.add("toggle--button-close"),o.classList.remove("toggle--close"),o.classList.add("toggle--open")):o.classList.contains("toggle--open")?(o.classList.remove("toggle--open"),o.classList.add("toggle--close"),t.classList.remove("toggle--button-close"),setTimeout(function(){o.classList.add("hidden")},1e3)):console.log("ERROR: function toggle() : Sorry "+o+" has neighter toggle--close nor toggle--open class.")}function e(t,n){var o=arguments.length<=2||void 0===arguments[2]?5:arguments[2];return t.classList.contains(n)?t:(--o,o>0?e(t.parentNode,n,o):void console.log("ERROR: function getParentScope() : Sorry couldn’t find any parent with "+n+" within the seleceted range."))}var n=document.querySelectorAll(".toggle--button"),o=document.querySelectorAll("toggle--close");[].forEach.call(o,function(t){t.classList.add("hidden")}),[].forEach.call(n,function(e){e.addEventListener("click",function(){t(this)},!1)})}(),function(){function t(t){for(var e=[],n=0;n<t.length;n++){var o={};o.el=t[n],o.text=t[n].textContent,o["char"]=o.text.split(""),e[n]=o,t[n].textContent=""}return e}function e(t){WRITER_OPEN=!1,o[t-1]=!0,1===t?(document.getElementsByClassName("concact-pic--big")[0].classList.remove("concact-pic--big"),setTimeout(function(){myLoop({countdown:i[0]["char"].length-1,duration:100,countup:0},function(t,e,n){i[0].el.innerHTML+=i[0]["char"][n],0===t&&myLoop({countdown:i[1]["char"].length-1,duration:65,countup:0},function(t,e,n){i[1].el.innerHTML+=i[1]["char"][n],0===t&&(c[0].classList.remove("writer-answer--hidden"),myLoop({countdown:r[0]["char"].length-1,duration:65,countup:0},function(t,e,n){r[0].el.innerHTML+=r[0]["char"][n]}))})})},2e3)):3===t?(s[0].classList.remove("writer-question--hidden"),myLoop({countdown:i[t]["char"].length-1,duration:65,countup:0},function(e,n,o){i[t].el.innerHTML+=i[t]["char"][o]})):(s[0].classList.remove("writer-question--hidden"),c[0].classList.remove("writer-answer--hidden"),myLoop({countdown:i[t]["char"].length-1,duration:65,countup:0},function(e,n,o){i[t].el.innerHTML+=i[t]["char"][o],0===e&&myLoop({countdown:r[t-1]["char"].length-1,duration:65,countup:0},function(e,n,o){r[t-1].el.innerHTML+=r[t-1]["char"][o]})}))}function n(){var t="hi@thibaultjanbeyer.com",e=encodeURI("Hi Thibault, my name is ")+encodeURI(l.value),n=encodeURI("I just wanted to say... ")+"%0A%0A"+encodeURI(d.value);window.location.href="mailto:"+t+"?Subject="+e+"&Body="+n}var o=[!1,!1,!1,!1],i=t(document.getElementsByClassName("writer-question")),r=t(document.getElementsByClassName("writer-answer")),s=document.getElementsByClassName("writer-question--hidden"),c=document.getElementsByClassName("writer-answer--hidden");setInterval(function(){WRITER_OPEN&&o[0]===!1&&e(1)},1e3);var a=document.getElementsByClassName("writer--next"),l=document.getElementById("myName"),u=document.getElementById("liveName");l.onkeyup=function(t){u.textContent=l.value,13===t.keyCode&&o[1]===!1&&(t.preventDefault(),e(2))},a[0].addEventListener("click",function(t){t.preventDefault(),o[1]===!1&&(u.textContent=l.value,e(2))});var d=document.getElementById("myMessage");d.onkeyup=function(t){d.style.height=d.scrollHeight+"px"},a[1].addEventListener("click",function(t){t.preventDefault(),o[2]===!1&&e(3),n()})}();