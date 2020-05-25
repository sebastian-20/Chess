var CellSelected_x;
var CellSelected_y;
var Moves;
var Options;

var secs;
var mins;
var cronometer;
var cont=0;
var contPeon1=0;
var diferencia;
var diferenciaActual;
var limiteXP=0;
var limiteXN=0;
var limiteYP=0;
var limiteYN=0;


var caballo1 = ['3','5'];
var alfil1 = ['3','1'];
var torre1 = ['3','3'];
var reina = ['5','3'];
var rey = ['4','0'];
var peon1 = ['1','3'];
var ficha = 0;
var posX = 0;
var posY = 0;
var celdaCorrecta;
var CheckTrue;

var board = new Array(8);
var CheckTrue;
var array=[[],[],[],[],[],[],[],[],[]];

window.onload=autoplay;
	 
function ResetTime(){
    clearInterval(cronometer);
}

function IniciaTime(){
    secs =59;
    mins =9;
    s = document.getElementById("seconds");
    m = document.getElementById("minutes");

    cronometer = setInterval(
        function(){
            if(secs==-1){
                secs=59;
                mins--;
                if (mins<10) m.innerHTML ="0"+mins;
                else m.innerHTML = mins;

                if(mins==60) mins=0;
            }
            if (secs<10) s.innerHTML ="0"+secs;
            else s.innerHTML = secs;

            secs--;
        }
        ,1000);
}



function PaintCell(x, y, ficha){
    board[x][y]=1
    if(ficha==1){
        cell = document.getElementById("c"+x+y).innerHTML = 
		"<img id='" + x + y + "' src='images/horse.png'></img>"
    }
    if(ficha==2){
        cell = document.getElementById("c"+x+y).innerHTML = 
		"<img id='" + x + y + "' src='images/alfil.png'></img>"
    }
    if(ficha==3){
        cell = document.getElementById("c"+x+y).innerHTML = 
		"<img id='" + x + y + "' src='images/torre.png'></img>"
    }
    if(ficha==4){
        cell = document.getElementById("c"+x+y).innerHTML = 
		"<img id='" + x + y + "' src='images/reina.png'></img>"
    }
    if(ficha==5){
        cell = document.getElementById("c"+x+y).innerHTML = 
		"<img id='" + x + y + "' src='images/rey.png'></img>"
    }
    if(ficha==6){
        cell = document.getElementById("c"+x+y).innerHTML = 
		"<img id='" + x + y + "' src='images/peon.png'></img>"
    }
}

function autoplay(){
    for (i=0; i<9; i++) {
        board[i]= new Array(8);  
    }

    ClearBoard();
    ResetTime();
    CargarPosiciones();
    ShowMovements();

}

function CargarPosiciones(){
    for (i=0;i<6;i++){
        if(i==0){
            x=caballo1[0];
            y=caballo1[1];
            PaintCell(x,y,1);
        }
        if(i==1){
            x=alfil1[0];
            y=alfil1[1];
            PaintCell(x,y,2); 
        }
        if(i==2){
            x=torre1[0];
            y=torre1[1];
            PaintCell(x,y,3); 
        }
        if(i==3){
            x=reina[0];
            y=reina[1];
            PaintCell(x,y,4); 
        }
        if(i==4){
            x=rey[0];
            y=rey[1];
            PaintCell(x,y,5); 
        }
        if(i==5){
            x=peon1[0];
            y=peon1[1];
            PaintCell(x,y,6); 
        }
    }
}
function ClearBoard(){
	for (i=0; i<8; i++){
		for (j=0; j<8; j++){
			board[i][j];

			cell = document.getElementById("c"+i+j);
			cell.style.background = "";  
			cell = document.getElementById("c"+i+j).innerHTML = "";
		}
	}

}

function PaintBeforeCell(CellSelected_x,CellSelected_y){
    document.getElementById("c"+CellSelected_x+CellSelected_y).innerHTML = 
    "<img id='" + CellSelected_x + CellSelected_y + "</img>"
}

function ShowMovements(x,y){
    document.getElementById("c"+x+y).classList.add('MarcarMovimiento');
}

function DesmarcarCasillas(x,y){
    document.getElementById("c"+x+y).classList.remove('MarcarMovimiento');
}

function determinarPosicion(ficha){

    if(ficha==1){
        posX = caballo1[0];
        posY = caballo1[1];
    }
    if(ficha==2){
        posX = alfil1[0];
        posY = alfil1[1];
    }
    if(ficha==3){
        posX = torre1[0];
        posY = torre1[1]; 
    }
    if(ficha==4){
        posX = reina[0];
        posY = reina[1]; 
    }
    if(ficha==5){
        posX = rey[0];
        posY = rey[1]; 
    }
    if(ficha==6){
        posX = peon1[0];
        posY = peon1[1]; 
    }
}

