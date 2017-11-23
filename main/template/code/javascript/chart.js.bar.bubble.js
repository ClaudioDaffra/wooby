

	// ******************************************************** DATA
	
	var bubbleChartData = {
		animation: {
			duration: 10000
		},
		datasets: [{
			label: "My First dataset",
			backgroundColor: 'green',
			data: 
			[
				{x: 10,	y: 10,	r:  5,}, 
				{x: 20,	y: 20,	r: 10,}, 
				{x: 30,	y: 25,	r: 15,}, 
				{x: 40,	y: 40,	r: 20,}, 
				{x: 50,	y: 50,  r: 35,}
			]
		}, {
			label: "My Second dataset",
			backgroundColor: 'red',
			data: 
			[
				{x: 50,	y: 10,	r: 30,}, 
				{x: 40,	y: 20,	r: 25,}, 
				{x: 30,	y: 35,	r: 15,}, 
				{x: 20,	y: 40,	r: 10,}, 
				{x: 10,	y: 50,  r:  5,}
			]
		}]
	};

	// ******************************************************** CHART 
	
	var _canvasc = document.getElementById("_canvasc")
	_canvasc.width  	= $("#_canvasp").width(); 
	_canvasc.height 	= $("#_canvasp").height(); 
	var _ctxc = _canvasc.getContext("2d");
	
	window.myChart = new Chart(_ctxc, 
	{
		type: 'bubble',
		data: bubbleChartData,
		options: {
			responsive: true,
			title:{
				display:true,
				text:'Chart.js Bubble Chart'
			},
		}
	});

