var _timer = null ; // variable global
            
            idBotonActivarSemaforo.onclick = fnComenzar ;
            idBotonDetenerSemaforo.onclick = fnDetener ;
            
            idBotonReiniciar.onclick = fnReiniciar;
            function  fnReiniciar(){
                console.log("Reiniciando semáforo");
                location.reload();
                return;
            }
                        
            function fnComenzar(){
                console.log("Comenzando el semáforo");
                _timer = setTimeout(fnARojo1, 0);
                return;
            }
            
            function fnARojo1(){
                console.log("Prendiendo luz roja");
                idEstrella.style.fill = "red";
                idCirculo.style.fill = "";
                //fnAAmarillo1(); No quiero ahora
                _timer = setTimeout(fnAAmarillo1, 2*1000);
                return;
            }
            
            function fnAAmarillo1(){
                console.log("Prendiendo luz amarilla");
                idCirculo.style.fill = "yellow";
                idEstrella.style.fill = "";
                //fnAAmarillo1(); No quiero ahora
                _timer = setTimeout(fnAVerde1, 2*1000);
                return;
            }
            
            function fnAVerde1(){
                console.log("Prendiendo luz verde");
                idCorazon.style.fill = "green";
                idCirculo.style.fill = "";
                //fnAAmarillo1(); No quiero ahora
                _timer = setTimeout(fnAAmarillo2, 2*1000);
                return;
            }
            
            function fnAAmarillo2() {
                console.log("Prendiendo luz amarilla");
                idCirculo.style.fill = "yellow";
                idCorazon.style.fill = "";
                //fnAAmarillo1(); No quiero ahora
                _timer = setTimeout(fnARojo1, 2*1000);
                return;
            }
            
            idBotonDetenerSemaforo.onclick = fnDetener;
            function fnDetener(){
                console.log("Apagando luces");
                clearTimeout(_timer);
                fnApagarLuces();
                return;
            }


            function fnApagarLuces() {
                idEstrella.style.fill = "";
                idCirculo.style.fill = "";
                idCorazon.style.fill = "";
            }
            
            // Para definir un tiempo fuera...
            // setTimeout( dadoNombreFuncion, tiempoDeEsperarEnMilimetros ) -> devuelve un número
            // _timer = setTimeout( fnFuncion1, 3000 ) ;
            // Para luego cancelarlo, si no lo quiero, de la siguiente manera
            // clearTimeout( _timer ) ;
            