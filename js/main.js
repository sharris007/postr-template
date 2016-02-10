$(document).ready(function() {
	$(".links-top").owlCarousel({
		items : 3,
		responsive:true,
		lazyLoad : true,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3],
		itemsTablet : [768, 3],
		itemsTabletSmall : [700, 3],
		itemsMobile : [479, 2]
	});	
	jQuery(function(){

/* Script for Left Menu */
$('#open-button').click(function(event) {
  $('body').addClass('show-menu');
  $('#open-button').addClass('active'); 
  return false;
});
$(".menu-wrap").bind("click", function (event) {
    event.stopPropagation(); 
});
$("body").bind("click", function () {
	if($('body').hasClass('show-menu')==true){
	 $('body').removeClass('show-menu'); 
	}
	$('#open-button').removeClass('active');
});
$("#close-button").bind("click", function () {
	if($('body').hasClass('show-menu')==true){
	 $('body').removeClass('show-menu'); 
	}
	$('#open-button').removeClass('active');
});
$(".menu-wrap1").bind("click", function () {
	if($('body').hasClass('show-menu')==true){
	 $('body').removeClass('show-menu'); 
	}
});
/* Script end */

/* Script for Right Filter */
$('#open-button1').click(function(event) {
  $('body').addClass('show-menu1'); 
  return false;
});
$(".menu-wrap1").bind("click", function (event) {
    event.stopPropagation(); 
});
$("body").bind("click", function () {
	if($('body').hasClass('show-menu1')==true){
	 $('body').removeClass('show-menu1'); 
	}
});
$(".menu-wrap").bind("click", function () {
	if($('body').hasClass('show-menu1')==true){
	 $('body').removeClass('show-menu1'); 
	}
});


/* Script end */

});
});