function change(sourceUrl) {
    var audio = $("#player");      
    $("#audio_mp3").attr("src", sourceUrl);

    audio[0].pause();
    audio[0].load();

    audio[0].oncanplaythrough = audio[0].play();

}