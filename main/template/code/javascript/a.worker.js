

	var w = wb.worker.start('../../main/worker/worker1.js')

	wb.worker.message ( w,function(event) 
	{

	  console.log ( event.data ) ;

	});

