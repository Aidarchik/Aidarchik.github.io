$(document).ready(function(){
    $(".sidebarbtn").toggle(function(){
    	$(this).parent().parent().find(".sidebar_list").css({"display":"none"});
    	$(this).parent().parent().parent().find(".sidebar").css({"width": "-=219px"});
        $(this).toggleClass("active"); return false;
    },function(){
        $(this).parent().parent().find(".sidebar_list").css({"display":"block"});
        $(this).parent().parent().parent().find(".sidebar").css({"width": "+=219px"});
        $(this).toggleClass("active"); return false;
    });  

    $('.sidebar_list .arrow').click(function(){
        _this = $(this);
        $(this).closest('li').find('ul').slideToggle(200);
		setTimeout(function(){
            _this.closest('li').toggleClass('open');
		},100)
    });

    $(":input[name='search']").focus(function(){
        _this = $(this);
       	$(this).css({
       		"border": "1px solid #A9303C",
        	"background-color": "#ffffff",
        	"outline": "none"
       	});
        $(this).animate({width: "+=305px"}, 500);
        $(this).parent().find("button").animate({width:"62px"},200);
    });

    $(":input[name='search']").blur(function(){
        _this = $(this);
       	$(this).css({
       		"-webkit-border-radius":"3px",
 			"-moz-border-radius":"3px",
 			"-ms-border-radius":"3px",
 			"-o-border-radius":"3px",
 			"border-radius":"3px",		
 			"border": "1px solid #93A1AB",
        	"outline": "none"
       	});
        $(this).animate({width: "60px"}, 500);
        $(this).parent().find("button").animate({width:"0"},200);
    });

    $(".mail").hover(
        function(){
            $(this).animate({right:"0"},200);
        },
        function(){
            $(this).animate({right:"-30"},200);
        }
    );

    $(".calcul").hover(
        function(){
            $(this).animate({right:"0"},200);
        },
        function(){
            $(this).animate({right:"-30"},200);
        }
    );

    $(function(){$.fn.scrollToTop=function(){
    	$(this).hide().removeAttr("href");
    	if($(window).scrollTop()!="0"){$(this).fadeIn("slow")}
    		var scrollDiv=$(this);$(window).scroll(function(){
    			if($(window).scrollTop()=="0"){
    				$(scrollDiv).fadeOut("slow")}
    				else{$(scrollDiv).fadeIn("slow")}});
    	$(this).click(function(){$("html, body").animate({scrollTop:0},"slow")})
    	}
    });
});
	