    var _timer = null;

        function fnMoveOpenDoor(){
            clearInterval(_timer);
            _timer = setInterval(fnMoveOneStep, 100); //cada 100ms
        }

        function fnMoveOneStep(){
            var _position, _newPosition, _position2, _newPosition2;

            _position = idPuertaIzq.getAttribute("x");
                // "200px" = string -> queremos convertirla a = número entero
            _position = parseInt (_position); // _position = interpretar como un numero entero a la variable _position; con esto va a decir 200
            _newPosition = _position - 10;
            idPuertaIzq.setAttribute("x", _newPosition); // se cambia el atributo, primero da el nombre del atributo como string y luego da un nuevo valor
            
            _position2 = idPuertaDer.getAttribute("x");
            // "200px" = string -> queremos convertirla a = número entero
            _position2 = parseInt (_position2); // _position = interpretar como un numero entero a la variable _position; con esto va a decir 200
            _newPosition2 = _position2 + 10;
            idPuertaDer.setAttribute("x", _newPosition2); // se cambia el atributo, primero da el nombre del atributo como string y luego da un nuevo valor
            
            if(_newPosition == 0){
                clearInterval(_timer);
                console.log("Open Door");
                _timer =setTimeout(fnMoveCloseDoor, 3000); //3 segs
            } 
            return ;
        }



        function fnMoveCloseDoor(){
            clearInterval(_timer);
            _timer = setInterval(fnMoveOneStepClose, 100);
        }

        function fnMoveOneStepClose(){

            var _position, _newPosition, _position2, _newPosition2;

            _position = idPuertaIzq.getAttribute("x");
                // "0" = string -> queremos convertirla a = número entero
            _position = parseInt (_position); // _position = interpretar como un numero entero a la variable _position; con esto va a decir 0
            _newPosition = _position + 10;
            idPuertaIzq.setAttribute("x", _newPosition); // se cambia el atributo, primero da el nombre del atributo como string y luego da un nuevo valor

            
            _position2 = idPuertaDer.getAttribute("x");
            // "200px" = string -> queremos convertirla a = número entero
            _position2 = parseInt (_position2); // _position = interpretar como un numero entero a la variable _position; con esto va a decir 200
            _newPosition2 = _position2 - 10;
            idPuertaDer.setAttribute("x", _newPosition2); // se cambia el atributo, primero da el nombre del atributo como string y luego da un nuevo valor

            if(_newPosition == 200){
                clearInterval(_timer);
                console.log("Close Door");
            } 
            return ;
    
        }


    idButtonOpenDoor.onclick = fnMoveOpenDoor;
    idButtonCloseDoor.onclick = fnMoveCloseDoor;
    idButtonStopDoor.onclick = fnStopDoor;
        
    function fnStopDoor(){
        clearInterval(_timer);
        console.log("Stop Door")
    }
            