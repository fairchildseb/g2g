(function () {

  var mobileMenu;
	
  $(document).ready(function(){
		
    mobileMenu(); // init mobile menu

    

	});// end on doc load


  mobileMenu = function(){

    // toggle display on click
    $('#mobile-menu').click(function(e){
      $('nav ul').toggle();
    });

    // display/hide nav on window resize
    $(window).resize(function(e){
      if(e.target.innerWidth > 1024){
        $('nav ul').css('display', 'block');
      } else {
        $('nav ul').css('display', 'none');
      }
    });
  }



})();