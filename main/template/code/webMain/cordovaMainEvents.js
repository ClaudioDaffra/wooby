
	// **********
	//				Cordova Main Events
	// **********

	document.addEventListener("deviceready", onDeviceReady, false);

	// device APIs are available

	function onDeviceReady() 
	{
		document.addEventListener("pause", onPause, false);
		document.addEventListener("resume", onResume, false);
		document.addEventListener("menubutton", onMenuKeyDown, false);
		// Add similar listeners for other events
	}

	function onPause() 
	{
		// Handle the pause event
	}

	function onResume() 
	{
		// Handle the resume event
	}

	function onMenuKeyDown() 
	{
		// Handle the menubutton event
	}

	