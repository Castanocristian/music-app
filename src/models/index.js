const Album = require ('./Album')
const Artist = require ('./Artist')
const Genre = require ('./Genre');
const Song = require('./Songs');

Artist.belongsToMany(Genre, {through: "ArtistGenres"});
Genre.belongsToMany(Artist, {through: "ArtistGenres"});

Artist.hasMany(Album);
Album.belongsTo(Artist);

Album.hasMany(Song);
Song.belongsTo(Album);

Song.belongsToMany(Artist, {through:"SongsArtists"});
Artist.belongsToMany(Song, {through:"SongsArtists"});

Song.belongsToMany(Genre, {through:"SongsGenres"});
Genre.belongsToMany(Song, {through:"SongsGenres"});