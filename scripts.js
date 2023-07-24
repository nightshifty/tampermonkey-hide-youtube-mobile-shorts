// ==UserScript==
// @name         Youtube Shorts Mobile killer
// @version      0.1
// @description  Removes Shorts in the bottom bar of youtube mobile
// @author       nightshifty
// @match        https://m.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function removeShorts() {
        document.querySelectorAll('ytm-pivot-bar-item-renderer').forEach(t => {
            if (t.innerText === "Shorts") {
                t.remove();
                console.log('Removed shorts tab');
                }
            }
        );

        document.querySelectorAll('ytm-item-section-renderer').forEach(t => {
            if (t.innerText.match("Shorts*")) {
                t.remove();
                console.log('Removed shorts area');
                }
            }
        );
    }



    const observer = new MutationObserver(removeShorts);
    observer.observe(document.querySelector('ytm-pivot-bar-renderer'), { childList: true, subtree: true });

})();
