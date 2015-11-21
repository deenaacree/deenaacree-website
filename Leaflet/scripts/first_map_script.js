var map = L.map('map').setView([29.709685, -82.044094], 16);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'dacree.o7efcb3b',
    accessToken: 'pk.eyJ1IjoiZGFjcmVlIiwiYSI6ImNpaDd6dGt4NTB0NHd2MGtpOGc0MzdqbGcifQ.5nFgEtr7OX7av2NiuOinXQ'
}).addTo(map);

var marker0 = L.marker([29.709685, -82.044094]).addTo(map);
var marker1 = L.marker([29.710066, -82.049588]).addTo(map);
var marker2 = L.marker([29.709842, -82.044363]).addTo(map);
var marker3 = L.marker([29.710252, -82.043526]).addTo(map);
var marker4 = L.marker([29.709125, -82.042602]).addTo(map);

marker1.bindPopup("<b>Melrose Volunteer Fire Department</b><br>Founded to serve the citizens of Melrose and the surrounding community, the Melrose Volunteer Fire Department serves the surrounding four counties: Alachua, Putnam, Clay, and Bradford.<br>Link: https://www.facebook.com/melrosevfd24My hometown.<br> Link: http://melrosefl.com/").openPopup();
marker2.bindPopup("<b>Melrose, Florida</b><br>Chiappini's<br>A relic from the past, Chiappini's is a gas station and convenience store like no other. It was opened in 1935, and today continues to serve as a small-town gathering place.<br>Link: https://www.facebook.com/chiappinis.melrose").openPopup();
marker3.bindPopup("<b>Williamson's Food Store</b><br>Williamson's Food Store was opened in 1972, and continues to serve as the main grocery store for Melrose residents today. It is a small store that is both family-owned and operated.<br>Link: http://williamsonsfoodstore.com/").openPopup();
marker4.bindPopup("<b>Melrose Elementary School</b><br>Melrose Elementary School is the elementary school that children who live in the section of Melrose that is in Putnam County attend. It was originally opened as a K-12 school, but adapted with the community and is now a PreK-5 school.<br>Link: http://putnammes.ss7.sharpschool.com/").openPopup();
marker0.bindPopup("<b>Melrose, Florida</b><br>My hometown.<br> Link: http://melrosefl.com/").openPopup();
