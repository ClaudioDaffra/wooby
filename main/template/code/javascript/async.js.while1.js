	 
	var _i = 0; _maxi = 2 ; // i=0;

	async.whilst(  function () { return _i < _maxi ; },// WHILE
	function (next_i) 
	{
			// BODY
			console.log ( _i ) ;
			// END BODY
			
		_i++;setTimeout(function () {next_i(null, _i);}, 0);  // END WHILE
	}); 
