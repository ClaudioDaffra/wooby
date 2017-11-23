
	//*******************
	//						Random Color
	//*******************

	var randomScalingFactor = function() {
		return Math.ceil(Math.random() * 10.0) * Math.pow(10, Math.ceil(Math.random() * 5));
	};
	var wbRandomColorFactor = function() {
		return Math.round(Math.random() * 255);
	};
	var wbRandomColor = function(opacity) {
		return 'rgba(' + wbRandomColorFactor() + ',' + wbRandomColorFactor() + ',' + wbRandomColorFactor() + ',' + (opacity || '.3') + ')';
	};

	// ******************************************************** DATA
		
    var config = {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
          label: "dataset1",
		  data: [90,20,10,0,-10,-20,-90],	
        }, {
          label: "dataset2",
		  data: [70,60,50,40,30,20,10],
        }, {
          label: "dataset3",
		  data: [10,20,30,40,50,60,70]
        }, {
           label: "dataset4",
		  data: [-90,-20,-10,0,+10,+20,+90],
        }]
      },
      options: {
        responsive: true,
        title:{
          display:true,
          text:"Chart.js Line Chart - Stacked Area"
        },
        tooltips: {
          mode: 'label',
        },
        hover: {
          mode: 'label'
        },
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Month'
            }
          }],
          yAxes: [{
            stacked: true,
            scaleLabel: {
              display: true,
              labelString: 'Value'
            }
          }]
        }
      }
    };

    $.each(config.data.datasets, function(i, dataset) 
	{
      var color = wbRandomColor(1);
      dataset.borderColor = 'silver';
      dataset.backgroundColor = color;
      dataset.pointBorderColor = 'lightgray';
      dataset.pointBackgroundColor = 'darkgray';
      dataset.pointBorderWidth = 1;
    });

	// ******************************************************** CHART 
	
	var _canvasc = document.getElementById("_canvasc")
	_canvasc.width  	= $("#_canvasp").width(); 
	_canvasc.height 	= $("#_canvasp").height(); 
	var _ctxc = _canvasc.getContext("2d");
	
    window.myLine = new Chart(_ctxc, config);
 
