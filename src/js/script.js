const locations = [
    {
        cityName: 'Los Angeles',
        latitude: 34.0194,
        longitude: -118.411
    },
    {
        cityName: 'New York',
        latitude: 40.6643,
        longitude: -73.9385
    },
    {
        cityName: 'Boston',
        latitude: 42.332,
        longitude: -71.0202
    },
    {
        cityName: 'Detroit',
        latitude: 42.383,
        longitude: -83.1022
    }
];

const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let players = [];

const swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
});

function onYouTubeIframeAPIReady() {
    players[0] = new YT.Player('player1', {
        playerVars: {
            'controls': 0,
            'fs': 0,
            'disablekb': 1,
            'iv_load_policy': 3,
            'loop': 1,
            'playlist': 'W0LHTWG-UmQ',
            'modestbranding': 1,
            'rel': 0,
            'showinfo': 0,
            'origin': 'https://www.youtube.com'
        },
        videoId: 'W0LHTWG-UmQ',
        events: {
            'onReady': onPlayerReady
        }
    });
    players[1] = new YT.Player('player2', {
        playerVars: {
            'controls': 0,
            'fs': 0,
            'disablekb': 1,
            'iv_load_policy': 3,
            'loop': 1,
            'playlist': 'X8Z8okhkjv8',
            'modestbranding': 1,
            'showinfo': 0,
            'rel': 0,
            'origin': 'https://www.youtube.com'
        },
        videoId: 'X8Z8okhkjv8',
        events: {
            'onReady': onPlayerReady
        }
    });
    players[2] = new YT.Player('player3', {
        playerVars: {
            'controls': 0,
            'fs': 0,
            'disablekb': 1,
            'iv_load_policy': 3,
            'loop': 1,
            'playlist': 'M7lc1UVf-VE',
            'modestbranding': 1,
            'showinfo': 0,
            'rel': 0,
            'origin': 'https://www.youtube.com'
        },
        videoId: 'M7lc1UVf-VE',
        events: {
            'onReady': onPlayerReady,
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
    event.target.mute();
}

function initGoogleMaps() {
    initMap(34.0194, -118.411);
}

function initMap(latitude, longitude) {
    const mapProp = {
        center: new google.maps.LatLng(latitude, longitude),
        zoom: 10,
        disableDefaultUI: true
    };
    const mapMarkerUrl = 'img/icons/map-marker.svg';
    const map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    const mapMarkerProp = {
        position: mapProp.center,
        map,
        icon: mapMarkerUrl
    };
    const mapMarker = new google.maps.Marker(mapMarkerProp);
}

function createMapPoint(locationNumber) {
    for (let i = 0; i < 3; i++) {
        document.getElementsByClassName("location__name")[i].innerHTML = locations[locationNumber].cityName;
    }

    stylizeOpenLocation(locations[locationNumber].cityName);
    initMap(locations[locationNumber].latitude, locations[locationNumber].longitude);
}

function createIdsToLocations() {
    locations.map((el, index) => {
        let element = document.getElementsByClassName("location__item")[index];

        element.id = el.cityName.replace(/ /g, '');
    });
}

function stylizeOpenLocation(cityName) {
    locations.map((el, index) => {
        let element = document.getElementsByClassName("location__item")[index];

        cityName === el.cityName ?
            element.style.boxShadow = '20px 20px 50px rgba(0, 0, 0, 0.0758039)' :
            element.style.boxShadow = 'none';
    });
}

document.addEventListener("DOMContentLoaded", createIdsToLocations());

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function () {
    if (pageYOffset) {
        players.map((el) => {
            el.pauseVideo();
        });
    } else {
        players.map((el) => {
            el.playVideo();
        });
    }
});