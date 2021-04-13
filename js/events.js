$('#tgl-indicator').on('click', () => {
    state.doRender = !state.doRender
});

$('#tgl-music').on('click', () => {
    if (boolMusicPlaying){
        music.pause();
        boolMusicPlaying=false;
    }else{
        music.play();
        boolMusicPlaying=true;
    } 
});

$('#music').on('click', () => {
    if (boolMusicPlaying) {
        music.pause();
        boolMusicPlaying = false;
    } else {
        music.play();
        boolMusicPlaying = true;
    }
});


$( document ).ready(
    () => {
        $('#tgl-indicator').show();
        $('#tgl-music').show();
    }
);