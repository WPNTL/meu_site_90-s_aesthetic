import Webamp from "webamp";

const startWebamp = () => {
  if (Webamp.browserIsSupported()) {
    const webamp = new Webamp({
      initialTracks: [
        {
          metaData: {
            artist: "Rick Astley",
            title: "Never Gonna Give You Up",
          },
          url: `${process.env.PUBLIC_URL}/never-gonna-give-you-up.mp3`,
          duration: 213,
        },
        {
          metaData: {
            artist: "Haddaway",
            title: "What is Love?",
          },
          url: `${process.env.PUBLIC_URL}/what-is-love.mp3`,
          duration: 267,
        },
        {
          metaData: {
            artist: "Darude",
            title: "Sandstorm",
          },
          url: `${process.env.PUBLIC_URL}/sandstorm.mp3`,
          duration: 313,
        },
      ],
    });

    webamp.onClose(() => {
      webamp.dispose();
    });

    webamp.renderWhenReady(document.getElementById("winamp-container"));
  }
};

export { startWebamp };
