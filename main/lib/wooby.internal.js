
/**********************

   wooby internal (lib)
   
***********************/

//************
//	wbEditor
//************

// addons
//
// evidenzia linea
// match tag ( ctrl+j)
// match brackets
// autoclose tag
// autoclose brackets
// search find replace

CodeMirror.defineExtension("autoFormatRange", function (from, to) 
{
    var cm = this;
    var outer = cm.getMode(), text = cm.getRange(from, to).split("\n");
    var state = CodeMirror.copyState(outer, cm.getTokenAt(from).state);
    var tabSize = cm.getOption("tabSize");

    var out = "", lines = 0, atSol = from.ch == 0;
    function newline() {
        out += "\n";
        atSol = true;
        ++lines;
    }

    for (var i = 0; i < text.length; ++i) {
        var stream = new CodeMirror.StringStream(text[i], tabSize);
        while (!stream.eol()) {
            var inner = CodeMirror.innerMode(outer, state);
            var style = outer.token(stream, state), cur = stream.current();
            stream.start = stream.pos;
            if (!atSol || /\S/.test(cur)) {
                out += cur;
                atSol = false;
            }
            if (!atSol && inner.mode.newlineAfterToken &&
                inner.mode.newlineAfterToken(style, cur, stream.string.slice(stream.pos) || text[i+1] || "", inner.state))
                newline();
        }
        if (!stream.pos && outer.blankLine) outer.blankLine(state);
        if (!atSol) newline();
    }

    cm.operation(function () {
        cm.replaceRange(out, from, to);
        for (var cur = from.line + 1, end = from.line + lines; cur <= end; ++cur)
            cm.indentLine(cur, "smart");
    });
});

// Applies automatic mode-aware indentation to the specified range
CodeMirror.defineExtension("autoIndentRange", function (from, to) 
{
    var cmInstance = this;
    this.operation(function () {
        for (var i = from.line; i <= to.line; i++) {
            cmInstance.indentLine(i, "smart");
        }
    });
});

function wbEdit ( _id ) 
{
	//	e.setValue ( _text ) ;
	//  t = e.getValue ( )
	var editor = CodeMirror.fromTextArea(document.getElementById( _id ), 
	{
		enter : "" ,
		lineNumbers: true,
		/* match brackets */
		matchBrackets: true,
		/* mode: "application/x-httpd-php", 1234 */
		 mode: "htmlmixed",  		
		indentUnit: 4,
		indentWithTabs: true,
		styleActiveLine: true,
		continuousScanning: 500,
		autoRefresh:true,
		lineWrapping: false,
		/* match tag */
		matchTags: {bothTags: true},
		extraKeys: {"Ctrl-J": "toMatchingTag"},
		/* autoclose tag */
        autoCloseTags: true,
		/* search*/
		extraKeys: {"Alt-F": "findPersistent"}
	
	});

	editor.setCursor ( { line : 0 , ch:0 } ) ;

	// occore fare così, .... viene renderizzato bene solo con dovuto refresh
	// specialmente all'interno dei tabs UI ...
	setInterval(function() 
	{
		editor.refresh();
	}, 0500); // 1000= 1 sec 1/2 sec

	return editor ;
}

//************
//	insert text at line
//************

function wbEditInsertTextAtCursor(editor, text) 
{
    var doc = editor.getDoc();
    var cursor = doc.getCursor();
    doc.replaceRange(text, cursor);
}


function wbGetUnit ( x ) 
{
	var u = [ 'em','ex','%','px','cm','mm','in','pt','pc','ch','rem','vh','vw','vmin','vmax' ] ;
	for ( i=0;i<u.length;i++)
	{
		if ( x.indexOf( u[i] )>-1 )  return u[i] ;
	}
	return undefined ;
}


// Convert form data to JavaScript object with jQuery
//
// https://stackoverflow.com/questions/1184624/convert-form-data-to-javascript-object-with-jquery

