(function () {

  var mobileMenu;
	
  $(document).ready(function(){
		
    mobileMenu(); // init mobile menu

    $('#slider').unslider({ autoplay : true , delay : 7000});

    $('.unslider-arrow.next').html('<i class="fa fa-angle-right fa-3x" aria-hidden="true"></i>');
    $('.unslider-arrow.prev').html('<i class="fa fa-angle-left fa-3x" aria-hidden="true"></i>');
	});// end on doc load


  mobileMenu = function(){

    // toggle display on click
    $('#mobile-menu .fa-bars').click(function(){
      $('#mobile-menu ul').toggle();
    });

    // display/hide nav on window resize
    $(window).resize(function(e){
      if(e.target.innerWidth > 1024){
        $('#mobile-menu ul').css('display', 'none');
      } else {
        $('#mobile-menu ul').css('display', 'none');
      }
    });
  }



})();