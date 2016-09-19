// Main JS file for open-sound

class Player {

  constructor($source, $elem, $options) {

    this.$source = $source;
    this.createPlayerWindow($elem);

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

  changeTrack($url) {

    var $source = document.getElementById('source');
    var $audio = document.getElementById('audio-player');
    $audio.pause();
    $source.src = $url;
    $audio.play();

  }

}
