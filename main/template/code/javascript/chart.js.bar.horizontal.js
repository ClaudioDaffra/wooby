
	// ******************************************************** DATA
	
	var barChartData = 
	{
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [{
			label: 'Dataset 1',
			backgroundColor: "lightgray",
			data: [10,20,30,40,50,60,70]
		}, {
			label: 'Dataset 2',
			backgroundColor: "silver",
			data: [70,60,50,40,30,20,10]
		}, {
			label: 'Dataset 3',
			backgroundColor: "darkgray",
			data: [30,20,10,0,-10,-20-30]
		}]
	};

	// ******************************************************** CHART 
	
	var _canvasc = document.getElementById("_canvasc")
	_canvasc.width  	= $("#_canvasp").width(); 
	_canvasc.height 	= $("#_canvasp").height(); 
	var _ctxc = _canvasc.getContext("2d");
	
	window.myBar = new Chart(_ctxc, 
	{
		type: 'horizontalBar', // 'bar' , 'horizontalBar'
		data: barChartData,
		options: {
			elements: {
				rectangle: {
					borderWidth: 2,
					borderColor: 'orange',
					borderSkipped: 'bottom'
				}
			},
			responsive: true,
			legend: {
				position: 'top',
			},
			title: {
				display: true,
				text: 'Chart.js Bar Chart'
			},
	
		}
	});

	