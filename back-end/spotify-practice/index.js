var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
    clientId : '6c792eb4871e4c61832806d8e31aa947',
    clientSecret : '82117e499eec43d3be315c27bc440b5f',
    redirectUri : 'http://www.example.com/callback'
});

// spotifyApi.