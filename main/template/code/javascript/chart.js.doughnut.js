
	// ******************************************************** DATA	
	
    var config = {
        type: 'doughnut',
        data: {
            datasets: [{
				data: [10,20,30,40,50],
                backgroundColor: [    "red","green","yellow","orange","blue"  ],
                label: 'Dataset 1'
            }, {
				data: [10,60,15,40,30],
                backgroundColor: [    "red","green","yellow","orange","blue"  ],
                label: 'Dataset 2'
            }, {
				data: [40,10,70,20,50],
                backgroundColor: [    "red","green","yellow","orange","blue"  ],
                label: 'Dataset 3'
            }],
            labels: [
                "red","green","yellow","orange","blue"
            ]
        },
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Doughnut Chart'
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    };

	// ******************************************************** CHART 
	
	var _canvasc = document.getElementById("_canvasc")
	_canvasc.width  	= $("#_canvasp").width(); 
	_canvasc.height 	= $("#_canvasp").height(); 
	var _ctxc = _canvasc.getContext("2d");
	
	window.myDoughnut = new Chart(_ctxc, config);
 
