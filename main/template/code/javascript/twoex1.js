
// _canvasp		:	container
// _canvas2		:	canvas
// _ctx2		:	context

	// init

	var _canvas2 = document.getElementById("_canvas2"); 
	_canvas2.width  = $("#_canvasp").width(); 
	_canvas2.height = $("#_canvasp").height(); 
	$(_canvas2).css("top",0);
	$(_canvas2).css("left",0);
	$(_canvas2).css("position","absolute");

	// draw

	var _ctx2 = new Two( {fullscreen: false} ).appendTo( _canvas2 );
	
	var circle 		 = _ctx2.makeCircle(150, 150, 50);
	var rect 		 = _ctx2.makeRectangle(213, 100, 100, 100);
	circle.fill 	 = "#FF8000";
	circle.stroke 	 = "orangered";
	circle.linewidth = 5; 
	rect.fill		 = "rgb(0, 200, 255)"; 
	rect.opacity 	 = 0.75; 
	rect.noStroke(); 
	
	_ctx2.update(); 
	
