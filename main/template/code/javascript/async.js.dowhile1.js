

	var _i = 0; _maxi = 2 ;

	async.doWhilst(
		function(next_i) // REPEAT
		{
			// BODY
			console.log ( _i )
			// END BODY
			
			_i++ ; setTimeout(function() { next_i(null, _i); }, 0);
		},
		function() { return _i < _maxi ; } // UNTIL
	); 