function CeldaPermitida(x, y){
    CheckTrue = false;
    if(ficha==1){
        dif_x = x - CellSelected_x;
        dif_y = y - CellSelected_y;
        if (dif_x == 1 && dif_y == 2)   CheckTrue = true; 
        if (dif_x == 1 && dif_y == -2)  CheckTrue = true; 
        if (dif_x == 2 && dif_y == 1)   CheckTrue = true; 
        if (dif_x == 2 && dif_y == -1)  CheckTrue = true; 
        if (dif_x == -1 && dif_y == 2)  CheckTrue = true; 
        if (dif_x == -1 && dif_y == -2) CheckTrue = true; 
        if (dif_x == -2 && dif_y == 1)  CheckTrue = true; 
        if (dif_x == -2 && dif_y == -1) CheckTrue = true; 
    }
    if(ficha==2){
        diferencia_X = x - CellSelected_x;
        diferencia_Y = y - CellSelected_y;
        if (diferencia_X >= 1 && diferencia_Y >= 1 && diferencia_X==diferencia_Y)   CheckTrue = true, numeroMovimiento=1;
        if (diferencia_X <= -1 && diferencia_Y <= -1 && diferencia_X==diferencia_Y)   CheckTrue = true, numeroMovimiento=2;
        if (diferencia_X <= -1 && diferencia_Y >= 1 && (diferencia_X+diferencia_Y)+diferencia_Y==diferencia_Y)  CheckTrue = true, numeroMovimiento=3;
        if (diferencia_X >= 1 && diferencia_Y <= -1 && (diferencia_X+diferencia_Y)+diferencia_Y==diferencia_Y)   CheckTrue = true, numeroMovimiento=4; 
    }
    if(ficha==3){
        diferencia_X = x - CellSelected_x;
        diferencia_Y = y - CellSelected_y;
        if (diferencia_X==0 && diferencia_Y>0) CheckTrue = true, numeroMovimiento=1, diferencia=diferencia_Y;
        if (diferencia_X==0 && diferencia_Y<0) CheckTrue = true, numeroMovimiento=2, diferencia=diferencia_Y;
        if (diferencia_Y==0 && diferencia_X>0) CheckTrue = true, numeroMovimiento=3, diferencia=diferencia_X;
        if (diferencia_Y==0 && diferencia_X<0) CheckTrue = true, numeroMovimiento=4, diferencia=diferencia_X;
    }
    if(ficha==4){
        diferencia_X = x - CellSelected_x;
        diferencia_Y = y - CellSelected_y;
        if (diferencia_X==0 && diferencia_Y!=0) CheckTrue = true, numeroMovimiento=1;
        if (diferencia_Y==0 && diferencia_X!=0) CheckTrue = true, numeroMovimiento=2;
        if (diferencia_X >= 1 && diferencia_Y >= 1 && diferencia_X==diferencia_Y)   CheckTrue = true, numeroMovimiento=3;
        if (diferencia_X <= -1 && diferencia_Y <= -1 && diferencia_X==diferencia_Y)   CheckTrue = true, numeroMovimiento=4;
        if (diferencia_X <= -1 && diferencia_Y >= 1 && (diferencia_X+diferencia_Y)+diferencia_Y==diferencia_Y)  CheckTrue = true, numeroMovimiento=5;
        if (diferencia_X >= 1 && diferencia_Y <= -1 && (diferencia_X+diferencia_Y)+diferencia_Y==diferencia_Y)   CheckTrue = true, numernumeroMovimiento=6;
    }
    if(ficha==5){
        diferencia_X = x - CellSelected_x;
        diferencia_Y = y - CellSelected_y;
        if (diferencia_X==0 && diferencia_Y==1) CheckTrue = true, numeroMovimiento=1;
        if (diferencia_X==0 && diferencia_Y==-1) CheckTrue = true, numeroMovimiento=1;
        if (diferencia_Y==0 && diferencia_X==1) CheckTrue = true, numeroMovimiento=2;
        if (diferencia_Y==0 && diferencia_X==-1) CheckTrue = true, numeroMovimiento=2;
        if (diferencia_X == 1 && diferencia_Y == 1 && diferencia_X==diferencia_Y)   CheckTrue = true, numeroMovimiento=3;
        if (diferencia_X == -1 && diferencia_Y == -1 && diferencia_X==diferencia_Y)   CheckTrue = true, numeroMovimiento=4;
        if (diferencia_X == -1 && diferencia_Y == 1 && (diferencia_X+diferencia_Y)+diferencia_Y==diferencia_Y)  CheckTrue = true, numeroMovimiento=5;
        if (diferencia_X == 1 && diferencia_Y == -1 && (diferencia_X+diferencia_Y)+diferencia_Y==diferencia_Y)   CheckTrue = true;
    }
    if(ficha==6){
        if(contPeon1==0){
            diferencia_X = x - CellSelected_x;
            diferencia_Y = y - CellSelected_y;
            if (diferencia_X==0 && diferencia_Y==2) CheckTrue = true, numeroMovimiento=1;
            if (diferencia_X==0 && diferencia_Y==1) CheckTrue = true, numeroMovimiento=1;
        }
        else{
            diferencia_X = x - CellSelected_x;
            diferencia_Y = y - CellSelected_y;
            if (diferencia_X==0 && diferencia_Y==1) CheckTrue = true, numeroMovimiento=1;
        }
        
    }
}

