window.SGIF || (SGIF = {});

(function($, window, document, undefined) {

  var _common = SGIF.common = { //this is your js object
    init: function() {
    this.setVars();
    this.bindEvents();
  },

  setVars: function() {
    // set all variables here
    this.helloString = "hello" ; // also _common.helloString
  },

  bindEvents: function() {
    $(document).ready(function(){ console.log('doc loaded');});
    $('.ham-menu').on('click', this.menuOpen);
    $('.lesson-list--home li img').on('mouseover', this.gifPlay);
    $('.lesson-list--home li img').on('mouseout', this.gifStop);
    this.homepageGifs();
  },

  // Menu Opening
  menuOpen: function() {
    $('.sidebar, .shader').toggleClass('opened');
  },
  
  // Gifs play on click or hover. Replace with static image if they don't
  // turn all of the gifs on the homepage into their off state originally until hover
  homepageGifs: function() {
    console.log('homepage gifs');
    for (var i = 0; i <= $('.lesson-list--home img').length; i++) {
     //alex did this for me
      $('.lesson-list--home img')[i].src = $('.lesson-list--home img')[i].src.substring(0, $('.lesson-list--home img')[i].src.length - 3) +"png";
    console.log($('.lesson-list--home img')[i].src);
    }
  },

  //gif play state
  gifPlay: function() {
    var src = $(this)[0].src.substring(0, $(this)[0].src.length - 3) +"gif";
    console.log($(this), $(this)[0].src , src);
    $(this)[0].src = src;
    },

    //gif stop state
    gifStop: function() {
      var src = $(this)[0].src.substring(0, $(this)[0].src.length - 3) +"png";
      console.log($(this), $(this)[0].src , src);
      $(this)[0].src = src;
    }

  };

  $(document).ready(function(){SGIF.common.init();}); // don't for
})(jQuery, window, document);