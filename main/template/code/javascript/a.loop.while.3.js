
var _maxi = 2
var _maxj = 2
var _maxk = 2 

// ASYNC WHILE ( _i < _maxi )
loop(0, function(_i){return _i<_maxi;}, function(_i){return ++_i;},
  function(_i, next)
  {
	if ( _i < _maxi )
	{ 
		// ASYNC WHILE ( _j < _maxj )
		loop(0, function(_j){return _j<_maxj;}, function(_j){return ++_j;},
		  function(_j, next)
		  {
			if ( _j < _maxj )
			{
				// ASYNC WHILE ( _k < _maxk )
				loop(0, function(_k){return _k<_maxk;}, function(_k){return ++_k;},
				  function(_k, next)
				  {
							if ( _k < _maxk )
							{		  
								// BODY
								console.log ( _i +' / ' + _j  +' / '+ _k ) ;					
								// END BODY
							}
				  next();
				  },
				  function(_k){ next(); } 
				);
			}
		  },
		  function(_j){ next(); }  
		);
	}
  },
  function(_i){ /* RETURN */ }
);
