var boolMusicPlaying = false;


const music = new Audio('/assets/music.mp3');
music.load();


$("#canvas").focus();
$("#canvas").click();


const tryPlay = setInterval(()=>{
    if (state.mouse.x != 0 && state.mouse.y != 0){

        var promise = music.play();

        if (promise !== undefined) {
            promise.then(_ => {
                clearInterval(tryPlay);
                boolMusicPlaying = true;
            }).catch(error => {
                // NOTHING
            });
        }    
    }
}, 100);

alert("Headphones On! Click to begin!");
if (!confirm("[SEIZURE WARNING] Elements existing in this webpage emit flashing light and rapidly changing colors. Would you still like to procceed?")){
    location.href = "https://twitter.com/hostinfodev";
}


