
const music = new Audio('/assets/music.mp3');
music.load();

var boolMusicPlaying = false;

$("#canvas").focus();
$("#canvas").click();


const tryPlay = setInterval(()=>{
    if (state.mouse.x != 0 && state.mouse.y != 0){
        try{
            music.play();
            clearInterval(tryPlay);
            boolMusicPlaying = true;
        } catch(e) {
            if (prompt("This page contains music, would you like to enjoy the complete experience?")){
                music.play();
            }
        }
    }
}, 10);

alert("Headphones On!");
tryPlay;

music.play();

$('#music').on('click', () => {
    if (boolMusicPlaying) {
        music.pause();
        boolMusicPlaying = false;
    } else {
        music.play();
        boolMusicPlaying = true;
    }
});

