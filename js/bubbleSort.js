var b = [9,3,2,78,0] 
var c = 0 //counter of loops
var j = b.length //number of iterations required to go through entire array
var i = 0 // iterator within loop

function setUp (){
	var yExtent = d3.extent(b);
	var radiusScale = d3.scale.linear().domain(yExtent).range([25,50]);
	var yScale = d3.scale.linear().domain(yExtent).range([480, 0]);
	yAxis = d3.svg.axis().scale(yScale).orient("right").ticks(10).tickSize(730);
	d3.select("svg").append("g").attr("id", "yAxisG").call(yAxis);

	d3.select("svg").selectAll("circle")
		.data(b)
		.enter()
		.append("circle")
		.attr("r", function(d){ return radiusScale(d);	})
		.attr("cx", function(d,i){	return i * 100;	})
		.attr("cy", function(d){ return yScale(d);	})
	};



function pendleSort (b){
	for (j=b.length; j>0; j--, c++){
		if (c%2==0){
			// start forward loop
			for (i=0; i<b.length-c; i++){
				if (b[i]>b[i+1]){
					x = b[i+1]
					b[i+1] = b[i]
					b[i] = x
					console.log("sort forward");
				} else {
					console.log("noSort forward");
				};
			}; //end forward loop
		} else {
			//start backward loop
			for(z=b.length-c;z>0;z--){
				if(b[z]<b[z-1]){
					y = b[z-1]
					b[z-1] = b[z]
					b[z] = y
					console.log("sort forward");
				} else {
					console.log("noSort backward");
				};
			};//end backward loop
		};// end else
		d3.selectAll("svg")
		.data(b)
		.transition()
		.duration(5000);
		//.attr("cx", function(d,i){	return i * 100;	})
		//.attr("r", function(d){ return radiusScale(d);	})
		//.attr("cy", function(d){ return yScale(d);	})
	};//end j loop
};//end pendleSort

console.log("final sort"+b);
