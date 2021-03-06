var iTunes = require('../');

console.time('createConnection');
iTunes.createConnection(onConnection);

function onConnection (err, itunes) {
  console.timeEnd('createConnection');
  if (err) throw err;

  console.time('currentTrack');
  itunes.currentTrack(onTrack);
}

function onTrack (err, track) {
  console.timeEnd('currentTrack');
  if (err) throw err;
  if (!track)
    return console.log('There is no track currently playing...');
  if (!(track instanceof iTunes.FileTrack))
    return console.log('Current track is not a "FileTrack" :(');

  console.time('location');
  track.location(onLocation);
}

function onLocation (err, location) {
  console.timeEnd('location');
  if (err) throw err;

  console.log("Current Track's Location: '%s'", location);
}
