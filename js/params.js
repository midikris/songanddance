var INSOURCED = INSOURCED || {};
INSOURCED.app = INSOURCED.app || {};
INSOURCED.app.params = {
  delay: 8,
  curated_gifs: false,
  curated_videos: true,
  youtube_playlist: false,
  youtube_playlist_id: 'PLpbDl3KW_-Gm9xAsAxX4qjTGMOnxX00sj',
  dance_moves: [
    'https://media.giphy.com/media/2oeyTMKbIZsHK/giphy.gif', //og default dance move
    'https://media.giphy.com/media/3ohjVazBFR12PCzk3e/giphy.gif', //soultrain
    'https://media.giphy.com/media/vl8ncD72EnhoA/giphy.gif', //dancing skeletons
    'https://media.giphy.com/media/F6ub4AQXz13xK/giphy.gif', //dancing skeletons
    'https://media.giphy.com/media/l4Ep3mmmj7Bw3adWw/giphy.gif', //soul train
    'https://media.giphy.com/media/l378uHisF00ugOA36/giphy.gif', //napoleon dynamite
    'https://media.giphy.com/media/8NaEXnwY0vXoY/giphy.gif', //white people dancing
    'https://media.giphy.com/media/6yG6GvvcN1Gr6/giphy.gif', //old people dancing
    'https://media.giphy.com/media/11KrDRpNFYlG6I/giphy.gif', //treadmill dancing
    'https://media.giphy.com/media/L0snCScL0LMBor5sE0/giphy.gif', //bugs bunny
    'https://media.giphy.com/media/ttAPTLzcauBFe/giphy.gif', //keyboard guy
    'https://media.giphy.com/media/KMuecXG7bC5dC/giphy.gif', //jay and silent bob
    'https://media.giphy.com/media/Um27tTsg0mSdO/giphy.gif', //borat
    'https://media.giphy.com/media/iMC5iOzRhwcuFyRl13/giphy.gif', //Terri and the Count
    'https://media.giphy.com/media/skJX0TcFaaPew/giphy-downsized-large.gif', //60's masquerade
    'https://media.giphy.com/media/p29xnqfmtZzY4/giphy.gif', //joy division
    'https://media.giphy.com/media/3o85fVVwdqKYpt7F3G/giphy.gif', //break dancing
    'https://media.giphy.com/media/l41YkGAAkY1CUQnu0/giphy.gif', //pants guy
    'https://media.giphy.com/media/8oe1ekRC6kjPq/giphy.gif', //austin powers
    'https://media.giphy.com/media/zFZhzuLjKKA2A/giphy.gif', //dancing stormtroopers
    'https://media.giphy.com/media/7QY5exgyuFHeo/giphy.gif', //dancing in underwear
  ],
  music_videos: [
    { 'video': 'https://www.youtube.com/watch?v=fuKDBPw8wQA', 'delay': 10.5, 'artist': 'Van Halen' }, //Van Halen - Panama
    { 'video': 'https://www.youtube.com/watch?v=gr_T3gRdvc0', 'delay': 15, 'artist': 'Nitzer Ebb' }, //Nitzer Ebb - Murderous
    { 'video': 'https://www.youtube.com/watch?v=sPqnxFgCrhg', 'delay': 16, 'artist': 'Royksop' }, //Royksopp - Girl and the Robot
    { 'video': 'https://www.youtube.com/watch?v=YW0sxgYAmLM', 'delay': 8, 'artist': 'Chaka Khan' }, //Chaka Khan - I Feel For You
    { 'video': 'https://www.youtube.com/watch?v=CcNo07Xp8aQ', 'delay': 8.5, 'artist': 'Robyn' }, //Robyn - Dancing On My Own
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
    { 'video': 'https://www.youtube.com/watch?v=9EcjWd-O4jI', 'delay': 7.5, 'artist': 'Technotronic' }, //Technotronic - Pump Up The Jam
    { 'video': 'https://www.youtube.com/watch?v=QLpArkPb-YU', 'delay': 5, 'artist': '10 Second Timer' }, //10 Second Timer
  ],
  archived_music_videos: [
    // { 'video': 'https://www.youtube.com/watch?v=o41A91X5pns', 'delay': 14, 'artist': 'Adam Ant' }, //Adam Ant - Goody Two Shoes
    // { 'video': 'https://www.youtube.com/watch?v=QLpArkPb-YU', 'delay': 5, 'artist': '10 Second Timer' }, //10 Second Timer   
    // { 'video': 'https://www.youtube.com/watch?v=hTWKbfoikeg', 'delay': 9.5, 'artist': 'Nirvana' }, //Nirvana - Smells Like Teen Spirit
    // { 'video': 'https://www.youtube.com/watch?v=2WN0T-Ee3q4', 'delay': 13, 'artist': 'Lihmal' }, //Lihmal - Neverending Story
    // { 'video': 'https://www.youtube.com/watch?v=Qh-S78saEnQ', 'delay': 26, 'artist': 'Ampersand' }, //Ampersand - Traction
    // { 'video': 'https://www.youtube.com/watch?v=K17df81RL9Y', 'delay': 42.5, 'artist': 'Aurora' }, //Aurora - Cure For Me
    // { 'video': 'https://www.youtube.com/watch?v=9bZkp7q19f0', 'delay': 18.5, 'artist': 'Psy' }, //Psy - Gangnam Style
    // { 'video': 'https://www.youtube.com/watch?v=OI1Em3rQz3E', 'delay': 15.5, 'artist': 'VNV Nation' }, //VNV Nation - Chrome
    // { 'video': 'https://www.youtube.com/watch?v=_NkpHLq76ro', 'delay': 15, 'artist': 'Real to Reel' }, //Real to Reel - I Like to Move It
  ]
};