(function($){
    $.fn.serializeObject = function(){

        var self = this,
            json = {},
            push_counters = {},
            patterns = {
                "validate": /^[a-zA-Z][a-zA-Z0-9_]*(?:\[(?:\d*|[a-zA-Z0-9_]+)\])*$/,
                "key":      /[a-zA-Z0-9_]+|(?=\[\])/g,
                "push":     /^$/,
                "fixed":    /^\d+$/,
                "named":    /^[a-zA-Z0-9_]+$/
            };


        this.build = function(base, key, value){
            base[key] = value;
            return base;
        };

        this.push_counter = function(key){
            if(push_counters[key] === undefined){
                push_counters[key] = 0;
            }
            return push_counters[key]++;
        };

        $.each($(this).serializeArray(), function(){

            // skip invalid keys
            if(!patterns.validate.test(this.name)){
                return;
            }

            var k,
                keys = this.name.match(patterns.key),
                merge = this.value,
                reverse_key = this.name;

            while((k = keys.pop()) !== undefined){

                // adjust reverse_key
                reverse_key = reverse_key.replace(new RegExp("\\[" + k + "\\]$"), '');

                // push
                if(k.match(patterns.push)){
                    merge = self.build([], self.push_counter(reverse_key), merge);
                }

                // fixed
                else if(k.match(patterns.fixed)){
                    merge = self.build([], k, merge);
                }

                // named
                else if(k.match(patterns.named)){
                    merge = self.build({}, k, merge);
                }
            }

            json = $.extend(true, json, merge);
        });

        return json;
    };
})(jQuery);


// .................................................................. MESSAGGE

function wbMessage ( titolo,testo,callback ) 
{
	$('#wbDivFullScreenTranparent').show()
	
	console.debug ( '#wbMessage',testo)  ;
	
	$('#wbMessage').attr('title',titolo);	
	
	$( "#wbMessageData" ).html(testo);

	$( "#wbMessage" ).dialog(
	{
		modal: false,
		buttons : 
		{
			Ok: function() 
			{
				$(this).dialog("close"); 
				if (typeof callback === 'function' && callback!=='undefined' )
				{
					callback('ok');
				}
				$('#wbDivFullScreenTranparent').hide()		
			}
		},
	});
}

// .................................................................. ERROR

function wbError ( testo,callback ) 
{
	$('#wbDivFullScreenTranparent').show()
	
	$( "#wbErrorData" ).html(testo);

	$( "#wbError" ).dialog(
	{
		modal: true,
		buttons : 
		{
			Ok: function() 
			{
				$(this).dialog("close"); 
				if (typeof callback === 'function' && callback!=='undefined' )
				{
					callback('ok');
				}
				$('#wbDivFullScreenTranparent').hide()	
			}
		},
	}) 
}

// .................................................................. YES / NO

function wbConfirm ( titolo,testo,callback ) 
{
	$('#wbDivFullScreenTranparent').show()

	$('#wbConfirm').attr('title',titolo);
	
	$( "#wbConfirmData" ).html(testo);
	$( "#wbConfirm" ).dialog(
	{
		modal: true,
		buttons : 
		{
			Yes: function () 
			{
				$(this).dialog("close");
				if (typeof callback === 'function' && callback!=='undefined' )
				{
					callback('yes');
				}
				$('#wbDivFullScreenTranparent').hide()
			},
			No: function () 
			{                                                                 
				$(this).dialog("close");
				if (typeof callback === 'function' && callback!=='undefined' )
				{
					callback('no');
				}
				$('#wbDivFullScreenTranparent').hide()
			}
		}
	});
}

// .................................................................. FORM
// Submit jQuery UI dialog on <Enter>
// https://stackoverflow.com/questions/868889/submit-jquery-ui-dialog-on-enter
// questo è necessario per catturare il tasto enter nel form di dialog
// altrimenti esce senza far nulla, 


$.extend($.ui.dialog.prototype.options, { 
    create: function() {
        var $this = $(this);

        // focus first button and bind enter to it
        $this.parent().find('.ui-dialog-buttonpane button:first').focus();
        $this.keypress(function(e) {
            if( e.keyCode == $.ui.keyCode.ENTER ) {
                $this.parent().find('.ui-dialog-buttonpane button:first').click();
                return false;
            }
        });
    } 
});

// .................................................................. wbForm

