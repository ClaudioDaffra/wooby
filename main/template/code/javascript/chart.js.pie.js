
	// ******************************************************** DATA
   var config = {
        type: 'pie',
        data: {
            datasets: [{
                data: [ 10,20,30,40,50, ],
                backgroundColor: [ "Red","Green","Yellow","Grey","blue" ],
            }, {
                data: [ 10,20,30,40,50, ],
                backgroundColor: [ "Red","Green","Yellow","Grey","blue"   ],
            }, {
                data: [ 10,20,30,40,50, ],
                backgroundColor: ["Red","Green","Yellow","Grey","blue" ],
            }],
            labels: [ "Red","Green","Yellow","Grey","blue"  ]
        },
        options: {
            responsive: true
        }
    };
	
	// ******************************************************** CHART 
	
	var _canvasc = document.getElementById("_canvasc")
	_canvasc.width  	= $("#_canvasp").width(); 
	_canvasc.height 	= $("#_canvasp").height(); 
	var _ctxc = _canvasc.getContext("2d");
	
	window.myPie = new Chart(_ctxc, config);

