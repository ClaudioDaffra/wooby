
    var config = {
        data: {
            datasets: [{
                data: [ 10,20,30,40,50 ],
                backgroundColor: [ "Red","Green","Yellow","orange","blue"  ],
                label: 'My dataset' 
            }],
            labels: [ "Red","Green","Yellow","orange","blue"  ]
        },
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Polar Area Chart'
            },
            scale: {
              ticks: {
                beginAtZero: true
              },
              reverse: false
            },
            animation: {
                animateRotate: true,
                animateScale: true
            }
        }
    };


	// ******************************************************** CHART 
	
	var _canvasc = document.getElementById("_canvasc")
	_canvasc.width  	= $("#_canvasp").width(); 
	_canvasc.height 	= $("#_canvasp").height(); 
	var _ctxc = _canvasc.getContext("2d");
	
	window.myPolarArea = Chart.PolarArea(_ctxc, config);
 