function wbForm ( titolo,testo,callback ) 
{
	$('#wbDivFullScreenTranparent').show()
	
	$( "#wbFormData" ).html(testo);
	
	$('#wbForm').attr('title',titolo);	
	
	$( "#wbForm" ).dialog(
	{
		modal: true,
		buttons : 
		{
			Ok: function() 
			{
				$(this).dialog("close");
				if (typeof callback === 'function' && callback!=='undefined' )
				{
					
					callback( $( '#wbFormData' ).serializeObject() );
				}
				$('#wbDivFullScreenTranparent').hide()
			},
			Cancel: function() 
			{
	
				$('#wbFormData').keypress(function(e) 
				{
					if (e.keyCode == $.ui.keyCode.ENTER) 
					{
						$('#wbDivFullScreenTranparent').hide()
						$(this).dialog("close");						
						
						$(this).dialog("close");
						if (typeof callback === 'function' && callback!=='undefined' )
						{
							callback( $( '#wbFormData' ).serializeObject() );
						}
					}


					return true ;
				});
			
				$('#wbDivFullScreenTranparent').hide()
				$(this).dialog("close");
				if (typeof callback === 'function' && callback!=='undefined' )
				{
					callback( null );
				}

				return true ;
			}

		}
	})
}

// .................................................................. wbGetFile

function wbGetFile ( accept,callback ) 
{
	$('#wbDivFullScreenTranparent').show()

	if ( accept == '.mod' ) accept = '.html'	
	
	$( "#wbGetFileNameBrowse" ).attr('accept',accept);
	
	$( "#wbGetFile" ).dialog(
	{
		title: "File : " + accept,
		modal: true,
		buttons : 
		{
			'browse': function() 
			{
				$("#wbGetFileNameBrowse").trigger('click');
			},
			Ok: function() 
			{
				$(this).dialog("close");
				if (typeof callback === 'function' && callback!=='undefined' )
				{
					var FN =  $('#wbGetFileNameInput').val().split('/').pop().split('\\').pop();
					console.log ( '#FileName' ); 		
					console.log ( FN  ); 					
					
					callback( FN );
				}
				$('#wbDivFullScreenTranparent').hide()

			},
			Cancel: function() 
			{
				$(this).dialog("close");
				if (typeof callback === 'function' && callback!=='undefined' )
				{
					callback( null );
				}
				
				$('#wbDivFullScreenTranparent').hide()
			}

		}
	})
}


// .................................................................. EXAMPLE


/* 

wbDialogInit()

var form = ''

form += '	First name:<br>'
form += '	<input type="Data" name="firstname" value="Mickey">'
form += '	<br>'
form += '	Last name:<br>'
form += '	<input type="Data" name="lastname" value="Mouse">'
form += '	<br><br>'


//wbMessage ( ' Hello World ' ) ;
//wbError ( 'file not saved ...' ) ;
// wbConfirm ( 'sicuro ? ') ;
//wbForm ( form , function ( data ) { console.debug ( data ) ;}   ) ; 

*/

function wbCreateDivFullScreenTranparent ( )
{
	var d = document.createElement("DIV");
	$(d).attr('id','wbDivFullScreenTranparent');	
	$(d).css('margin','0');
	$(d).css('padding','0');		
	$(d).css('top','0%');
	$(d).css('left','0%');		
	$(d).css('width','100%');
	$(d).css('height','100%');	
	
	//$(d).css('background','rgba(255,255,255,0.5)');

	$(d).addClass('wbDialogGradientStripped');	
	
	
	$(d).css('z-index','99');	
	$(d).css('position','fixed');	
	$( "body" ).append(d);
	$(d).hide();		
	console.debug ( d ) ;	
}	


function wbDialogInit()
{
	wbCreateDivFullScreenTranparent ()
		
	var e =  null

	// ........................................................ wbMessage
	e =  document.createElement("DIV");
	$(e).hide();	
	$(e).attr('id','wbMessage');
	$(e).attr('title','Message');
	$(e).html('<p style="text-align:center" id="wbMessageData"></p>');		
	$( "body" ).append(e);
	console.debug ( e ) ;
	
	// ........................................................ wbError		
	e =  document.createElement("DIV");
	$(e).hide();	
	$(e).attr('id','wbError');
	$(e).attr('title','?? Error');
	$(e).css('border','3px groove red');	
	$(e).html('<p style="text-align:center" id="wbErrorData" ></p></p>');		
	$( "body" ).append(e);
	console.debug ( e ) ;

	
	// ........................................................ wbConfirm
	e =  document.createElement("DIV");
	$(e).hide();	
	$(e).attr('id','wbConfirm');
	$(e).attr('title','? Corfim');
	$(e).html('<p style="text-align:center" id="wbConfirmData"></p>');		
	$( "body" ).append(e);
	console.debug ( e ) ;	

	// ........................................................ wbForm
	e =  document.createElement("DIV");
	$(e).hide();	
	$(e).attr('id','wbForm');
	$(e).attr('title','Form');
	$(e).html('<form id="wbFormData"></form>');		
	$( "body" ).append(e);
	console.debug ( e ) ;		

	// ........................................................ wbGetFile
	e =  document.createElement("DIV");
	$(e).hide();	
	$(e).attr('id','wbGetFile');
	$(e).attr('title','File');
	var h=""
	h+='<input  id="wbGetFileNameInput"  style="width:95%"/>'
	h+='<input type="file" id="wbGetFileNameBrowse" type="file" accept="*" hidden>'
		
	$(e).html(h);	

	$( "body" ).append(e);
	console.debug ( e ) ;	


	$('#wbGetFileNameBrowse').change(function()
	{
	  var v = $('#wbGetFileNameBrowse').val().split('/').pop().split('\\').pop(); ;
	  
	  $('#wbGetFileNameInput').val(v);
	  
	  console.log ( '#wbGetFileNameInput::',v );
	});

	
	
}

