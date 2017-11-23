


// http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb

function rgbToHex(r, g, b) 
{
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
function hexToRgb(hex) 
{
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function wb_gen_shade(op,rgb)
{
  var r=hexToRgb(rgb).r
  var g=hexToRgb(rgb).g  
  var b=hexToRgb(rgb).b
  
  var str="";
  
  r =r-33*5
  g =g-33*5
  b =b-33*5
  for(var i=0;i<10;i++)
  {
    r+=33;
    g+=33;
    b+=33;

    str+= '<div class="wb_shade tooltip" style="background-color:rgb('+r+','+g+','+b+')" >'

	var n = rgbToHex(r, g, b).toUpperCase() ; 
	
	str+= '<span class="tooltiptext">'+n+'</span>'
	str+= '</div>'

  }  
  //console.log ( op );
  
  var el = document.getElementById ( op ) ;
  el.outerHTML = '<div>'+str+'</div>' ;
  
  //console.log(str);
}

/**/
 
function ColorLuminance(hex, lum) 
{
	// validate hex string
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) 
	{
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0;

	// convert to decimal and change luminosity
	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) 
	{
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}

	return rgb;
}

function xwb_gen_shade(op,rgb)
{
  var str="";
  

  for(var i=-0.9;i<1.0;i+=0.2)
  {
    var xcolor = ColorLuminance(rgb, i);

    str+= '<div class="wb_shade tooltip" style="background-color:'+xcolor+'" >'

	//var n = rgbToHex(r, g, b).toUpperCase() ; 
	
	str+= '<span class="tooltiptext">'+xcolor+'</span>'
	str+= '</div>'

  }  
  //console.log ( op );
  
  var el = document.getElementById ( op ) ;
  el.outerHTML = '<div>'+str+'</div>' ;	
}


 