

$(window).resize(function(){
	$('.slogan-text').css({
		position:'absolute',
		top: ($(window).height() - $('.slogan-text').outerHeight())/2
	});
});