var INSOURCED = INSOURCED || {};
INSOURCED.app = INSOURCED.app || {};
INSOURCED.app = {
  animations: {
    introAnimation: () => {
      let form = document.querySelector(".form");
      let leftCurtain = document.querySelector(".left-curtain");
      let rightCurtain = document.querySelector(".right-curtain");
      let h1 = document.querySelector("h1");
      let h2 = document.querySelector("h2");
      t1 = gsap.to(h1, {
        duration: 5,
        opacity: 0,
        ease: "power4.out",
        delay: INSOURCED.app.params.delay * .95,
        top: "-50%",
      });

      t2 = gsap.to(h2, {
        duration: 0.5,
        opacity: 0,
        ease: "power4.out",
        delay: INSOURCED.app.params.delay * .95,
      });

      t3 = gsap.to(leftCurtain, {
        duration: 3,
        left: "-40%",
        ease: "power4.out",
        delay: INSOURCED.app.params.delay * .97,
      });

      t4 = gsap.to(rightCurtain, {
        duration: 3,
        right: "-40%",
        ease: "power4.out",
        delay: INSOURCED.app.params.delay * .97,
      });

      //gsap Fade out input form
      t5 = gsap.to(form, {
        duration: 0.1,
        opacity: 0,
        display: "none",
      });
      //Swap white to black for the background
      t6 = gsap.fromTo(
        "body",
        { backgroundColor: "#000" },
        { backgroundColor: "#000", delay: 0.3, duration: 0.5 }
      );
    },
    songAndDance: () => {
      let delay = 0;
      //Animate Dancing Man
      dance = gsap.fromTo(
        ".dancing-man-wrapper",
        { scale: 0, opacity: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "elastic.out(1, 0.3)",
          delay: delay,
        }
      );
    },
    spinningRecordPlay: () => {
      if (typeof vinylRecord === 'undefined') {
        vinylRecord = gsap.fromTo('.vinyl-record', { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 1, ease: 'elastic.out(1, 0.3)', delay: 0 });
        vinylRecord = gsap.to('.vinyl-record', { display: 'block', rotation: 360, duration: 1.80, repeat: -1, ease: 'none' });
      } else {
        vinylRecord.play();
      }
    },
    spinningRecordPause: () => {
      vinylRecord.pause();
    },
    countdown: () => {
      gsap.fromTo('.wait-for-it', { opacity: 1, fontSize: '10px' }, { opacity: 0, duration: 2, ease: 'power4.out', fontSize: '100px' });
    },
    resetAnimations: function () {
      let form = document.querySelector(".form");
      let leftCurtain = document.querySelector(".left-curtain");
      let rightCurtain = document.querySelector(".right-curtain");
      let h1 = document.querySelector("h1");
      let h2 = document.querySelector("h2");

      t1 = gsap.timeline()
      t1 = gsap.to(leftCurtain, {
        duration: 3,
        left: "0",
        ease: "power4.out",
        delay: 0,
      });
      t1 = gsap.to(rightCurtain, {
        duration: 3,
        right: "0",
        ease: "power4.out",
        delay: 0,
      });

      t3 = gsap.timeline();
      t3 = gsap.to(h1, {
        duration: 1,
        opacity: 1,
        ease: "power4.out",
        delay: 2,
        top: "15%",
      });
      t3 = gsap.to(form, {
        duration: 0,
        opacity: 1,
        display: "flex",
        delay: 3,
        onComplete: () => {
          document.querySelector("h2").innerHTML = '';
        },
      });
      t3 = gsap.to(h2, {
        duration: 0,
        opacity: 1,
        ease: "power4.out",
        delay: 4,
      });
    },
  },
  // introAnimation: () => {
  //   INSOURCED.app.animations.intro();
  // },
  // resetAnimations: () => {
  // },
  // songAndDance: (videoId) => {
  // },
  getYouTubeID: (url) => {
    url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return url[2] !== undefined ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
  },
  getGif: () => {
    let curated = INSOURCED.app.params.curated_gifs;

    switch (curated) {

      case true:
        INSOURCED.app.giphy();
        break;

      case false:
        INSOURCED.app.getCuratedGif();
        break;

    }
  },
  getCuratedGif: () => {
    //Get curated dance_moves
    let dance_moves = INSOURCED.app.params.dance_moves;
    let random = Math.floor(Math.random() * dance_moves.length);
    let gif = dance_moves[random];
    INSOURCED.app.setGif(gif);
  },
  setGif: (gif) => {
    document.querySelector(".dancing-man-wrapper").style.backgroundImage = 'url(' + gif + ')';
    document.querySelector(".dancing-man-wrapper").style.opacity = 0;
    document.querySelector(".dancing-man-wrapper-image").src = gif;
  },
  giphy: () => {
    //Get a random gif from the giphy api
    let curated = INSOURCED.app.params.curated_gifs;
    let giphy = INSOURCED.app.params.giphy;

    if (!curated && giphy) {
      let limit = 50; //Max number of gifs to return
      let offset = Math.floor(Math.random() * 300) + 1; //Random number between 1 and 300
      let q = encodeURIComponent('dancing') //Search term
      fetch('https://api.giphy.com/v1/gifs/search?api_key=6evYK0BaztKKyI7Fil0kHrpL6SBENnDH&q=' + q + '&limit=' + limit + '&offset=' + offset + '&rating=R&lang=en')
        .then(response => response.json())
        .then(data => {
          let gif = data.data[Math.floor(Math.random() * data.data.length)].images.original.url;
          INSOURCED.app.setGif(gif);
        })
    }

  },
  getCuratedVideo: () => {
    let music_videos = INSOURCED.app.params.music_videos;
    music_videos = music_videos.sort(() => Math.random() - 0.5);
    let random_video = Math.floor(Math.random() * music_videos.length);
    let video = music_videos[random_video];
    return video;
  },
  getYoutubePlaylist: () => {
    return new Promise((resolve, reject) => {
      const playlistId = INSOURCED.app.params.youtube_playlist_id;
      const apiKey = 'AIzaSyApoFvPml1u7xUdlZrBEbinDNqJQAdcGco';
      const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails,snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  instantiateYoutubePlayer: (getID) => {

    if (typeof YT === 'undefined') {
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/player_api";
      tag.id = 'youtube-api';
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      player.loadVideoById(getID, 0, "default");
    }

    onYouTubePlayerAPIReady = () => {

      let previousCountdown = 0; //Used to debounce the countdown

      player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: getID,
        playerVars: {
          'playsinline': 1,
          'controls': 0,
        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });

      function onPlayerReady() {
        player.playVideo(); //Play the video
      }

      function onPlayerStateChange(event) {
        let status = event.data;

        if (status === 1) {
          INSOURCED.app.getGif(); //Get a gif
        }

        if (status === -1) {
          //Fetch a gif
          let title = player.getVideoData().title; //Get the youtube title
          let titleElement = document.querySelector(".title"); //select the title element
          title = title.replace(/\([^)]*\)/g, ""); //Remove anything in parenthesis
          title = title.replace(/\[[^)]*\]/g, ""); //Remove anything in brackets
          titleElement.innerHTML = title; //Set the title element to the youtube title
          let modalFeaturedArtistElement = document.querySelector(".modal-body-featured-artist"); //select the modal featured artist element
          modalFeaturedArtistElement.innerHTML = title; //Set the modal featured artist element to the youtube title

        }

        let delay = INSOURCED.app.params.delay;

        //Listen for Youtube video duration updates
        let getCurrentTime = setInterval(function () {
          let videoId = getID;
          let currentTime = player.getCurrentTime();
          let duration = player.getDuration();
          let lastHalfSeconds = 0;

          //Round current time to 2 decimal places
          currentTime = Math.round(currentTime * 100) / 100;
          duration = Math.round(duration * 100) / 100;

          //listen for the end of the song
          if (status === 0) {
            clearInterval(getCurrentTime);
            INSOURCED.app.animations.spinningRecordPause(); //Pause the spinning record animation
            INSOURCED.app.animations.resetAnimations();
          }

          //Animate the count down
          let countdown = ((delay - 1) - Math.round(currentTime));
          countdown = Math.ceil(countdown);
          if (countdown <= 5 && countdown > 0) {
            if (countdown !== previousCountdown) {
              document.querySelector(".wait-for-it").innerHTML = countdown;
              INSOURCED.app.animations.countdown();
              previousCountdown = countdown; //Set the previous countdown to the current countdown
            }
          }

          // Debounce currentTime to only show every quarter of a second
          if (currentTime % 0.25 === 0) {
            halfSeconds = currentTime;
            if (lastHalfSeconds !== halfSeconds) {
              if (halfSeconds === delay) {
                //Start the Song and Dance
                INSOURCED.app.animations.songAndDance(videoId);
              }
              lastHalfSeconds = halfSeconds;
            }
          }
        });
      }

    }
  },
  init: () => {

    let urlParams = new URLSearchParams(window.location.search);
    let videoId = urlParams.get("v") ? urlParams.get("v") : false;
    let delay = urlParams.get('d') ? urlParams.get('d') : INSOURCED.app.params.delay;
    let input = document.querySelector("input"); //Input element
    let curated_videos = INSOURCED.app.params.curated_videos; //Get curated videos

    //If curated videos is set to true in the params
    if (curated_videos) {
      let curatedVideo = INSOURCED.app.getCuratedVideo(); //Get a curated video
      input.value = curatedVideo.video; //Set the input value to the curated video
      videoId = INSOURCED.app.getYouTubeID(curatedVideo.video); //Get the youtube id
      INSOURCED.app.params.delay = curatedVideo.delay; //Set the currated video delay
    }

    //If we found a url param, set the input values to the url param
    if (!curated_videos && videoId) {
      input.value = 'https://www.youtube.com/watch?v=' + videoId;
      INSOURCED.app.params.delay = (delay) ? delay : INSOURCED.app.params.delay;
    }

    if (!curated_videos && INSOURCED.app.params.youtube_playlist_id) {
      INSOURCED.app.getYoutubePlaylist().then((data) => {
        let playlist = data.items;
        let random_video = Math.floor(Math.random() * playlist.length);
        let video = playlist[random_video];
        let videoId = video.snippet.resourceId.videoId;
        input.value = 'https://www.youtube.com/watch?v=' + videoId;
        INSOURCED.app.params.delay = (delay) ? delay : INSOURCED.app.params.delay;
      });
    }

    // On Button click start up the experience
    document.querySelector("button").addEventListener("click", function () {

      let getInputValue = input.value;
      let getID = INSOURCED.app.getYouTubeID(getInputValue);
      let videoId = getID;

      //Set videoID as a url parameter for sharing
      gtag('event', 'click', {
        'event_category': 'button',
        'event_label': "Lets Dance",
      });

      INSOURCED.app.animations.introAnimation(); //Animate the intro
      INSOURCED.app.instantiateYoutubePlayer(videoId); //Instantiate the youtube player
      INSOURCED.app.animations.spinningRecordPlay(); //Start the spinning record animation
      window.history.pushState({}, '', window.location.origin);

      var modalBodyShareUrl = document.querySelector('.modal-body-share-url');
      modalBodyShareUrl.innerHTML = window.location.href + '?v=' + encodeURIComponent(videoId) + '&d=' + encodeURIComponent(INSOURCED.app.params.delay);

      // on vinyl-record click open modal
      document.querySelector('.vinyl-record').addEventListener('click', function () {
        document.querySelector('.modal').classList.add('show');
      });

      document.querySelector('.modal-close').addEventListener('click', function () {
        document.querySelector('.modal').classList.remove('show');
      });

    });

    if (urlParams && curated_videos) {
      let videoId = urlParams.get("v") ? urlParams.get("v") : false;
      let delay = urlParams.get('d') ? urlParams.get('d') : false;

      // Set videoID as a url parameter for sharing
      if (videoId) {
        INSOURCED.app.params.delay = (delay) ? parseInt(delay) : INSOURCED.app.params.delay;
        input.value = 'https://www.youtube.com/watch?v=' + videoId;
      }
    }

  },
};

document.addEventListener("DOMContentLoaded", function (event) {
  INSOURCED.app.init();
});