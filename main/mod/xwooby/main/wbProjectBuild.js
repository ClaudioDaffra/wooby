


//*************
//				wbBuildProject
//*************


// carica il file body e #include atri file

function wbProjectBuild()
{
	// strappo alla recola, dato che :
	// when funziona sync
	// get  funziona async
	// occorre livellare il tutto e poi reimpostare l'async
	
	$.ajaxSetup({async:false}) ;
	
	console.debug ( '#wbProjectBuild::stage1' ) 	

	// #1 crea elemento Temporaneo

	var _temp = document.createElement('div');	// crea element Temp
	$(_temp).attr('id','_temp');				// attr ID _temp
 
	$(_temp).hide() ;							// nascondi elemento temporaneo
	$(_temp).appendTo(document.body)

	// #2 carica body

	fileToGet = 	'../'+window.project.name + '/src/' + 	'8_body.txt' ;

	$.get( fileToGet,{ "_": $.now() }, function( data ) 
	{
		
			// #3 assegna il body all'elemento temporaneo
			
			var body = data ;
			$('#_temp').html ( body ) ;

			
			// REPULISTA

			
			// #4.a elimina tutti gli elemente resizable / draggable
			
			$('#_temp .widget').draggable().draggable('destroy');			
			$('#_temp .widget').resizable().resizable('destroy');	

			// #4.b elimina tutti gli ID da ( .widget )

			$('#_temp .widget').removeAttr("id")

			// #4.c rimuovi bordo debug
			
			$('#_temp .widget').css("border","none")
			
			// #4.b per tuttle le classi .wbIncludeModule di #_temp --> replaceWith()
			
			$('#_temp .wbIncludeModule').each(function()
			{
				var elem = $(this)	
				
				// #5 carica file				
				var file = '../' + window.project.name + '/' + $(this).attr('name')
				var type = $(this).attr('type')

				// carica un file di testo per evitare che il serve lo esegua
				if ( type == 'php' ) file += '.txt' ;
				
				console.debug ( '#include < ' , file ,  ' >' ); 	
					
				$.get( file,{ "_": $.now() }, function( data ) 
				{
					console.debug ( "#replaceWith" );
					//console.debug ( data );
					
					// rimpiazza gli include con i file
					
					console.log ( '#replace' );					
					//console.log ( elem );
					console.log ( '#with' );
					//console.log ( data );
	
					if ( type == 'css' )
					{
							data = '\n<'+'style>\n' + data + '\n<'+'/style>' ;
					}
					if ( type == 'js' )
					{
							data = '\n<'+'script>\n' + data + ' \n<'+'/script>' ;
					}
					if ( type == 'php' )
					{
							data = '\n<'+'?php\n' + data + '\n?'+'>' ;
					}
					
					$( elem ).replaceWith( data );  
					
					
				},  "text"); // forza lettura come un file di testo, per evitare che venga eseguito


						
			}).promise().done(function () 
			{ 
				// #6 ottieni nuovo body
				var newBody = $('#_temp').html ()


				// REPULISTA
				
				
				// non so perchè vengono inseriti questi elementi KLUDGE ( replaceWith )
				
				newBody = newBody.replaceAll  ( '<!--?php' 	, '<?php' )
				newBody = newBody.replaceAll  ( '?-->' 		, '?>' )
			
				// togliamo la fastidiosa ombra
				
				newBody = newBody.replaceAll  ( 'box-shadow: rgb(136, 136, 136) 10px 10px 5px;' 		, '' )
		 
				// togliamo la position relative , kludge
	
				newBody = newBody.replaceAll  ( 'position: relative', 'position: absolute' ) ;	
				newBody = newBody.replaceAll  ( 'style="position: relative;"', '' ) ;
				
				// togliamo style vuote
				
				newBody = newBody.replaceAll  ( 'style=""' 		, '' )					

				// #7 ora passa allo stage 2 e assembla		


								

				wbProjectBuild2( newBody )

			})
		
		
	}, "text"); 	
	
}

function wbProjectBuild2( body )
{
    console.debug ( '#wbProjectBuild::stage2' ) 

		var temp = "" ;
		var code = "" ;
		
		//.................................................... 0 : xml
		
		temp = $('#wb_xml_edit').val() 
	
		if (temp.length!=0 && temp!=null && temp!="" && temp!='null')
		{ 
			code	= 	'<?xml '+temp+' ?>' + '\n' ;
		}
		//.................................................... 1 : 	doctype
		
		temp = $('#wb_doctype_edit').val() 
		
			code	= 	code + temp + '\n' ;
			
		//.................................................... 2 :	html
		
		temp = $('#wb_html_edit').val() 
		if (( temp != "" ) && ( temp != null )) 
		{ 
			code	= 	code + '<html ' + temp + ' >' + '\n' ;		
		}
		else
		{
			code	= 	code + '<html>' + '\n' ;	
		}
		
				//.................................................... * :	head	
					code	= 	code + '\n<head>' + '\n' ;		
					
						//.................................................... 3 :	title
						
						temp = $('#wb_title_edit').val()
						if ( temp != "" ) 
						{ 
							code	= 	code + '<title> '+temp+' </title>' + '\n' ;
						}

						//.................................................... 4 :	icon
						
						temp = $('#wb_icon_edit').val() 
						if ( temp != "" ) 
						{ 
							code	= 	code + temp + '\n' ;
						}		

						//.................................................... 5 :	meta
						
						temp = $('#wb_meta_edit').val() 
						if ( temp != "" ) 
						{ 
							code	= 	code + temp + '\n' ;
						}		
						
						//.................................................... 6 :	include
						temp = $('#wb_include_edit').val() 
						if ( temp != "" ) 
						{ 
							code	= 	code + temp + '\n' ;
						}			
						
						
						//.................................................... 7 :	redirect
						temp = $('#wb_redirect_edit').val() 
						if ( temp != "" ) 
						{ 
							code	= 	code + temp + '\n' ;
						}	

				//.................................................... * :	/head	
					code	= 	code + '\n</head>' + '\n' ;		
				
				//.................................................... 8 :	body
				temp = body 
				if ( temp != "" ) 
				{ 
					code	= 	code + '\n<body>\n' + temp + '\n</body>' + '\n' ;
				}

				//.................................................... 9 :	webMain
				temp = window.wbWorkAreaEditorHtml.getValue() ;		
				if ( temp != "" ) 
				{ 
					code	= 	code + '\n<'+'script'+'>\n' + temp + '\n<' + '/script'+ '>' + '\n' ;
				}		
		
		//.................................................... * :	/html	
			code	= 	code + '\n</html>' + '\n' ;



		// .................................................................. index.html 
		
		wbFileSave ( '../'+window.project.name+'/index.html',code,false  ) 

		wbMessage ( 'Project' , '<br><<< ../'+window.project.name+'/index.html >>><br> Builded.'  ) ;
			

		$.ajaxSetup({async:true}) ;
	return null ;
}
