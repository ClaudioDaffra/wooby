
function mandelbroat_calc()
{
	var c = document.getElementById("_canvas");
	var ctx = c.getContext("2d");

	/* screen ( integer) coordinate */
	var iX,iY;
	
	var iXmax = 	parseInt ( $('#_canvas').css ( 'width'  ) )
	var iYmax = 	parseInt ( $('#_canvas').css ( 'height'  ) )

	/* world ( double) coordinate = parameter plane*/
	
	var Cx,Cy;
	
	var CxMin	=	parseFloat(document.getElementById('CxMin').value)	
	var CxMax	=	parseFloat(document.getElementById('CxMax').value)	
	var CyMin	=	parseFloat(document.getElementById('CyMin').value)	
	var CyMax	=	parseFloat(document.getElementById('CyMax').value)			

	var PixelWidth=(CxMax-CxMin)/iXmax;
	var PixelHeight=(CyMax-CyMin)/iYmax;
	/* color component ( R or G or B) is coded from 0 to 255 */
	/* it is 24 bit color RGB file */
	var MaxColorComponentValue=255; 
	
	var color = []
	
	var Zx, Zy;
	var Zx2, Zy2; /* Zx2=Zx*Zx;  Zy2=Zy*Zy  */

	var Iteration;	

	var IterationMax	=	parseFloat(document.getElementById('itMax').value)			
	
	/* bail-out value , radius of circle ;  */
	var EscapeRadius=2;
	var ER2=EscapeRadius*EscapeRadius;
	/*create new file,give it a name and open it in binary mode  */
	
	/* compute and write image data bytes to the file*/
	for(iY=0;iY<iYmax;iY++)
	{
		Cy=CyMin + iY*PixelHeight;
		if (Math.abs(Cy)< PixelHeight/2) Cy=0.0; /* Main antenna */
		for(iX=0;iX<iXmax;iX++)
		{  
			var rgbcol = [] ;
			
			Cx=CxMin + iX*PixelWidth;
			/* initial value of orbit = critical point Z= 0 */
			Zx=0.0;
			Zy=0.0;
			Zx2=Zx*Zx;
			Zy2=Zy*Zy;
			/* */
			for (Iteration=0;Iteration<IterationMax && ((Zx2+Zy2)<ER2);Iteration++)
			{
				Zy=2*Zx*Zy + Cy;
				Zx=Zx2-Zy2 + Cx;
				Zx2=Zx*Zx;
				Zy2=Zy*Zy;
			};
			/* compute  pixel color (24 bit = 3 bytes) */
			if (Iteration==IterationMax)
			{ 
				/*  interior of Mandelbrot set = black */
				rgbcol[0]=0;
				rgbcol[1]=0;
				rgbcol[2]=0;
			}
			else 
			{ 
				/* exterior of Mandelbrot set = white */
				var rgbcol = wb.color.map( Iteration , Zy2,Zx2 ) ;
			}
			
			wb.canvas.point ( ctx , iX, iY ,rgbcol[0],rgbcol[1],rgbcol[2] );						
		}
	}

	return 0;

}
