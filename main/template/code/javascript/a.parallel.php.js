
	//****************
	//                 Parallel PHP
	//****************	

	wb.parallel.php
	(
		function (callback) 
		{ 
			$.post("../../main/server/math.pow.post.json.php", {n:3}, callback, "json"); 
		},
		function (callback) 
		{ 
			$.get("../../main/server/math.pow.get.html.php", {n:5}, callback, "html"); 
		},
		function (callback) 
		{ 
			var arr = new Array(43,21,2,1,9,24,2,99,23,8,7,114,92,5);

			$.post("../../main/server/array.quicksort.php", {uarray: JSON.stringify(arr)}	, callback, "json"); 
		},
		function (d1,d2,d3) 
		{ 
			var t = "\nd1:" + d1.ret + "\nd2:"+ d2 + "\n d3:[ "+d3+" ] " ;
			console.log ( t ) ;
		}
	);
	
	// End Parallel PHP
