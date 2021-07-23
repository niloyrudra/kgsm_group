(function(){
    "use strict";
    const tiControlPlayButton = document.querySelector(".ti-control-play");
    if(tiControlPlayButton)
    {
        tiControlPlayButton.addEventListener( 'click', function(e) {
            e.preventDefault()
            const youtubeLink = e.target.parentElement.href;
            console.log(youtubeLink)
            const popup = document.createElement('div');
            popup.id = 'ytVidPopupId';
            popup.innerHTML = `<div><iframe width="560" height="315" src="${youtubeLink}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
            document.body.classList.add('popup-initiated')
            document.body.appendChild( popup );
        } );
    }
})()