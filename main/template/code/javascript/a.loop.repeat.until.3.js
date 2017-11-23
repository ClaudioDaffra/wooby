
	var _maxi = 2
	var _maxj = 2
	var _maxk = 2 

	// ASYNC REPEAT 
	loop(0, function(_i){return _i<_maxi;}, function(_i){return ++_i;},
	  function(_i, next)
	  {
			// ASYNC REPEAT 
			loop(0, function(_j){return _j<_maxj;}, function(_j){return ++_j;},
			  function(_j, next)
			  {
					// ASYNC REPEAT 
					loop(0, function(_k){return _k<_maxk;}, function(_k){return ++_k;},
					  function(_k, next)
					  {
									// BODY
									console.log ( _i +' / ' + _j  +' / '+ _k ) ;					
									// END BODY
					   next();
					  },
					  function(_k){ next(); } // UNTIL ( _k < _maxk )
					);
			  },
			  function(_j){ next(); }  // UNTIL  ( _j < _maxj )
			);
	  },
	  function(_i){  /* RETURN */ } // UNTIL ( _i < _maxi )
	);
