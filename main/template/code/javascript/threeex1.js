
// _canvasp	:	container
// _canvas3	:	canvas

// _ctx3		:	context
// _camera3		:	camera
// _renderer3	:	renderer

// init

	var _canvas3 = document.getElementById( "_canvas3" ); 
	var _ctx3   = new THREE.Scene()
	var _camera3 = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

	_renderer3 = new THREE.WebGLRenderer({ alpha: true } );
	_canvas3.width  = $("#_canvasp").width(); 
	_canvas3.height = $("#_canvasp").height(); 

	_renderer3.setSize( _canvas3.width , _canvas3.height );

	$(_renderer3.domElement).css("top",0);
	$(_renderer3.domElement).css("left",0);
	$(_renderer3.domElement).css("position","absolute");

	_canvas3.appendChild( _renderer3.domElement );

	var geometry = new THREE.BoxGeometry( 1, 1, 1 ); 
	var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } ); 
	var cube = new THREE.Mesh( geometry, material ); 

	_ctx3.add( cube ); 
	_camera3.position.z = 5; 

	// main loop

	var render = function () 
	{ 
		requestAnimationFrame( render ); 
		cube.rotation.x += 0.1; 
		cube.rotation.y += 0.1; 
		_renderer3.render( _ctx3, _camera3 ); 
	}; 

	render();