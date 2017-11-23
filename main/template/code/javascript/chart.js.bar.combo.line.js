
	// ******************************************************** DATA	
	
	var barChartData = {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [{
			type: 'bar', // 'bar' , 'line'
			label: 'Dataset 1',
			backgroundColor: "lightgray",
			data: [10,20,30,40,50,60,70],
			borderColor: 'orange',
			borderWidth: 2
		}, {
			type: 'line', // 'bar' , 'line'
			label: 'Dataset 2',
			backgroundColor: "silver",
			data: [10,60,15,40,30,20,10],
			borderColor: 'blue',
			borderWidth: 2
		}, {
			type: 'bar', // 'bar' , 'line'
			label: 'Dataset 3',
			backgroundColor: "darkgray",
			data: [40,10,70,20,60,30],
			borderColor: 'orange',
			borderWidth: 2				
		}, ]

	};
	
	// ******************************************************** CHART 
	
	var _canvasc = document.getElementById("_canvasc")
	_canvasc.width  	= $("#_canvasp").width(); 
	_canvasc.height 	= $("#_canvasp").height(); 
	var _ctxc = _canvasc.getContext("2d");
	
	window.myBar = new Chart(_ctxc, {
		type: 'bar',
		data: barChartData,
		options: {
			responsive: true,
			title: {
				display: true,
				text: 'Chart.js Combo Bar Line Chart'
			}
			,animation: {
					onComplete: function () {
						var chartInstance = this.chart;
						var ctx = chartInstance.ctx;
						ctx.textAlign = "center";

						Chart.helpers.each(this.data.datasets.forEach(function (dataset, i) {
							var meta = chartInstance.controller.getDatasetMeta(i);
							Chart.helpers.each(meta.data.forEach(function (bar, index) {
								ctx.fillText(dataset.data[index], bar._model.x, bar._model.y - 15);
							}),this)
						}),this);
					}
			}
		}
	});

