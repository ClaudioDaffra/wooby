
/*
   wooby.js (lib)
*/


// namespace

wb = {} ;

//
// wb.parallel
// wb.parellel.js
// wb.color
// wb.color.hsv_to_rgb
// wb.color.map
// wb.canvas
// wb.canvas.point
// wb.script
// wb.script.run
//
// wb.worker
//


//***************
//					Async Loop
//***************

function loop(init, fnCondition, fnUpdate, fnRun, fnDone)
{
  var index = 0;
  index = (init.constructor.name === "function")?init():init;
  function next()
  {
    index = fnUpdate(index);
    if(fnCondition(index))
	{
      setTimeout(function()
	  {
        fnRun(index, next);
      }, 0);
    }
	else
	{
      if(fnDone) fnDone(index);
    }
  }
  fnRun(index,next);
}

//**********************
//						WORKER
//**********************

/*

usage :

var w = worker.start( file )
worker.stop ( w ) ;
worker.messagge ( w , fn() )

*/

wb.worker =
{
	start : function (file)
	{
		if(typeof(Worker) !== "undefined") 
		{
			if(typeof(w) == "undefined") 
			{
				return w = new Worker(file);
			}
		} 
		else 
		{
			return null ;
		}
	},
	stop : function (w) 
	{ 
		w.terminate();
		w = undefined;
	},
	message : function (w,fn)
	{
		w.onmessage = function(event) 
		{
			fn (  event )
		};	 
	}
}

//**********************
//						PARALLEL 
//**********************

wb.parallel 	= {}
wb.parallel.php = {}
wb.parallel.js  = function() { return new ThreadPool();} ;

//**********************
//						Color
//**********************

wb.color = {} ;

/*
 * The Mandelbrot Set, in HTML5 canvas and javascript.
 * https://github.com/cslarsen/mandelbrot-js
 *
 * Copyright (C) 2012 Christian Stigen Larsen
*/

/*
 * Convert hue-saturation-value/luminosity to RGB.
 *
 * Input ranges:
 *   H =   [0, 360] (integer degrees)
 *   S = [0.0, 1.0] (float)
 *   V = [0.0, 1.0] (float)
 */
 
wb.color.hsv_to_rgb = function (h, s, v)
{
	if ( v > 1.0 ) v = 1.0;
	var hp = h/60.0;
	var c = v * s;
	var x = c*(1 - Math.abs((hp % 2) - 1));
	var rgb = [0,0,0];

	if ( 0<=hp && hp<1 ) rgb = [c, x, 0];
	if ( 1<=hp && hp<2 ) rgb = [x, c, 0];
	if ( 2<=hp && hp<3 ) rgb = [0, c, x];
	if ( 3<=hp && hp<4 ) rgb = [0, x, c];
	if ( 4<=hp && hp<5 ) rgb = [x, 0, c];
	if ( 5<=hp && hp<6 ) rgb = [c, 0, x];

	var m = v - c;
	rgb[0] += m;
	rgb[1] += m;
	rgb[2] += m;

	rgb[0] *= 255;
	rgb[1] *= 255;
	rgb[2] *= 255;

	rgb[0] = parseInt ( rgb[0] ); 
	rgb[1] = parseInt ( rgb[1] );
	rgb[2] = parseInt ( rgb[2] );  
   
  return rgb;
}

// http://stackoverflow.com/questions/369438/smooth-spectrum-for-mandelbrot-set-rendering
// alex russel : http://stackoverflow.com/users/2146829/alex-russell

wb.color.map = function (i,r,c)
{
	var di= i;
	var zn;
	var hue;

	zn = Math.sqrt(r + c);
	hue = di + 1.0 - Math.log(Math.log(Math.abs(zn))) / Math.log(2.0);  // 2 is escape radius
	hue = 0.95 + 20.0 * hue; // adjust to make it prettier
	// the hsv function expects values from 0 to 360
	while (hue > 360.0)
		hue -= 360.0;
	while (hue < 0.0)
		hue += 360.0;

	return wb.color.hsv_to_rgb(hue, 0.8, 1.0);
}

