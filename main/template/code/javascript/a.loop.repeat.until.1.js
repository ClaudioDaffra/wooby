

	var _maxi = 3

	// ASYNC REPEAT 
	loop(0, function( _i ){return _i < _maxi;}, function(_i){return ++_i;},
	  function(_i, next)
	  {
			// BODY
			console.log ( _i ) ;		
			// END BODY
		next();
	  },
	  function(_i){  /* RETURN */ } // ASYNC UNTIL ( _i < _maxi ); 
	);
