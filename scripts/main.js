'use strict';

/* HELPER: Checks Whether an Element Exists
----------------------------------------------------------------------------------------------------*/
(function( $ ) {

  $.fn.extend({
    exists: function() {
      if ( this.length > 0 ) {
        return true;
      } else {
        return false;
      }
    }
  });

})( jQuery );


$(".blk-nav .main-nav .inner .icon-menu .icon").click(function(){
	if($(".nav").hasClass("active-menu")){
		$(".nav").removeClass('active-menu')
		$(".toggle-menu-icon").addClass("active");
		$("#close-sapporo-nav").removeClass("active");
	}else{
		$(".nav").addClass('active-menu')
	}
	
})

$("#close-nav").click(function(){
	$(".nav").removeClass('active-menu');
})
$('.blk-discovery .slider-mb').owlCarousel({
    stagePadding: 50,
    loop:true,
    margin:0,
    nav:false,
    items:1
})

$('.blk-discovery [data-fancybox]').fancybox({
  buttons : [
    'close'
  ],
  wheel : false,
  transitionEffect: "slide",
  loop            : true,
  toolbar         : true,
  clickContent    : false
});
$('.ui.dropdown')
  .dropdown()
;
new WOW().init();

$(".blk-nav .main-nav .inner .nav .inner-nav ul li a").click(function() {
	var data_id=$(this).attr("data-id");
	$(".blk-nav .main-nav .inner .nav").removeClass("active-menu");
    $('html,body').animate({                                                         
        scrollTop: $(data_id).offset().top},
        'slow');
});
$(".blk-nav .main-nav .inner .register-now a").click(function(){
	$(".blk-nav .main-nav .inner .nav").removeClass("active-menu");
	$('html,body').animate({                                                         
	    scrollTop: $("#blk-6").offset().top},
	    'slow');
})
$(".blk-nav .main-nav .inner .nav .inner-nav .button-register").click(function(){
	$(".blk-nav .main-nav .inner .nav").removeClass("active-menu");
	$('html,body').animate({                                                         
	    scrollTop: $("#blk-6").offset().top},
	    'slow');
})
$(".modal-discount .inner .smd-more").click(function(){
	$(".blk-nav .main-nav .inner .nav").removeClass("active-menu");
	$('html,body').animate({                                                         
	    scrollTop: $("#blk-6").offset().top},
	    'slow');
})
$(document).mouseup(function(e) 
{
    var container = $(".nav");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
      $(".blk-nav .main-nav .inner .nav").removeClass("active-menu");
    }
});
setTimeout(function(){
    $("#modal-discount").fancybox().trigger('click');
},5000); //delay is in millisecond
