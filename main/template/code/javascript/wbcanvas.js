
	// INIT

	// ..................................................................... _canvas("_canvas") , _ctx 
	var _canvas = document.getElementById("_canvas"); 
	_canvas.width  = $("#_canvasp").width(); 
	_canvas.height = $("#_canvasp").height(); 
	var _ctx = _canvas.getContext("2d");

	// ..................................................................... _canvasc("_canvasc") , _ctxc
	var _canvasc = document.getElementById("_canvasc"); 
	_canvasc.width  = $("#_canvasp").width(); 
	_canvasc.height = $("#_canvasp").height(); 
	var _ctxc = _canvasc.getContext("2d");

	// ..................................................................... _canvas2("_canvas2") , _ctx2
	var _canvas2 = document.getElementById("_canvas2"); 
	_canvas2.width  = $("#_canvasp").width(); 
	_canvas2.height = $("#_canvasp").height(); 
	var id_params = { width: _canvas2.width, height: _canvas2.height -4 }; 
	$(_canvas2).css("top",0);
	$(_canvas2).css("left",0);
	$(_canvas2).css("position","absolute");
	var _ctx2 = new Two( {fullscreen: false} ).appendTo( _canvas2 ); 

	// ..................................................................... _canvas3("_canvas3") , _ctx3
	var _canvas3 = document.getElementById("_canvas3"); 
	var _ctx3 = new THREE.Scene()
	var _camera3 = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
	_renderer3 = new THREE.WebGLRenderer({ alpha: true } );
	_canvas3.width  = $("#_canvasp").width(); 
	_canvas3.height = $("#_canvasp").height(); 
	_renderer3.setSize( _canvas3.width , _canvas3.height );
	$(_renderer3.domElement).css("top",0);
	$(_renderer3.domElement).css("left",0);
	$(_renderer3.domElement).css("position","absolute");
	_canvas3.appendChild( _renderer3.domElement );

	// DRAW
	