//****************
// File Manager
//****************

//	wbFileLoad ( 'prova.txt' , true,function(data) { console.debug ( data ) } ) ; 

function wbFileLoad ( file,dialog,callback  )  
{
	if ( file == undefined ) return 0 ;

	console.debug ( 'php::fileLoad' )	
	console.debug ( file )	
	
	$.ajax(
	{
		type : 'POST',
		url: 'fm.php',
		data : { 'action': 'fileLoad', 'file' : file  },
		cache: false,
		success: function(data) 
		{
			console.debug ( 'php:fileLoad:success:',data )
			if (typeof callback === 'function' && callback!=='undefined' )
			{
				if ( dialog==true )
					wbMessage ( ' File ' , ' <<<'+file+'>>><br> Loaded. ',callback(data) ) ;
				else
					callback(data) ;
			}
		},
		error: function (request, status, error) 
		{
			if ( dialog==true )
				wbError ( ' File Not Loaded '  ) ;

			console.error ( request,status,error );

		}
    });

}

//	 wbFileSave ( 'prova.txt' , 'ciao',false )

function wbFileSave ( file,data,dialog,callback  )  
{
	if ( file == undefined ) return 0 ;

	console.debug ( 'php::fileSave' )	
	console.debug ( file )	
	
	$.ajax(
	{
		type : 'POST',
		url: 'fm.php',
		data : { 'action': 'fileSave', 'file' : file , 'data' : data },

		success: function(data) 
		{
			console.debug ( 'php:fileSave:success:',data )
			if (typeof callback === 'function' && callback!=='undefined' )
			{
				if ( dialog==true )
					wbMessage ( ' File ' , ' <<<'+file+'>>><br> Saved. ',callback(data) ) ;
				else
					callback(data) ;
			}
		},
		error: function (request, status, error) 
		{
			if ( dialog==true )
				wbError ( ' File Not Saved '  ) ;

			console.error ( request,status,error );
		}
    });

}

//	wbFileExists ( 'prova.txt',function(data){console.debug(data) } ) ;

function wbFileExists ( file,callback  )  
{
	if ( file == undefined ) return 0 ;

	console.debug ( 'php::fileExists' )	
	console.debug ( file )	
	
	$.ajax(
	{
		type : 'POST',
		url: 'fm.php',
		data : { 'action': 'fileExists', 'file' : file  },

		success: function(data) 
		{
			console.debug ( 'php:fileExists:success:',data )
			if (typeof callback === 'function' && callback!=='undefined' )
			{
				callback(data) ;
			}
		},
		error: function (request, status, error) 
		{
			console.error ( request,status,error );
		}
    });

}

//	wbFileDelete ( 'prova.txt' ) ;

function wbFileDelete ( file,callback  )  
{
	if ( file == undefined ) return 0 ;

	console.debug ( 'php::fileDelete' )	
	console.debug ( file )	
	
	$.ajax(
	{
		type : 'POST',
		url: 'fm.php',
		data : { 'action': 'fileDelete', 'file' : file  },

		success: function(data) 
		{
			console.debug ( 'php:fileDelete:success:',data )
			if (typeof callback === 'function' && callback!=='undefined' )
			{
				callback(data) ;
			}
		},
		error: function (request, status, error) 
		{
			console.error ( request,status,error );
		}
    });

}

//	wbFileCopyTree ( '../source' , '../dest' ) ;

