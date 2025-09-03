    var _timer = null ; // variable global
            
            idBotonActivarSemaforo.onclick = fnComenzar ;
            idBotonDetenerSemaforo.onclick = fnDetener ;
                        
            function fnComenzar(){
                console.log("Comenzando el semáforo");
                _timer = setTimeout(fnAVerde1, 0);
                idBotonActivarSemaforo.onclick = null;
                return;
            }
            
            function fnARojo1(){
                console.log("Prendiendo luz roja");
                idRoja.value = 1;
                idAmar.value = 0;
                idVerd.value = 0;
                _timer = setTimeout(fnAAmarillo1, 2*1000);
                return;
            }
            
            function fnAAmarillo1(){
                console.log("Prendiendo luz amarilla");
                idAmar.value = 1;
                idRoja.value = 1;
                //fnAAmarillo1(); No quiero ahora
                _timer = setTimeout(fnAVerde1, 2*1000);
                return;
            }
            
            function fnAVerde1(){
                console.log("Prendiendo luz verde");
                idVerd.value = 1;
                idAmar.value = 0;
                idRoja.value = 0,
                _timer = setTimeout(fnAAmarillo2, 2*1000);
                return;
            }
            
            function fnAAmarillo2() {
                console.log("Prendiendo luz amarilla");
                idAmar.value = 1;
                idVerd.value = 0;
                //fnAAmarillo1(); No quiero ahora
                _timer = setTimeout(fnARojo1, 2*1000);
                return;
            }
            
            idBotonDetenerSemaforo.onclick = fnDetener;
            function fnDetener(){
                console.log("Apagando luces");
                clearTimeout(_timer);
                fnApagarLuces();
                idBotonDetenerSemaforo.onclick = fnComenzar;
                return;
            }


            function fnApagarLuces() {
                idRoja.value = 0;
                idAmar.value = 0;
                idVerd.value = 0;
            }
            