"use strict"

var b = [9,3,2,28,0,13,5,2,6,8,9] //array
var c = 0 //counter of loops
var j = b.length //number of iterations required to go through entire array
var i = 0 // iterator within loop

function setUp (){
	var yExtent = d3.extent(b);
	var radiusScale = d3.scale.linear().domain(yExtent).range([25,50]);
	var yScale = d3.scale.linear().domain(yExtent).range([450, 30]);
	var yAxis = d3.svg.axis().scale(yScale).orient("right").ticks(20).tickSize(730);
	d3.select("svg").append("g").attr("id", "yAxisG").call(yAxis);

	d3.select("svg").selectAll("circle")
		.data(b)
		.enter()
		.append("circle")
		.attr("r", function(d){ return radiusScale(d);	})
		.attr("cx", function(d,i){	return 50 + i * (730/b.length);	})
		.attr("cy", function(d){ return yScale(d);	})
	};

function updateSvg (b){
	var yExtent = d3.extent(b);
	var radiusScale = d3.scale.linear().domain(yExtent).range([25,50]);
	var yScale = d3.scale.linear().domain(yExtent).range([450, 30]);
	var yAxis = d3.svg.axis().scale(yScale).orient("right").ticks(20).tickSize(730);
	d3.select("svg").append("g").attr("id", "yAxisG").call(yAxis);

	d3.select("svg").selectAll("circle").data(b).transition().duration(2000)
	.attr("r", function(d){ return radiusScale(d);	})
	.attr("cx", function(d,i){	return 50 + i * (730/b.length);	})
	.attr("cy", function(d){ return yScale(d);	})
	};

function pendleSort (b){
	for (var j=b.length; j>0; j--, c++){
		if (c%2==0){
			// start forward loop
			for (i=0; i<b.length-c; i++){
				if (b[i]>b[i+1]){
					var x = b[i+1]
					b[i+1] = b[i]
					b[i] = x
				} else {
					console.log("noSort forward")
				};
			updateSvg(b);
			console.log("b-forward"+b);
			}; //end forward loop
		} else {
			//start backward loop
			for(var z=b.length-c;z>0;z--){
				if(b[z]<b[z-1]){
					var y = b[z-1]
					b[z-1] = b[z]
					b[z] = y
				} else {
					console.log("noSort backward");
				};
			updateSvg(b);
			console.log("b-backward"+b);
			};//end backward loop
		};// end else
	};//end j loop
	console.log("final sort"+b);
};//end pendleSort

//pendleSort(b);
console.log("initial sort"+b);
