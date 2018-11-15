window.addEventListener('hashchange', function(){
    console.log('Hash Changed',window.location.hash);
    if(window.location.hash === '#/bookmark/1'){
        console.log('Page 1 is cool');
    }
    if(window.location.hash === '#/bookmark/2'){
        console.log('Page 2 is cool');
    }
    if(window.location.hash === '#/bookmark/3'){
        console.log('Page 3 is cool');
    }
    if(window.location.hash === '#/bookmark/4'){
        console.log('Page 4 is cool');
    }
});