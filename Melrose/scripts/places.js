var map = L.map('map').setView([29.709621, -82.044055], 12);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'dacree.o7efcb3b',
    accessToken: 'pk.eyJ1IjoiZGFjcmVlIiwiYSI6ImNpaDd6dGt4NTB0NHd2MGtpOGc0MzdqbGcifQ.5nFgEtr7OX7av2NiuOinXQ'
}).addTo(map);

for ( var i=0; i < places.length; ++i )
{
   L.marker( [places[i].latitude, places[i].longitude] )
      .bindPopup( '<h3>' + places[i].placeName + '</h3>' + '<p>' + places[i].description + '</p>' + '<p>' + places[i].website + '</p>')
      .addTo( map );
}
