var playlist = new Playlist();

var song = new Song('Coffee houser sei adda','Manna Dey','6:02');
var song1 = new Song('Amar Hiar majhe lukiye ase','Madhurima Sen','5:04');

var movie = new Movie('Moner Manus', 2010, '2:50:00');

playlist.add(song);
playlist.add(song1);

playlist.add(movie);
var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

var playButton = document.getElementById("play");
playButton.onclick = function() {
    playlist.play();
    playlist.renderInElement(playlistElement);
}

var nextButton = document.getElementById("next");
nextButton.onclick = function() {
    playlist.next();
    playlist.renderInElement(playlistElement);
}

var stopButton = document.getElementById("stop");
stopButton.onclick = function() {
    playlist.stop();
    playlist.renderInElement(playlistElement);
}
