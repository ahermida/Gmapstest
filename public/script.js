'use strict';
{
    let shake = new Shake({
        threshold: 15,
        timeout: 1000
    });
    shake.start();
    window.addEventListener('shake', function () {
        document.getElementById('map').classList.remove('hide');
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          infoWindow.setPosition(pos);
          infoWindow.setContent('Location found.');
          gmap.setCenter(pos);
        }, function() {
          console.log('there was a problem loading the map');
        });
    }, false);

}
