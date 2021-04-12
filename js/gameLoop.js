// THIS IS A WORK IN PROGRESS, 
var state = {
    tic: 0,
    speed: {x: 0, y: 0, z: 0},
    gravity: 0.05,
    notableBound: 10,
    mouse: {
        x: 0,
        y: 0
    },
    pos: {
        x: 0,
        y: 0 
    },
    mouseHistory: [],
    lastMouseEvent: undefined
};

$('body').on('mousemove', function(e){
    state.mouse.x = e.pageX;
    state.mouse.y = e.pageY;
    const time = new Date();
    // Record the location, time and tic of the mouse event
    state.mouseHistory.push({x: e.pageX, y: e.pageY, time: time.milliseconds, tic: state.tic});
});  

// MAIN LOOP
var mainLoop = setInterval(()=> {

    // Determine center point
    const centerPoint = {
        x: screen.width / 2,
        y: screen.height / 2
    };

    // Check if first mouse event
    if (state.lastMouseEvent == undefined){
        const time = new Date();
        state.lastMouseEvent = {x: state.mouse.x, y: state.mouse.y, time: time.milliseconds, tic: state.tic}; 
    }
    // If not then proccess each even in the buffer until complete
    else{
        // This gives us the ability to roll mouse event proccessing into a qeue instead of dropping/skipping mouseEvents
        do{

            const mouseEvent = state.mouseHistory.pop(0);
            const procTime = new Date();
    
            // ACCELERATION VECTORS
            //state.speed.x += Math.trunc(xIncrement);
            //state.speed.y += Math.trunc(yIncrement);

        } while (state.mouseHistory.length)
    }

    //Gravity: Subtraction of altitude
    state.pos.x = state.mouse.x;
    state.pos.y = centerPoint.y - centerPoint.y / 2;//state.pos.y + 1;


    // MOVE THE SPRITE
    $("#test1").css("left", `${state.pos.x}px`);
    $("#test1").css("top", `${state.pos.y}px`);

    // DEBUG
    $("#window-size").text(`X: ${screen.width} / Y: ${screen.height}`);
    $("#mouse-position").html(`&nbsp;&nbsp;X: ${state.mouse.x} / Y: ${state.mouse.y}`);
    $("#mouse-position2").html(`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;X: ${centerPoint.x} / Y: ${centerPoint.y}`);

    $("#heap-alloc").html(`Used: ${JSON.stringify(performance.memory.usedJSHeapSize)}
        <br>
        Alloc: &nbsp;${JSON.stringify(performance.memory.totalJSHeapSize)}
        <br>
        Limit: &nbsp;${JSON.stringify(performance.memory.jsHeapSizeLimit)}
        `);
    // END DEBUG

}, 10);

// INITIALIZE MAIN LOOP
mainLoop;