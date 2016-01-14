// JavaScript Document

/* Copyright 2008 Paul Bennett - http://paulicio.us
 * Scroller.js
 * Captures mouse wheel events and runs the ScrollSmoothly
 * function based on their output.
 * Aims to aid usability by allowing the user to scroll the 
 * page horizontally smoothly using only their mousewheel.
 * Mousewheel event capture by Adomas PaltanaviÄius at http://adomas.org/
 */
/*$(document).ready(function(){
	
	$(".more").click(function(){
		
		var text = $(".more").text();
		if (text == "+"){
			$(".desc").show();
			$(".more").text("-");
			}
		else{
			$(".desc").hide();
		  $(".more").text("+");
		}
});*/
/*function handle(delta) {
        if (delta <0)
                ScrollSmoothly(10,10,'right');
        else if (delta >0)
                ScrollSmoothly(10,10,'left');
        else
        	;
}
 
function wheel(event){
        var delta = 0;
        if (!event) 
                event = window.event;
        if (event.wheelDelta) {
                delta = event.wheelDelta/120;
                if (window.opera)
                        delta = -delta;
        } else if (event.detail) {
                delta = -event.detail/3;
        }
        if (delta)
                handle(delta);
        if (event.preventDefault)
                event.preventDefault();
	event.returnValue = false;
}

var repeatCount = 0;

function ScrollSmoothly(scrollPos,repeatTimes, direction) {
	if(repeatCount < repeatTimes)
		if(direction == 'right')
			window.scrollBy(20,0);
		else
			window.scrollBy(-20,0);
	else
	{
		repeatCount = 0;
		clearTimeout(cTimeout);
		return;
	}
	repeatCount++;
	cTimeout = setTimeout("ScrollSmoothly('" + scrollPos + "','"+ repeatTimes +"','"+ direction +"')",10);
}
 
/* Initialization code. */ /*
if (window.addEventListener)
        window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;
 // JavaScript Document
 */
	
});
