 
	var _i = 0; _maxi=2
	async.whilst(
	function() {return _i < _maxi },  // WHILE
	function(next_i)
	{ 
		var _j = 0; _maxj=2;
		async.whilst(
		function () { return _j < _maxj; },  // WHILE
		function (next_j) 
		{
				// BODY
				console.log( _i,_j );  
				// END BODY
			_j++;setTimeout(next_j,0);  // END WHILE
		},
		function (){_i++;next_i(); }); // END WHILE
	});
