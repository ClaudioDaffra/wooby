 
	var _i = 0; _maxi=2
	async.whilst(
	function() {return _i < _maxi},  // WHILE
	function(next_i)
	{ 
		var _j = 0;  _maxj=2
		async.whilst(
		function () { return _j < _maxj; },   // WHILE 
		function (next_j) 
		{
			var _k = 0;  _maxk=2
			async.whilst(
			function () { return _k < _maxk; },   // WHILE 
			function (next_k) 
			{			
					// BODY
					console.log( _i,_j,_k  );  
					// END BODY
				_k++;setTimeout(next_k,0);  // END WHILE
			},
			function (){_j++;next_j(); });// END WHILE				
		},
		function (){_i++;next_i(); });// END WHILE
	});
