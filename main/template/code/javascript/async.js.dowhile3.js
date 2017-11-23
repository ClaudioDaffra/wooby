 
	var i = 0; _maxi=2;
	async.doWhilst(

		function(next_i) // REPEAT
		{ 
			var j = 0;  _maxj = 2 ;
			async.doWhilst(
 			function (next_j)  // REPEAT
			{
				var k = 0;   _maxk = 2;
				async.doWhilst(
				function (next_k) // REPEAT
				{			
						// BODY
						console.log( i,j,k  );  
						// END BODY
					k++;setTimeout(next_k,0);  
				},
				function () { return k < _maxk; },  // UNTIL			
			    function (){j++;next_j(); })				
			},
			function () { return j < _maxj; }, 	// UNTIL	
			function (){i++;next_i(); })
		},
		function() {return i < _maxi}  	// UNTIL
		
	);
