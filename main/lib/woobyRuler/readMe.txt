
---------------------------------------------------------- 
woobyRuler 

Claudio Daffra
daffra.cludio@gmail.com

----------------------------------------------------------

Include follow files :

	<link rel="stylesheet" type="text/css" href="woobyRuler.css">
	<script src="woobyRuler.js"></script>

	
----------------------------------------------------------
	
in body create this DIV

	<div id='wbRuler' class="wbRuler"> 
		<div id="wbRulerContainer" class="wbRulerContainer">
			<div id="wbBody" class="wbRulerWorkArea" ></div> 
		</div>
	</div>
	
	
wbRuler 			: main container 
wbRulerContainer 	: ruler contaier
wbRulerWorkArea 	: work area

----------------------------------------------------------

<script>

	var gp = $('#wbRuler') ;
	var p = $('#wbRulerContainer') ;
	var c = $('#wbBody') ;

	woobyRuler ( gp,  p, c,'px'  )

<script>

----------------------------------------------------------	

EVENT

BUTTON ( Top/left )	 -  CLICK : change between  ( px inch cm mm % )

WINDOW  - RESIZE  :
if window is resize call again  : woobyRuler ( gp,  p, c,'px'  )

----------------------------------------------------------

Enjoy It !


 
