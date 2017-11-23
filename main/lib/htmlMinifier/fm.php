<?php

	header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
	header("Cache-Control: post-check=0, pre-check=0", false);
	header("Pragma: no-cache");

	// .................................................................... fileLoad ( file ) 
	if($_POST['action'] == 'fileLoad')
	{
		$f = $_POST['file'] ;
		
		$result =  file_get_contents (  $f  ) ;
		
		if ( $result==false )
			echo  'false' ;
		else
			echo  $result ;	// dati letti	
	}	
	
	// .................................................................... fileSave ( file ) 
	if($_POST['action'] == 'fileSave')
	{
		$f = $_POST['file'] ;
		$t = $_POST['data'] ;
		
		$result =  file_put_contents (  $f , $t ) ;
		
		if ( $result==false )
			echo  'false' ;
		else
			echo  $result ;		// numero di caratteri scritti
	}

	// .................................................................... fileExist ( file ) 
	if($_POST['action'] == 'fileExists')
	{
		$f = $_POST['file'] ;

		$result = file_exists($f);
		
		if ( $result==1 )
			echo  'true' ;
		else
			echo  'false' ;		
	}		
	
	// .................................................................... fileDelete ( file ) 
	if($_POST['action'] == 'fileDelete')
	{
		$f = $_POST['file'] ;
		
		$result =  unlink ( $f ) ;
		
		if ( $result==true )
			echo  'true' ;
		else
			echo  'false' ;		
	}	

	function recurse_copy($src,$dst) 
	{ 
		$dir = opendir($src); 
		@mkdir($dst); 
		while(false !== ( $file = readdir($dir)) ) 
		{ 
			if (( $file != '.' ) && ( $file != '..' )) 
			{ 
				if ( is_dir($src . '/' . $file) ) 
				{ 
					recurse_copy($src . '/' . $file,$dst . '/' . $file); 
				} 
				else 
				{ 
					copy($src . '/' . $file,$dst . '/' . $file); 
				} 
			} 
		} 
		closedir($dir); 
	}

	// .................................................................... fileCopyTree ( source , dest )  
	if($_POST['action'] == 'fileCopyTree')
	{
		$src = $_POST['source'] ;
		$dst = $_POST['dest'] ;

		mkdir ( $dst,777 ) ;
		
		recurse_copy($src,$dst) ;
		
		echo "0K" ;
	}	

	function rrmdir($folder) 
	{
		$glob = glob($folder);
		foreach ($glob as $g) 
		{
			if (!is_dir($g)) 
			{
				unlink($g);
			} 
			else 
			{
				rrmdir("$g/*");
				rmdir($g);
			}
		}
	}
	
	// .................................................................... rrmdir($d) 
	if($_POST['action'] == 'removeDirTree')
	{
		$d = $_POST['dir'] ;
 
		rrmdir($d);
		
		echo "0K" ;
	}	


	// .................................................................... getOnlyDir ( dir ) ;
	if($_POST['action'] == 'getOnlyDir')
	{
		$rp = $_POST['dir'] ;

		$elenco = scandir($rp);
		$dir = [] ;

		$num = count($elenco);

		for ($i = 2; $i < $num; $i++)
		{
			if ( is_dir( $rp."//".$elenco[$i] )  )
			{
				$dir[] = $elenco[$i] ;
			}
		}
		echo  json_encode($dir) ;
	}

	// .................................................................... fileCopy ( fileFrom, fileTo  ) 
	if($_POST['action'] == 'fileCopy')
	{
		$da = $_POST['fileFrom'] ;
		$a  = $_POST['fileTo'] ;

		copy($da, $a); 
		
		echo $_POST['action'] . ' from ' . $_POST['fileFrom'] . ' to ' . $_POST['fileTo'] ;			
	}
	

	
?>





















