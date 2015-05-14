// Your JS goes here

function makeBoard(){
	var body = document.querySelector("body");
	var flag = true;
	var rand = 65;
	var rand1 = 180;
	for (var i = 0; i < 9; i++){ //row

		rand1 -= 6;
		rand += 6;

		for (var j = 0; j < 9; j++){ //col

			var aSquare = document.createElement("div");
			aSquare.style.width = "11.1%";
			aSquare.style.float = "left";
			aSquare.style.paddingBottom = "11.1%";
			if (flag) {
				aSquare.style.backgroundColor = "rgb("+rand+","+rand1+","+rand+")";
			}else{
				aSquare.style.backgroundColor = "rgb("+rand1+","+rand+","+rand1+")";
			}
			body.appendChild(aSquare);
			flag = !flag
		}
	}
}

makeBoard();