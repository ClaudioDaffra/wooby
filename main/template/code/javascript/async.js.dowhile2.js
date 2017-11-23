 
    var _i = 0; _maxi = 2 ;
    async.doWhilst
    (
        function(next_i) // REPEAT 
        {
            var _j = 0; _maxj = 2 ;
            async.doWhilst
            (
                function (next_j) // REPEAT
                {
					// BODY
                    console.log( _i,_j );
					// END BODY
                    _j++;
                    setTimeout(next_j,0);
                },
                function () { return _j < _maxj;  }, // UNTIL			
                function () { _i++; next_i(); }
            );
        },
        function() {return _i < _maxi }	// UNTIL
    );
