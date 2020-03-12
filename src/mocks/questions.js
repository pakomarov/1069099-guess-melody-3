const AVATAR_URL = `https://api.adorable.io/avatars/128`;

export default [
  {
    type: `genre`,
    genre: `aids-rock`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/9/92/En-AIDS.ogg/En-AIDS.ogg.mp3`,
      genre: `aids-rock`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/9/92/En-AIDS.ogg/En-AIDS.ogg.mp3`,
      genre: `aids-blues`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/9/92/En-AIDS.ogg/En-AIDS.ogg.mp3`,
      genre: `aids-jazz`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/9/92/En-AIDS.ogg/En-AIDS.ogg.mp3`,
      genre: `aids-punk`,
    }],
  }, {
    type: `artist`,
    song: {
      artist: `Jim Aids`,
      src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/9/92/En-AIDS.ogg/En-AIDS.ogg.mp3`,
    },
    answers: [{
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `John Aids`,
    }, {
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Jack Aids`,
    }, {
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Jim Aids`,
    }],
  }
];
