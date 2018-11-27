var myLoc;

var mapimg;
//45.4555402,9.1670842,15
var lat = 45.4555844;
var lon = 9.1754196;

var ww = 1024;
var hh = 512;

var zoom = 17;



function preload(){
  mapimg = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/' +
    lon + ',' + lat + ',' + zoom + '/' +
    ww + 'x' + hh +
    '?access_token=pk.eyJ1IjoiYnJldGVsbGUiLCJhIjoiY2pvaDE3YzVzMGw5MzNxcG5hM2xjMnd4diJ9.1roqKzj6Upe41mwVp6NsPw');
    myLoc = getCurrentPosition();
  }

function mercX(lon) {
  lon = radians(lon);
  var a = (256 / PI) * pow(2, zoom);
  var b = lon + PI;
  return a * b;
}

function mercY(lat) {
  lat = radians(lat);
  var a = (256 / PI) * pow(2, zoom);
  var b = tan(PI / 4 + lat / 2);
  var c = PI - log(b);
  return a * c;
}


function setup() {
  createCanvas(ww, hh);
  translate(width / 2, height / 2);
  imageMode(CENTER);
  image(mapimg, 0, 0);
  var cx = mercX(lon);
  var cy = mercY(lat);

  var x = mercX(lon) - cx;
  var y = mercY(lat) - cy;
  stroke(255, 0, 255);
  fill(255, 0, 255, 200);
  ellipse(x, y, 10, 10);

  text('position of a desperet guy, that is still trying to understand why the getCurrentPosition function is not defined',lon -300, lat)
}


//
// function draw() {
//   lat = myLoc.latitude
//   lon = myLoc.longitude
//   ellipse()
// }
