
	// _canvasp					:	container
	// _canvas ( "_canvas" )	:	canvas
	// _ctx						: 	context

	var _canvas 	= document.getElementById("_canvas"); 
	_canvas.width  	= $("#_canvasp").width(); 
	_canvas.height 	= $("#_canvasp").height(); 
	
	var _ctx = _canvas.getContext("2d");
	_ctx.beginPath(); 
	_ctx.moveTo(10, 10); 
	_ctx.lineTo( _canvas.width-10, _canvas.height-10 ); 
	_ctx.lineWidth = 10; 
	_ctx.strokeStyle = "#ff0000"; 
	_ctx.stroke();
	