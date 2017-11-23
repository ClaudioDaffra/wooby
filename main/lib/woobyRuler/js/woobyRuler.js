
// **************
//	woobyRuler
// **************
//
// in : divRuler,DivContainer,DivWorkArea,Unit
//
// Claudio Daffra
// daffra.claudio@gmail.com
// GPL

function woobyRuler(gp,  p, c,unit,TOP,LEFT)
{
	console.log ( "#woobyRuler" );
	console.log ( "#window.borderOrientation" );	
	console.log ( window.borderOrientation );
	
	if ( TOP	==	undefined ) TOP 	= 50
	if ( LEFT	==	undefined ) LEFT 	= 50
	
	$('#wbRulerContainer').css('overflow','hideen');
	
	function wbDrawRulerRaw( parent,len , unit , TM , dir, text  ) 
	{
		if ( TM==-1) return ;

		var DPI = 96 * 1.15 // ? 1.15 // TODO correzione schermo

		var spacing = 1 ;
		if ( unit == '%' )  spacing = len / 100 * TM; // 100%
		if ( unit == 'px' ) spacing = len / len * TM; // width
		if ( unit == 'cm' ) spacing = 1 / (2.54/DPI) * TM; // width
		if ( unit == 'mm' ) spacing = 1 / (25.4/DPI) * TM; // width
		if ( unit == 'in' ) spacing = 1 / (1/DPI)  * TM; // width 

		for ( i=0; i<len; i+=spacing)
		{
			if ( TM!=-1)
			{
				// ................................................  vis. (i) o (text)
				if ( text==undefined )
				{
					var value = parseInt(Math.ceil(i*TM)/spacing)
				}
				else
				{
					var value = text ;
				}
					
				var e = document.createElement ( 'label' ) ;

				// ................................................  x / Y		
				if ( dir=='horiz') $(e).css ( 'left' 	, Math.ceil(i-1)+'px' ) ;
				if ( dir=='vert' ) $(e).css ( 'top' 	, Math.ceil(i-9)+'px' ) ;		
				
				// ................................................  vis. (i+1y) o (text+10y)	

				if ( dir=='horiz')
				{
					if ( text==undefined )
					{
						$(e).css ( 'top' 	, -1 +'px' ).c
						$(e).css ( 'left' 	, Math.ceil(i-3)+'px' )				
					}
					else
					{
						$(e).css ( 'top' 		, 9+'px' )
					}
				}
						
				if ( dir=='vert')
				{
					if ( text==undefined )
					{
						$(e).css ( 'left' 		, -1+'px' )
					}
					else
					{
						if( text=='|')
							$(e).css ( 'left' 		, 19+'px' ) 
						else
							$(e).css ( 'left' 		, 26+'px' )					
					}
				}
						
				// ................................................  ruota solo i numeri
				if ( dir=='vert'  )
				{
					e.style.WebkitTransform = "rotate(90deg)"; 			
				}
				if ( text==undefined && dir=='vert'  )
				{
					e.style.WebkitTransform = "rotate(360deg)"; 			
				}
				
				// ................................................  append			
				$(e).css ( 'position' , 'absolute' ) ;

				if ((value!='|')&&(value!='.')) $(e).addClass ( 'wbRulerUnit_TM' ) ;
				if ( value=='|' ) 				$(e).addClass ( 'wbRulerUnit_tm' ) ;			
				if ( value=='.' ) 				$(e).addClass ( 'wbRulerUnit_tu' ) ;
				
				//............... piccola correzione

									if (( value=='.') &&  (dir=='horiz'  )) 
									{ 
										var kludge = parseInt ( $(e).css ( 'left' ) )-0.5;				
										$(e).css ( 'left' , kludge+'px') ;
									}
									if (( value=='.') &&  (dir=='vert' )) 
									{
										//var kludge = parseInt ( $(e).css ( 'top' ) )+0.5	
										//$(e).css ( 'top' , kludge+'px') ;	
									}

				
				$(parent).append ( $(e).html ( value ) ) ;
			}
		}
		
	}

	function drawRuler ( parent,len , unit , TM , tm,tu, dir, text  )
	{
		wbDrawRulerRaw ( parent,len  , unit, TM ,dir 		) // vis ogni 10% su 100%
		wbDrawRulerRaw ( parent,len  , unit, tm ,dir ,'|'	) // vis ogni 10% su 100%	
		wbDrawRulerRaw ( parent,len  , unit, tu ,dir ,'.'	) // vis ogni 10% su 100%		
	}
		
	function wbRulerCreateDiv ( wbGranParent,wbParent,wbChild,unit )
	{
		var wbAreaButtonLeft 		= '0px' ;
		var wbAreaButtonTop  		= '0px' ;
		var wbAreaButtonWidth 		= '25px' ;
		var wbAreaButtonHeight  	= '25px' ;

		$(wbGranParent).css('overflow','hidden');

		// ............................................ wbParent
		$(wbParent).css ( 'position' , ' absolute' ) ;
		$(wbParent).css ( 'left' , wbAreaButtonWidth  ) ;
		$(wbParent).css ( 'top'  , wbAreaButtonHeight ) ; 
		$(wbParent).css ( 'width'  , '95%' ) ;
		$(wbParent).css ( 'height'  , '95%' ) ; 
		$(wbParent).css ( 'overflow','scroll');

		// ............................................ wbChild

		$(wbChild).css ( 'position' , ' absolute' ) ;
		$(wbChild).css ( 'left' , '0px' ) ;
		$(wbChild).css ( 'top'  , '0px' ) ; 
		$(wbChild).css ( 'overflow','hidden');
		
		var obj = {}
		
		// ........................................... crea bottone selezione 'unit'
		$('.wbRulerButton').empty().remove() ;
		var e = document.createElement("BUTTON");
		$(e).html(unit);
		$(e).addClass ( 'wbRulerButton' ) ;
		$(wbGranParent).append ( e ) ; 
		obj.wbRulerButton = e ;

		// ........................................... crea righello orizzontale
		$('.wbRulerDiv').remove() ;		
		
		var e = document.createElement("DIV");
		$(e).attr ( 'id' , 'wbRulerDivHoriz' ) ;	
		$(e).addClass ( 'wbRulerDiv' ) ;
		$(e).css ( 'left' , wbAreaButtonWidth  +LEFT ) ;
		$(e).css ( 'top' ,  wbAreaButtonTop	   +TOP ) ; 
		$(e).css ( 'width'  , $(wbChild).width()   ) ; // trucco per utilizzare , margin-left
		
		//$(e).css ( 'height' , wbAreaButtonHeight  ) ;  // q1w2e3r4
		$(e).css ( 'height' , '20px'  ) ; 
		
		$(wbGranParent).append ( e ) ;
		obj.wbRulerDivHorizontal = e ;

		// ........................................... crea righello verticale
		var e = document.createElement("DIV");
		$(e).attr ( 'id' , 'wbRulerDivVert' ) ;
		$(e).addClass ( 'wbRulerDiv' ) ;
		$(e).css ( 'left' , wbAreaButtonLeft  ) ;
		$(e).css ( 'top' ,  wbAreaButtonHeight ) ; 
		
		
		//$(e).css ( 'width'  , wbAreaButtonHeight  ) ; // q1w2e3r4
		$(e).css ( 'width'  , '20px' ) ;		
		
		$(e).css ( 'height' , $(wbChild).height() ) ;  // trucco per utilizzare , margin-top
		$(wbGranParent).append ( e ) ;  
		obj.wbRulerDivVertical = e ;

		// ........................................... crea asse X
		$('.wbRulerAxis').empty().remove() ;
		
		var e = document.createElement("div");
		$(e).addClass ( 'wbRulerAxis' ) ;
		$(e).css ( 'height'  , '28px' ) ;	
		$(e).css ( 'width' , '0px'  ) ;
		
		$(wbGranParent).append ( e ) ; 
		obj.wbRulerAxisX = e ;
		
		// ........................................... crea asse Y
		var e = document.createElement("div");
		$(e).addClass ( 'wbRulerAxis' ) ;
		$(e).css ( 'height'  , '0px' ) ;	
		$(e).css ( 'width' , '28px' ) ;		
		$(wbGranParent).append ( e ) ;	
		obj.wbRulerAxisY = e ;	
		
		return obj ;
	}

	// ********************
	// getMousePosition
	// ********************

	function getMousePosition ( wbGranParent,wbChild )
	{
		var position = {}
			
		position.x  =  ( wbGranParent.pageX - $(wbChild).scrollLeft()  ) ;
		position.y  =  ( wbGranParent.pageY - $(wbChild).scrollTop()    ) ; 		
		
		return position ;
	}

	// ********************
	// wbRuler
	// ********************

	function wbRuler ( wbGranParent,wbParent,wbChild,unit,sl,st )
	{
		if ( sl==undefined ) sl = 0 ;
		if ( st==undefined ) st = 0 ;

		// ........................................................... create Ruler
		var obj = wbRulerCreateDiv(wbGranParent,wbParent,wbChild,unit  );
		
		$(obj.wbRulerDivHorizontal	).css ( 'margin-left' , +LEFT+25 );
		$(obj.wbRulerDivVertical	).css ( 'margin-top'  , +TOP );	

		if ( unit=='px')
		{
			drawRuler ( $(obj.wbRulerDivHorizontal),$(wbChild).width()  , 'px', 50,10,5,'horiz' ) // vis ogni 50 su width
			drawRuler ( $(obj.wbRulerDivVertical)  ,$(wbChild).height() , 'px', 50,10,5,'vert'  ) // vis ogni 50 su height
		}
		if ( unit=='%')
		{
			drawRuler ( $(obj.wbRulerDivHorizontal),$(wbChild).width()  , '%', 10,5,1,'horiz'   ) // vis ogni 10% su 100% width
			drawRuler ( $(obj.wbRulerDivVertical)  ,$(wbChild).height() , '%', 10,5,1,'vert'    ) // vis ogni 10% su 100% height
		}
		if ( unit=='cm')
		{
			drawRuler ( $(obj.wbRulerDivHorizontal),$(wbChild).width()  , 'cm', 1,0.5,0.1,'horiz' ) // vis ogni 1 cm su width
			drawRuler ( $(obj.wbRulerDivVertical)  ,$(wbChild).height() , 'cm', 1,0.5,0.1,'vert'  ) // vis ogni 1 cm su height
		}
		if ( unit=='mm')
		{
			drawRuler ( $(obj.wbRulerDivHorizontal),$(wbChild).width()  , 'mm', 10,5,1,'horiz'  ) // vis ogni 1 cm su width
			drawRuler ( $(obj.wbRulerDivVertical)  ,$(wbChild).height() , 'mm', 10,5,1,'vert'   ) // vis ogni 1 cm su height
		}	 
		if ( unit=='in')
		{
			drawRuler ( $(obj.wbRulerDivHorizontal),$(wbChild).width()  , 'in', 1,0.5,0.1,'horiz' ) // vis ogni 1 cm su width
			drawRuler ( $(obj.wbRulerDivVertical)  ,$(wbChild).height() , 'in', 1,0.5,0.1,'vert'  ) // vis ogni 1 cm su height
		} 

	 // --------------------------------------------------------------- wbGranParent mouse move

	 $(wbGranParent).mousemove ( function(e)
	 {
		innerMouse  = getMousePosition(e,wbChild);
		
		//if ( innerMouse.x < $(wbChild).width()+100 ) // 1234 al massimo la linetta non supera la lunghezza del figlio
		 
		{	
		//	$(obj.wbRulerAxisX).css ( 'left', innerMouse.x-158 ) ; // kludge
			$(obj.wbRulerAxisX).css ( 'left', window.mouse.x+25+LEFT-$(wbParent).scrollLeft()   ) ; // kludge			
			$(obj.wbRulerAxisX).css ( 'top' , '0px' ) ;	
		}

		//if ( innerMouse.y < $(wbChild).height()  )
		//if ( innerMouse.y > 1  )	// kludge		
		{			
			$(obj.wbRulerAxisY).css ( 'left', '0px' ) ;
			//$(obj.wbRulerAxisY).css ( 'top' , innerMouse.y-5 ) ; // kludge	
			$(obj.wbRulerAxisY).css ( 'top', window.mouse.y+25+TOP-$(wbParent).scrollTop()    ) ; // kludge			
		}
		
		//console.log ( window.mouse.x , window.mouse.y );

		//console.debug ( wbGranParent movemove() : innerMouse  ) ;
	 });
	 
	 // --------------------------------------------------------------- window resize 
/*
		var doit; // fix event propagation
		window.onresize = function()
		{
		  console.debug ( 'wbRuler  <window> : resize '  ) ;
		  clearTimeout(doit);
		  doit = setTimeout(wbRuler(wbGranParent,wbParent,wbChild,unit,$(wbParent).scrollLeft(),$(wbParent).scrollTop() ), 100);
		};	
 */

	 // --------------------------------------------------------------- wbParent scroll 
	

	  $(wbParent).scroll(function()
	  {
		  
		$(obj.wbRulerDivHorizontal).css( 'margin-left' , -$(wbParent).scrollLeft()+LEFT+25  ) ;
		$(obj.wbRulerDivVertical  ).css( 'margin-top'  , -$(wbParent).scrollTop()+TOP  ) ;
		
/*
		//$(obj.wbRulerDivHorizontal).css( 'margin-left' , +50-$(wbParent).scrollLeft()  ) ;
		//$(obj.wbRulerDivVertical  ).css( 'margin-top'  , +25-$(wbParent).scrollTop()  ) ;
	
		if ( window.borderOrientation == 0	 )
		{
			$(obj.wbRulerDivHorizontal).css( 'margin-left' , -LEFT	-	$(wbParent).scrollLeft() +32 ) ;
			$(obj.wbRulerDivVertical  ).css( 'margin-top'  , -TOP	-	$(wbParent).scrollTop()  +57 ) ;
		}
		else
		{
			$(obj.wbRulerDivHorizontal).css( 'margin-left' , -LEFT	-	$(wbParent).scrollLeft() +82 ) ;
			$(obj.wbRulerDivVertical  ).css( 'margin-top'  , -TOP	-	$(wbParent).scrollTop()  +12 ) ;
		}
*/		
	  });

 
	 // --------------------------------------------------------------- obj.wbRulerButton click

		$(obj.wbRulerButton).click ( function()
		{
			if ( window.wbRulerCount == undefined ) window.wbRulerCount=0;
			window.wbRulerCount++ ;
			
			var arrDebug = [ 'px','%','cm','mm','in' ] ;
			
			console.debug ( 'wbRuler <button> : ',arrDebug[window.wbRulerCount] )

			var sl = $(wbParent).scrollLeft() ;
			var st = $(wbParent).scrollTop() ;
			
			switch ( window.wbRulerCount ) 
			{
				case 0	:	wbRuler ( $(wbGranParent),$(wbParent),$(wbChild),'px',sl,st  ) ; widget.unitRuler = 'px' ; break ;
				case 1	:	wbRuler ( $(wbGranParent),$(wbParent),$(wbChild),'%' ,sl,st  ) ; widget.unitRuler = '%'  ; break ;
				case 2	:	wbRuler ( $(wbGranParent),$(wbParent),$(wbChild),'cm',sl,st  ) ; widget.unitRuler = 'cm' ; break ;
				case 3	:	wbRuler ( $(wbGranParent),$(wbParent),$(wbChild),'mm',sl,st  ) ; widget.unitRuler = 'mm' ; break ;
				case 4	:	wbRuler ( $(wbGranParent),$(wbParent),$(wbChild),'in',sl,st  ) ; widget.unitRuler = 'in' ; break ;
			}

			if ( window.wbRulerCount == 4 ) window.wbRulerCount=0;
		
		});

	}
	// .............................................................. disegna righello
	wbRuler (  gp,  p, c,unit )
}

