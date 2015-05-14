// Your JS goes here

function makeBoard(){
	var body = document.querySelector("body");
	var flag = true;
	for (var i = 0; i < 9; i++){ //row

		for (var j = 0; j < 9; j++){ //col
			
			var rand1 = Math.floor(Math.random()*256).toString();
			var rand2 = Math.floor(Math.random()*256).toString();
			var rand3 = Math.floor(Math.random()*256).toString();
	
			var aSquare = document.createElement("div");
			aSquare.style.width = "11.1%";
			aSquare.style.float = "left";
			aSquare.style.paddingBottom = "11.1%";
			if (flag)
				aSquare.style.backgroundColor = "rgb("+rand1+","+rand2+","+rand3+")";
			else
				aSquare.style.backgroundColor = "rgb("+rand1+","+rand2+","+rand3+")";
			body.appendChild(aSquare);
			flag = !flag
		}
	}
}

makeBoard();

function changeColor(){
	var divs = document.querySelectorAll("div");
	for (var i = 0; i < 81; i++){

		var rand1 = Math.floor(Math.random()*256).toString();
		var rand2 = Math.floor(Math.random()*256).toString();
		var rand3 = Math.floor(Math.random()*256).toString();

		divs[i].style.backgroundColor = "rgb("+rand1+","+rand2+","+rand3+")";
	}
}

function continuousChange(){
	for(var i = 0; i < 200; i++){
		window.setTimeout(changeColor,250);
	}
}
for(var i = 0; i < 2000; i++)
	continuousChange();