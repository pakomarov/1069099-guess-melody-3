const AVATAR_URL = `https://api.adorable.io/avatars/128`;

export default [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `blues`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `jazz`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `punk`,
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
