document.addEventListener('keydown', function (e) {

    if (e.keyCode == 65) {
        const sub_video = document.getElementsByClassName('sub_video')[0];
        changeByScreen1();
        addActiveClass(0);
        showFirst();
        muteOne();
    }

    if (e.keyCode == 83) {
        const sub_video = document.getElementsByClassName('sub_video')[1];
        changeByScreen2();
        addActiveClass(1);
        showSecond();
        muteTwo();

    }

    if (e.keyCode == 68) {
        const sub_video = document.getElementsByClassName('sub_video')[2];
        changeByScreen3();
        addActiveClass(2);
        showThird();
        muteThree();
    }
});



function addActiveClass(index) {
    const keys = document.getElementsByClassName('video_key');
    for (let i of keys) {
        i.classList.remove("active")
    }
    keys[index].classList.add('active')

}

function showFirst() {
    let v1 = document.getElementById("video1").style.display = "block",
        v2 = document.getElementById("video2").style.display = "none",
        v3 = document.getElementById("video3").style.display = "none";

}

function showSecond() {
    let video = document.getElementById("video1").style.display = "none",
        video1 = document.getElementById("video2").style.display = "block",
        video2 = document.getElementById("video3").style.display = "none";
}

function showThird() {
    let video = document.getElementById("video1").style.display = "none",
        video1 = document.getElementById("video2").style.display = "none",
        video2 = document.getElementById("video3").style.display = "block";
}

function changeByButton1() {
    const sub_video = document.getElementsByClassName('sub_video')[0];
    changeByScreen1();
    addActiveClass(0);
    showFirst();
}

function changeByButton2() {
    const sub_video = document.getElementsByClassName('sub_video')[1];
    changeByScreen2();
    addActiveClass(1);
    showSecond();
}

function changeByButton3() {
    const sub_video = document.getElementsByClassName('sub_video')[2];
    changeByScreen3();
    addActiveClass(2);
    showThird();
}

function changeByScreen1() {
    let v1 = document.getElementById("thumb1").style.display = "none",
        v2 = document.getElementById("thumb2").style.display = "block",
        v3 = document.getElementById("thumb3").style.display = "block";
    addActiveClass(0);
    showFirst();

}

function changeByScreen2() {
    let v1 = document.getElementById("thumb1").style.display = "block",
        v2 = document.getElementById("thumb2").style.display = "none",
        v3 = document.getElementById("thumb3").style.display = "block";
    addActiveClass(1);
    showSecond();
}

function changeByScreen3() {
    let v1 = document.getElementById("thumb1").style.display = "block",
        v2 = document.getElementById("thumb2").style.display = "block",
        v3 = document.getElementById("thumb3").style.display = "none";
    addActiveClass(2);
    showThird();
}

function seekChangeMain() {

    const main1 = document.getElementById("sub1"),
        main2 = document.getElementById("sub2"),
        main3 = document.getElementById("sub3"),
        v1 = document.getElementById("video1"),
        v2 = document.getElementById("video2"),
        v3 = document.getElementById("video3");

    let time = v1.currentTime;
    v2.currentTime = time;
    v3.currentTime = time;


    main1.currentTime = time;
    main2.currentTime = time;
    main3.currentTime = time;
}

function pauseAllVideos() {
    const videos = document.getElementsByTagName('video');
    play = document.getElementById("play");
    pause = document.getElementById("pause");

    for (let i of videos) {
        i.pause();
    }

    pause.style.display = "none";
    play.style.display = "block";

}


function playAllVideos() {
    const videos = document.getElementsByTagName('video');
    play = document.getElementById("play");
    pause = document.getElementById("pause");


    for (let i of videos) {
        i.play();
    }

    pause.style.display = "block";
    play.style.display = "none";

}


function toggleFullScreen() {

    var elem = document.getElementById("video1");

    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
}

var vid, playbtn, seekslider, curtimetext, durtimetext, volumeslider, fullscreenbtn, seek;

function intializePlayer() {
    vid = document.getElementById("video1");
    seekslider = document.getElementById("seekslider");
    curtimetext = document.getElementById("curtimetext");
    durtimetext = document.getElementById("durtimetext");
    volumeslider = document.getElementById("volumeslider");


    seekslider.addEventListener("change", vidSeek, false);
    vid.addEventListener("timeupdate", seektimeupdate, false);
    volumeslider.addEventListener("change", setvolume, false);
}

window.onload = intializePlayer;


function vidSeek() {
    var seekto = vid.duration * (seekslider.value / 100);
    vid.currentTime = seekto;
}

