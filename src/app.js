$(document).ready(function () {
    $('.slide-news-right').slick({
        infinite: false,
        slidesToShow: 1, 
        slidesToScroll: 1, 
        arrows: true, 
        dots: false
    });
    $('body').on('click', '#form-ticket input:checkbox', function() {
		$(this).closest('p').toggleClass('active', this.checked);
	});

    $("#btn-close-bar").click(function(){
        $(".longform-bar-fixbottom-2").addClass("shortbar-longform");
    });
    $('.screenshot_slider').slick({
        centerMode: true,
        slidesToShow: 5,
        dots: false,
        arrows: true,
        swipe: true,
        swipeToSlide: true,
    });
    $("#btn-readmore-cmt").click(function(){
        $("#box-review-comment").toggleClass("active");
    });
    // $("#btn-open-chat").click(function(){
    //     $(this).addClass("active");
    // });
   
});

$(function(){				
    var $win = $(window); 
    var $box = $("#btn-open-chat");
    
     $win.on("click.Bst", function(event){		
        if ( 
            $box.has(event.target).length == 0 
        &&
            !$box.is(event.target) 
        ){
            $box.removeClass("active");
        } else {
            $box.addClass("active");
        }
    });
});
