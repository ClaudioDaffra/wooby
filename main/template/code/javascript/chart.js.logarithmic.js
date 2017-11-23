

    var config = {
        type: 'line',
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "My First dataset",
                data: [10,20,30,40,50,60,70],
                fill: false,
                borderDash: [5, 5],
            }, {
                label: "My Second dataset",
                data: [ 70,60,50,40,30,20,10 ],
            }]
        },
        options: {
            responsive: true,
            title:{
                display:true,
                text:'Chart.js Line Chart - Logarithmic'
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'x axis'
                    }
                }],
                yAxes: [{
                    display: true,
                    type: 'logarithmic',
                    scaleLabel: {
                        display: true,
                        labelString: 'y axis'
                    }
                }]
            }
        }
    };

    $.each(config.data.datasets, function(i, dataset) 
	{
		if (i==0)      dataset.borderColor = 'red';
		if (i==1)      dataset.borderColor = 'green';		
		
        //dataset.backgroundColor = randomColor(0.5);
        dataset.pointBorderColor ='orange';
        //dataset.pointBackgroundColor = 'silver';
        dataset.pointBorderWidth = 3;
    });


	// ******************************************************** CHART 
	
	var _canvasc = document.getElementById("_canvasc")
	_canvasc.width  	= $("#_canvasp").width(); 
	_canvasc.height 	= $("#_canvasp").height(); 
	var _ctxc = _canvasc.getContext("2d");
	
	window.myLine = new Chart(_ctxc, config);


 