document.addEventListener("DOMContentLoaded", function(){
    var nav = document.querySelector('.nav');
    var btnOpen = document.querySelector('.btn-open');
    var body = document.querySelector('body');
    btnOpen.onclick = function(){
        body.classList.toggle('open');
    }
    nav.onclick = function(){
        body.classList.toggle('open');
    }
}, false)