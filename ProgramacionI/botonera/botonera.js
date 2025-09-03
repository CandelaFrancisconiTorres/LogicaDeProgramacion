var _timer1 = null ;
      // Espacio para programar
      // El botón de reiniciar deberá consultar al usuario si quiere reiniciar o no
      // El botón de cerrar, deberá consultar al usuario si quiere cerrar la ventana o no
      // Abrir un buscador deberá abrir una ventana que apunte hacia tu buscador de preferencia
      // Preguntar en Wiki deberá preguntar al usuario por un tema y luego abrir una pestaña o ventana
      // hacia WikiPedia cambiando el tema, teniendo en cuenta, por ejemplo: https://es.wikipedia.org/wiki/Jaguar
      // cambiando Jaguar por lo preguntado
      // Mostrar hora deberá mostrar la hora actual de la computadora y los minutos HH:MM
      // Elegir al azar tiene que preguntar por un número máximo al usuario, y luego generar el número aleatorio
      
      // CLAVES
      /*
      location.reload() ; -> Actualizar la página
      window.close() ; -> Intenta cerrar la ventana
      if( confirm("Mensaje") ) fnAccion() ; -> Si el usuario confirma un mensaje, se ejecuta la función fnAcción
      _texto = prompt("Usuario responder") ; -> Preguntar al usuario y guardar la respuesta en variable _texto
      window.open( _dadaFraseURL ) ; -> Abrir una ventana según la frase dada
      "https://google.com/search?q=" + _url -> Armar una frase con una ruta de Google y una frase que buscar con Google
      var _horaActual = new Date() ;
      _hora = _horaActual.getHours() ;
      let _aleatorio = Math.random() * _numeroMaximo ;
      let _aleatorioEntero = parseInt( _aleatorio ) ;
      idAudioX.play() ;
      idAudioX.pause() ;
      */

      //idBoton1.onclick = fnAcciones1 ; function fnAcciones1 () {}

      function fnClickReiniciar() {
        let _decision = confirm("Esto va a reiniciar la página. ¿Aceptas?");
        // true - false
        if( _decision ){
          location.reload();
        }
        return;
      }
      idBotonReiniciar.onclick = fnClickReiniciar;

      /*
      ---- ESTO EXPLICÓ EL PROFE EL MARTES 05/08 ----- 
      PREGUNTAR: 
        - QUÉ DIFERENCIA TIENE ESTE CÓDIGO CON EL EXPLICADO EN EL VIDEO?
        - EN QUÉ DIFIEREN VAR Y LET

        
      function fnClickReiniciar() {
        if(confirm("Esto va a reiniciar")){
            location.reload();
        }
        return;
      }
      idBotonReiniciar.onclick = fnClickReiniciar;
      */


     function fnClickCerrarApp(){
       let _decision = confirm("Esto va a cerrar la ventana. ¿Aceptas?");
       if( _decision ){
         window.close();
        }
      }
      idBotonCerrarApp.onclick = fnClickCerrarApp;



      function fnClickBuscador (){
        window.open("https://google.com/", false, "popup=1");
      }
      idBotonBuscador.onclick = fnClickBuscador;



      function fnClickPreguntar (){
        let _temaElegido;
        _temaElegido = prompt("¿Qué querés encontrar en wikipedia?");
        if(_temaElegido == null){
          return;
        }
        window.open("https://es.wikipedia.org/wiki/" + _temaElegido);
      }
      idBotonPreguntar.onclick = fnClickPreguntar;





      function fnClickCambiarFondo (){
        let _esteBoton = this ;
        let _colorElegidoPorUsuario;
        
        _colorElegidoPorUsuario = prompt("¿Qué color te gustaría de fondo?");
        if(_colorElegidoPorUsuario == null) return;
        if(_colorElegidoPorUsuario == "") return;

        _esteBoton.style.background = _colorElegidoPorUsuario;

        idBotonReiniciar.style.background = _colorElegidoPorUsuario;
        idBotonCerrarApp.style.background = _colorElegidoPorUsuario;
        idBotonBuscador.style.background = _colorElegidoPorUsuario;
        idBotonPreguntar.style.background = _colorElegidoPorUsuario;
        idBotonMostrarHora.style.background = _colorElegidoPorUsuario;
        idBotonSonarMusica.style.background = _colorElegidoPorUsuario;
        idBotonGenerarAzar.style.background = _colorElegidoPorUsuario;
        idBotonAnimarColores.style.background = _colorElegidoPorUsuario;
      }
      idBotonCambiarFondo.onclick = fnClickCambiarFondo;



      function fnClickMostrarHora(){
        let _ahora = new Date();
        let _horario = _ahora.getHours() + ":" + _ahora.getMinutes();

        alert("Actualmente son las " + _horario);
        return ;  
      }
      idBotonMostrarHora.onclick = fnClickMostrarHora;

      


      function fnClickSonarMusica(){
        idAudio1.load();
        idAudio1.play();
        return ;
      }
      idBotonSonarMusica.onclick = fnClickSonarMusica;

      /*
      function fnClickGenerarAzar() {
        return ;
      }
      
      function fnClickAnimarColores () 
      {
        return ;
      }

      function fnAnimar2 () 
      {
        return ;
      }

      function fnAnimar3 () 
      {
        return ;
      }

      function fnClickCancelar () 
      {
        clearTimeout( _timer1 ) ;
        console.log( "Cancelado" ) ;
        alert( "Timer cancelado" ) ;
      }*/
            