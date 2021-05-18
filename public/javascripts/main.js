function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(51.8239291, -4.7635705),
        zoom: 15,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