function wbFileCopyTree ( source , dest , callback  )  // copy from source to dest
{
	if ( source == undefined ) return 0 ;
	if ( dest == undefined ) return 0 ;
	
	console.debug ( 'php::fileCopyTree' )	
	console.debug ( 'from::',source )	
	console.debug ( 'to::',dest )
	
	$.ajax(
	{
		type : 'POST',
		url: 'fm.php',
		data : { 'action': 'fileCopyTree', 'source' : source ,'dest' : dest },

		success: function(data) 
		{
			console.debug ( 'php:fileCopyTree:success:',data )
			if (typeof callback === 'function' && callback!=='undefined' )
			{
				callback(data) ;
			}
		},
		error: function (request, status, error) 
		{
			console.error ( request,status,error );
		}
    });

}

//	wbRemoveDirTree ( 'dir' ) ;

function wbRemoveDirTree ( dir , callback  )  // remove dir
{
	if ( dir == undefined ) return 0 ;
	
	console.debug ( 'php::removeDirTree' )	
	console.debug ( 'tree::',dir )	
	
	$.ajax(
	{
		type : 'POST',
		url: 'fm.php',
		data : { 'action': 'removeDirTree', 'dir' : dir },

		success: function(data) 
		{
			console.debug ( 'php:removeDirTree:success:',data )
			if (typeof callback === 'function' && callback!=='undefined' )
			{
				callback(data) ;
			}
		},
		error: function (request, status, error) 
		{
			console.error ( request,status,error );
		}
    });

}

//	wbGetOnlyDir ( '..' , function (data) { console.debug ( data ) }  ) ;

function wbGetOnlyDir ( dir , callback  )  // get only dir in directory parent
{
	if ( dir == undefined ) return 0 ;
	
	console.debug ( 'php::getOnlyDir' )	
	console.debug ( 'dir::',dir )	
	
	$.ajax(
	{
		type : 'POST',
		url: 'fm.php',
		data : { 'action': 'getOnlyDir', 'dir' : dir },
		dataType : 'json', 
		success: function(data) 
		{
			console.debug ( 'php:GetOnlyDir:success:',data )
			if (typeof callback === 'function' && callback!=='undefined' )
			{
				callback(data) ;
			}
		},
		error: function (request, status, error) 
		{
			console.error ( request,status,error );
		}
    });

}

// .................................................................... wbFileCopy ( fileFrom, fileTo,dialog,callback  ) 

function wbFileCopy ( fileFrom,fileTo,dialog,callback  )  
{
	if ( fileFrom == undefined ) return 0 ;
	if ( fileTo == undefined ) return 0 ;
	
	console.debug ( 'php::fileCopy' )	
	console.debug ( 'fileFrom' )	
	console.debug ( fileFrom )	
	console.debug ( 'fileTo' )	
	console.debug ( fileTo )	
	
	$.ajax(
	{
		type : 'POST',
		url: 'fm.php',
		data : { 'action': 'fileCopy', 'fileFrom' : fileFrom , 'fileTo' : fileTo  },

		success: function(data) 
		{
			console.debug ( 'php:fileCopy:success:',data )
			if (typeof callback === 'function' && callback!=='undefined' )
			{
				if ( dialog==true )
					wbMessage ( ' File ' , ' <<<'+file+'>>><br> Copied. ',callback(data) ) ;
				else
					callback(data) ;
			}
		},
		error: function (request, status, error) 
		{
			if ( dialog==true )
				wbError ( ' File Not Copy '  ) ;

			console.error ( request,status,error );

		}
    });

}


//	http://dummy.com/?technology=jquery&blog=jquerybyexample
//
//	var tech = GetURLParameter('technology');
//	var blog = GetURLParameter('blog');
//

function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }

}

/*

	Center a popup window on screen

	https://stackoverflow.com/questions/4068373/center-a-popup-window-on-screen/4068385#4068385

*/

function wbPopUpWindow(url, title, w, h) 
{
  var left = (screen.width/2)-(w/2);
  var top = (screen.height/2)-(h/2);
  return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
} 

// ************************************************ Change CSS in runTime 

function wbChangeCss (filename,id) 
{
	var elem=document.getElementById(id);

	elem.rel="stylesheet";
	elem.type="text/css";
	elem.href=filename;
	//document.getElementsByTagName("head")[0].appendChild(qelem);
	return elem;
}
 

/**/

	$.ajaxSetup({ cache: false});

/**/
