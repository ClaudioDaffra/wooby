
	//****************
	//                 THREAD INIT
	//****************	
		
	var CORE = 8 ;

	var MT = wb.parallel.js()

	var workerFunction = function (param, done) 
	{
		done();
	};

	for(var no = 1; no < CORE ; no++) 
	{
		MT.run(workerFunction, no, thread(no) )
	}


	//****************
	//                 THREAD RUN
	//****************

	function thread ( n )
	{
	  
	  // BODY
	  console.log ( n ) ;
	  
	}

	// END Parallel Javascript
