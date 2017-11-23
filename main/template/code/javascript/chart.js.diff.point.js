
	// ******************************************************** DATA
	
	var config = {
		type: 'line',
		data: {
			labels: ["January", "February", "March", "April", "May", "June", "July"],
			datasets: [{
				label: "dataset - big points",
				data: [10,20,30,40,50,60,70],
				fill: false, /* true, false */
				borderDash: [5, 5],
				pointRadius: 3,
				pointHoverRadius: 10,
			}, {
				label: "dataset - individual point sizes",
				data: [10,60,15,40,30,20,10],
				fill: false, /* true, false */
				borderDash: [5, 5],
				pointRadius: [2, 4, 6, 18, 0, 12, 15],
			}, {
				label: "dataset - large pointHoverRadius",
				data: [40,10,70,20,60,30],
				fill: false, /* true, false */
				pointHoverRadius: 30,
			}, {
				label: "dataset - large pointHitRadius",
			data: [70,60,30,40,30,20,10],
				fill: true, /* true, false */
				pointHitRadius: 20,
			}]
		},
		options: {
			responsive: true,
			legend: {
				position: 'bottom',
			},
			hover: {
				mode: 'label'
			},
			scales: {
				xAxes: [{
					display: true,
					scaleLabel: {
						display: true,
						labelString: 'Month'
					}
				}],
				yAxes: [{
					display: true,
					scaleLabel: {
						display: true,
						labelString: 'Value'
					}
				}]
			},
			title: {
				display: true,
				text: 'Chart.js Line Chart - Different point sizes'
			}
		}
	};

	$.each(config.data.datasets, function(i, dataset) 
	{
		var background = 'ivory';
		
		dataset.borderColor = 'blue';
		dataset.backgroundColor = 'lightgray';
		
		dataset.pointBorderColor = 'red';
		dataset.pointBackgroundColor = 'orange';
		
		dataset.pointBorderWidth = 1;
	});

	// ******************************************************** CHART 
	
	var _canvasc = document.getElementById("_canvasc")
	_canvasc.width  	= $("#_canvasp").width(); 
	_canvasc.height 	= $("#_canvasp").height(); 
	var _ctxc = _canvasc.getContext("2d");
	
	
	window.myLine = new Chart(_ctxc, config);

	
	
	
	
	