function validarFichas(){
    for(z=1;z<7;z++){
        determinarPosicion(z);
        diferenciaActual=diferencia;
        CeldaPermitida(ficha, posX, posY , CellSelected_x, CellSelected_y);
        if(CheckTrue){
            if(ficha==3){
                if(diferenciaActual==0){
                        if(numeroMovimiento=1){
                            limiteYP=diferencia; 
                        }
                        if(numeroMovimiento=2){
                            limiteYN=diferencia; 
                        }
                        if(numeroMovimiento=3){
                            limiteXP=diferencia;
                        }
                        if(numeroMovimiento=4){
                            limiteXN=diferencia;
                        }
                }
                else{
                        if(numeroMovimiento==1){
                            if(diferencia<diferenciaActual){
                                limiteYP=diferencia;
                            }
                        }
                        if(numeroMovimiento==2){
                            if(diferencia>diferenciaActual){
                                limiteYN=diferencia;
                            }
                        }
                        if(numeroMovimiento==3){
                            if(diferencia<diferenciaActual){
                                limiteXP=diferencia;
                            }
                        }
                        if(numeroMovimiento==4){
                            if(diferencia>diferenciaActual){
                                limiteXY=diferencia;
                            }
                        }
                } 
            }
                  
        }
    }
}

function ValidarMovimiento(x, y){
    CheckTrue = false;
    celdaCorrecta = false;
    diferencia_X = x - CellSelected_x;
    diferencia_Y = y - CellSelected_y;
    if(ficha==1){
        CeldaPermitida(ficha, x, y, CellSelected_x, CellSelected_y);
        if (CheckTrue){
            celdaCorrecta = true;
        }
    }
    if(ficha==2){
        CeldaPermitida(ficha, x, y , CellSelected_x, CellSelected_y);
       if(CheckTrue){
            CeldaPermitida(ficha, posX, posY, CellSelected_x, CellSelected_y);
                if (CheckTrue){
                    if (numeroMovimientoActual==numeroMovimiento){
                        if (dif_x >= 1 && dif_y >= 1 && dif_x==dif_y && dif_x<diferencia_X)   celdaCorrecta = true;
                        if (dif_x <= -1 && dif_y <= -1 && dif_x==dif_y && dif_x>diferencia_X)   celdaCorrecta = true;
                        if (dif_x <= -1 && dif_y >= 1 && (dif_x+dif_y)+dif_y==dif_y && dif_x>diferencia_X && dif_y<diferencia_Y)  celdaCorrecta = true;
                        if (dif_x >= 1 && dif_y <= -1 && (dif_x+dif_y)+dif_y==dif_y && dif_x<diferencia_X && dif_y>diferencia_Y)   celdaCorrecta = true; 
                    }
                    else {
                        celdaCorrecta = true;  
                    }
                }
       }
      
    }
    if(ficha==3){
        if(limiteX==0 && limiteY==0){
            if (diferencia_X==0 && diferencia_Y>0) celdaCorrecta = true;
            if (diferencia_X==0 && diferencia_Y<0) celdaCorrecta = true;
            if (diferencia_Y==0 && diferencia_X>0) celdaCorrecta = true;
            if (diferencia_Y==0 && diferencia_X<0) celdaCorrecta = true;
        }
        else{
            if (diferencia_X==0 && diferencia_Y>0 && diferencia_Y<limiteY) celdaCorrecta = true;
            if (diferencia_X==0 && diferencia_Y<0 && diferencia_Y>limiteY) celdaCorrecta = true;
            if (diferencia_Y==0 && diferencia_X>0 && diferencia_X<limiteX) celdaCorrecta = true;
            if (diferencia_Y==0 && diferencia_X<0 && diferencia_X>limiteX) celdaCorrecta = true;
        }
    }
}

