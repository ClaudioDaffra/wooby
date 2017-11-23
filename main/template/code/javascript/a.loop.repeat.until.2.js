
	var _maxi = 3
	var _maxj = 3

	// ASYNC REPEAT 
	loop(0, function(_i){return _i < _maxi;}, function(_i){return ++_i;},
	  function(_i, next)
	  {
			// ASYNC REPEAT 
			loop(0, function(_j){return _j < _maxj;}, function(_j){return ++_j;},
				function(_j, next)
				{
						// BODY
						console.log ( _i +' / '+ _j ) ;
						// END BODY
					next();
				},
				function(i)	{ next(); }  // UNTIL ( _j < _maxj )
			);
	  },
	  function( _i)   { /* RETURN */ } // UNTIL ( _i < _maxi )
	);
