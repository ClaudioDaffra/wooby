

var _maxi = 3

// ASYNC WHILE ( _i < _maxi )
loop(0, function( _i ){return _i < _maxi;}, function(_i){return ++_i;},
  function(_i, next)
  {
    if ( _i < _maxi )
	{
		// BODY
		console.log ( _i ) ;		
		// END BODY
	}
    next();
  },
  function(_i){ /* RETURN */ }
);
// ASYNC END WHILE ;