function FichaSeleccionada(x, y){
    for (i=0;i<6;i++){
        if(i==0){
            xp=caballo1[0];
            yp=caballo1[1];
            if(x==xp && y==yp){
                ficha=1;//Caballo
                CellSelected_x=x;
                CellSelected_y=y;
            }
                cell = document.getElementById("CuadroBase").innerHTML = 
                "<img id='ImgFichaBase' src='images/caballo..png'></img><div id=Texto> <p id=TituloReglaCaballo>Caballo:</p><p id=DesReglaCaballo>El caballo es la pieza más especial en el ajedrez, ya que tiene una flexibilidad que le hace una pieza poderosa. El caballo es la única pieza del tablero que puede saltar sobre otras piezas. El caballo se mueve dos casillas en dirección horizontal o vertical y después una casilla más en ángulo recto. El movimiento del caballo tiene la forma de una “L ”. El caballo siempre se cae sobre una casilla del color contrario a la de su casilla inicial. El caballo puede saltar sobre piezas de cualquier color mientras se mueve hasta su casilla de destino, pero no captura a ninguna de las piezas sobre las que salte.</p></div>"
        }
        if(i==1){
            for (i=0; i<2; i++){
                if(i==0){
                   xp=alfil1[i];
                }
                else if(i==1){
                yp=alfil1[i];
                }
            }
            if(x==xp && y==yp){
                ficha=2;//Alfil
                CellSelected_x=x;
                CellSelected_y=y;
                cell = document.getElementById("CuadroBase").innerHTML = 
                "<img id='ImgFichaBase' src='images/alfil..png'></img><div id=Texto> <p id=TituloReglaAlfil>Alfil:</p><p id=DesReglaAlfil>El alfil se mueve sobre el tablero en una línea recta diagonal. Se puede mover tantas casillas como se quiera, hasta que se encuentre con el final del tablero o con otra pieza. El alfil no puede saltar sobre otras piezas. Captura del mismo modo que se desplaza, colocándose en la casilla de la pieza oponente. Debido a la manera en la que se mueve el alfil, la pieza siempre permanece en las casillas del mismo color que su casilla original.</p></div>"
            }
        }
        if(i==2){
            xp=torre1[0];
            yp=torre1[1];
            if(x==xp && y==yp){
                ficha=3;//Torre
                CellSelected_x=x;
                CellSelected_y=y;
                cell = document.getElementById("CuadroBase").innerHTML = 
                "<img id='ImgFichaBase' src='images/torre..png'></img><div id=Texto> <p id=TituloReglaTorre>Torre:</p><p id=DesReglaTorre>La torre se mueve en una línea recta horizontal o vertical a lo largo de cualquier número de casillas desocupadas, hasta que alcanza el final del tablero o es bloqueado por otra pieza. No puede saltar sobre otras piezas. La torre captura de la misma manera en la que se mueve, ocupando la casilla en la que está la pieza oponente. La torre puede colocarse en cualquier casilla del tablero, por tanto es una de las piezas más poderosas.</p></div>"
            }
        }
        if(i==3){
            xp=reina[0];
            yp=reina[1];
            if(x==xp && y==yp){
                ficha=4;//Reina
                CellSelected_x=x;
                CellSelected_y=y;
                cell = document.getElementById("CuadroBase").innerHTML = 
                "<img id='ImgFichaBase' src='images/reina..png'></img><div id=Texto> <p id=TituloReglaReina> Reina:</p><p id=DesReglaReina>La reina se considera como la pieza más poderosa del tablero. Se puede mover cualquier número de casillas en línea recta, tanto de manera horizontal como vertical o diagonal. La reina se mueve como la torre y el alfil juntos. Excepto en una captura, la reina se debe mover a una casilla desocupada y no puede saltar sobre otras piezas. La reina captura de la misma manera en la que se desplaza, colocándose en la casilla de la pieza oponente.</p></div>"
            }
        }
        if(i==4){
            xp=rey[0];
            yp=rey[1];
            if(x==xp && y==yp){
                ficha=5;//Rey
                CellSelected_x=x;
                CellSelected_y=y;
                cell = document.getElementById("CuadroBase").innerHTML = 
                "<img id='ImgFichaBase' src='images/rey..png'></img><div id=Texto> <p id=TituloReglaRey>Rey:</p><p id=DesReglaRey>El rey es la pieza más importante del ajedrez. Si el rey está sitiado, de manera que su captura es inevitable, la partida se termina y ese jugador pierde. El rey puede moverse a cualquier casilla adyacente, es decir, se puede mover una casilla en cualquier dirección: horizontal, vertical o diagonal. No se puede mover a una casilla ocupada por otra pieza del mismo color. El rey captura de la misma manera en que se mueve. Hay otra limitación adicional al movimiento del rey: no puede moverse a ninguna casilla que le expusiera al ataque de una pieza oponente (lo que se llama “jaque ”).</p></div>"
            }
        }
        if(i==5){
            xp=peon1[0];
            yp=peon1[1];
            if(x==xp && y==yp){
                ficha=6;//Peon
                CellSelected_x=x;
                CellSelected_y=y;
                cell = document.getElementById("CuadroBase").innerHTML = 
                "<img id='ImgFichaBase' src='images/peon..png'></img><div id=Texto> <p id=TituloReglaPeon>PEÓN:</p><p id=DesReglaPeon>El peón es la pieza más numerosa y la menos poderosa del tablero de ajedrez. Los peones tienen un movimiento inusual. Normalmente, el peón solo se mueve hacia delante, una casilla cada vez. Una excepción es la primera vez que se mueve un peón, que se puede mover dos casillas hacia delante. El peón no puede saltar sobre otras piezas, cualquier pieza que esté justo delante de un peón bloquea su avance a esa casilla. El peón es la única pieza que no captura de la misma manera que se mueve, sino que lo hace en diagonal. No puede capturar moviéndose hacia delante.</p></div>"
            }
        }
    }
}

