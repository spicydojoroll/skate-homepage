/* Global Variables */
var game_started = false;

/* Document Loaded Listener */
document.addEventListener('DOMContentLoaded', function() {

    /* Start Button */
    var start = document.querySelector('#start');

    start.addEventListener('mouseover', function() {
        if (game_started){
            start.src = "images/button_end_hover.png";
        }
        else
        {
            start.src = "images/button_hover.png";
        }
    });

    start.addEventListener('mouseout', function() {
        if (game_started)
        {
            start.src = "images/button_end.png";
        }
        else
        {
            start.src = "images/button.png";
        }
    });

    start.addEventListener('mouseup', function() {
        let shark = document.querySelector('#shark')

        if (game_started)
        {
            game_started = false;
            start.src = "images/button_hover.png";
        }
        else
        {
            game_started = true;
            start.src = "images/button_end_hover.png";
        }
    });

    /* Shark Movement */
    const shark = document.querySelector('#shark');
    var direction = "";
    var prevx = 0;
    document.addEventListener('mousemove', function(e) {
        const width = shark.offsetWidth;
        const height = shark.offsetHeight;

        if (game_started) {
            /* Movement */
            setTimeout(() => {
                shark.style.left = `${e.clientX - width/2}px`;
                shark.style.top = `${e.clientY - height/2}px`;
            }, 20);

            /* Rotation */
            if (e.pageX < prevx)
            {
                shark.style.transform = `scaleX(-1)`;
            }
            else if (e.pageX > prevx)
            {
                shark.style.transform = `scaleX(1)`;
            }
            prevx = e.pageX
        }
    });
});
