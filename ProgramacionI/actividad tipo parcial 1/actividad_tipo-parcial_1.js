/* CONSIGNA: 
        Sea el siguiente botón, 
        generar el código para que al hacerle click le cambie en 3 colores distintos, cada un segundo, y que repita
    */
    var _timer = null ;

    /*
    ------------ SE PUEDE CREAR ESTO TAMBIÉN PERO ES AGREGAR CÓDIGO DE MÁS ! ------------
   function fnClickAnimarBoton(){
        console.log("Animando botón");
        fnAnimarColor1();
        return;
    }
    idBotonAnimarColores.onclick = fnClickAnimarBoton;
    
    */

    function fnAnimarColor1(){
        console.log("Animando primer color: amarillo");
        idBotonAnimarColores.style.background = "yellow";
        _timer = setTimeout(fnAnimarColor2, 1000);
        return;
    }
    idBotonAnimarColores.onclick = fnAnimarColor1;



    function fnAnimarColor2(){
        console.log("Animando segundo color: violeta");
        idBotonAnimarColores.style.background = "#ad3ae7";
        _timer = setTimeout(fnAnimarColor3, 1000);
        return;
    }



    function fnAnimarColor3(){
        console.log("Animando tercer color: verde");
        idBotonAnimarColores.style.background = "#3ae77f";
        _timer = setTimeout(fnAnimarColor1, 1000);
        return;
    }
            