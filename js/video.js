
  // 2. This code loads the IFrame Player API code asynchronously.
  const tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  var player;
  var player2;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '200',
      width: '300',
      videoId: 'gji8mvOVRcI',
      playerVars: {
        controls: 1,
        showinfo: 0,
        color: 'white',

      }
    });
    player2 = new YT.Player('player2', {
      height: '200',
      width: '300',
      videoId: '5OCNZLZ1PPc',
      playerVars: {
        controls: 1,
        showinfo: 0,
        color: 'white',

      }
    });
  }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    event.target.playVideo();
  }