function seektimeupdate() {
    var nt = vid.currentTime * (100 / vid.duration);
    seekslider.value = nt;
    var curmins = Math.floor(vid.currentTime / 60);
    var cursecs = Math.floor(vid.currentTime - curmins * 60);
    var durmins = Math.floor(vid.duration / 60);
    var dursecs = Math.floor(vid.duration - durmins * 60);
    if (cursecs < 10) {
        cursecs = "0" + cursecs;
    }
    if (dursecs < 10) {
        dursecs = "0" + dursecs;
    }
    if (curmins < 10) {
        curmins = "0" + curmins;
    }
    if (durmins < 10) {
        durmins = "0" + durmins;
    }
    curtimetext.innerHTML = curmins + ":" + cursecs;
    durtimetext.innerHTML = durmins + ":" + dursecs;
}


function setvolume() {
    vid.volume = volumeslider.value / 100;
}


function muteVideo() {
    var mute = document.getElementById("mute");
    play = document.getElementById("volup");
    v1 = document.getElementById("video1");
    v2 = document.getElementById("video2");
    v3 = document.getElementById("video3");


    mute.style.display = "block";
    play.style.display = "none";


    v1.volume = 0;
    v2.volume = 0;
    v3.volume = 0;

}


function loudVideo() {
    var mute = document.getElementById("mute");
    play = document.getElementById("volup");
    v1 = document.getElementById("video1");
    v2 = document.getElementById("video2");
    v3 = document.getElementById("video3");



    mute.style.display = "none";
    play.style.display = "block";

    v1.volume = 1;
    v2.volume = 1;
    v3.volume = 1;

}

var elem = document.documentElement;

function openFullscreen() {
    var fullScreen = document.getElementById("fullScreen");
    smallScreen = document.getElementById("smallScreen");

    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }

    fullScreen.style.display = "none";
    smallScreen.style.display = "block";

}

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }

    fullScreen.style.display = "block";
    smallScreen.style.display = "none";
}


function hoverOut() {
    let a = document.getElementById("Overlay");

    if (a.onmouseout) {

        setTimeout(function () {
            a.style.opacity = "0";
            a.style.transition = "1s"
        }, 4000)

    } 
}

function hoverOver() {
    let a = document.getElementById("Overlay");
    let  timeout;

    document.onmouseover = function () {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            a.style.opacity = "0";
            a.style.transition = "1s";
        }, 4000);
    }

    document.onmousemove = function () {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            a.style.opacity = "0";
            a.style.transition = "1s";
        }, 4000);
    }
}

function mouseMove() {
    let a = document.getElementById("Overlay");
    a.style.opacity = "1";
    a.style.transition = "1s"
}

function muteOne() {
    var a = document.getElementById('video1');
    b = document.getElementById('video2');
    c = document.getElementById('video3');

    a.muted = false;
    b.muted = true;
    c.muted = true;
}

function muteTwo() {
    var a = document.getElementById('video1');
    b = document.getElementById('video2');
    c = document.getElementById('video3');

    a.muted = true;
    b.muted = false;
    c.muted = true;
}

function muteThree() {
    var a = document.getElementById('video1');
    b = document.getElementById('video2');
    c = document.getElementById('video3');

    a.muted = true;
    b.muted = true;
    c.muted = false;
}

let playing = false;

const playPause = e => {
    let key = e.keyCode || e.which; //Get key
    if (key == 32) { //Space key
        if (playing) { //If playing turn all videos off
            pauseAllVideos();
            playing = false;
        } else { //vise versa
            playAllVideos();

            playing = true;
        }
    }
}

window.addEventListener('keypress', playPause);


const vidos = document.getElementById("video1"),
      lay = document.getElementById("Overlay"),
      content = document.getElementById("show1"),
      controls = document.getElementById("show3");



function lastPoint() {
    vidos.ontimeupdate = function () {
        // showLater1(); 
    };
}

window.addEventListener('onload', lastPoint());

function showLater1() {

    if ((vidos.currentTime >= 30 && vidos.currentTime <= 40)) {
        lay.style.opacity = "1";
        // content.style.opacity = "0";
        // controls.style.opacity = "0";
        

        setTimeout(function () {
            lay.style.opacity = "0";
            // content.style.opacity = "1";
            // controls.style.opacity = "1";
        }, 4000)

    }
}







let images = document.images,
    images_total_count = images.length,
    images_loaded_count = 0,
    preloader = document.getElementById('page-preloader'),
    perc_display = document.getElementById('load-perc');

for (let i = 0; i < images_total_count; i++) {
    image_clone = new Image();
    image_clone.onload = image_loaded;
    image_clone.onerror = image_loaded;
    image_clone.src = images[i].src;
}

function image_loaded() {
    images_loaded_count++;
    perc_display.innerHTML = (((100 / images_total_count) * images_loaded_count) << 0) + '%';
    if (images_loaded_count >= images_total_count) {
        setTimeout(function () {
            if (!preloader.classList.contains('done')) {
                preloader.classList.add('done');
            }
        }, 1000)
    }
}

function test() {
    setTimeout(function () {
        let preloader = document.getElementById('page-preloader');
        if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
        }
    }, 1000)
}