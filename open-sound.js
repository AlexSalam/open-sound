// Main JS file for open-sound

class Player {

  constructor($source, $elem, $options) {

    this.$source = $source;
    this.createPlayerWindow($elem);
    this.processOptions($options);

  }

  createPlayerWindow($elem, $cb) {

    if ($elem === null) {
      console.log('Error: Player not found!');
    } else {

      var $player = document.createElement('audio');
      $player.id = "audio-player";

      var $source = document.createElement('source');
      $source.id = "source";
      $source.src = this.$source;
      $player.appendChild($source);

      $elem.appendChild($player);

      var $innerDiv = document.createElement('div');
      $innerDiv.id = "player-container";

      var $pullBar = document.createElement('progress');
      $pullBar.id = "track-bar";
      $innerDiv.appendChild($pullBar);

      var $barHandle = document.createElement('button');
      $barHandle.id = "handle";
      $innerDiv.appendChild($barHandle);

      var $backBtn = document.createElement('button');
      $backBtn.id = "back-btn";
      $innerDiv.appendChild($backBtn);

      var $playPauseBtn = document.createElement('button');
      $playPauseBtn.id = "play-pause-btn";
      $innerDiv.appendChild($playPauseBtn);

      var $nextBtn = document.createElement('button');
      $nextBtn.id = "next-btn";
      $innerDiv.appendChild($nextBtn);

      $elem.appendChild($innerDiv);

    }

  }

  initVisualiser() {



  }

  processOptions($options) {

    if (typeof $options !== "object") {
      console.log("Invalid options object!");
    } else {

      // Process Display Options
      if (typeof $options.display === "object") {
        var displayOptions = $options.display;
        if (displayOptions.hasOwnProperty('visualiser')) {
          if (displayOptions.visualiser == true) {
            this.visualiser = true;
            this.initVisualiser();
          }
        }
      }

      // Process Style options
      /*
      * Adds custom classes to objects on the player for custom styling
      * Can customise:
      * play, bar, handle?, back, next and container
      */
      if (typeof $options.style === "object") {
        var styleOptions = $options.style;
        if (styleOptions.hasOwnProperty('play')) {
          if (typeof styleOptions.play == "string") {
            document.getElementById('play-pause-btn').addClass(styleOptions.play);
            document.getElementById('play-pause-btn').id = "";
          }
        }
        if (styleOptions.hasOwnProperty('bar')) {
          if (typeof styleOptions.bar == "string") {
            document.getElementById('track-bar').addClass(styleOptions.bar);
            document.getElementById('track-bar').id = "";
          }
        }
        if (styleOptions.hasOwnProperty('handle')) {
          if (typeof styleOptions.handle == "string") {
            document.getElementById('handle').addClass(styleOptions.handle);
            document.getElementById('handle').id = "";
          }
        }
        if (styleOptions.hasOwnProperty('back')) {
          if (typeof styleOptions.back == "string") {
            document.getElementById('back-btn').addClass(styleOptions.back);
            document.getElementById('back-btn').id = "";
          }
        }
        if (styleOptions.hasOwnProperty('next')) {
          if (typeof styleOptions.next == "string") {
            document.getElementById('next-btn').addClass(styleOptions.next);
            document.getElementById('next-btn').id = "";
          }
        }
        if (styleOptions.hasOwnProperty('container')) {
          if (typeof styleOptions.container == "string") {
            document.getElementById('player-container').addClass(styleOptions.container);
            document.getElementById('player-container').id = "";
          }
        }
      }

    }

  }

  changeTrack($url) {

    var $source = document.getElementById('source');
    var $audio = document.getElementById('audio-player');
    $audio.pause();
    $source.src = $url;
    $audio.play();

  }

}
