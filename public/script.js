'use strict';
{
    let shake = new Shake({
        threshold: 15,
        timeout: 1000
    });
    shake.start();
    window.addEventListener('shake', function () {
        document.getElementById('map').classList.remove('hide');
    }, false);
}
