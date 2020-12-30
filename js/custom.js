$(document).ready(function( ) {
	var ht = $(window).height( );
	$('section').height(ht);
    
	$(window).on("resize", function( ) {
		var ht = $(window).height( );
		$('section').height(ht);
	});
    
	$('#menu li').on("click", function(e) {
		e.preventDefault( );
		var ht = $(window).height( );
		var i = $(this).index( );
		var scPagePos = ht * i;
		
		$('html, body').stop( ).animate({"scrollTop":scPagePos}, 1400);
	}); 
    
	$(window).on("scroll", function( ) {
		var ht = $(window).height( );
		var scroll = $(window).scrollTop( );
		
		for(var i=0; i<5; i++) {
			if(scroll>=ht*i-50 && scroll<ht*(i+1)-50) {
				$('#menu li').removeClass( );
				$('#menu li').eq(i).addClass("on");
			}
		}		
	}); 
	
	$('section').on("mousewheel", function(event, delta) {
		if(delta > 0) { 
			var prev = $(this).prev( ).offset( ).top;
			
			$('html, body').stop( ).animate({"scrollTop":prev}, 1400, "easeOutBounce");
		}else if(delta < 0) {
			var next = $(this).next( ).offset( ).top;
			$('html, body').stop( ).animate({"scrollTop":next}, 1400, "easeOutBounce");
		}
	});
    
});

$(document).ready(function(){

    $('.sec2-wrap article').on("mouseover", function(){
        var vid = $(this).find("video").get(0);
            vid.currentTime = 0; 
            vid.play(); 
        
        $(this).stop().animate({"width":"28%"}, 800, function(){
            $(this).find('h3').stop().animate({"right":"250px"}, 400);
            $(this).find('p').stop().animate({"left":"50px"}, 700);
        });
        $(this).find('video').stop().animate({"opacity":"1"}, 1200);
    });
    
    $('.sec2-wrap article').on("mouseout", function(){
        var vid = $(this).find("video").get(0);
        vid.pause();
        
        $(this).stop().animate({"width":"24%"}, 700);
        $(this).find('video').stop().animate({"opacity":"0"}, 1000);
        $(this).find('h3').stop().animate({"right":"-350px"}, 200);
        $(this).find('p').stop().animate({"left":"-350px"}, 500);
    });
    
    function active(ci,sc,ht){
		var wsc = $(this).scrollTop();
		if(wsc > $(ci).offset().top - ($(this).height()/ht)){
			$(ci).find(sc).addClass('active');
		}else{
			$(ci).find(sc).removeClass('active');
		}
	};
    
    $(window).scroll(function () {
        active('.sec3-wrap', '.sec3-text', '2');
        active('.square-wrap', '.square', '1');
        active('.square', '.sec3-txt','3');
        active('.sec4-wrap', '.img', '2');
        active('.sec4-wrap', '.txt', '3');
        active('.sec4-wrap', '.search', '7');
        active('.square', '.sec3-txt','2');
    });
    
    TweenMax.to(".wrapper", 2, {
        top: "-100%",
        ease: Expo.easeInOut,
        delay: 2.5
    });

    var tl = new TimelineMax();

    tl.from(".loader", 1, {
        scaleY: "0%",
        y: 80,
        ease: Expo.easeInOut,
        delay: 0.5,
        transformOrigin: "50% 100%"
    });

    tl.to(".loader", 1.6, {
        height: "20vh",
        scaleY: "0%",
        ease: Expo.easeInOut,
        transformOrigin: "0% -100%"
    });
});

	$(function(){
		size();
		$(window).resize(function(){
			size();
		})
		function size(){
			var wid = $(window).innerWidth()+17;
			var hei = $(window).innerHeight();
			$(".mfull-wi").css("width",wid);
			$(".mfull-wi").css("height",hei);
		}
	});

$(document).ready(function () {
    var btn = $(".menu-btn");
    btn.click(function () {
        var chk = $(".mfull").width();
        if (chk == 0) {
            $("#wrap").addClass("btn_on");
        } else {
            $("#wrap").removeClass("btn_on");
        }
    });
    $(".mfull-ul li a").click(function () {
        $("#wrap").removeClass("btn_on");
    });
});

$(function(){
    setTimeout(function(){
        $('.maintext').removeClass('hidden');
        $('.maintext2').removeClass('hidden');
    }, 800);
});