function RecorrerTablero(accion){
    if(accion==1){
        for(i=0;i<8;i++){
            for(j=0;j<8;j++){
                ValidarMovimiento(i,j);
                if(celdaCorrecta){
                    ShowMovements(i, j);
                }
            }
        }
    }
    if(accion==2){
        for(i=0;i<8;i++){
            for(j=0;j<8;j++){
                DesmarcarCasillas(i, j);
            }
        }
    }
    if(accion==3){
        limiteX=0;
        limiteY=0;
        validarFichas();
        for(i=0;i<8;i++){
            for(j=0;j<8;j++){
                CeldaPermitida(ficha, i, j, CellSelected_x, CellSelected_y);
                if(CheckTrue){
                    ShowMovements(i, j);
                }
            }
        }
        window.alert(limiteX+","+limiteY);
    }
}

function resetearVariables(){
    ficha=0;
    cont=0;
}

function CheckCell(x, y){
    FichaSeleccionada(x, y);
if(ficha>0){
    if(cont==0){
        cont=1;
        RecorrerTablero(2);
        RecorrerTablero(3);
    }
    else{
         CeldaPermitida(ficha, x, y, CellSelected_x, CellSelected_y);
         if (CheckTrue){
            if(ficha==1){
                caballo1.splice(0,2,x,y);
                PaintCell(x,y,1);
                PaintBeforeCell(CellSelected_x,CellSelected_y);
                RecorrerTablero(2);
                resetearVariables();
            }
            if(ficha==2){
                alfil1.splice(0,2,x,y);
                PaintCell(x,y,2);
                PaintBeforeCell(CellSelected_x,CellSelected_y);
                RecorrerTablero(2);
                resetearVariables();
             }
             if(ficha==3){
                torre1.splice(0,2,x,y);
                PaintCell(x,y,3);
                PaintBeforeCell(CellSelected_x,CellSelected_y);
                RecorrerTablero(2);
                resetearVariables();
             }
             if(ficha==4){
                reina.splice(0,2,x,y);
                PaintCell(x,y,4);
                PaintBeforeCell(CellSelected_x,CellSelected_y);
                RecorrerTablero(2);
                resetearVariables();
             }
             if(ficha==5){
                rey.splice(0,2,x,y);
                PaintCell(x,y,5);
                PaintBeforeCell(CellSelected_x,CellSelected_y);
                RecorrerTablero(2);
                resetearVariables();
             }
             if(ficha==6){
                contPeon1=1;
                peon1.splice(0,2,x,y);
                PaintCell(x,y,6);
                PaintBeforeCell(CellSelected_x,CellSelected_y);
                RecorrerTablero(2);
                resetearVariables();
             }
        } 
        else{
            RecorrerTablero(2);
            resetearVariables();
        }
    }
}
       
}
