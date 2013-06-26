// Sticky nav

$(window).load(function(){
  $("#mainnav").sticky({ topSpacing: 0 });
});

// Smooth scroll

$(document).ready(function() {

    $(".scroll-links a").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });

});


// Isotope portfolio

$(function(){
	var $container = $('#posts');
	$container.isotope({
		itemSelector : '.post'
	});
	var $optionSets = $('#portfolio .option-set'),
		$optionLinks = $optionSets.find('a');
	$optionLinks.click(function(){
		var $this = $(this);
		// don't proceed if already selected
		if ( $this.hasClass('selected') ) {
			return false;
		}
		var $optionSet = $this.parents('.option-set');
		$optionSet.find('.selected').removeClass('selected');
		$this.addClass('selected');
	// make option object dynamically, i.e. { filter: '.my-filter-class' }
	var options = {},
		key = $optionSet.attr('data-option-key'),
		value = $this.attr('data-option-value');

	// parse 'false' as false boolean
	value = value === 'false' ? false : value;
	options[ key ] = value;
		if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
		// changes in layout modes need extra logic
		changeLayoutMode( $this, options )
	} else {
		// otherwise, apply new options
		$container.isotope( options );
	}
	return false;
	});
});


// Flexslider 2

$(function(){
	//SyntaxHighlighter.all();
	});
		$(window).load(function(){
		$('.flexslider').flexslider({
		animation: "slide",
		start: function(slider){
		  $('body').removeClass('loading');
		}
	});
});


// Selectnav

selectnav('fluid-nav', {
    nested: false,
    label: false
});

selectnav('fixed-nav', {
    nested: false,
    label: false
});


// Fancybox lightbox

$(document).ready(function() {
	$(".fancybox").fancybox({
		padding : 0,
		beforeShow: function () {

					this.title = $(this.element).attr('title');
					this.title = '<h4>' + this.title + '</h4>' + $(this.element).find('img').attr('alt');


		            if (this.title) {
		                // New line
		                this.title += '<br />';

		                // Add tweet button
		                this.title += '<a href="https://twitter.com/share" class="twitter-share-button" data-count="none" data-url="' + this.href + '">Tweet</a> ';

		                // Add FaceBook like button
		                this.title += '<iframe src="//www.facebook.com/plugins/like.php?href=' + this.href + '&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:110px; height:23px;" allowTransparency="true"></iframe>';
		            }
		        },
        afterShow: function() {
            // Render tweet button
            twttr.widgets.load();
        },
		helpers : {
			title : { type: 'inside' },
		}
	});
	$('.fancybox-media').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		helpers : {
			media : {},
		}
	});
});


// One Page Navigation

$('#fluid-nav').onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 750,
    scrollOffset: 30,
    scrollThreshold: 0.5,
    filter: ':not(.external)',
    easing: 'swing',
    begin: function() {
        //I get fired when the animation is starting
    },
    end: function() {
        //I get fired when the animation is ending
    },
    scrollChange: function($currentListItem) {
        //I get fired when you enter a section and I pass the list item of the section
    }
});
