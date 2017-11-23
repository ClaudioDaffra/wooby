
/********************
	Crea Widget
********************/


function wbWidgetCreate( widgetName )
{
	if ( widget.target == 'default' ) return null ;

	// ........................................................ setID
	var contatore =  ( +Date.now() ).toString(36);
	console.debug ( '#wbWidgetCreate : contatore : '  ) ;	
	console.debug ( contatore ) ;		
	
	var setPosition	=	true;
	var setID		=	true;
	var setAppend	=	true;
	
	console.log   ( '#widgetName' );
	console.log   (  widgetName	);	
	console.log   ( '#widgetUnit' 	);
	console.log   (  widget.unit	);		
	console.log   ( '#widgetPosition' );	
	console.log   (  widget.position	);	
	console.log   ( '#widget[x,y]'	);
	console.log   (  elementUnderMouse.x,elementUnderMouse.y	);	

	// ################  
	//					WIDGETS
	// ################ 
	


	// ################  
	//					PANELS
	// ################ 

	// ................................... ### panel Main
	
	if ( widgetName == 'pmain' )
	{
		var e = document.createElement("div");
		$(e).addClass( 'widget wbGradH wbpmain' ) ;

		setPosition=false;
	}

	// ................................... ### panel vert 2
	
	if ( widgetName == 'pvert2' )
	{
		var e = document.createElement("div");
		$(e).addClass( 'widget' ) ;
		
		var o = "" ;
		o += "\n"+'	<div class="wbGradV wbpv2Left"></div>' ;
		o += "\n"+'	<div class="wbGradV wbpv2Right"></div>' ;
		o += "\n" 
		$(e)[0].innerHTML = o ;
		
		setPosition=false;
	}	

	// ...................................### panel vert 3
	
	if ( widgetName == 'pvert3' )
	{
		var e = document.createElement("div");
		$(e).addClass( 'widget' ) ;
		
		var o = "" ;
		o += "\n"+'	<div class="wbGradV wbpv3Left"></div>' ;
		o += "\n"+'	<div class="wbGradV wbpv3Center"></div>' ;
		o += "\n"+'	<div class="wbGradV wbpv3Right"></div>' ;
		o += "\n" 
		$(e)[0].innerHTML = o ;	
		
		setPosition=false;
	}		


	// ................................... ### panelhoriz 2
	
	if ( widgetName == 'phoriz2' )
	{
		var e = document.createElement("div");
		$(e).addClass( 'widget' ) ;
		
		var o = "" ;
		o += "\n"+'	<div class="wbGradH wbpo2Top"></div>' ;
		o += "\n"+'	<div class="wbGradH wbpo2Bottom"></div>' ;
		o += "\n" 
		$(e)[0].innerHTML = o ;	
		
		setPosition=false;
	}
	
	// ................................... ### panelhoriz 3
	
	if ( widgetName == 'phoriz3' )
	{
		var e = document.createElement("div");
		$(e).addClass( 'widget' ) ;
		
		var o = "" ;
		o += "\n"+'	<div class="wbGradH wbpo3Top"></div>' ;
		o += "\n"+'	<div class="wbGradH wbpo3Middle"></div>' ;
		o += "\n"+'	<div class="wbGradH wbpo3Bottom"></div>' ;
		o += "\n" 
		$(e)[0].innerHTML = o ;	
		
		setPosition=false;
	}

	// ................................... ### pnav
	
	if ( widgetName == 'pnav' )
	{
		var e = document.createElement("div");
		$(e).addClass( 'widget' ) ;
		
		var o = "" ;
		o += "\n"+'	<div class="wbGradV wbpNavVerticalLeft"></div>' ;
		o += "\n"+'	<div class="wbGradV wbpNavVerticalRight"></div>' ;
		o += "\n" 
		$(e)[0].innerHTML = o ;	
		
		setPosition=false;
	}	
	
	// ................................... ### pstd
	
	if ( widgetName == 'pstd' )
	{
		var e = document.createElement("div");
		$(e).addClass( 'widget' ) ;
		
		var o = "" ;
		o += "\n"+'	<div class="wbGradH wbpstdTop"></div>' ;
		o += "\n"+'	<div class="wbGradH wbpstdMiddle">';

		o += "\n"+'	<div class="wbGradV wbpstdLeft"></div>' ;
		o += "\n"+'	<div class="wbGradV wbpstdCenter"></div>' ;
		o += "\n"+'	<div class="wbGradV wbpstdRight"></div>' ;

		o += "\n"+'	<div class="wbGradH wbpstdBottom"></div>' ;
		o += "\n" 

		$(e)[0].innerHTML = o ;	

		setPosition=false;
	}

	// ######## 
	// SEMANTIC
	// ########

	// ................................... ### sstd / header nav div aside footer
	
	if ( widgetName == 'sstd' )
	{
		var e = document.createElement("div");
		$(e).addClass( 'widget' ) ;
		
		var o = "" ;
		o += "\n"+'	<header class="wbGradH wbsstdTop"></header>' ;
		
		o += "\n"+'		<div class="wbGradH wbsstdMiddle">';
		o += "\n"+'		<nav class="wbGradV wbsstdLeft"></nav>' ;
		o += "\n"+'		<div class="wbGradV wbsstdCenter"></div>' ;
		
		o += "\n"+'	<aside class="wbGradV wbsstdRight"></aside>' ;

		o += "\n"+'	<footer class="wbGradH wbsstdBottom"></footer>' ;
		o += "\n" 

		$(e)[0].innerHTML = o ;	

		setPosition=false;
	}	
	
	// ................................... ### stitle / hgroup
	
	if ( widgetName == 'stitle' )
	{
		var e = document.createElement("div");
		$(e).addClass( 'widget' ) ;		
		
		$(e).css('width' ,'300px');
		$(e).css('height','200px');
		
		var o = "" ;
		o += "\n"+'	<hgroup>' ;		
		o += "\n"+'		<div class="wbGradH wbpsstitle" >' ;
		o += "\n"+'			<h1 class="wbpsstitleH1">TITLE</h1>' ;
		o += "\n"+'			<h3 class="wbpsstitleH3">subtitle</h3>' ;
		o += "\n"+'			<h6 class="wbpsstitleH6">additional information</h6>' ;
		o += "\n"+'	</hgroup>' ;			
		o += "\n" 
		
		$(e)[0].innerHTML = o ;
		
		setPosition=true;
	}	

	
	// ................................... ### smain
	
	if ( widgetName == 'smain' )
	{
		var e = document.createElement("div");
		$(e).addClass( 'widget' ) ;		
		
		var o = "" ;
		o += "\n"+'	<main class="wbGradH wbpsmain" >' ;
		o += "\n"+'	</main>' ;
		o += "\n" 
		
		$(e)[0].innerHTML = o ;

		setPosition=false;
	}

	// ................................... ### sarticle
	
	if ( widgetName == 'sarticle' )
	{
		
		var e = document.createElement("div");
		$(e).addClass( 'widget' ) ;		

		var o = "" ;
 		o += "\n"+'	<article class="wbGradH wbpsarticle">' ;		
 		o += "\n"+'		<a class="wbpsarticlet0">TITLE</a>' ;
		o += "\n"+'		<section class="wbpsarticles1">Section 1</section>' ;
		o += "\n"+'		<section class="wbpsarticles2">Section 2</section>' ;
		o += "\n"+'		<section class="wbpsarticles3">Section 3</section>' ;
		o += "\n"+'	</article>' ;		
 		o += "\n" 
		
		$(e)[0].innerHTML = o ;	
		
		setPosition=false;
	}

	// ................................... ### sdetails
	
	if ( widgetName == 'sdetails' )
	{
		var e = document.createElement("div");
		$(e).addClass( 'widget wbpsdetailsDIV' ) ;
		
		var o = "" ;

		o += "\n"+'	<details class="wbpsdetails">'
		o += "\n"+'		<summary >'
		o += "\n"+'WOOBY'
		o += "\n"+'		</summary>' ;
		o += "\n"+'		<p>'
		o += "\n"+'			<br>by Claudio Daffra' ;
		o += "\n"+'			<br>daffra.claudio@gmail.com' ;
		o += "\n"+'			<br>All Rights Reserved' ;
		o += "\n"+'		</p>' ;
		o += "\n"+'	</details >'
		o += "\n" 
		
		$(e)[0].innerHTML = o ;	
		
		setPosition=true;
	}

	// ................................... ### snav
	
	if ( widgetName == 'snav' )
	{
		var e = document.createElement("div");
		$(e).addClass( 'widget wbpsnavDIV' ) ;
		
		var o = "" ;
		o += "\n"+'	<nav class="wbpsnav">'
		o += "\n"+'	<br>'
		o += "\n"+'	<a class="wbpsnavlink" href="http://www.google.com" 		target="_blank"><mark>&#128279</mark> Google</a>' ;
		o += "\n"+'	<br>'
		o += "\n"+'	<a class="wbpsnavlink" href="http://www.bing.com"  		target="_blank"><mark>&#128279</mark> Bing</a>' ;
		o += "\n"+'	<br>'
		o += "\n"+'	<a class="wbpsnavlink" href="http://www.duckduckgo.com" 	target="_blank"><mark>&#128279</mark> DuckDuckGo</a>' ;
		o += "\n"+'	<br>'
		o += "\n"+'	</nav >'
		o += "\n" 
		
		$(e)[0].innerHTML = o ;	
		
		setPosition=true;
	}	
	
	// ................................... ### aside
	
	if ( widgetName == 'saside' )
	{
		var e = document.createElement("div");
		$(e).addClass( 'widget ' ) ;

		var o = "" ;
		o += "\n"+'	<aside> class="wbGradH wbpsaside">'
		o += "\n"+'	</aside>'
		setPosition=false;
	}

	// ................................... ### sfigure
	
	if ( widgetName == 'sfigure' )
	{
		var e = document.createElement("div");
		$(e).addClass( 'widget wbpsfigureDIV' ) ;
		
		var o = "" ;

		o += "\n"+'	<figure class="wbpsfigure">'		
		o += "\n"+'	<img class="wbpsfigure_img" src="img/picture/pulpit.jpg" alt="The Pulpit Rock" >' ;
	
		o += "\n"+'	<figcaption class="wbpsfigure_caption" >' ;
		o += "\n"+'	<small >&nbsp; Fig.1 :<i >&nbsp; A view of the'
		o += "\n"+'	<cite >pulpit rock </cite>'
		o += "\n"+'in Norway.</i></small>'
		o += "\n"+'	</figcaption>' ;
	
		o += "\n"+'</figure >'
		o += "\n" 
		
		$(e)[0].innerHTML = o ;	
		
		setPosition=true;
	}


	// ................................... ### saddress
	
	if ( widgetName == 'saddress' )
	{
		var e = document.createElement("address");
		$(e).addClass( 'widget wbpsaddress' ) ;
		
		var o = ""
		o += "<hr>"
		o += "\n<p class='wbpsaddressHR' >&#9993</p>" ;
		o += "\n"+'<br>Written by <a href="mailto:webmaster@example.com" target="_blank">Jon Doe</a>.<br>' ;
		o += "\n"+'Visit us at:<br>' ;
		o += "\n"+'Box 564, Disneyland<br>' ;
		o += "\n"+'USA<br>' ;
		$(e)[0].innerHTML = o ;
		
		setPosition=true;
	}

	// ................................... ### sHR 
	
	if ( widgetName == 'shr' )
	{
		var e = document.createElement("hr");
		$(e).addClass( 'widget wbpsHR' ) ;	
		

		var yy='10%'; // setta solo la pos Y , X=0
		if ( widget.unit == "%" ) yy = elementUnderMouse.py + '%' ;
		if ( widget.unit == "px" ) yy = elementUnderMouse.y + 'px' ;
		$(e).css ( 'position' , widget.position ) ;
		$(e).css ( 'top' , yy ) ;
		$(e).css ( 'left' , '0%' ) ;
		$(e).css ( 'width' , '100%' ) ;
		
		setPosition=false;
		
	}

	// ###### 
	// Mobile
	// ###### 		
	
	// ................................... ### mobile page
	
	if ( widgetName == 'pMobilepage' )
	{
		var e = document.createElement("div");
		$(e).addClass( 'widget wbmPage' ) ;
		
		var o = "" ;
		o += "\n"+'	<div class="wbGradH wbmPageHeader"></div>' ;
		o += "\n"+'	<div class="wbGradH wbmPageBody"></div>' ;
		o += "\n"+'	<div class="wbGradH wbmPageFooter"></div>' ;
		o += "\n" 
		$(e)[0].innerHTML = o ;	
		
		setPosition=false;
	}
	
	// ###### 
	// BLOG
	// ###### 
	
	// ................................... ### panel blog main
	
	if ( widgetName == 'pBlogpage' )
	{
		var e = document.createElement("div");
		$(e).addClass( 'widget' ) ;
		
		var o = "" ;
		o += "\n"+'	<div class="wbGradH wbpBlogTitle"></div>' ;
		o += "\n"+'	<div class="wbGradH wbpBlogArticle"></div>' ;
		o += "\n"+'	<div class="wbGradH wbpBlogNav"></div>' ;
		o += "\n" 
		$(e)[0].innerHTML = o ;	
		
		setPosition=false;
	}	
	
	// #########
	// jQuery UI
	// #########	
	
	// ................................................................ jqui progress bar
	
	if ( widgetName == 'jqProgressBar' )
	{
		var contatore =  ( +Date.now() ).toString(36);
		var padre  = '_idp_'+contatore ;
		var figlio = 'id_'+contatore ;
		
		var e = document.createElement("div");
		$(e).addClass( 'widget wbjqProgressBarDIV' ) ;

		$(e).attr('id',padre );
		
		var o = "" ;  

		o+="\n"+'	<div id='+figlio+' class="wbjqProgressBar"> </div>'
		
		o+="\n"+'<script>'
		o+="\n"+'	if ( $( "#'+figlio+'" ).attr("exits")!="true" )' // check exists
		o+="\n"+'	{'
		o+="\n"+'		$( "#'+figlio+'" ).progressbar({value:false});'
		o+="\n"+'		$( "#'+figlio+'" ).attr("exits","true");'
		o+="\n"+'	}'
		o+="\n"+'</script>'
		o+="\n" 

		$(e)[0].innerHTML = o 

		setPosition	=	true;
		setID		=	false;		
	}	
	
	// ................................................................ jqui check (Multi) box	

	if ( ( widgetName == 'jqcheckMultibox' ) || ( widgetName == 'checkMultiBox' ) )
	{
		var contatore =  ( +Date.now() ).toString(36);
		var padre  = '_idp_'+contatore ;
		var figlio = 'id_'+contatore ;
		
		var e = document.createElement("div");
		$(e).addClass( 'widget wbjqCheckBoxDIV' ) ;

		$(e).attr('id',padre );
		
		var o = "" ;  		

		o+="\n"+'	<div class="_'+figlio+' wbjqCheckBox"  >'
		

		o+="\n"+'	<br><label style="width:99%"  for="_'+figlio+'checkbox-1">New York</label>'
		o+="\n"+'		<input type="checkbox"   name="_'+figlio+'checkbox-1" id="_'+figlio+'checkbox-1" >'
		
		o+="\n"+'	<br><label style="width:99%"  for="_'+figlio+'checkbox-2">Paris</label>'
		o+="\n"+'		<input type="checkbox"   name="_'+figlio+'checkbox-1" id="_'+figlio+'checkbox-2" >'
		
		o+="\n"+'	<br><label style="width:99%"  for="_'+figlio+'checkbox-3">London</label>'
		o+="\n"+'		<input type="checkbox"   name="_'+figlio+'checkbox-1" id="_'+figlio+'checkbox-3" >'
		
		o+="\n"+'<div>'
 		o+="\n" 

		if ( widgetName == 'jqcheckMultibox' )
		{
			o+="\n"+'<script>'
			o+="\n"+'	if ( $( "#'+figlio+'" ).attr("exits")!="true" )' // check exists
			o+="\n"+'	{'		
			o+="\n"+'		$( "._'+figlio+' input" ).checkboxradio({icon: false});'
			o+="\n"+'		$( "#'+figlio+'" ).attr("exits","true");'		
			o+="\n"+'	}'
			o+="\n"+'</script>'
			o+="\n" 
		}
		
		$(e)[0].innerHTML = o 

		setPosition	=	true;
		setID		=	false;	
		
	}

	// ................................................................ check Multi box	UI

	if ( ( widgetName == 'jqcheckbox' ) || ( widgetName == 'checkBox' ) )
	{
		var contatore =  ( +Date.now() ).toString(36);
		var padre  = '_idp_'+contatore ;
		var figlio = 'id_'+contatore ;
		
		var e = document.createElement("div");
		$(e).addClass( 'widget wbjqCheckBoxDIV' ) ;

		$(e).attr('id',padre );
		
		var o = "" ;  		

		o+="\n"+'<div class="_'+figlio+' wbjqCheckBox"  >'
		

		o+="\n"+'	<br><label style="width:99%"  for="_'+figlio+'checkbox-1">New York</label>'
		o+="\n"+'		<input type="radio"   name="_'+figlio+'checkbox-1" id="_'+figlio+'checkbox-1" >'
		
		o+="\n"+'	<br><label style="width:99%"  for="_'+figlio+'checkbox-2">Paris</label>'
		o+="\n"+'		<input type="radio"   name="_'+figlio+'checkbox-1" id="_'+figlio+'checkbox-2" >'
		
		o+="\n"+'	<br><label style="width:99%"  for="_'+figlio+'checkbox-3">London</label>'
		o+="\n"+'		<input type="radio"   name="_'+figlio+'checkbox-1" id="_'+figlio+'checkbox-3" >'
		
		o+="\n"+'<div>'
 		o+="\n" 

		if ( widgetName == 'jqcheckbox' )
		{		
			o+="\n"+'<script>'
			o+="\n"+'	if ( $( "#'+figlio+'" ).attr("exits")!="true" )' // check exists
			o+="\n"+'	{'		
			o+="\n"+'		$( "._'+figlio+' input" ).checkboxradio({icon: false});'
			o+="\n"+'		$( "#'+figlio+'" ).attr("exits","true");'		
			o+="\n"+'	}'
			o+="\n"+'</script>'
			o+="\n" 
		}
		
		$(e)[0].innerHTML = o 

		setPosition	=	true;
		setID		=	false;	
		
	}
	
	
	// ................................................................ jqui Tabs
	
	if ( widgetName == 'jqTabs' )
	{
		var contatore =  ( +Date.now() ).toString(36);
		var padre  = '_idp_'+contatore ;
		var figlio = 'id_'+contatore ;
		
		var e = document.createElement("div");
		$(e).addClass( 'widget wbjqTabs' ) ;

		$(e).attr('id',padre );
		
		var o = "" ; 
		
		o+="\n"+'<div id="'+figlio+'_Tabs">'
		o+="\n"+'  		<ul>'
		o+="\n"+'    		<li><a href="#'+figlio+'tabs-1">TAB 1</a></li>'
		o+="\n"+'    		<li><a href="#'+figlio+'tabs-2">TAB 2</a></li>'
		o+="\n"+'    		<li><a href="#'+figlio+'tabs-3">TAB 3</a></li>'
		o+="\n"+'  		</ul>'
		o+="\n"+'  	<div id="'+figlio+'tabs-1">'
		o+="\n"+'1'		
		o+="\n"+'  	</div>'
		o+="\n"+'  	<div id="'+figlio+'tabs-2">'
		o+="\n"+'2'			
		o+="\n"+'  	</div>'
		o+="\n"+'  	<div id="'+figlio+'tabs-3">'
		o+="\n"+'3'			
		o+="\n"+' 	</div>'
		o+="\n"+'</div>'
 		o+="\n" 

		o+="\n"+'<script>'
		o+="\n"+'	if ( $( "#'+figlio+'" ).attr("exits")!="true" )' // check exists
		o+="\n"+'	{'		
		o+="\n"+'		$( "#'+figlio+'_Tabs" ).tabs({heightStyle: "fill"});'
		o+="\n"+'		$( "#'+figlio+'" ).attr("exits","true");'		
		o+="\n"+'	}'
		o+="\n"+'</script>'
		o+="\n" 
	
		$(e)[0].innerHTML = o 

		setPosition	=	false ;
		setID		=	false ;	
	}
	
	// ................................... Tabs
	
	if ( widgetName == 'jqAccordion' )
	{
		var contatore =  ( +Date.now() ).toString(36);
		var padre  = '_idp_'+contatore ;
		var figlio = 'id_'+contatore ;
		
		var e = document.createElement("div");
		$(e).addClass( 'widget wbjqAccordionDIV' ) ;

		$(e).attr('id',padre );
		
		var o = "" ; 
		
		o+="\n"+'<div id="'+figlio+'_Accordion" >'
		o+="\n"+'	<h3 >Section 1</h3>'
		o+="\n"+'		<div >'
		o+="\n"+'		1'
		o+="\n"+'		</div>'
		o+="\n"+'	<h3 >Section 2</h3>'
		o+="\n"+'		<div c>'
		o+="\n"+'		2'
		o+="\n"+'		</div>'
		o+="\n"+'	<h3 >Section 3</h3>'
		o+="\n"+'		<div >'
		o+="\n"+'		3'
		o+="\n"+'</div>'
		
		o+="\n"+'</div>'

		o+="\n"+'<script>'
		o+="\n"+'	if ( $( "#'+figlio+'" ).attr("exits")!="true" )' // check exists
		o+="\n"+'	{'		
		o+="\n"+'		$( "#'+figlio+'_Accordion" ).accordion({heightStyle: "fill",icons: false});'
		o+="\n"+'		$( "#'+figlio+'" ).attr("exits","true");'		
		o+="\n"+'	}'
		o+="\n"+'</script>'
		o+="\n" 
	
		$(e)[0].innerHTML = o 

		setPosition	=	false ;
		setID		=	false ;	
		
	}


	// ................................................................ jqui button 
	
	if ( widgetName == 'jqButton' )
	{
		var contatore =  ( +Date.now() ).toString(36);
		var padre  = '_idp_'+contatore ;
		var figlio = 'id_'+contatore ;
		
		var e = document.createElement("div");
		$(e).addClass( 'widget wbjqButtonDIV' ) ;

		$(e).attr('id',padre );
		
		var o = "" ; 

		o+="\n"+'<input class="wbjqButton" type="submit" value="button" id="'+figlio+'">'

		o+="\n"+'<script>'
		o+="\n"+'	if ( $( "#'+figlio+'" ).attr("exits")!="true" )' // check exists
		o+="\n"+'	{'		
		o+="\n"+'		$( "#'+figlio+'").button();'
		o+="\n"+'		$( "#'+figlio+'" ).attr("exits","true");'		
		o+="\n"+'	}'
		o+="\n"+'</script>'
		o+="\n" 		

		$(e)[0].innerHTML = o 

		setID		=	false ;	
		
	}	
	
	// ................................................................ jqui button icon 1234

	if ( widgetName == 'jqButtonIcon' )
	{
		$('#wbCreateDivFullScreenTranparent').show() ;
		
		wbDialogGetValue("#wbDialogGetButtonIcon","#wbDialogGetValueSelectIcon",creaWidget_ButtonIcon )
		
		function creaWidget_ButtonIcon ( tipo ) 
		{
			console.debug ( "finput::creaWidget_ButtonIcon" ) ;
			if ( ( tipo=="" ) || (tipo==undefined) ) tipo = '&#9989;'

			var e = document.createElement("div");
			$(e).addClass( 'widget wbjqButtonDIVicon' ) ;

				var contatore =  ( +Date.now() ).toString(36);

				var figlio = 'id_'+contatore ;
				
				var e = document.createElement("div");
				$(e).addClass( 'widget wbjqButtonDIVicon' ) ;
		
			
				var o = "" ; 

				o+="\n"+'<button class="wbjqButtonIcon"  id="'+figlio+'"><div style="margin-left:-6px;">'+tipo+'</div></button>'

				o+="\n"+'<script>'
				o+="\n"+'	if ( $( "#'+figlio+'" ).attr("exits")!="true" )' // check exists
				o+="\n"+'	{'		
				o+="\n"+'		$( "#'+figlio+'").button();'
				o+="\n"+'		$( "#'+figlio+'" ).attr("exits","true");'		
				o+="\n"+'	}'
				o+="\n"+'</script>'
				o+="\n" 	

			$(e).html ( o ) 
			
			// ........................................................ setID
			if ( setID==true )	$(e).attr('id', '_id_'+ widgetName+'-'+ contatore ) ;

			// ........................................................ setPosition
			wbPosizionaWidget(e,setPosition);

			// ........................................................ setAppend
			if ( setAppend==true )		$(elementUnderMouse.target).append ( e ) ;

			$('#wbCreateDivFullScreenTranparent').hide() ;			
			
			return  ;
		}

	}

	
	// ................................................................ jqui slider h,v
	
	if (( widgetName == 'jqsliderh' ) || ( widgetName == 'jqsliderv' ))
	{
		var contatore =  ( +Date.now() ).toString(36);
		var padre  = '_idp_'+contatore ;
		var figlio = 'id_'+contatore ;

		var verso 	= 'horizontal';
		var classe1 = 'wbjqSliderHDIV'
		var classe2 = 'wbjqSliderH'
		
		if ( widgetName == 'jqsliderv' ) 
		{
			verso 	= 'vertical';
			classe1 = 'wbjqSliderVDIV'
			classe2 = 'wbjqSliderV'
		}
		
		var e = document.createElement("div");
		$(e).addClass( 'widget '+classe1 ) ;
		$(e).attr('id',padre );
		
		var o = "" ; 
		
		o+="\n"+'<div style="height:100%;width:100%;" id="'+figlio+'"></div>'

		o+="\n"+'<script>'
		//o+="\n"+'	if ( $( "#'+figlio+'" ).attr("exits")!="true" )' // check exists
		//o+="\n"+'	{'		
		o+="\n"+'		$( "#'+figlio+'").slider('
		o+="\n"+'		{'
		o+="\n"+'			orientation: "'+verso+'",'
		o+="\n"+'			range: "min",'
		o+="\n"+'			min: 0,'
		o+="\n"+'			max: 100,'
		o+="\n"+'			value: 50,'
		o+="\n"+'			slide: function( event, ui )' 
		o+="\n"+'			{'
		o+="\n"+'				var x =  ui.value ;'
		o+="\n"+'			}'	
		o+="\n"+'		});'
		//o+="\n"+'		$( "#'+figlio+'" ).attr("exits","true");'		
		//o+="\n"+'	}'
		o+="\n"+'</script>'
		o+="\n" 		
		
		$(e)[0].innerHTML = o 

		setID		=	false ;	
		
	}	

	// ................................... AutoComplete
	
	if ( widgetName == 'jqAutoComplete' )
	{
		var contatore =  ( +Date.now() ).toString(36);
		var padre  = '_idp_'+contatore ;
		var figlio = 'id_'+contatore ;

		var e = document.createElement("div");
		$(e).addClass( 'widget wbjqAutoCompleteDIV' ) ;
		$(e).attr('id',padre );
		
		
		var o = "" ;
		
		o+="\n"+'<input class="wbjqAutoComplete" id="'+figlio+'_AutoComplete">'
 		o+="\n" 
	
		o+="\n"+'<script>'

		o+="\n"+'	var _availableTags =' 
		o+="\n"+'	['
		o+="\n"+'		"ActionScript" ,      "AppleScript"	,      "Asp",'
		o+="\n"+'		"BASIC"			,      "C"			,      "C++",      "Clojure",'
		o+="\n"+'		"COBOL"			,      "ColdFusion"	,      "Erlang",'
		o+="\n"+'		"Fortran"		,      "Groovy"		,      "Haskell",'
		o+="\n"+'		"Java"			,      "JavaScript"	,      "Lisp",'
		o+="\n"+'		"Perl"			,      "PHP"		,      "Python",'
		o+="\n"+'		"Ruby"			,      "Scala"		,      "Scheme" '
		o+="\n"+'	];'
		o+="\n"		
		o+="\n"+'	$( "#'+figlio+'_AutoComplete" ).autocomplete('
		o+="\n"+'	{'
		o+="\n"+'		source: _availableTags'
		o+="\n"+'	});'
		
		o+="\n"+'</script>'
		o+="\n" ;		

		$(e)[0].innerHTML = o ;

		setID		=	false ;	
	}	

	// ................................... AutoComplete
	
	if ( widgetName == 'jqDataPicker' )
	{
		var contatore =  ( +Date.now() ).toString(36);
		var padre  = '_idp_'+contatore ;
		var figlio = 'id_'+contatore ;

		var e = document.createElement("div");
		$(e).addClass( 'widget wbjqDataPickerDIV' ) ;
		$(e).attr('id',padre );
		
		var o = "" ; 
	
 
		o+="\n"+'<input id="'+figlio+'_DataPicker" class="wbjqDataPicker" >'
 		
 		o+="\n" 
		
		o+="\n"+'<script>'

		o+="\n"+'$( "#'+figlio+'_DataPicker" ).datepicker('
		o+="\n"+'{'
		o+="\n"+'	changeMonth: true,'
		o+="\n"+'	changeYear: true,'			
		o+="\n"+'	showWeek: true,'
		o+="\n"+'	firstDay: 1'	
		o+="\n"+'});'
		//  togli la classe : hasDatepicker, altrimenti non funziona  '
 		o+="\n"+'$( "#'+figlio+'_DataPicker" ).removeClass( "hasDatepicker" )' 

		o+="\n"+'</script>'
		o+="\n" 
		
		
		$(e)[0].innerHTML = o ;

		setID		=	false ;	
	}	

	// ................................................................ spinner	UI
	
	if ( widgetName == 'jqspinner' )
	{
		var contatore =  ( +Date.now() ).toString(36);
		var padre  = '_idp_'+contatore ;
		var figlio = 'id_'+contatore ;

		var e = document.createElement("div");
		$(e).addClass( 'widget wbjqSpinnerDIV' ) ;
		$(e).attr('id',padre );

		var o = "" ; 

		o+="\n"+'<input id="_'+figlio+'" type="text" value="50" class="wbjqSpinner">' 

		o+="\n"+'<script>'		
		o+="\n"+'		$( "#_'+figlio+'" ).spinner({'
		o+="\n"+'			min: 1,'
		o+="\n"+'			max: 100,'
		o+="\n"+'			step: 1,'
		o+="\n"+'			start: 50,'
		o+="\n"+'		});'		
		o+="\n"+'</script>'		
		
		$(e)[0].innerHTML = o ;

		setID		=	false ;	
		
	}
	
	// #########
	// CONTAINER
	// #########
	
	
	// ................................... DIV
	if ( widgetName == 'div' )
	{
		var e = document.createElement("div");
		$(e).addClass( 'widget wbDIV' ) ;
	}
	
	// ................................... div horiz 2
	if ( widgetName == 'divHoriz2' )
	{
		var e = document.createElement("div");

		
		var o = "" ;
		o += "\n"+'<div class="wbDIV wbDIV2Left">L</div>' ;
		o += "\n"+'<div class="wbDIV wbDIV2Right">R</div>' ;
		o += "\n" 
		$(e)[0].innerHTML = o ;	
		
		setPosition=false;
	}	
	
	// ................................... div vert 2
	if ( widgetName == 'divVert2' )
	{
		var e = document.createElement("div");

		
		var o = "" ;
		o += "\n"+'<div class="wbDIV wbDIVo2Top">T</div>' ;
		o += "\n"+'<div class="wbDIV wbDIVo2Bottom">B</div>' ;
		o += "\n" 
		$(e)[0].innerHTML = o ;	
		
		setPosition=false;
	}	
	
	// ................................... div horiz 2 34 / 66
	if ( widgetName == 'divHoriz3466' )
	{
		var e = document.createElement("div");

		
		var o = "" ;
		o += "\n"+'<div class="wbDIV wbDIV2Left34">L34</div>' ;
		o += "\n"+'<div class="wbDIV wbDIV2Right66">R66</div>' ;
		o += "\n" 
		$(e)[0].innerHTML = o ;	
		
		setPosition=false;
	}	
	
	// ................................... div horiz 2 66 / 34
	if ( widgetName == 'divHoriz6634' )
	{
		var e = document.createElement("div");

		
		var o = "" ;
		o += "\n"+'<div class="wbDIV wbDIV2Left66">L66</div>' ;
		o += "\n"+'<div class="wbDIV wbDIV2Right34">R34</div>' ;
		o += "\n" 
		$(e)[0].innerHTML = o ;	
		
		setPosition=false;
	}	

	// ................................... div Vert 2 34 / 66
	if ( widgetName == 'divVert3466' )
	{
		var e = document.createElement("div");

		
		var o = "" ;
		o += "\n"+'<div class="wbDIV wbDIVv2Top34">T34</div>' ;
		o += "\n"+'<div class="wbDIV wbDIVv2Bottom66">B66</div>' ;
		o += "\n" 
		$(e)[0].innerHTML = o ;	
		
		setPosition=false;
	}	
	
	// ................................... div Vert 2 66 / 34
	if ( widgetName == 'divVert6634' )
	{
		var e = document.createElement("div");
		
		var o = "" ;
		o += "\n"+'<div class="wbDIV wbDIVv2Top66">T66</div>' ;
		o += "\n"+'<div class="wbDIV wbDIVv2Bottom34">B34</div>' ;
		o += "\n" 
		$(e)[0].innerHTML = o ;	
		
		setPosition=false;
	}	

	// ................................... console 
	
	if ( widgetName == 'console' )
	{
		var e = document.createElement("div");
		$(e).addClass( 'widget wbconsoleDIV' ) ;

		$(e)[0].innerHTML = '<pre class="wbconsole"></pre>'
		
		setPosition=false;
	}	

	
	// ################  
	//					FORM
	// ################ 
	
	// ...................................f input ###
	
	if ( widgetName == 'finput' )
	{
		$('#wbCreateDivFullScreenTranparent').show() ;
		
		wbDialogGetValue("#wbDialogGetInputType","#wbDialogGetValueSelectInputType",creaWidget_finput ) ;
		
		function creaWidget_finput ( tipo ) 
		{
			console.debug ( "finput::creaWidget_finput" ) ;
			if ( ( tipo=="" ) || ( tipo==undefined ) ) tipo="text"

			var e = document.createElement("div");
			$(e).addClass( 'widget wbfinputDIV' ) ;

			$(e)[0].innerHTML = "<input class='wbfinput' type='"+tipo+"' name='campo' value='0'></input>"

			// ........................................................ setID
			if ( setID==true )	$(e).attr('id', '_id_'+ widgetName+'-'+ contatore ) ;

			// ........................................................ setPosition
			wbPosizionaWidget(e,setPosition);

			// ........................................................ setAppend
			if ( setAppend==true )		$(elementUnderMouse.target).append ( e ) ;

			$('#wbCreateDivFullScreenTranparent').hide() ;			
			
			return  ;
		}

	}
	
	// ...................................f fieldset ###
	
	if ( widgetName == 'fset' )
	{
		var e = document.createElement("div");
		$(e).addClass( 'widget wbfsetDIV' ) ;

		var o = ""

		o += "<fieldset class='wbfset'>"
		o += "<legend   class='wbfsetLegend'>Group</legend>"
		o += "</fieldset>"

		$(e)[0].innerHTML = o ;
		
		setPosition=true;
	}

	// ...................................f select ###
	
	if ( widgetName == 'fselect' )
	{
		var e = document.createElement("div");
		$(e).addClass( 'widget wbfselectOUTER' ) ;

		var o = ""

		o += '<select class="wbfselectINNER"  >'
		o += '<option value="" disabled="" selected="" >choose one</option>'
		o += '	<optgroup label="default">'
		o += '		<option value="default">default</option>'
		o += '	</optgroup>'
		o += '	<optgroup label="gruppo a">'
		o += '		<option value="a1">a1</option>'
		o += '		<option value="a2">a2</option>'
		o += '	</optgroup>'
		o += '	<optgroup label="gruppo b">'
		o += '		<option value="b1">b1</option>'
		o += '		<option value="b2">b2</option>'
		o += '	</optgroup>'
		o += '</select>'

		$(e)[0].innerHTML = o ;	
		
		setPosition=true;
	}	

	// ...................................f combobox ###
	
	if ( widgetName == 'fcombobox' )
	{
		var comboList  = 'comboList' +( +Date.now() ).toString(36)
		var comboID    = 'comboID'   +( +Date.now() ).toString(36)
		
		var e = document.createElement("div");
		$(e).addClass( 'widget wbfcomboboxDIV' ) ;

		o += '<input  class="wbfcomboboxINPUT" id="'+comboID+'"  	list="'+comboList+'" >'
		o += 	'<datalist id="'+comboList+'">'
		o += 		'<option value="0%">'
		o += 		'<option value="10%">'
		o += 		'<option value="20%">'
		o += 		'<option value="25%">'
		o += 		'<option value="33%">'
		o += 		'<option value="50%">'
		o += 		'<option value="66%">'
		o += 		'<option value="75%">'
		o += 		'<option value="80%">'
		o += 		'<option value="95%">'
		o += 		'<option value="100%">'
		o += 	'</datalist>'
		$(e)[0].innerHTML = o ;	
				
		setPosition=true;
	}	
	
	// ................................... BUTTON
	
	if ( widgetName  == 'button' )
	{
		var e = document.createElement("div");
		$(e).addClass( 'widget wbBUTTON_OUTER' ) ;
		
		var idbutton = 'id-button-'+ contatore ;
		var o = "" ;
		o += "\n"+'<button  id='+idbutton+' class="wbBUTTON_INNER" >Button</button>' ;
		o += "\n" 
		
		$(e)[0].innerHTML = o ;
	}	

	// ................................... form post
	
	if ( ( widgetName == 'fget' ) || (widgetName == 'fpost' )  )
	{
		var e = document.createElement("form");
		$(e).addClass( 'widget wbform' ) ;

		if (widgetName == 'fpost' )
		{
			$(e).attr("action", "post.php");
			$(e).attr("method", "post");
		}
		if (widgetName == 'fget' )
		{
			$(e).attr("action", "get.php");
			$(e).attr("method", "get");
		}		
		
		setPosition=false;
	}
	
	// ................................... label ###
	
	if ( widgetName == 'flabel' )
	{
		var e = document.createElement("div");
		$(e).addClass( 'widget wbflabel' ) ;
		
		var o = "" ;
		o += "\n"+'<label for="Label">Label</label>' ;
		o += "\n" 
		
		$(e)[0].innerHTML = o ;

		setPosition=true;
	}	
	
	// ...................................f image 
	if ( widgetName == 'fimage' )
	{
		var e = document.createElement("div");
		$(e).addClass( 'widget wbfimageDIV' ) ;

		$(e)[0].innerHTML = '<img  class="wbfimage" src="img/picture/html5.jpg" alt="HTML 5">'
				
		setPosition=true;
	}		
	
	// ...................................f textarea
	if ( widgetName == 'ftextarea' )
	{
		var e = document.createElement("div");
		$(e).addClass( 'widget wbftextareaDIV' ) ;

		$(e)[0].innerHTML = '<textarea class="wbftextarea"  name="areaDiTesto" value="" cols="80"></textarea>'
		
		setPosition=false;
	}

	
	// #########
	// CANVAS
	// #########

	// ................................... ### canvas
	if ( widgetName == 'canvas' )
	{
		var e = document.createElement("div");
		$(e).addClass( 'widget wbCanvasTransparent' ) ;
		$(e).css( 'width' ,'300px' ) ;
		$(e).css( 'height','300px' ) ;

		var o = "" ;

		o+="\n"+'<div id="_canvasp" style="position:absolute;top:0%;height:0%;width:100%;height:100%;">'		
		o+="\n"+'<canvas id="_canvas" class="wbCanvas" >'
		o+="\n"+'</canvas> ' 
		o+="\n"+'</div> ' 
		
		o+="\n" 
		
		$(e)[0].innerHTML = o 
		
		setID=false;		
		setPosition=true;
	}	
	
	// ................................... ### canvas chart
	if ( widgetName == 'canvasc' )
	{
		var e = document.createElement("div");
		$(e).addClass( 'widget wbCanvasTransparent' ) ;
		$(e).css( 'width' ,'300px' ) ;
		$(e).css( 'height','300px' ) ;

		var o = "" ;
		
		o+="\n"+'<div id="_canvasp" style="position:absolute;top:0%;height:0%;width:100%;height:100%;">'	
		o+="\n"+'<canvas id="_canvasc" class="wbCanvasChart" >'
		o+="\n"+'</canvas> '
		o+="\n"+'</div> ' 		
		o+="\n" 
		
		$(e)[0].innerHTML = o 
		
		setID=false;		
		setPosition=true;
	}

	// ................................... canvas two.js

	if ( widgetName == 'canvas2' )
	{
		var e = document.createElement("div");
		$(e).addClass( 'widget wbCanvasTransparent' ) ;
		$(e).css( 'width' ,'300px' ) ;
		$(e).css( 'height','300px' ) ;

		var o = ""
		
		o+="\n"+'<div id="_canvasp" style="position:absolute;top:0%;height:0%;width:100%;height:100%;">'		
		o+="\n"+'<div id="_canvas2" class="wbCanvasTwo" >'
		o+="\n"+'</div> ' 
		o+="\n"+'</div> ' 	
		
		o+="\n" 
		$(e)[0].innerHTML = o 

		setID=false;		
		setPosition=true;
	}

	// ................................... canvas three.js

	if ( widgetName == 'canvas3' )
	{
		var e = document.createElement("div");
		$(e).addClass( 'widget wbCanvasTransparent' ) ;
		
		$(e).css( 'width' ,'300px' ) ;
		$(e).css( 'height','300px' ) ;

		var o = ""
		
		o+="\n"+'<div id="_canvasp" style="position:absolute;top:0%;height:0%;width:100%;height:100%;">'		
		o+="\n"+'<div id="_canvas3" class="wbCanvasThree" >'
		o+="\n"+'</div> ' 
		o+="\n"+'</div> ' 		
		o+="\n" 
		
		$(e)[0].innerHTML = o 

		setID=false;		
		setPosition=true;
	}

	// ................................... Super Canvas

	if ( widgetName == 'wbcanvas' )
	{
		var e = document.createElement("div");
		$(e).addClass( 'widget wbSuperCanvasDIV' ) ;
		$(e).css( 'width' ,'300px' ) ;
		$(e).css( 'height','300px' ) ;
		
		var o = ""
		
		o+="\n"+'<div  id="_canvasp" class="wbSuperCanvas">' 
		o+="\n"+'	<canvas id="_canvas" 	class="wbSuperCanvasInner" ></canvas>'
		o+="\n"+'	<canvas id="_canvasc" 	class="wbSuperCanvasInner" ></canvas>'
		o+="\n"+'	<div 	id="_canvas2" 	class="wbSuperCanvasInner"></div>'
		o+="\n"+'	<div 	id="_canvas3" 	class="wbSuperCanvasInner"></div>'
		o+="\n"+'</div>'
		o+="\n" 
		
		$(e)[0].innerHTML = o 

		setID=false;		
		setPosition=true;
	}

	// #########
	// MEDIA
	// #########
	
	// ................................... audio
	if ( widgetName == 'audio' )
	{
		var e = document.createElement("div");
		$(e).addClass( 'widget wbAudioDIV' ) ;
		
		var o = "" ;
		o += "\n"+'	<audio class="wbAudio" controls="" >'
		o += "\n"+'		<param    name="autoplay" value="false">'
		o += "\n"+'		<source   src="media/AveMariaLucianoPavarotti.mp3" type="audio/mpeg">'
		o += "\n"+'		Your browser does not support the audio element.'
		o += "\n"+'	</audio>'
		$(e)[0].innerHTML = o 
		
		setPosition=true;
	}
	
	// ................................... video
	if ( widgetName == 'video' )
	{
		var e = document.createElement("div");
		$(e).addClass( 'widget wbVideoDIV' ) ;
		
		var o = "" ;
		o += "\n"+'	<video class="wbVideo" controls="" >'
		o += "\n"+'		poster="https://archive.org/download/WebmVp8Vorbis/webmvp8.gif" > '
		o += "\n"+'		<param name="autoplay" value="false">'
		o += "\n"+'		<source src="https://archive.org/download/WebmVp8Vorbis/webmvp8_512kb.mp4" type="video/mp4">'
		o += "\n"+'		<source src="https://archive.org/download/WebmVp8Vorbis/webmvp8.ogv" type="video/ogg">'
		o += "\n"+'		<source src="https://archive.org/download/WebmVp8Vorbis/webmvp8.webm" type="video/webm">'
		o += "\n"+'	Your browser does not  support HTML5 video tag.'
		o += "\n"+'	</video>'
		
		$(e)[0].innerHTML = o 
		
		setPosition=true;
	}	
	
	// ................................... poster
	if ( widgetName == 'poster' )
	{
		var e = document.createElement("div");
		$(e).addClass( 'widget wbPosterDIV' ) ;
		
		var o = "" ;
		o += "\n"+'	<video class="wbPoster" controls="" '
		o += "\n"+'		poster="img/picture/pulpit.jpg" > '
		o += "\n"+'		<param name="autoplay" value="false">'
		o += "\n"+'		<source src="https://archive.org/download/WebmVp8Vorbis/webmvp8_512kb.mp4" type="video/mp4">'
		o += "\n"+'		<source src="https://archive.org/download/WebmVp8Vorbis/webmvp8.ogv" type="video/ogg">'
		o += "\n"+'		<source src="https://archive.org/download/WebmVp8Vorbis/webmvp8.webm" type="video/webm">'
		o += "\n"+'	Your browser does not  support HTML5 video tag.'
		o += "\n"+'	</video>'
		
		$(e)[0].innerHTML = o 
		
		setPosition=true;
	}	

	// #########
	// EMBED
	// #########

	// ................................... pdf
	if ( widgetName == 'pdf' )
	{
		var e = document.createElement("div");
		$(e).addClass( 'widget wbpdfDIV' ) ;
		
		var o = "" ;
 		o += "\n"+'	<object class="wbpdf" type="application/pdf"  internalinstanceid="32" title="" '
 		o += "\n"+'		data="media/example.pdf" >' 
		o += "\n"+'		<p >This browser does not support PDFs</p>'
		o += "\n"+'	</object>'  
		$(e)[0].innerHTML = o 
		
		setPosition=true;
	}	

	// ................................... youtube
	if ( widgetName == 'youtube' )
	{
		var e = document.createElement("div");
		$(e).addClass( 'widget wbyoutubeDIV' ) ;
		
		var o = "" ;
		o += "\n"+'	<iframe  class="wbyoutube" type="text/html" '   
 		o += "\n"+'	src="http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&amp;origin=http://example.com" '
 		o += "\n"+'	frameborder="0" > '
 		o += "\n"+'	</iframe> '
		$(e)[0].innerHTML = o 
		
		setPosition=true;
	}	
	
	// ................................... embed
	if ( widgetName == 'flash' )
	{
		var e = document.createElement("div");
		$(e).addClass( 'widget wbembedDIV' ) ;
		
		var o = "" ;
		o += "\n"+'<embed class="wbembed" autostart="0"  '
		o += "\n"+'		src="media/example.swf" >'
		
		$(e)[0].innerHTML = o 
		
		setPosition=true;
	}	
	

	// #########
	// WEB
	// #########
	
	// ................................... top -> bottom

	if ( widgetName == 'anchor' )
	{
		var contatore =  ( +Date.now() ).toString(36);

		var e = document.createElement("div");
		
		/**/

		var o = "" ;

		o += "\n"+'<div class="widget wbAnchorTop" id="TOP_'+contatore+' ">'	
		
		o += "\n"+'	<a'
		o += "\n"+'	  id="idTop_'+contatore+'" '
		o += "\n"+'	name="idTop_'+contatore+'" '	
		o += "\n"+'	href="#idBottom_'+contatore+'" '
		o += "\n"+'	>'		
		o += "\n"+'	[&#8681;] <small >Go Bottom</small>  '		
		o += "\n"+'	</a>'
		o += "\n"+'	</div>'
		
		o += "\n"+'<div class="widget wbAnchorBottom" id="BOTTOM_'+contatore+' ">'		
		o += "\n"+'	<a'
		o += "\n"+'	  id="idBottom_'+contatore+'" '
		o += "\n"+'	name="idBottom_'+contatore+'" '	
		o += "\n"+'	href="#idTop_'+contatore+'" '
		o += "\n"+'	>'		
		o += "\n"+' [&#8679;] <small >Back Top</small>  '		
		o += "\n"+'	</a>'
		o += "\n"+'</div>'		
		
		$(e)[0].innerHTML = o 
		
		setPosition=true;

	}

	if ( widgetName == 'href' )
	{
		var e = document.createElement("div");
		$(e).addClass( 'widget wbHref' ) ;

		var o = "" ;		
		o += "\n"+'	<a	href="https://www.w3schools.com" target="_blank">W3Schools</a>'

		$(e)[0].innerHTML = o 
		
		setPosition=true;
	}

	// .................................. jquery area select
	
	if ( widgetName == 'jqareaselect' )
	{
		var e = document.createElement("div");
		$(e).addClass( 'widget wbAreaSelectDiv' ) ;

		var o = "" ;		
		o += "\n"+'	<img  id="wbAreaSelectContainer">'
 
		o += "\n"+'<script>'
		o += "\n"+'		$("img#wbAreaSelectContainer").imgAreaSelect('
		o += "\n"+'			{'
		o += "\n"+'				handles: true,'
		o += "\n"+'				onSelectEnd: wbAreaSelectEnd'
		o += "\n"+'			}'
		o += "\n"+'		);'
		o += "\n"+'		function wbAreaSelectEnd(img,selection)'
		o += "\n"+'		{'
		o += "\n"+'			console.log ( wbAreaSelectGetInfo ( selection ) );'
		o += "\n"+'		}'
		o += "\n"+'</script>'
 
		$(e)[0].innerHTML = o 
		
		setPosition=false;
	}


	// .................................. panel slide left
	
	if ( widgetName == 'pslideleft' )
	{
		var e = document.createElement("div");
		$(e).addClass( 'widget' ) ;
		var contatore =  ( +Date.now() ).toString(36);
		
		var o = "" ;		
		o += "\n"+'	<div id="_ID_"'+contatore+' class="wbLeftSlidePanelButtonOn"></div>'
		o += "\n"+'	<div id="_ID_"'+contatore+' class="wbLeftSlidePanel">'
		o += "\n"+'	Left Panel' 
		o += "\n"+'	</div>'

		/* Questa routine va benne per tutti i widget pslideleft */
 
		o += "\n"+'<script>'
		o += "\n"+'$(".wbLeftSlidePanelButtonOn").click(function()'
		o += "\n"+'{'
		o += "\n"+'		var ID = "#"+$(this).attr("id" )' 
		o += "\n"+'		$( ID+".wbLeftSlidePanel").toggleClass("on");'
		o += "\n"+'		$( ID+".wbLeftSlidePanelButtonOn").hide();'
		o += "\n"+'});'
		o += "\n"
		o += "\n"+'$(".wbLeftSlidePanel").click(function()'
		o += "\n"+'{'
		o += "\n"+'		var ID = "#"+$(this).attr("id")' 
		o += "\n"+'		$(ID+".wbLeftSlidePanel").toggleClass("on");'
		o += "\n"+'		$(ID+".wbLeftSlidePanelButtonOn").show();'
		o += "\n"+'});'
		o += "\n"+'</script>'
 
		$(e)[0].innerHTML = o 
		
		setPosition=false;
	}
		
	// ################  
	//					WIDGETS END
	// ################ 

	
	// ........................................................ setID
	if ( setID==true )
	{
		$(e).attr('id', '_id_'+ widgetName+'-'+ contatore ) ;
	}

	// ........................................................ setPosition
	function wbPosizionaWidget ( e,setPosition )
	{
		if ( setPosition==true )
		{
			if ( widget.unit == "%" )
			{		
					var xx = elementUnderMouse.px + '%' ;
					var yy = elementUnderMouse.py + '%' ;
			}
			if ( widget.unit == "px" )
			{		
					var xx = elementUnderMouse.x + ''  + widget.unit ;
					var yy = elementUnderMouse.y + ''  + widget.unit ;
			}

			if (  widget.position == 'fixed' ) widget.position = 'absolute';
			
			$(e).css ( 'position' , widget.position ) ;
			$(e).css ( 'left' , xx ) ;
			$(e).css ( 'top'  , yy ) ;
			console.debug ( 'widget position::',widget.position ) 
		}
	}
	wbPosizionaWidget(e,setPosition);	
	
	// ........................................................ setAppend
	if ( setAppend==true )
	{	
		$(elementUnderMouse.target).append ( e ) ;
		console.debug ( "#wbWidgetCreate:: append to [id]"  ) ;
		console.debug ( $(elementUnderMouse.target).attr('id') ) ;		
	}

			
	// ........................................................ set draggable resizable +

	makeDraggableResizable()
	
	// ........................................................ Formatta Testo
	
	widget.target = 'default' 

	var x = $('#wbWorkAreaVisualHtml').html()

	x = wbFormattaHtml ( x )	
	
	window.wbWorkAreaEditorHtml.setValue( x ) ;		
	
	CodeMirrorAutoFormat (window.wbWorkAreaEditorHtml )	;
	
	
	return e ;
}

























