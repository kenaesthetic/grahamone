// JavaScript Document

var $pheight = $(window).height();

$('#slide1, #slide2, #slide3').height($pheight);

$(window).on('scroll', function(){
	if( $(window).scrollTop() >= $pheight/2 ){
		$('#intro-logo').fadeOut();
	}else{
		$('#intro-logo').fadeIn();
	}
});

$(window).on('scroll', function(){
	if( $(window).scrollTop() >= $pheight/1.5 ){
		$('#header').slideDown(850);
	}else{
		$('#header').slideUp(850);
	}
});

$(window).on('scroll', function(){
	if( $(window).scrollTop() >= $pheight * 2 ){
		$('.contribute').fadeOut();
	}else{
		$('.contribute').fadeIn();
	}
});

$('#slide1').click(function(){
	$("html,body").animate({
		scrollTop: $pheight
	}, 2000, 'easeInOutCubic');
});

$('.contribute, #slide2').click(function(){
	$("html,body").animate({
		scrollTop: $pheight * 2
	}, 2000, 'easeInOutCubic');
});