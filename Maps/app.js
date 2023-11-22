//2. Render a map

/* let map = L.map("map").setView([52.52, 13.31], 13);
let marker = L.marker([52.5241393, 13.3119176]).addTo(map); */
let map = L.map("map").locate({ setView: true, watch: false, maxZoom: 13 });

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(onLocationFound);
} else {
  alert("Geolocation is not supported by your browser");
}
function onLocationFound(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  L.marker([lat, lon]).addTo(map);

  map.setView([lat, lon], 15);
}

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
//3. Figure out how to find current position
//.locate({setView: true, maxZoom: 13})
//4. Figure out how to add a pin
// L.marker(<LatLong>[number, number])
//5. Set the current position in Javascript
//6. Show the pin in current position