// ****************** 
// CANVAS
// ****************** 

wb.canvas = {} ;

wb.canvas.point = function ( ctx , x, y, r,g,b )
{
	ctx.beginPath();
	ctx.strokeStyle = 'rgb('+r+','+g+','+b+')';
	ctx.stroke();
	ctx.strokeRect(x,y,1,1); 
}

// *******************
// LOAD SCRIPT RUNTIME
// ******************* 

// http://stackoverflow.com/questions/2592092/executing-script-elements-inserted-with-innerhtml
// Random User http://stackoverflow.com/users/3549636/random-user

wb.script = {}

function insertAndExecute(id, text) 
{
    document.getElementById(id).innerHTML = text;
    var scripts = Array.prototype.slice.call(document.getElementById(id).getElementsByTagName("script"));
    for (var i = 0; i < scripts.length; i++) 
	{
        if (scripts[i].src != "") 
		{
            var tag = document.createElement("script");
            tag.src = scripts[i].src;
            document.getElementsByTagName("head")[0].appendChild(tag);
        }
        else 
		{
            eval(scripts[i].innerHTML);
        }
    }
}

wb.script.run = function ( id,text )
{
	insertAndExecute(id, text)	
}


//******************
//					STR
//******************

String.prototype.replaceAll = function(search, replacement) 
{
    var target = this;
    return target.split(search).join(replacement);
};

