function Box() {
    var xPos = 0;
    var yPos = 0;
    var id, event;
    var idnum;

    var mainCanv;
    mainCanv = document.createElement('canvas');
    this.create = function(_obj) {
        xPos = _obj.xPos;
        yPos = _obj.yPos;
        id = _obj.id;
        event = _obj.event;
        idnum = _obj.idnum;


        // mainCanv = document.createElement('canvas');
        mainCanv.style.position = 'absolute';
        mainCanv.style.left = xPos + 'px';
        mainCanv.style.top = yPos + 'px';
        mainCanv.setAttribute('width', 100);
        mainCanv.setAttribute('height', 100);
        mainCanv.setAttribute("id", "Div" + id + idnum);
        mainCanv.style.border = "3px solid black";
        // mainCanv.style.backgroundColor = colorStr;

        document.body.appendChild(mainCanv);

        mainCanv.addEventListener('click', onClick, false);
    }

    function onClick(e) {
        event(e, id, idnum);

        mainCanv.removeEventListener('click', onClick, false);

    }

mainCanv.removeEventListener('click', onClick, false);

}


function TicTacToe() {
    var xPos, yPos;
    var boxObj = {};
    var turn = 0;
    var squaresFilled = 0;
    var wins = false;
    var done = false;
    var winningCombinations = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]];
    this.init = function(_blok) {
        idnum = _blok.id;
        var k = 0;
        var j = 0;
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                // console.log(k);
                boxObj["tttBox" + k] = new Box();
                boxObj["tttBox" + k].create({
                    xPos: _blok.xPos + j * 110,
                    yPos: _blok.yPos + i * 110,
                    id: k,
                    idnum: idnum,
                    event: Clicked

                });

                k++;
            }
        }
    }

    function Clicked(e, id, idnum) {

        // console.log("Clicked");
        // console.log(id);
        // console.log(document.getElementById("Div"+id));
        var c = document.getElementById("Div" + id + idnum);
        var cxt = c.getContext("2d");
        
        if(done == false){
        if (turn % 2 == 0) {
            cxt.beginPath();
            cxt.moveTo(10, 10);
            cxt.lineTo(90, 90);
            cxt.moveTo(90, 10);
            cxt.lineTo(10, 90);
            cxt.stroke();
            cxt.closePath();
            boxObj["tttBox" + id] = 'X';

            // document.getElementById("display").innerHTML = "O's Turn";
        } else {
            cxt.beginPath();
            cxt.arc(50, 50, 40, 0, Math.PI * 2, true);
            cxt.stroke();
            cxt.closePath();
            boxObj["tttBox" + id] = 'O';

        }
        // console.log(boxObj["tttBox" + id]);

        var symbol = boxObj["tttBox" + id];
        // console.log(symbol);
        turn++;
        squaresFilled++;
        
        // if((boxObj["tttBox" + id] == 'O'||boxObj["tttBox" + id] == 'X') && done == false)
    	

    	checkForWinners(symbol);
    	// ctx.clearRect(50,50,100,100);
    }
        if (wins == false) {
            drawCheck();
        }
    }


    function checkForWinners(symbol) {
        for (var a = 0; a < winningCombinations.length; a++) {

            if (boxObj["tttBox" + winningCombinations[a][0]] == symbol && boxObj["tttBox" + winningCombinations[a][1]] == symbol && boxObj["tttBox" + winningCombinations[a][2]] == symbol) {

                //setTimeout(alertDelay,5000);  
                alertDelay();
                wins = true;
                done = true;
            }
        }

        function alertDelay() {
            alert(symbol + " WON!");
            // location.reload(true);

        }

    }

    function drawCheck() {
        if (squaresFilled == 9) {
            alert("DRAW");

            // location.reload(true);
        }
    }

}

window.onload = function() {
    var game1 = new TicTacToe();
    game1.init({
        xPos: 50,
        yPos: 50,
        id: 1
    });

    var game2 = new TicTacToe();
    game2.init({
        xPos: 450,
        yPos: 50,
        id: 2
    });

    var game3 = new TicTacToe();
    game3.init({
        xPos: 50,
        yPos: 450,
        id: 3
    });

}