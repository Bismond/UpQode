const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player1, player2, player3;

function onYouTubeIframeAPIReady() {
    player1 = new YT.Player('player1', {
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
        },
        videoId: 'W0LHTWG-UmQ',
        events: {
            'onReady': onPlayerReady
        }
    });
    player2 = new YT.Player('player2', {
        playerVars: {
            'controls': 0,
            'fs': 0,
            'disablekb': 1,
            'iv_load_policy': 3,
            'loop': 1,
            'playlist': 'X8Z8okhkjv8',
            'modestbranding': 1,
            'showinfo': 0,
            'rel': 0
        },
        videoId: 'X8Z8okhkjv8',
        events: {
            'onReady': onPlayerReady
        }
    });
    player3 = new YT.Player('player3', {
        playerVars: {
            'controls': 0,
            'fs': 0,
            'disablekb': 1,
            'iv_load_policy': 3,
            'loop': 1,
            'playlist': 'M7lc1UVf-VE',
            'modestbranding': 1,
            'showinfo': 0,
            'rel': 0
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

function stopVideo() {
    player.stopVideo();
}
