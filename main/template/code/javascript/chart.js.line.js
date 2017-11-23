
	// ******************************************************** DATA
	
	var config = {
		type: 'line',
		data: {
			labels: ["January", "February", "March", "April", "May", "June", "July"],
			datasets: [{
				label: "dataset 1",
				data: [90,20,10,0,-10,-20,-90],	
				borderDash: [5, 5],
			}, {
				/* hidden: true, */
				label: 'dataset 2',
				data: [70,60,50,40,30,20,10]
			}, {
				label: "dataset 3",
				data: [10,20,30,40,50,60,70],					
			}]
		},
		options: {
			responsive: true,
			title:{
				display:true,
				text:'Chart.js Line Chart'
			},
			tooltips: {
				mode: 'label',
			},
			hover: {
				mode: 'dataset'
			},
			scales: {
				xAxes: [{
					display: true,
					scaleLabel: {
						show: true,
						labelString: 'Month'
					}
				}],
				yAxes: [{
					display: true,
					scaleLabel: {
						show: true,
						labelString: 'Value'
					},
					ticks: {
						suggestedMin: -100,
						suggestedMax: +100,
					}
				}]
			}
		}
	};

	$.each(config.data.datasets, function(i, dataset) 
	{
		dataset.borderColor = 'orange';
		dataset.backgroundColor = 'lightgray';
		dataset.pointBorderColor = 'cyan';
		dataset.pointBackgroundColor = 'red';
		dataset.pointBorderWidth = 1;
	});

	// ******************************************************** CHART 
	
	var _canvasc = document.getElementById("_canvasc")
	_canvasc.width  	= $("#_canvasp").width(); 
	_canvasc.height 	= $("#_canvasp").height(); 
	var _ctxc = _canvasc.getContext("2d");
	
	window.myLine = new Chart(_ctxc, config);

