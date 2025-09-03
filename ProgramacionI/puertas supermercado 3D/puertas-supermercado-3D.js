    window.onkeyup = fnTecla;
      
      function fnTecla( _eventoTeclado ) {
        console.log(_eventoTeclado); //objeto -> muestra info sobre teclado
        let _tecla = _eventoTeclado.code ; // string  
        console.log(_tecla); //muestra info sobre tecla
        if(_tecla == "ArrowUp"){
            fnAbrir();
        }
        if(_tecla == "ArrowDown"){
            fnCerrar();
        }
        return ;
      }
      
      let _timer = null; // para usar con clearTimeout()
      function fnAbrir(){
        let _posZ = buscar("puertaizq").position.z; //numero
        let _resta = _posZ - 1/10; //numero
        buscar("puertaizq").position.z = _resta; //accion

        let _posZ2 = buscar("puertader").position.z; //numero
        let _suma = _posZ2 + 1/10; //numero
        buscar("puertader").position.z = _suma; //accion

        _timer = setTimeout(fnAbrir, 100);
        
        if(_resta < -2.25){
            clearTimeout(_timer);
        }

        return;
      }

      
      function fnCerrar(){
        let _posZ = buscar("puertaizq").position.z; //numero
        let _suma = _posZ + 1/10; //numero
        buscar("puertaizq").position.z = _suma; //accion

        let _posZ2 = buscar("puertader").position.z; //numero
        let _resta = _posZ2 - 1/10; //numero
        buscar("puertader").position.z = _resta; //accion

        _timer = setTimeout(fnCerrar, 100);
        
        if(_suma > -0.75){
            clearTimeout(_timer);
        }

        return;
      }
            