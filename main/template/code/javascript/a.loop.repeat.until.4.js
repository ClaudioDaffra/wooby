
 
	var _maxi = 2
	var _maxj = 2
	var _maxk = 2 
	var _maxm = 2

	// ASYNC REPEAT ( _i < _maxi )
	loop(0, function(_i){return _i<_maxi;}, function(_i){return ++_i;},
	  function(_i, next)
	  {
	 
			// ASYNC REPEAT ( _j < _maxj )
			loop(0, function(_j){return _j<_maxj;}, function(_j){return ++_j;},
			  function(_j, next)
			  {
			  
					// ASYNC REPEAT ( _k < _maxk )
					loop(0, function(_k){return _k<_maxk;}, function(_k){return ++_k;},
					  function(_k, next)
					  {
			  
							// ASYNC REPEAT ( _m < _maxm )
							loop(0, function(_m){return _m<_maxm;}, function(_m){return ++_m;},
							  function(_m, next)
							  {
							  
									// BODY
									console.log(_i,_j,_k,_m);
									// END BODY
								
								next();
							  },
							  function(_m){ next(); }  // ASYNC UNTIL ( _m < _maxm );
							);
					  },
					  function(_k){ next(); }  // ASYNC UNTIL ( _k < _maxk );
					);
			  },
			  function(_j){ next(); }  // ASYNC UNTIL ( _j < _maxj );
			);
	  },
	  function(_i){ /* RETURN */} // ASYNC UNTIL ( _i < _maxi ); 
	);  
	 
