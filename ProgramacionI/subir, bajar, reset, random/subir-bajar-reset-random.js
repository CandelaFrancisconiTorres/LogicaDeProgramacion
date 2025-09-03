let _miNumero = 0; // Number
            function fnClickSubir(){
                _miNumero = _miNumero + 1;
                idNumero.value = _miNumero;
                return;
            }
            idBotonSubir.onclick = fnClickSubir;
            

            function fnClickBajar(){
                _miNumero = _miNumero - 1;
                idNumero.value = _miNumero;
                return;
            }
            idBotonBajar.onclick = fnClickBajar;


            function fnClickReset(){
                _miNumero = 0;
                idNumero.value = _miNumero;
                return;
            }
            idBotonReset.onclick = fnClickReset;

            function fnClickAleatorio(){
                _miNumero = Math.round(Math.random()*100);
                idNumero.value = _miNumero;
                return;
            }
            idBotonRandom.onclick = fnClickAleatorio;