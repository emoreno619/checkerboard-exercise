// Your JS goes here

function makeBoard(){
	var body = document.querySelector("body");
	var flag = true;
	for (var i = 0; i < 9; i++){ //row

		for (var j = 0; j < 9; j++){ //col

			var aSquare = document.createElement("div");
			aSquare.style.width = "11.1%";
			aSquare.style.float = "left";
			aSquare.style.paddingBottom = "11.1%";
			if (flag)
				aSquare.style.backgroundColor = "black";
			else
				aSquare.style.backgroundColor = "red";
			body.appendChild(aSquare);
			flag = !flag
		}
	}
}

makeBoard();