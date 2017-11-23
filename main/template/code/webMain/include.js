

	//**********
	//	#include
	//********** 

	window.fileLoad = [] ;
	
	$.when 
	(
		$.get( "_src.html"				, function( data ) { window.fileLoad[0] = data ;	}) ,
		true,
	).then(function()
	{
		$( window.fileLoad[0] ).appendTo( "_#main" ) ,
		init() 
	});
	