String.prototype.splice = function(idx, rem, str) 
{
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

//******************
//					sprintf
//******************

// example : 
// "{0} is dead, but {1} is alive! {0} {2}".format("ASP", "ASP.NET")

if (!String.prototype.format) 
{
	String.prototype.format = function() 
	{
		var args = arguments;
		return this.replace(/{(\d+)}/g, function(match, number) 
		{ 
			return typeof args[number] != 'undefined'
				? args[number]
				: match
				;
		});
	};
}

//******************
//					STR
//******************

str = 
{
  insertFrom		: function ( s1 , i   , s2 ) { return s1.splice( i,0,s2); },
  insertFromTo		: function ( s1 , i,r , s2 ) { return s1.splice( i,r-i,s2); },
  removeFromTo		: function ( s1 , i,r      ) { return str.left(s1,i)+str.right(s1,str.len(s1)-r) },
  
  len 				: function (s) 	 	{ return s.length							} , // num
  charAt 			: function (s,i) 	{ return s.charAt  				(i)			} , // char
  codeAt 	 		: function (s,i) 	{ return s.charCodeAt			(i)			} , // num
  codeToChar 		: function (c) 		{ return String.fromCharCode	( c ) 		} , // code  
  concatenate		: function (s1,s2) 	{ return s1.concat 				( s2 ) 		} , // string
  
  endsWith 	 		: function (s1,s2) 	{ return s1.endsWith			( s2 ) 		} , // TRUE
  startsWith 	 	: function (s1,s2) 	{ return s1.startsWith			( s2 ) 		} , // TRUE
  contains	 		: function (s1,s2) 	{ return s1.includes			( s2 ) 		} , // TRUE
  
  regExp	 		: function (s1,re) 	    { return s1.match			( re ) 		} ,    
  copy	 		    : function (s1,n) 		{ if (n==undefined) n=1 	;  return s1.repeat( n )} , 

  replace	 		: function (s1,s2,s3) 	{ return s1.replace		    ( s2,s3 ) 	} ,   
  replaceAll 		: function (s1,s2,s3) 	{ return s1.replaceAll	    ( s2,s3 ) 	} , 
  
  remove	 		: function (s1,s2) 	{ return s1.replace		   		( s2,"" ) 	} ,   
  removeAll 		: function (s1,s2) 	{ return s1.replaceAll	    	( s2,"" ) 	} ,  
  
  lower	 			: function (s1) 	{ return s1.toLowerCase			()			} ,  
  upper	 			: function (s1) 	{ return s1.toUpperCase			() 			} ,   
  lowerLocale		: function (s1) 	{ return s1.toLocaleLowerCase	()			} ,  
  upperLocale		: function (s1) 	{ return s1.toLocaleUpperCase	() 			} , 
  
  toString	 		: function (s1) 	{ return ""+s1.toString			(  )+""		} ,   
  toPrimitive		: function (s1) 	{ return s1.valueOf				(  ) 		} ,    
  toInt				: function (s1) 	{ return parseInt				(s1) 		} ,
  toFloat			: function (s1) 	{ return parseFloat				(s1) 		} ,  
  toNumber			: function (s1) 	{ return s1 % 1 === 0 ? parseInt(s1)	: parseFloat(s1)	} , 
  toArray	 		: function (s1,c) 	{ return s1.split				(c) 		} , 
  
  find		 		: function (s1,s2) 	{ return s1.indexOf				( s2 ) 		} ,   
  findLast	 		: function (s1,s2) 	{ return s1.lastIndexOf			( s2 ) 		} ,    
  findRegExp		: function (s1,s2) 	{ return s1.search				( s2 )		} , 
  
  mid				: function (s1,f,t) { return s1.substring(f,t)	} , 
  left				: function (s1,l) 	{ return s1.substr(0,l)					    		} , 
  right				: function (s1,l)   {  return s1.substr(s1.length-l ,s1.lentgh  )		} , 

  subBeginEnd		: function (s1,b,e) { return s1.slice(b,e)					    } ,   
  subFromTo			: function (s1,f,t) { return s1.substring(f,t)					} , 
  subFromLen		: function (s1,f,l) { return s1.substr(f,l)						} , 
  
  compare			: function (s1,s2) 	{ return s1 === s2								} , // TRUE
  compareLocale		: function (s1,s2) 	{ return s1.localeCompare( s2 )	? false : true  } , // TRUE
 
  trim 				: function (s1) 	{ return s1.trim() } ,
  print 			: function 			( str,match,number )  {	return str.format ( match , number ) ; }
  
} ;


//******************
//					Date
//******************

date = 
{
	year		:	function(d)	{ return d.getFullYear() } , 
	month		:	function(d)	{ return d.getMonth() } , 
	day			:	function(d)	{ return d.getDate() } ,
	dayWeek		:	function(d)	{ return d.getDay() } ,	
	
	hour		:	function(d)	{ return d.getHours() } ,   
	min			:	function(d)	{ return d.getMinutes() } ,   
	sec			:	function(d)	{ return d.getSeconds() } ,   
	milliSec	:	function(d)	{ return d.getMilliseconds() } ,   
  
	time		:	function(d)	{ return d.getTime() } , 

	isLeap : function( anno )
	{
		var a = anno;
		if ( a >= 0 )
		{
			if(a < 1582)
				return (a % 4) ? false : true ;
			else
				return ((a % 400) ? ((a % 100) ? ((a % 4) ? false : true) : false) : true);
		}
		return false;
	},
	diff :  {

		inMilliSecs: function(d1, d2) {
			var t2 = d2.getTime();
			var t1 = d1.getTime();

			return parseInt((t2-t1)/(24*3600*1000/24/60/1000));
		},		
		inSecs: function(d1, d2) {
			var t2 = d2.getTime();
			var t1 = d1.getTime();

			return parseInt((t2-t1)/(24*3600*1000/24/60));
		},		
		inMins: function(d1, d2) {
			var t2 = d2.getTime();
			var t1 = d1.getTime();

			return parseInt((t2-t1)/(24*3600*1000/24/60));
		},		
		inHours: function(d1, d2) {
			var t2 = d2.getTime();
			var t1 = d1.getTime();

			return parseInt((t2-t1)/(24*3600*1000/24));
		},	
	
		inDays: function(d1, d2) {
			var t2 = d2.getTime();
			var t1 = d1.getTime();

			return parseInt((t2-t1)/(24*3600*1000));
		},

		inWeeks: function(d1, d2) {
			var t2 = d2.getTime();
			var t1 = d1.getTime();

			return parseInt((t2-t1)/(24*3600*1000*7));
		},

		inMonths: function(d1, d2) {
			var d1Y = d1.getFullYear();
			var d2Y = d2.getFullYear();
			var d1M = d1.getMonth();
			var d2M = d2.getMonth();

			return (d2M+12*d2Y)-(d1M+12*d1Y);
		},

		inYears: function(d1, d2) {
			return d2.getFullYear()-d1.getFullYear();
		}
	}	
	
	
} ;

//******************
//					Array
//******************

array = 
{
	len		:	function(a)	{ return a.length } , 
	sort	:	function(a)	
	{ 
		if ( typeof a[0] == 'string' )
		{
			return a.sort() 
		}
		else
		{
			return a.sort(function(a, b){return a-b});
		}
	},	
	reverse		: function(a)	{ return a.reverse() } , 
	sortDesc	: function(a)	{ return array.reverse(array.sort(a)) } , 
	create : function (length) 
	{
		var arr = new Array(length || 0),
			i = length;

		if (arguments.length > 1) {
			var args = Array.prototype.slice.call(arguments, 1);
			while(i--) arr[length-1 - i] = array.create.apply(this, args);
		}

		return arr;
	},
	toString 		: function (a) 		{ return a.toString(); 	} ,
	toStringSep		: function (a,sep) 	{ return a.join(sep); 	} ,
	pop				: function (a) 		{ return a.pop(); 		} ,
	push			: function (a,x) 	{ return a.push(x); 	} ,
	popLast			: function (a) 		{ return a.pop(); 		} ,
	pushLast		: function (a,x) 	{ return a.push(x); 	} ,
	popFirst		: function (a) 		{ return a.shift(); 	} ,
	pushFirst		: function (a,x) 	{ return a.unshift(x); 	} ,
}
 
//******************
//					jQuery UI Tabs
//******************
 
// Usage
//
// ex wbGoToTabs ( "#tabs","#tab-6" )
//

function _id2Index(tabsId, srcId)
{
	var index=-1;
	var i = 0, tbH = $(tabsId).find("li a");
	var lntb=tbH.length;
	if(lntb>0)
	{
		for(i=0;i<lntb;i++)
		{
			o=tbH[i];
			if(o.href.search(srcId)>0)
			{
				index=i;
			}
		}
	}
	return index;
}

function wbGoToTabsByName ( tabsId, srcId ) 
{
	$("#tabs").tabs("option","active", _id2Index(tabsId,srcId));
}

//******************
//					jQuery Select Area
//******************

function wbAreaSelectGetInfo ( c )
{
	// ........................ Informazioni Figlio 'c'
	console.log ( c ) 			
	
	// ........................ Ottieni informazione Padre 'p'
	var p = {} ;
	
	p.x1 = 0 ;
	p.y1 = 0 ;
	p.x2 		= parseInt ( $("#wbAreaSelectContainer").css('width') 	)
	p.y2 		= parseInt ( $("#wbAreaSelectContainer").css('height')	)
	p.width 	= parseInt ( $("#wbAreaSelectContainer").css('width')	)
	p.height	= parseInt ( $("#wbAreaSelectContainer").css('height')	)
	console.log ( p ) ;
	
	// ........................ calcola valori in percentuale
	
	var pp = {} ;
	
	pp.x1 = parseInt ( c.x1 * 100 / p.width  )

	pp.y1 = parseInt ( c.y1 * 100 / p.height )		
	
	pp.x2 = parseInt ( c.x2 * 100 / p.width  )
	pp.y2 = parseInt ( c.y2 * 100 / p.height )		

	pp.width  = parseInt ( c.width * 100 / p.width  )
	pp.height = parseInt ( c.height * 100 / p.height )	
	
	console.log ( pp ) ;
	
	parent = p ;
	child  = c ;
	perc   = pp ;
	
	var obj = { parent , child , perc }
	
	return obj ;
}

/**/
/**/
/**/



