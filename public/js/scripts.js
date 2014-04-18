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
    // set event listeners for your functions here
  },

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
  // the rest of your functions go here
  _common.init(); // don't for
	}
});