
var _maxi = 3
var _maxj = 3

  loop(0, function(_i){return _i < _maxi;}, function(_i){return ++_i;},
	  function(_i, next)
	  {
		if ( _i < _maxi )
		{
			// ASYNC WHILE ( _j < _maxj )
			loop(0, function(_j){return _j < _maxj;}, function(_j){return ++_j;},
				function(_j, next)
				{
				    if ( _j < _maxj )
					{
						// BODY
						console.log ( _i +' / '+ _j ) ;
						// END BODY
					}
					next();
				},
				function(i)	{ next(); }  
			);
		}
	  },
	  function( _i)   {  /* RETURN */ }
  );
  
 