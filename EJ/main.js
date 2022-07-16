var cap5 = document.getElementById('c5');
var cap8 = document.getElementById('c8');
var cap10 = document.getElementById('c10');
var elevador = document.getElementById('ele');
var posicion=6;
var tecla;
var cap=0;
var score=0;
var piso5=0;
var piso4=0;
var piso3=0;
var piso2=0;
var piso1=0;
var cupo=0;
var ganar=false;
var inter;

alert("El juego del Elevador\nDebe de subir y bajar el elevador para bajar a todas las personas que apareceran en los pisos aleatoriamente\nEl elevador de mueve con ↑ ↓ en el teclado, esté se llenara automaticamente\nNo se deben acumular mas de 5 personas por piso o perderas");

cap5.addEventListener('click', function(){
    document.getElementById('p1').style.display="none";
    document.getElementById('p2').style.display="block";
    cap = 5;
    inicio();
})
cap8.addEventListener('click', function(){
    document.getElementById('p1').style.display="none";
    document.getElementById('p2').style.display="block";
    cap = 8;
    inicio();
})
cap10.addEventListener('click', function(){
    document.getElementById('p1').style.display="none";
    document.getElementById('p2').style.display="block";
    cap = 10;
    inicio();
})


function inicio(){
    score=0;
    inter=setInterval(() => {
        aux=Math.floor(Math.random() * (6 - 0) + 0);
        switch(aux){
            case 1:
                piso1++;
                document.getElementById('p11').textContent="x "+piso1;
                if(piso1==5){
                    alert("Perdiste");
                    clearInterval(inter);
                    ganar=true;
                }
                break;
            case 2:
                piso2++;
                document.getElementById('p22').textContent="x "+piso2;
                if(piso2==5){
                    alert("Has perdido");
                    clearInterval(inter);
                    jugarOtra.style.display="block";
                    ganar=true;
                }
                break;
            case 3:
                piso3++;
                document.getElementById('p3').textContent="x "+piso3;
                if(piso3==5){
                    alert("Has perdido");
                    clearInterval(inter);
                    jugarOtra.style.display="block";
                    ganar=true;
                }
                break;
            case 4:
                piso4++;
                document.getElementById('p4').textContent="x "+piso4;
                if(piso4==5){
                    alert("Has perdido");
                    clearInterval(inter);
                    jugarOtra.style.display="block";
                    ganar=true;
                }
                break;
            case 5:
                piso5++;
                document.getElementById('p5').textContent="x "+piso5;
                if(piso5==5){
                    alert("Has perdido");
                    clearInterval(inter);
                    jugarOtra.style.display="block";
                    ganar=true;
                }
                break;
        }
    }, 400);
}

document.onkeydown = function(e){
        tecla = e.keyCode;
        if(ganar==false){
            if (tecla == 38) {
                if(posicion<7){
                    posicion++;
                    mE(posicion);
                }
            }
            if ( tecla == 40) {
                if(posicion>0){
                    posicion--;
                    mE(posicion);
                }
            }
        }
    else{
        return false;
    }
}

function mE(num){
    switch(num){
        case 6:
            elevador.style.top="0px";
            while(cupo<cap && piso5>0){
                    piso5--;
                    cupo++;
                    document.getElementById('p5').textContent="x "+piso5;
                    document.getElementById('capa').textContent="Ocupado: "+cupo;
                }
                if(cupo==cap){
                    document.getElementById('ele').src="imagenes/puerta cerrada.png"
                }
            break;
        case 5:
            elevador.style.top="90px";
            while(cupo<cap && piso4>0){
                piso4--;
                cupo++;
                document.getElementById('p4').textContent="x "+piso4;
                document.getElementById('capa').textContent="Ocupado: "+cupo;
            }
            if(cupo==cap){
                document.getElementById('ele').src="imagenes/puerta cerrada.png"
            }
            break;
        case 4:
            elevador.style.top="180px";
            while(cupo<cap && piso3>0){
                piso3--;
                cupo++;
                document.getElementById('p3').textContent="x "+piso3;
                document.getElementById('capa').textContent="Ocupado: "+cupo;
            }
            if(cupo==cap){
                document.getElementById('ele').src="imagenes/puerta cerrada.png"
            }
            break;
        case 3:
            elevador.style.top="270px";
            while(cupo<cap && piso2>0){
                piso2--;
                cupo++;
                document.getElementById('p22').textContent="x "+piso2;
                document.getElementById('capa').textContent="Ocupado: "+cupo;
            }
            if(cupo==cap){
                document.getElementById('ele').src="imagenes/puerta cerrada.png"
            }
            break;
        case 2:
            elevador.style.top="360px";
            while(cupo<cap && piso1>0){
                piso1--;
                cupo++;
                document.getElementById('p11').textContent="x "+piso1;
                document.getElementById('capa').textContent="Ocupado: "+cupo;
            }
            if(cupo==cap){
                document.getElementById('ele').src="imagenes/puerta cerrada.png"
            }
            break;
        case 1:
            elevador.style.top="450px";
            score=score+cupo;
            cupo=0;
            document.getElementById('capa').textContent="Ocupado: "+cupo;
            document.getElementById('puntos').textContent="Puntaje: "+score;
            document.getElementById('ele').src="imagenes/puerta abierta.png"    
            break;
    }
}

