document.onkeydown = function(e) {
    switch(e.key) {
        
        // LEFT
        case "Left": // IE/Edge specific value
        case "ArrowLeft":
          // Do something for "left arrow" key press.
          state.dom.objects.rocket.rotation--;
          $('#test1').css("transform", `rotate(${state.dom.objects.rocket.rotation}deg)`);
          break;

        // RIGHT
        case "Right": // IE/Edge specific value
        case "ArrowRight":
          // Do something for "right arrow" key press.
          state.dom.objects.rocket.rotation++;
          $('#test1').css("transform", `rotate(${state.dom.objects.rocket.rotation}deg)`);
          break;
        
        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
};