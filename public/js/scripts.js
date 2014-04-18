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
  },

  // Menu Opening
  menuOpen: function() {
    console.log('clicked');
    $('.sidebar, .shader').toggleClass('opened');
  },
  
//  Gifs play on click or hover. Replace with static image if they don't
  gifPlay: $(function() {
    $('img').each(function(e){
     var src = $(e).attr('src');
        $(e).hover(function(){
        $(this).attr('src', src.replace('.gif', '_anim.gif'));
          }, function(){
            $(this).attr('src', src);
        });
      });
    }),

   };
  $(document).ready(function(){SGIF.common.init();}); // don't for
})(jQuery, window, document);