var INSOURCED = INSOURCED || {};
// INSOURCED.app = INSOURCED.app || {};
INSOURCED.app = {
  params: {
    delay: 8,
    giphy: false,
    curated_videos: true,
    curated_gifs: true,
    featured_artist: '',
    dance_moves: [
      'https://media.giphy.com/media/2oeyTMKbIZsHK/giphy.gif', //og default dance move
      'https://media.giphy.com/media/3ohjVazBFR12PCzk3e/giphy.gif', //soultrain
      'https://media1.giphy.com/media/vl8ncD72EnhoA/giphy.gif', //dancing skeletons
      'https://media3.giphy.com/media/F6ub4AQXz13xK/giphy.gif', //dancing skeletons
      'https://media.giphy.com/media/l378uHisF00ugOA36/giphy.gif', //napoleon dynamite
      'https://media3.giphy.com/media/8NaEXnwY0vXoY/giphy.gif', //white people dancing
      'https://media.giphy.com/media/6yG6GvvcN1Gr6/giphy.gif', //old people dancing
      'https://media.giphy.com/media/11KrDRpNFYlG6I/giphy.gif', //treadmill dancing
      'https://media.giphy.com/media/L0snCScL0LMBor5sE0/giphy.gif', //bugs bunny
      'https://media.giphy.com/media/ttAPTLzcauBFe/giphy.gif', //keyboard guy
      'https://media.giphy.com/media/KMuecXG7bC5dC/giphy.gif', //jay and silent bob
      'https://media.giphy.com/media/Um27tTsg0mSdO/giphy.gif', //borat
      'https://media.giphy.com/media/skJX0TcFaaPew/giphy-downsized-large.gif', //60's masquerade
    ],
    music_videos: [
      { 'video': 'https://www.youtube.com/watch?v=fuKDBPw8wQA', 'delay': 10.5, 'artist': 'Van Halen' }, //Van Halen - Panama
      { 'video': 'https://www.youtube.com/watch?v=gr_T3gRdvc0', 'delay': 15, 'artist': 'Nitzer Ebb' }, //Nitzer Ebb - Murderous
      { 'video': 'https://www.youtube.com/watch?v=sPqnxFgCrhg', 'delay': 16, 'artist': 'Royksop' }, //Royksopp - Girl and the Robot
      { 'video': 'https://www.youtube.com/watch?v=YW0sxgYAmLM', 'delay': 8, 'artist': 'Chaka Khan' }, //Chaka Khan - I Feel For You
      { 'video': 'https://www.youtube.com/watch?v=CcNo07Xp8aQ', 'delay': 8.5, 'artist': 'Robyn' }, //Chaka Khan - I Feel For You
      { 'video': 'https://www.youtube.com/watch?v=OcECxNgDltw', 'delay': 5.75, 'artist': 'New Order' }, //New Order - Bizare Love Triangle
      { 'video': 'https://www.youtube.com/watch?v=PGNiXGX2nLU', 'delay': 15.75, 'artist': 'Dead Or Alive' }, //Dead Or Alive - You Spin Me Round
      { 'video': 'https://www.youtube.com/watch?v=djV11Xbc914', 'delay': 20, 'artist': 'A-Ha' }, //A-Ha - Take On Me
      { 'video': 'https://www.youtube.com/watch?v=Pwymq-gWhvY', 'delay': 10, 'artist': 'Rob Zombie' }, //Rob Zombie - Dragula
      { 'video': 'https://www.youtube.com/watch?v=xat1GVnl8-k', 'delay': 16.75, 'artist': 'Bloodhound Gang' }, //Bloodhound Gang - The Bad Touch
      { 'video': 'https://www.youtube.com/watch?v=Nm-ISatLDG0', 'delay': 12, 'artist': 'Donna Summer' }, //Donna Summer - I Feel Love
      { 'video': 'https://www.youtube.com/watch?v=ysmVlaw36L0', 'delay': 16, 'artist': 'Yazoo' }, //Yazoo - Situation
      { 'video': 'https://www.youtube.com/watch?v=-iTQQT4yv94', 'delay': 4, 'artist': 'Manufacture' }, //Manufacture - Armed Forces
      { 'video': 'https://www.youtube.com/watch?v=fcZOBOGMODI', 'delay': 11.5, 'artist': 'Electric Six' }, //Electric Six - Gay Bar   
      { 'video': 'https://www.youtube.com/watch?v=iTxOKsyZ0Lw', 'delay': 9, 'artist': 'The Chemical Brothers' }, //The Chemical Brothers - Block Rockin' Beats
      // { 'video': 'https://www.youtube.com/watch?v=QLpArkPb-YU', 'delay': 5, 'artist': '10 Second Timer' }, //10 Second Timer   
    ],
    archived_music_videos: [
      // { 'video': 'https://www.youtube.com/watch?v=QLpArkPb-YU', 'delay': 5, 'artist': '10 Second Timer' }, //10 Second Timer   
      // { 'video': 'https://www.youtube.com/watch?v=hTWKbfoikeg', 'delay': 9.5, 'artist': 'Nirvana' }, //Nirvana - Smells Like Teen Spirit
      // { 'video': 'https://www.youtube.com/watch?v=2WN0T-Ee3q4', 'delay': 13, 'artist': 'Lihmal' }, //Lihmal - Neverending Story
      // { 'video': 'https://www.youtube.com/watch?v=Qh-S78saEnQ', 'delay': 26, 'artist': 'Ampersand' }, //Ampersand - Traction
      // { 'video': 'https://www.youtube.com/watch?v=K17df81RL9Y', 'delay': 42.5, 'artist': 'Aurora' }, //Aurora - Cure For Me
      // { 'video': 'https://www.youtube.com/watch?v=9bZkp7q19f0', 'delay': 18.5, 'artist': 'Psy' }, //Psy - Gangnam Style
      // { 'video': 'https://www.youtube.com/watch?v=OI1Em3rQz3E', 'delay': 15.5, 'artist': 'VNV Nation' }, //VNV Nation - Chrome
      // { 'video': 'https://www.youtube.com/watch?v=_NkpHLq76ro', 'delay': 15, 'artist': 'Real to Reel' }, //Real to Reel - I Like to Move It
    ]
  },
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
      if(typeof vinylRecord === 'undefined') {
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
    let giphy = INSOURCED.app.params.giphy;
    if (!curated && giphy) {
      INSOURCED.app.giphy();
    }
    if (curated && !giphy) {
      //Get dancemoves from curated list
      INSOURCED.app.getCuratedGif();
    }
    if (!curated && !giphy) {
      //Do nothing;
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
  getCuratedVideo: () => {
    let music_videos = INSOURCED.app.params.music_videos;
    let random_video = Math.floor(Math.random() * music_videos.length);
    let video = music_videos[random_video];
    return video;
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