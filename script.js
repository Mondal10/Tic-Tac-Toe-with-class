function Box(){
	var xPos,yPos,boxWidth=100,boxHeight=100,boxColor='yellow',textStr="";
	
	var mainDiv, event, id;

	this.create = function(box){
		xPos=box.xPos;
		yPos=box.yPos;
		event=box.event;
		id=box.id;

		mainDiv=document.createElement('div');
		mainDiv.style.position = 'absolute';
		mainDiv.style.left = xPos+'px';
		mainDiv.style.top = yPos+'px';
		mainDiv.style.width = boxWidth+'px';
		mainDiv.style.height = boxHeight+'px';
		mainDiv.style.backgroundColor = boxColor;
		mainDiv.style.textAlign = "center";
		mainDiv.style.fontSize = "100px";
		
		document.body.appendChild(mainDiv);
		
		mainDiv.addEventListener('click',onClick,false);

	}

	this.setValue = function(_textStr){
		mainDiv.innerHTML=_textStr;
		
	} 

	this.getValue = function(){
		var val=mainDiv.innerHTML;
		return val;
	}				

	function onClick(evt){
		event(evt,id);
		mainDiv.removeEventListener('click',onClick,false);

	}


}




function TicTacToe(_obj){
		var turn=0;
		var wins=false;
		var squaresFilled=0;
		var x=y=false;
    	var boxObj={};
    	winningCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    	
    var xPos,yPos,boxWidth,boxHeight,boxColor='green';
    xPos=_obj.xPos;
    yPos=_obj.yPos;
    boxHeight=_obj.boxHeight;
    boxWidth=_obj.boxWidth;
    var backDiv;
    backDiv=document.createElement('div');
    backDiv = document.createElement('div');
    backDiv.style.position = 'absolute';
    backDiv.style.left = xPos+'px';
    backDiv.style.top = yPos+'px';
    backDiv.style.width = boxWidth+'px';
    backDiv.style.height = boxHeight+'px';
    backDiv.style.backgroundColor = boxColor;
    document.body.appendChild(backDiv);


		this.init = function(_blok){
			var k=0;
			for(var i=0;i<3;i++){
				for(var j=0;j<3;j++){
					// console.log(k);
					boxObj["tttBox" + k] = new Box();
					boxObj["tttBox" + k].create({
						xPos: _blok.xPos + j*110,
						yPos: _blok.yPos + i*110,
						textStr: '',
						event: Clicked,
						id: k
					});

					k++;
				}
			}		
		}

		function Clicked(ev,_id){
			// console.log(mainDiv);
			// console.log(ev);
			//console.log(_id);
			if(x==false){
				if(turn%2==0)
				{
					textStr="X";
					
				}
				else
				{
					textStr="O";
					
				}
					boxObj["tttBox" + _id].setValue(textStr);
					var symbol=boxObj["tttBox" + _id].getValue();
					//console.log(boxObj["tttBox" + _id].getValue());

			
			turn++;
			squaresFilled++;

			checkForWinners(symbol);
		}
			//console.log(symbol);
			// console.log("tttBox" + _id);
			if(wins==false)
			{
				drawCheck();
			}



		}

 		function checkForWinners(symbol){
   			for(var a = 0; a < winningCombinations.length; a++)
    		{

        		if(boxObj["tttBox" + winningCombinations[a][0]].getValue()==symbol&&boxObj["tttBox" + winningCombinations[a][1]].getValue()== symbol&&boxObj["tttBox" + winningCombinations[a][2]].getValue()==symbol)
    			{    
        			
        			//setTimeout(alertDelay,5000);  
            		alertDelay();
            		wins=true;
            		x=true;
    			}
    		}
    	// 	if(wins==true)
    	// 	{
    	// 	for(var i=0; i<9;i++){
    	// 		boxObj["tttBox"+i].setValue("");
    	// 	}
    	// }
    		function alertDelay(){
        	alert(symbol+ " WON!");
        	// location.reload(true);
        	
    		}
    		//console.log(winningCombinations[1][0]);
    		// console.log(boxObj["tttBox" + 1].getValue())
   		 }

   		 function drawCheck(){
   		 	if(squaresFilled==9){
            alert("DRAW");
            y=true;
            // location.reload(true);
       		}
   		 }
}


window.onload=function(){

var ticobj = new TicTacToe({xPos:40,
	yPos:40,
	boxHeight:340,
	boxWidth:340});
ticobj.init({
	xPos:50,
	yPos:50});
var ticobj2 = new TicTacToe({xPos:400,
	yPos:40,
	boxHeight:340,
	boxWidth:340});
ticobj2.init({
	xPos:410,
	yPos:50});
var ticobj3 = new TicTacToe({xPos:40,
	yPos:400,
	boxHeight:340,
	boxWidth:340});
ticobj3.init({
	xPos:50,
	yPos:410});
}