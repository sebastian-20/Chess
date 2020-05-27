var CellSelected_x;
var CellSelected_y;
var Moves;
var Options;

var secs;
var mins;
var cronometer;
var cont=0;
var contPeon1=0;
var contPeon2=0;
var contPeon3=0;
var contPeon4=0;
var contPeon5=0;
var contPeon6=0;
var contPeon7=0;
var contPeon8=0;
var limiteXPActual=0;
var limiteXNActual=0;
var limiteYPActual=0;
var limiteYNActual=0;
var limiteXP=0;
var limiteXN=0;
var limiteYP=0;
var limiteYN=0;
var limiteXP1=0;
var limiteXN1=0;
var limiteYP1=0;
var limiteYN1=0;
var limiteXP2=0;
var limiteXN2=0;
var limiteYP2=0;
var limiteYN2=0;
var limiteXPActual1=0;
var limiteXNActual1=0;
var limiteYPActual1=0;
var limiteYNActual1=0;
var limiteXPActual2=0;
var limiteXNActual2=0;
var limiteYPActual2=0;
var limiteYNActual2=0;


var caballo1 = ['1','0'];
var alfil1 = ['2','0'];
var torre1 = ['0','0'];
var reina = ['3','0'];
var rey = ['4','0'];
var peon1 = ['0','1'];
var torre2= ['7','0'];
var alfil2= ['5','0'];
var caballo2= ['6','0'];
var peon2 = ['1','1'];
var peon3 = ['2','1'];
var peon4 = ['3','1'];
var peon5 = ['4','1'];
var peon6 = ['5','1'];
var peon7 = ['6','1'];
var peon8 = ['7','1'];
var ficha = 0;
var tipoFicha = 0;
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



function PaintCell(x, y, tipoFicha){
    board[x][y]=1
    if(tipoFicha==1){
        cell = document.getElementById("c"+x+y).innerHTML = 
		"<img id='" + x + y + "' src='images/horse.png'></img>"
    }
    if(tipoFicha==2){
        cell = document.getElementById("c"+x+y).innerHTML = 
		"<img id='" + x + y + "' src='images/alfil.png'></img>"
    }
    if(tipoFicha==3){
        cell = document.getElementById("c"+x+y).innerHTML = 
		"<img id='" + x + y + "' src='images/torre.png'></img>"
    }
    if(tipoFicha==4){
        cell = document.getElementById("c"+x+y).innerHTML = 
		"<img id='" + x + y + "' src='images/reina.png'></img>"
    }
    if(tipoFicha==5){
        cell = document.getElementById("c"+x+y).innerHTML = 
		"<img id='" + x + y + "' src='images/rey.png'></img>"
    }
    if(tipoFicha==6){
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
    for (i=0;i<16;i++){
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
        if(i==6){
            x=torre2[0];
            y=torre2[1];
            PaintCell(x,y,3); 
        }
        if(i==7){
            x=alfil2[0];
            y=alfil2[1];
            PaintCell(x,y,2); 
        }
        if(i==8){
            x=caballo2[0];
            y=caballo2[1];
            PaintCell(x,y,1);
        }
        if(i==9){
            x=peon2[0];
            y=peon2[1];
            PaintCell(x,y,6); 
        }
        if(i==10){
            x=peon3[0];
            y=peon3[1];
            PaintCell(x,y,6); 
        }
        if(i==11){
            x=peon4[0];
            y=peon4[1];
            PaintCell(x,y,6); 
        }
        if(i==12){
            x=peon5[0];
            y=peon5[1];
            PaintCell(x,y,6); 
        }
        if(i==13){
            x=peon6[0];
            y=peon6[1];
            PaintCell(x,y,6); 
        }
        if(i==14){
            x=peon7[0];
            y=peon7[1];
            PaintCell(x,y,6); 
        }
        if(i==15){
            x=peon8[0];
            y=peon8[1];
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

function CasillaSeleccionada(x,y){
    document.getElementById("c"+x+y).classList.add('casillaSeleccionada');
}

function DesmarcarCasillas(x,y){
    document.getElementById("c"+x+y).classList.remove('MarcarMovimiento');
    document.getElementById("c"+x+y).classList.remove('casillaSeleccionada');
}

function determinarPosicion(pieza){

    if(pieza==1){
        posX = caballo1[0];
        posY = caballo1[1];
    }
    if(pieza==2){
        posX = alfil1[0];
        posY = alfil1[1];
    }
    if(pieza==3){
        posX = torre1[0];
        posY = torre1[1]; 
    }
    if(pieza==4){
        posX = reina[0];
        posY = reina[1]; 
    }
    if(pieza==5){
        posX = rey[0];
        posY = rey[1]; 
    }
    if(pieza==6){
        posX = peon1[0];
        posY = peon1[1]; 
    }
    if(pieza==7){
        posX = torre2[0];
        posY = torre2[1]; 
    }
    if(pieza==8){
        posX = alfil2[0];
        posY = alfil2[1]; 
    }
    if(pieza==9){
        posX = caballo2[0];
        posY = caballo2[1]; 
    }
    if(pieza==10){
        posX = peon2[0];
        posY = peon2[1]; 
    }
    if(pieza==11){
        posX = peon3[0];
        posY = peon3[1]; 
    }
    if(pieza==12){
        posX = peon4[0];
        posY = peon4[1]; 
    }
    if(pieza==13){
        posX = peon5[0];
        posY = peon5[1]; 
    }
    if(pieza==14){
        posX = peon6[0];
        posY = peon6[1]; 
    }
    if(pieza==15){
        posX = peon7[0];
        posY = peon7[1]; 
    }
    if(pieza==16){
        posX = peon8[0];
        posY = peon8[1]; 
    }
}

function CeldaPermitida(x, y){
    CheckTrue = false;
    if(tipoFicha==1){
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
    if(tipoFicha==2){
        diferencia_X = x - CellSelected_x;
        diferencia_Y = y - CellSelected_y;
        if (diferencia_X >= 1 && diferencia_Y >= 1 && diferencia_X==diferencia_Y) CheckTrue = true, numeroMovimiento=1, limiteXP1=diferencia_X, limiteYP1=diferencia_Y;
        if (diferencia_X <= -1 && diferencia_Y <= -1 && diferencia_X==diferencia_Y) CheckTrue = true, numeroMovimiento=2 , limiteXN1=diferencia_X, limiteYN1=diferencia_Y;
        if (diferencia_X <= -1 && diferencia_Y >= 1 && (diferencia_X+diferencia_Y)+diferencia_Y==diferencia_Y) CheckTrue = true, numeroMovimiento=3, limiteXN2=diferencia_X, limiteYP2=diferencia_Y;
        if (diferencia_X >= 1 && diferencia_Y <= -1 && (diferencia_X+diferencia_Y)+diferencia_Y==diferencia_Y) CheckTrue = true, numeroMovimiento=4, limiteXP2=diferencia_X, limiteYN2=diferencia_Y; 
    }
    if(tipoFicha==3){
        diferencia_X = x - CellSelected_x;
        diferencia_Y = y - CellSelected_y;
        if (diferencia_X==0 && diferencia_Y>0) CheckTrue = true, numeroMovimiento=1, limiteYP=diferencia_Y;
        if (diferencia_X==0 && diferencia_Y<0) CheckTrue = true, numeroMovimiento=2, limiteYN=diferencia_Y;
        if (diferencia_Y==0 && diferencia_X>0) CheckTrue = true, numeroMovimiento=3, limiteXP=diferencia_X;
        if (diferencia_Y==0 && diferencia_X<0) CheckTrue = true, numeroMovimiento=4, limiteXN=diferencia_X;
    }
    if(tipoFicha==4){
        diferencia_X = x - CellSelected_x;
        diferencia_Y = y - CellSelected_y;
        if (diferencia_X==0 && diferencia_Y>0) CheckTrue = true, numeroMovimiento=1, limiteYP=diferencia_Y;
        if (diferencia_X==0 && diferencia_Y<0) CheckTrue = true, numeroMovimiento=2, limiteYN=diferencia_Y;
        if (diferencia_Y==0 && diferencia_X>0) CheckTrue = true, numeroMovimiento=3, limiteXP=diferencia_X;
        if (diferencia_Y==0 && diferencia_X<0) CheckTrue = true, numeroMovimiento=4, limiteXN=diferencia_X;
        if (diferencia_X >= 1 && diferencia_Y >= 1 && diferencia_X==diferencia_Y) CheckTrue = true, numeroMovimiento=5, limiteXP1=diferencia_X, limiteYP1=diferencia_Y;
        if (diferencia_X <= -1 && diferencia_Y <= -1 && diferencia_X==diferencia_Y) CheckTrue = true, numeroMovimiento=6 , limiteXN1=diferencia_X, limiteYN1=diferencia_Y;
        if (diferencia_X <= -1 && diferencia_Y >= 1 && (diferencia_X+diferencia_Y)+diferencia_Y==diferencia_Y) CheckTrue = true, numeroMovimiento=7, limiteXN2=diferencia_X, limiteYP2=diferencia_Y;
        if (diferencia_X >= 1 && diferencia_Y <= -1 && (diferencia_X+diferencia_Y)+diferencia_Y==diferencia_Y) CheckTrue = true, numeroMovimiento=8, limiteXP2=diferencia_X, limiteYN2=diferencia_Y; 
    }
    if(tipoFicha==5){
        diferencia_X = x - CellSelected_x;
        diferencia_Y = y - CellSelected_y;
        if (diferencia_X==0 && diferencia_Y==1) CheckTrue = true, numeroMovimiento=1, limiteYP=diferencia_Y;
        if (diferencia_X==0 && diferencia_Y==-1) CheckTrue = true, numeroMovimiento=2, limiteYN=diferencia_Y;
        if (diferencia_Y==0 && diferencia_X==1) CheckTrue = true, numeroMovimiento=3, limiteXP=diferencia_X;
        if (diferencia_Y==0 && diferencia_X==-1) CheckTrue = true, numeroMovimiento=4, limiteXN=diferencia_X;
        if (diferencia_X == 1 && diferencia_Y == 1 && diferencia_X==diferencia_Y) CheckTrue = true, numeroMovimiento=5, limiteXP1=diferencia_X, limiteYP1=diferencia_Y;
        if (diferencia_X == -1 && diferencia_Y == -1 && diferencia_X==diferencia_Y) CheckTrue = true, numeroMovimiento=6 , limiteXN1=diferencia_X, limiteYN1=diferencia_Y;
        if (diferencia_X == -1 && diferencia_Y == 1 && (diferencia_X+diferencia_Y)+diferencia_Y==diferencia_Y) CheckTrue = true, numeroMovimiento=7, limiteXN2=diferencia_X, limiteYP2=diferencia_Y;
        if (diferencia_X == 1 && diferencia_Y == -1 && (diferencia_X+diferencia_Y)+diferencia_Y==diferencia_Y) CheckTrue = true, numeroMovimiento=8, limiteXP2=diferencia_X, limiteYN2=diferencia_Y;
    }
    if(tipoFicha==6){
        if(ficha==6){
            if(contPeon1==0){
                diferencia_X = x - CellSelected_x;
                diferencia_Y = y - CellSelected_y;
                if (diferencia_X==0 && diferencia_Y>0 && diferencia_Y<3) CheckTrue = true, numeroMovimiento=1, limiteYP=diferencia_Y;
            }
            else{
                diferencia_X = x - CellSelected_x;
                diferencia_Y = y - CellSelected_y;
                if (diferencia_X==0 && diferencia_Y==1) CheckTrue = true, numeroMovimiento=1, limiteYP=diferencia_Y;
            }
        }
        if(ficha==10){
        if(contPeon2==0){
            diferencia_X = x - CellSelected_x;
            diferencia_Y = y - CellSelected_y;
            if (diferencia_X==0 && diferencia_Y>0 && diferencia_Y<3) CheckTrue = true, numeroMovimiento=1, limiteYP=diferencia_Y;
        }
        else{
            diferencia_X = x - CellSelected_x;
            diferencia_Y = y - CellSelected_y;
            if (diferencia_X==0 && diferencia_Y==1) CheckTrue = true, numeroMovimiento=1, limiteYP=diferencia_Y;
        }
        }
        if(ficha==11){
            if(contPeon3==0){
                diferencia_X = x - CellSelected_x;
                diferencia_Y = y - CellSelected_y;
                if (diferencia_X==0 && diferencia_Y>0 && diferencia_Y<3) CheckTrue = true, numeroMovimiento=1, limiteYP=diferencia_Y;
            }
            else{
                diferencia_X = x - CellSelected_x;
                diferencia_Y = y - CellSelected_y;
                if (diferencia_X==0 && diferencia_Y==1) CheckTrue = true, numeroMovimiento=1, limiteYP=diferencia_Y;
            }
        }
        if(ficha==12){
            if(contPeon4==0){
                diferencia_X = x - CellSelected_x;
                diferencia_Y = y - CellSelected_y;
                if (diferencia_X==0 && diferencia_Y>0 && diferencia_Y<3) CheckTrue = true, numeroMovimiento=1, limiteYP=diferencia_Y;
            }
            else{
                diferencia_X = x - CellSelected_x;
                diferencia_Y = y - CellSelected_y;
                if (diferencia_X==0 && diferencia_Y==1) CheckTrue = true, numeroMovimiento=1, limiteYP=diferencia_Y;
            }
        }
        if(ficha==13){
            if(contPeon5==0){
                diferencia_X = x - CellSelected_x;
                diferencia_Y = y - CellSelected_y;
                if (diferencia_X==0 && diferencia_Y>0 && diferencia_Y<3) CheckTrue = true, numeroMovimiento=1, limiteYP=diferencia_Y;
            }
            else{
                diferencia_X = x - CellSelected_x;
                diferencia_Y = y - CellSelected_y;
                if (diferencia_X==0 && diferencia_Y==1) CheckTrue = true, numeroMovimiento=1, limiteYP=diferencia_Y;
            }
        }
        if(ficha==14){
            if(contPeon6==0){
                diferencia_X = x - CellSelected_x;
                diferencia_Y = y - CellSelected_y;
                if (diferencia_X==0 && diferencia_Y>0 && diferencia_Y<3) CheckTrue = true, numeroMovimiento=1, limiteYP=diferencia_Y;
            }
            else{
                diferencia_X = x - CellSelected_x;
                diferencia_Y = y - CellSelected_y;
                if (diferencia_X==0 && diferencia_Y==1) CheckTrue = true, numeroMovimiento=1, limiteYP=diferencia_Y;
            }
        }
        if(ficha==15){
            if(contPeon7==0){
                diferencia_X = x - CellSelected_x;
                diferencia_Y = y - CellSelected_y;
                if (diferencia_X==0 && diferencia_Y>0 && diferencia_Y<3) CheckTrue = true, numeroMovimiento=1, limiteYP=diferencia_Y;
            }
            else{
                diferencia_X = x - CellSelected_x;
                diferencia_Y = y - CellSelected_y;
                if (diferencia_X==0 && diferencia_Y==1) CheckTrue = true, numeroMovimiento=1, limiteYP=diferencia_Y;
            }
        }
        if(ficha==16){
            if(contPeon8==0){
                diferencia_X = x - CellSelected_x;
                diferencia_Y = y - CellSelected_y;
                if (diferencia_X==0 && diferencia_Y>0 && diferencia_Y<3) CheckTrue = true, numeroMovimiento=1, limiteYP=diferencia_Y;
            }
            else{
                diferencia_X = x - CellSelected_x;
                diferencia_Y = y - CellSelected_y;
                if (diferencia_X==0 && diferencia_Y==1) CheckTrue = true, numeroMovimiento=1, limiteYP=diferencia_Y;
            }
        }
    }
}

function validarFichas(){
    for(z=1;z<17;z++){
        determinarPosicion(z);
        CeldaPermitida(posX, posY);
        if(CheckTrue){
            if(tipoFicha==2){
                if(numeroMovimiento==1){
                    if(limiteYPActual1==0 && limiteXPActual1==0){
                        limiteYPActual1=limiteYP1;
                        limiteXPActual1=limiteXP1;
                    }
                    else{
                        if(limiteYP1<limiteYPActual1 && limiteXP1<limiteXPActual1){
                            limiteYPActual1=limiteYP1;
                            limiteXPActual1=limiteXP1;
                        }
                    }
                }
                if(numeroMovimiento==2){
                    if(limiteXNActual1==0 && limiteYNActual1==0){
                        limiteYNActual1=limiteYN1;
                        limiteXNActual1=limiteXN1;
                    }
                    else{
                        if(limiteYN1>limiteYNActual1 && limiteXN1>limiteXNActual1){
                            limiteYNActual1=limiteYN1;
                            limiteXNActual1=limiteXN1;
                        }
                    }
                }
                if(numeroMovimiento==3){
                    if(limiteXNActual2==0 && limiteYPActual2==0){
                        limiteYPActual2=limiteYP2;
                        limiteXNActual2=limiteXN2;
                    }
                    else{
                        if(limiteYP2<limiteYPActual2 && limiteXN2>limiteXNActual2){
                            limiteYPActual2=limiteYP2;
                            limiteXNActual2=limiteXN2;
                        }
                    }
                }
                if(numeroMovimiento==4){
                    if(limiteXPActual2==0 && limiteYNActual2==0){
                        limiteYNActual2=limiteYN2;
                        limiteXPActual2=limiteXP2;
                    }
                    else{
                        if(limiteYN2>limiteYNActual2 && limiteXP2<limiteXPActual2){
                            limiteYNActual2=limiteYN2;
                            limiteXPActual2=limiteXP2;
                        }
                    }
                }
            }
            if(tipoFicha==3){
                if(numeroMovimiento==1){
                    if(limiteYPActual==0){
                        limiteYPActual=limiteYP; 
                    }
                    else{
                        if(limiteYP<limiteYPActual){
                            limiteYPActual=limiteYP; 
                        }
                    }
                }
                if(numeroMovimiento==2){
                    if(limiteYNActual==0){
                        limiteYNActual=limiteYN; 
                    }
                    else{
                        if(limiteYN>limiteYNActual){
                            limiteYNActual=limiteYN; 
                        }
                    }
                }
                if(numeroMovimiento==3){
                    if(limiteXPActual==0){
                        limiteXPActual=limiteXP; 
                    }
                    else{
                        if(limiteXP<limiteXPActual){
                            limiteXPActual=limiteXP;
                        }
                    }
                }
                if(numeroMovimiento==4){
                    if(limiteXNActual==0){
                        limiteXNActual=limiteXN; 
                    }
                    else{
                        if(limiteXN>limiteXNActual){
                            limiteXNActual=limiteXN;
                        }
                    }
                }
            }
            if(tipoFicha==4){
                if(numeroMovimiento==1){
                    if(limiteYPActual==0){
                        limiteYPActual=limiteYP; 
                    }
                    else{
                        if(limiteYP<limiteYPActual){
                            limiteYPActual=limiteYP; 
                        }
                    }
                }
                if(numeroMovimiento==2){
                    if(limiteYNActual==0){
                        limiteYNActual=limiteYN; 
                    }
                    else{
                        if(limiteYN>limiteYNActual){
                            limiteYNActual=limiteYN; 
                        }
                    }
                }
                if(numeroMovimiento==3){
                    if(limiteXPActual==0){
                        limiteXPActual=limiteXP; 
                    }
                    else{
                        if(limiteXP<limiteXPActual){
                            limiteXPActual=limiteXP;
                        }
                    }
                }
                if(numeroMovimiento==4){
                    if(limiteXNActual==0){
                        limiteXNActual=limiteXN; 
                    }
                    else{
                        if(limiteXN>limiteXNActual){
                            limiteXNActual=limiteXN;
                        }
                    }
                }
                if(numeroMovimiento==5){
                    if(limiteYPActual1==0 && limiteXPActual1==0){
                        limiteYPActual1=limiteYP1;
                        limiteXPActual1=limiteXP1;
                    }
                    else{
                        if(limiteYP1<limiteYPActual1 && limiteXP1<limiteXPActual1){
                            limiteYPActual1=limiteYP1;
                            limiteXPActual1=limiteXP1;
                        }
                    }
                }
                if(numeroMovimiento==6){
                    if(limiteXNActual1==0 && limiteYNActual1==0){
                        limiteYNActual1=limiteYN1;
                        limiteXNActual1=limiteXN1;
                    }
                    else{
                        if(limiteYN1>limiteYNActual1 && limiteXN1>limiteXNActual1){
                            limiteYNActual1=limiteYN1;
                            limiteXNActual1=limiteXN1;
                        }
                    }
                }
                if(numeroMovimiento==7){
                    if(limiteXNActual2==0 && limiteYPActual2==0){
                        limiteYPActual2=limiteYP2;
                        limiteXNActual2=limiteXN2;
                    }
                    else{
                        if(limiteYP2<limiteYPActual2 && limiteXN2>limiteXNActual2){
                            limiteYPActual2=limiteYP2;
                            limiteXNActual2=limiteXN2;
                        }
                    }
                }
                if(numeroMovimiento==8){
                    if(limiteXPActual2==0 && limiteYNActual2==0){
                        limiteYNActual2=limiteYN2;
                        limiteXPActual2=limiteXP2;
                    }
                    else{
                        if(limiteYN2>limiteYNActual2 && limiteXP2<limiteXPActual2){
                            limiteYNActual2=limiteYN2;
                            limiteXPActual2=limiteXP2;
                        }
                    }
                }
            }
            if(tipoFicha==5){
                if(numeroMovimiento==1){
                    if(limiteYPActual==0){
                        limiteYPActual=limiteYP; 
                    }
                    else{
                        if(limiteYP<limiteYPActual){
                            limiteYPActual=limiteYP; 
                        }
                    }
                }
                if(numeroMovimiento==2){
                    if(limiteYNActual==0){
                        limiteYNActual=limiteYN; 
                    }
                    else{
                        if(limiteYN>limiteYNActual){
                            limiteYNActual=limiteYN; 
                        }
                    }
                }
                if(numeroMovimiento==3){
                    if(limiteXPActual==0){
                        limiteXPActual=limiteXP; 
                    }
                    else{
                        if(limiteXP<limiteXPActual){
                            limiteXPActual=limiteXP;
                        }
                    }
                }
                if(numeroMovimiento==4){
                    if(limiteXNActual==0){
                        limiteXNActual=limiteXN; 
                    }
                    else{
                        if(limiteXN>limiteXNActual){
                            limiteXNActual=limiteXN;
                        }
                    }
                }
                if(numeroMovimiento==5){
                    if(limiteYPActual1==0 && limiteXPActual1==0){
                        limiteYPActual1=limiteYP1;
                        limiteXPActual1=limiteXP1;
                    }
                    else{
                        if(limiteYP1<limiteYPActual1 && limiteXP1<limiteXPActual1){
                            limiteYPActual1=limiteYP1;
                            limiteXPActual1=limiteXP1;
                        }
                    }
                }
                if(numeroMovimiento==6){
                    if(limiteXNActual1==0 && limiteYNActual1==0){
                        limiteYNActual1=limiteYN1;
                        limiteXNActual1=limiteXN1;
                    }
                    else{
                        if(limiteYN1>limiteYNActual1 && limiteXN1>limiteXNActual1){
                            limiteYNActual1=limiteYN1;
                            limiteXNActual1=limiteXN1;
                        }
                    }
                }
                if(numeroMovimiento==7){
                    if(limiteXNActual2==0 && limiteYPActual2==0){
                        limiteYPActual2=limiteYP2;
                        limiteXNActual2=limiteXN2;
                    }
                    else{
                        if(limiteYP2<limiteYPActual2 && limiteXN2>limiteXNActual2){
                            limiteYPActual2=limiteYP2;
                            limiteXNActual2=limiteXN2;
                        }
                    }
                }
                if(numeroMovimiento==8){
                    if(limiteXPActual2==0 && limiteYNActual2==0){
                        limiteYNActual2=limiteYN2;
                        limiteXPActual2=limiteXP2;
                    }
                    else{
                        if(limiteYN2>limiteYNActual2 && limiteXP2<limiteXPActual2){
                            limiteYNActual2=limiteYN2;
                            limiteXPActual2=limiteXP2;
                        }
                    }
                }
            }
            if(tipoFicha==6){
                if(limiteYPActual==0){
                    limiteYPActual=limiteYP; 
                }
                else{
                    if(limiteYP<limiteYPActual){
                        limiteYPActual=limiteYP; 
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
    posicionOcupada=0;
    if(tipoFicha==1){
        CeldaPermitida(x, y);
        if(CheckTrue){
            for(z=1;z<17;z++){
                determinarPosicion(z);
                if(x==posX && y==posY){
                    posicionOcupada=1
                }
            } 
            if(posicionOcupada==1);
            else{
                celdaCorrecta=true;
            }  
        }
    }
    if(tipoFicha==2){
        if(limiteYPActual1==0 && limiteXPActual1==0){
            if (diferencia_X >= 1 && diferencia_Y >= 1 && diferencia_X==diferencia_Y) celdaCorrecta = true;
        }
        if(limiteXNActual1==0 && limiteYNActual1==0){
            if (diferencia_X <= -1 && diferencia_Y <= -1 && diferencia_X==diferencia_Y) celdaCorrecta = true;
        }
        if(limiteXNActual2==0 && limiteYPActual2==0){
            if (diferencia_X <= -1 && diferencia_Y >= 1 && (diferencia_X+diferencia_Y)+diferencia_Y==diferencia_Y) celdaCorrecta = true; 
        }
        if(limiteXPActual2==0 && limiteYNActual2==0){
            if (diferencia_X >= 1 && diferencia_Y <= -1 && (diferencia_X+diferencia_Y)+diferencia_Y==diferencia_Y) celdaCorrecta = true; 
        }

        if (diferencia_X >= 1 && diferencia_Y >= 1 && diferencia_X==diferencia_Y && diferencia_X<limiteXPActual1 && diferencia_Y<limiteYPActual1) celdaCorrecta = true;
        if (diferencia_X <= -1 && diferencia_Y <= -1 && diferencia_X==diferencia_Y && diferencia_X>limiteXNActual1 && diferencia_Y>limiteYNActual1) celdaCorrecta = true;
        if (diferencia_X <= -1 && diferencia_Y >= 1 && (diferencia_X+diferencia_Y)+diferencia_Y==diferencia_Y && diferencia_X>limiteXNActual2 && diferencia_Y<limiteYPActual2) celdaCorrecta = true;
        if (diferencia_X >= 1 && diferencia_Y <= -1 && (diferencia_X+diferencia_Y)+diferencia_Y==diferencia_Y && diferencia_X<limiteXPActual2 && diferencia_Y>limiteYNActual2) celdaCorrecta = true;  
    }
    if(tipoFicha==3){
        if(limiteYPActual==0){
            if (diferencia_X==0 && diferencia_Y>0) celdaCorrecta = true;
        }
        if(limiteYNActual==0){
            if (diferencia_X==0 && diferencia_Y<0) celdaCorrecta = true;
        }
        if(limiteXPActual==0){
            if (diferencia_Y==0 && diferencia_X>0) celdaCorrecta = true;
        }
        if(limiteXNActual==0){
            if (diferencia_Y==0 && diferencia_X<0) celdaCorrecta = true;
        }
        if (diferencia_X==0 && diferencia_Y>0 && diferencia_Y<limiteYPActual) celdaCorrecta = true;
        if (diferencia_X==0 && diferencia_Y<0 && diferencia_Y>limiteYNActual) celdaCorrecta = true;
        if (diferencia_Y==0 && diferencia_X>0 && diferencia_X<limiteXPActual) celdaCorrecta = true;
        if (diferencia_Y==0 && diferencia_X<0 && diferencia_X>limiteXNActual) celdaCorrecta = true;
    }
    if(tipoFicha==4){
        if(limiteYPActual==0){
            if (diferencia_X==0 && diferencia_Y>0) celdaCorrecta = true;
        }
        if(limiteYNActual==0){
            if (diferencia_X==0 && diferencia_Y<0) celdaCorrecta = true;
        }
        if(limiteXPActual==0){
            if (diferencia_Y==0 && diferencia_X>0) celdaCorrecta = true;
        }
        if(limiteXNActual==0){
            if (diferencia_Y==0 && diferencia_X<0) celdaCorrecta = true;
        }
        if (diferencia_X==0 && diferencia_Y>0 && diferencia_Y<limiteYPActual) celdaCorrecta = true;
        if (diferencia_X==0 && diferencia_Y<0 && diferencia_Y>limiteYNActual) celdaCorrecta = true;
        if (diferencia_Y==0 && diferencia_X>0 && diferencia_X<limiteXPActual) celdaCorrecta = true;
        if (diferencia_Y==0 && diferencia_X<0 && diferencia_X>limiteXNActual) celdaCorrecta = true;
        if(limiteYPActual1==0 && limiteXPActual1==0){
            if (diferencia_X >= 1 && diferencia_Y >= 1 && diferencia_X==diferencia_Y) celdaCorrecta = true;
        }
        if(limiteXNActual1==0 && limiteYNActual1==0){
            if (diferencia_X <= -1 && diferencia_Y <= -1 && diferencia_X==diferencia_Y) celdaCorrecta = true;
        }
        if(limiteXNActual2==0 && limiteYPActual2==0){
            if (diferencia_X <= -1 && diferencia_Y >= 1 && (diferencia_X+diferencia_Y)+diferencia_Y==diferencia_Y) celdaCorrecta = true; 
        }
        if(limiteXPActual2==0 && limiteYNActual2==0){
            if (diferencia_X >= 1 && diferencia_Y <= -1 && (diferencia_X+diferencia_Y)+diferencia_Y==diferencia_Y) celdaCorrecta = true; 
        }
        if (diferencia_X >= 1 && diferencia_Y >= 1 && diferencia_X==diferencia_Y && diferencia_X<limiteXPActual1 && diferencia_Y<limiteYPActual1) celdaCorrecta = true;
        if (diferencia_X <= -1 && diferencia_Y <= -1 && diferencia_X==diferencia_Y && diferencia_X>limiteXNActual1 && diferencia_Y>limiteYNActual1) celdaCorrecta = true;
        if (diferencia_X <= -1 && diferencia_Y >= 1 && (diferencia_X+diferencia_Y)+diferencia_Y==diferencia_Y && diferencia_X>limiteXNActual2 && diferencia_Y<limiteYPActual2) celdaCorrecta = true;
        if (diferencia_X >= 1 && diferencia_Y <= -1 && (diferencia_X+diferencia_Y)+diferencia_Y==diferencia_Y && diferencia_X<limiteXPActual2 && diferencia_Y>limiteYNActual2) celdaCorrecta = true;  
    }
    if(tipoFicha==5){
        if(limiteYPActual==0){
            if (diferencia_X==0 && diferencia_Y==1) celdaCorrecta = true;
        }
        if(limiteYNActual==0){
            if (diferencia_X==0 && diferencia_Y==-1) celdaCorrecta = true;
        }
        if(limiteXPActual==0){
            if (diferencia_Y==0 && diferencia_X==1) celdaCorrecta = true;
        }
        if(limiteXNActual==0){
            if (diferencia_Y==0 && diferencia_X==-1) celdaCorrecta = true;
        }
        if (diferencia_X==0 && diferencia_Y==1 && diferencia_Y<limiteYPActual) celdaCorrecta = true;
        if (diferencia_X==0 && diferencia_Y==-1 && diferencia_Y>limiteYNActual) celdaCorrecta = true;
        if (diferencia_Y==0 && diferencia_X==1 && diferencia_X<limiteXPActual) celdaCorrecta = true;
        if (diferencia_Y==0 && diferencia_X==-1 && diferencia_X>limiteXNActual) celdaCorrecta = true;
        if(limiteYPActual1==0 && limiteXPActual1==0){
            if (diferencia_X == 1 && diferencia_Y == 1 && diferencia_X==diferencia_Y) celdaCorrecta = true;
        }
        if(limiteXNActual1==0 && limiteYNActual1==0){
            if (diferencia_X == -1 && diferencia_Y == -1 && diferencia_X==diferencia_Y) celdaCorrecta = true;
        }
        if(limiteXNActual2==0 && limiteYPActual2==0){
            if (diferencia_X == -1 && diferencia_Y == 1 && (diferencia_X+diferencia_Y)+diferencia_Y==diferencia_Y) celdaCorrecta = true; 
        }
        if(limiteXPActual2==0 && limiteYNActual2==0){
            if (diferencia_X == 1 && diferencia_Y == -1 && (diferencia_X+diferencia_Y)+diferencia_Y==diferencia_Y) celdaCorrecta = true; 
        }
        if (diferencia_X == 1 && diferencia_Y == 1 && diferencia_X==diferencia_Y && diferencia_X<limiteXPActual1 && diferencia_Y<limiteYPActual1) celdaCorrecta = true;
        if (diferencia_X == -1 && diferencia_Y == -1 && diferencia_X==diferencia_Y && diferencia_X>limiteXNActual1 && diferencia_Y>limiteYNActual1) celdaCorrecta = true;
        if (diferencia_X == -1 && diferencia_Y == 1 && (diferencia_X+diferencia_Y)+diferencia_Y==diferencia_Y && diferencia_X>limiteXNActual2 && diferencia_Y<limiteYPActual2) celdaCorrecta = true;
        if (diferencia_X == 1 && diferencia_Y == -1 && (diferencia_X+diferencia_Y)+diferencia_Y==diferencia_Y && diferencia_X<limiteXPActual2 && diferencia_Y>limiteYNActual2) celdaCorrecta = true;  
    }
    if(tipoFicha==6){
        if(ficha==6){
            if(limiteYPActual==0){
                if(contPeon1==0){
                    if (diferencia_X==0 && diferencia_Y>0 && diferencia_Y<3) celdaCorrecta = true;
                }
                else{
                    if (diferencia_X==0 && diferencia_Y==1) celdaCorrecta = true;
                }
            }
            if(contPeon1==0){
                if (diferencia_X==0 && diferencia_Y>0 && diferencia_Y<3 && diferencia_Y<limiteYPActual) celdaCorrecta = true;
            }
            if(contPeon1==1){
                if (diferencia_X==0 && diferencia_Y==1 && diferencia_Y<limiteYPActual) celdaCorrecta = true;
            } 
        }
        if(ficha==10){
            if(limiteYPActual==0){
                if(contPeon2==0){
                    if (diferencia_X==0 && diferencia_Y>0 && diferencia_Y<3) celdaCorrecta = true;
                }
                else{
                    if (diferencia_X==0 && diferencia_Y==1) celdaCorrecta = true;
                }
            }
            if(contPeon2==0){
                if (diferencia_X==0 && diferencia_Y>0 && diferencia_Y<3 && diferencia_Y<limiteYPActual) celdaCorrecta = true;
            }
            if(contPeon2==1){
                if (diferencia_X==0 && diferencia_Y==1 && diferencia_Y<limiteYPActual) celdaCorrecta = true;
            } 
        }
        if(ficha==11){
            if(limiteYPActual==0){
                if(contPeon3==0){
                    if (diferencia_X==0 && diferencia_Y>0 && diferencia_Y<3) celdaCorrecta = true;
                }
                else{
                    if (diferencia_X==0 && diferencia_Y==1) celdaCorrecta = true;
                }
            }
            if(contPeon3==0){
                if (diferencia_X==0 && diferencia_Y>0 && diferencia_Y<3 && diferencia_Y<limiteYPActual) celdaCorrecta = true;
            }
            if(contPeon2==1){
                if (diferencia_X==0 && diferencia_Y==1 && diferencia_Y<limiteYPActual) celdaCorrecta = true;
            } 
        }
        if(ficha==12){
            if(limiteYPActual==0){
                if(contPeon4==0){
                    if (diferencia_X==0 && diferencia_Y>0 && diferencia_Y<3) celdaCorrecta = true;
                }
                else{
                    if (diferencia_X==0 && diferencia_Y==1) celdaCorrecta = true;
                }
            }
            if(contPeon4==0){
                if (diferencia_X==0 && diferencia_Y>0 && diferencia_Y<3 && diferencia_Y<limiteYPActual) celdaCorrecta = true;
            }
            if(contPeon2==1){
                if (diferencia_X==0 && diferencia_Y==1 && diferencia_Y<limiteYPActual) celdaCorrecta = true;
            } 
        }
        if(ficha==13){
            if(limiteYPActual==0){
                if(contPeon5==0){
                    if (diferencia_X==0 && diferencia_Y>0 && diferencia_Y<3) celdaCorrecta = true;
                }
                else{
                    if (diferencia_X==0 && diferencia_Y==1) celdaCorrecta = true;
                }
            }
            if(contPeon5==0){
                if (diferencia_X==0 && diferencia_Y>0 && diferencia_Y<3 && diferencia_Y<limiteYPActual) celdaCorrecta = true;
            }
            if(contPeon2==1){
                if (diferencia_X==0 && diferencia_Y==1 && diferencia_Y<limiteYPActual) celdaCorrecta = true;
            } 
        }
        if(ficha==14){
            if(limiteYPActual==0){
                if(contPeon6==0){
                    if (diferencia_X==0 && diferencia_Y>0 && diferencia_Y<3) celdaCorrecta = true;
                }
                else{
                    if (diferencia_X==0 && diferencia_Y==1) celdaCorrecta = true;
                }
            }
            if(contPeon6==0){
                if (diferencia_X==0 && diferencia_Y>0 && diferencia_Y<3 && diferencia_Y<limiteYPActual) celdaCorrecta = true;
            }
            if(contPeon2==1){
                if (diferencia_X==0 && diferencia_Y==1 && diferencia_Y<limiteYPActual) celdaCorrecta = true;
            } 
        }
        if(ficha==15){
            if(limiteYPActual==0){
                if(contPeon7==0){
                    if (diferencia_X==0 && diferencia_Y>0 && diferencia_Y<3) celdaCorrecta = true;
                }
                else{
                    if (diferencia_X==0 && diferencia_Y==1) celdaCorrecta = true;
                }
            }
            if(contPeon7==0){
                if (diferencia_X==0 && diferencia_Y>0 && diferencia_Y<3 && diferencia_Y<limiteYPActual) celdaCorrecta = true;
            }
            if(contPeon2==1){
                if (diferencia_X==0 && diferencia_Y==1 && diferencia_Y<limiteYPActual) celdaCorrecta = true;
            } 
        }
        if(ficha==16){
            if(limiteYPActual==0){
                if(contPeon8==0){
                    if (diferencia_X==0 && diferencia_Y>0 && diferencia_Y<3) celdaCorrecta = true;
                }
                else{
                    if (diferencia_X==0 && diferencia_Y==1) celdaCorrecta = true;
                }
            }
            if(contPeon8==0){
                if (diferencia_X==0 && diferencia_Y>0 && diferencia_Y<3 && diferencia_Y<limiteYPActual) celdaCorrecta = true;
            }
            if(contPeon2==1){
                if (diferencia_X==0 && diferencia_Y==1 && diferencia_Y<limiteYPActual) celdaCorrecta = true;
            } 
        }
    }
}

function FichaSeleccionada(x, y){
    for (i=0;i<16;i++){
        if(i==0){
            xp=caballo1[0];
            yp=caballo1[1];
            if(x==xp && y==yp){
                ficha=1;//Caballo1
                CellSelected_x=x;
                CellSelected_y=y;
                tipoFicha=1;
                cell = document.getElementById("CuadroBase").innerHTML = 
                "<img id='ImgFichaBase' src='images/caballo..png'></img><div id=Texto> <p id=TituloReglaCaballo>Caballo:</p><p id=DesReglaCaballo>El caballo es la pieza más especial en el ajedrez, ya que tiene una flexibilidad que le hace una pieza poderosa. El caballo es la única pieza del tablero que puede saltar sobre otras piezas. El caballo se mueve dos casillas en dirección horizontal o vertical y después una casilla más en ángulo recto. El movimiento del caballo tiene la forma de una “L ”. El caballo siempre se cae sobre una casilla del color contrario a la de su casilla inicial. El caballo puede saltar sobre piezas de cualquier color mientras se mueve hasta su casilla de destino, pero no captura a ninguna de las piezas sobre las que salte.</p></div>"
            }     
        }
        if(i==1){
            xp=alfil1[0];
            yp=alfil1[1];
            if(x==xp && y==yp){
                ficha=2;//Alfil1
                CellSelected_x=x;
                CellSelected_y=y;
                tipoFicha=2;
                cell = document.getElementById("CuadroBase").innerHTML = 
                "<img id='ImgFichaBase' src='images/alfil..png'></img><div id=Texto> <p id=TituloReglaAlfil>Alfil:</p><p id=DesReglaAlfil>El alfil se mueve sobre el tablero en una línea recta diagonal. Se puede mover tantas casillas como se quiera, hasta que se encuentre con el final del tablero o con otra pieza. El alfil no puede saltar sobre otras piezas. Captura del mismo modo que se desplaza, colocándose en la casilla de la pieza oponente. Debido a la manera en la que se mueve el alfil, la pieza siempre permanece en las casillas del mismo color que su casilla original.</p></div>"
            }
        }
        if(i==2){
            xp=torre1[0];
            yp=torre1[1];
            if(x==xp && y==yp){
                ficha=3;//Torre1
                CellSelected_x=x;
                CellSelected_y=y;
                tipoFicha=3;
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
                tipoFicha=4;
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
                tipoFicha=5
                cell = document.getElementById("CuadroBase").innerHTML = 
                "<img id='ImgFichaBase' src='images/rey..png'></img><div id=Texto> <p id=TituloReglaRey>Rey:</p><p id=DesReglaRey>El rey es la pieza más importante del ajedrez. Si el rey está sitiado, de manera que su captura es inevitable, la partida se termina y ese jugador pierde. El rey puede moverse a cualquier casilla adyacente, es decir, se puede mover una casilla en cualquier dirección: horizontal, vertical o diagonal. No se puede mover a una casilla ocupada por otra pieza del mismo color. El rey captura de la misma manera en que se mueve. Hay otra limitación adicional al movimiento del rey: no puede moverse a ninguna casilla que le expusiera al ataque de una pieza oponente (lo que se llama “jaque ”).</p></div>"
            }
        }
        if(i==5){
            xp=peon1[0];
            yp=peon1[1];
            if(x==xp && y==yp){
                ficha=6;//Peon1
                CellSelected_x=x;
                CellSelected_y=y;
                tipoFicha=6;
                cell = document.getElementById("CuadroBase").innerHTML = 
                "<img id='ImgFichaBase' src='images/peon..png'></img><div id=Texto> <p id=TituloReglaPeon>PEÓN:</p><p id=DesReglaPeon>El peón es la pieza más numerosa y la menos poderosa del tablero de ajedrez. Los peones tienen un movimiento inusual. Normalmente, el peón solo se mueve hacia delante, una casilla cada vez. Una excepción es la primera vez que se mueve un peón, que se puede mover dos casillas hacia delante. El peón no puede saltar sobre otras piezas, cualquier pieza que esté justo delante de un peón bloquea su avance a esa casilla. El peón es la única pieza que no captura de la misma manera que se mueve, sino que lo hace en diagonal. No puede capturar moviéndose hacia delante.</p></div>"
            }
        }
        if(i==6){
            xp=torre2[0];
            yp=torre2[1];
            if(x==xp && y==yp){
                ficha=7;//Torre2
                CellSelected_x=x;
                CellSelected_y=y;
                tipoFicha=3;
                cell = document.getElementById("CuadroBase").innerHTML = 
                "<img id='ImgFichaBase' src='images/torre..png'></img><div id=Texto> <p id=TituloReglaTorre>Torre:</p><p id=DesReglaTorre>La torre se mueve en una línea recta horizontal o vertical a lo largo de cualquier número de casillas desocupadas, hasta que alcanza el final del tablero o es bloqueado por otra pieza. No puede saltar sobre otras piezas. La torre captura de la misma manera en la que se mueve, ocupando la casilla en la que está la pieza oponente. La torre puede colocarse en cualquier casilla del tablero, por tanto es una de las piezas más poderosas.</p></div>"
            }
        }
        if(i==7){
            xp=alfil2[0];
            yp=alfil2[1];
            if(x==xp && y==yp){
                ficha=8;//Alfil2
                CellSelected_x=x;
                CellSelected_y=y;
                tipoFicha=2;
                cell = document.getElementById("CuadroBase").innerHTML = 
                "<img id='ImgFichaBase' src='images/alfil..png'></img><div id=Texto> <p id=TituloReglaAlfil>Alfil:</p><p id=DesReglaAlfil>El alfil se mueve sobre el tablero en una línea recta diagonal. Se puede mover tantas casillas como se quiera, hasta que se encuentre con el final del tablero o con otra pieza. El alfil no puede saltar sobre otras piezas. Captura del mismo modo que se desplaza, colocándose en la casilla de la pieza oponente. Debido a la manera en la que se mueve el alfil, la pieza siempre permanece en las casillas del mismo color que su casilla original.</p></div>"
            }
        }
        if(i==8){
            xp=caballo2[0];
            yp=caballo2[1];
            if(x==xp && y==yp){
                ficha=9;//Caballo2
                CellSelected_x=x;
                CellSelected_y=y;
                tipoFicha=1;
                cell = document.getElementById("CuadroBase").innerHTML = 
                "<img id='ImgFichaBase' src='images/caballo..png'></img><div id=Texto> <p id=TituloReglaCaballo>Caballo:</p><p id=DesReglaCaballo>El caballo es la pieza más especial en el ajedrez, ya que tiene una flexibilidad que le hace una pieza poderosa. El caballo es la única pieza del tablero que puede saltar sobre otras piezas. El caballo se mueve dos casillas en dirección horizontal o vertical y después una casilla más en ángulo recto. El movimiento del caballo tiene la forma de una “L ”. El caballo siempre se cae sobre una casilla del color contrario a la de su casilla inicial. El caballo puede saltar sobre piezas de cualquier color mientras se mueve hasta su casilla de destino, pero no captura a ninguna de las piezas sobre las que salte.</p></div>"
            }     
        }
        if(i==9){
            xp=peon2[0];
            yp=peon2[1];
            if(x==xp && y==yp){
                ficha=10;//Peon2
                CellSelected_x=x;
                CellSelected_y=y;
                tipoFicha=6;
                cell = document.getElementById("CuadroBase").innerHTML = 
                "<img id='ImgFichaBase' src='images/peon..png'></img><div id=Texto> <p id=TituloReglaPeon>PEÓN:</p><p id=DesReglaPeon>El peón es la pieza más numerosa y la menos poderosa del tablero de ajedrez. Los peones tienen un movimiento inusual. Normalmente, el peón solo se mueve hacia delante, una casilla cada vez. Una excepción es la primera vez que se mueve un peón, que se puede mover dos casillas hacia delante. El peón no puede saltar sobre otras piezas, cualquier pieza que esté justo delante de un peón bloquea su avance a esa casilla. El peón es la única pieza que no captura de la misma manera que se mueve, sino que lo hace en diagonal. No puede capturar moviéndose hacia delante.</p></div>"
            }
        }
        if(i==10){
            xp=peon3[0];
            yp=peon3[1];
            if(x==xp && y==yp){
                ficha=11;//Peon3
                CellSelected_x=x;
                CellSelected_y=y;
                tipoFicha=6;
                cell = document.getElementById("CuadroBase").innerHTML = 
                "<img id='ImgFichaBase' src='images/peon..png'></img><div id=Texto> <p id=TituloReglaPeon>PEÓN:</p><p id=DesReglaPeon>El peón es la pieza más numerosa y la menos poderosa del tablero de ajedrez. Los peones tienen un movimiento inusual. Normalmente, el peón solo se mueve hacia delante, una casilla cada vez. Una excepción es la primera vez que se mueve un peón, que se puede mover dos casillas hacia delante. El peón no puede saltar sobre otras piezas, cualquier pieza que esté justo delante de un peón bloquea su avance a esa casilla. El peón es la única pieza que no captura de la misma manera que se mueve, sino que lo hace en diagonal. No puede capturar moviéndose hacia delante.</p></div>"
            }
        }
        if(i==11){
            xp=peon4[0];
            yp=peon4[1];
            if(x==xp && y==yp){
                ficha=12;//Peon4
                CellSelected_x=x;
                CellSelected_y=y;
                tipoFicha=6;
                cell = document.getElementById("CuadroBase").innerHTML = 
                "<img id='ImgFichaBase' src='images/peon..png'></img><div id=Texto> <p id=TituloReglaPeon>PEÓN:</p><p id=DesReglaPeon>El peón es la pieza más numerosa y la menos poderosa del tablero de ajedrez. Los peones tienen un movimiento inusual. Normalmente, el peón solo se mueve hacia delante, una casilla cada vez. Una excepción es la primera vez que se mueve un peón, que se puede mover dos casillas hacia delante. El peón no puede saltar sobre otras piezas, cualquier pieza que esté justo delante de un peón bloquea su avance a esa casilla. El peón es la única pieza que no captura de la misma manera que se mueve, sino que lo hace en diagonal. No puede capturar moviéndose hacia delante.</p></div>"
            }
        }
        if(i==12){
            xp=peon5[0];
            yp=peon5[1];
            if(x==xp && y==yp){
                ficha=13;//Peon5
                CellSelected_x=x;
                CellSelected_y=y;
                tipoFicha=6;
                cell = document.getElementById("CuadroBase").innerHTML = 
                "<img id='ImgFichaBase' src='images/peon..png'></img><div id=Texto> <p id=TituloReglaPeon>PEÓN:</p><p id=DesReglaPeon>El peón es la pieza más numerosa y la menos poderosa del tablero de ajedrez. Los peones tienen un movimiento inusual. Normalmente, el peón solo se mueve hacia delante, una casilla cada vez. Una excepción es la primera vez que se mueve un peón, que se puede mover dos casillas hacia delante. El peón no puede saltar sobre otras piezas, cualquier pieza que esté justo delante de un peón bloquea su avance a esa casilla. El peón es la única pieza que no captura de la misma manera que se mueve, sino que lo hace en diagonal. No puede capturar moviéndose hacia delante.</p></div>"
            }
        }
        if(i==13){
            xp=peon6[0];
            yp=peon6[1];
            if(x==xp && y==yp){
                ficha=14;//Peon6
                CellSelected_x=x;
                CellSelected_y=y;
                tipoFicha=6;
                cell = document.getElementById("CuadroBase").innerHTML = 
                "<img id='ImgFichaBase' src='images/peon..png'></img><div id=Texto> <p id=TituloReglaPeon>PEÓN:</p><p id=DesReglaPeon>El peón es la pieza más numerosa y la menos poderosa del tablero de ajedrez. Los peones tienen un movimiento inusual. Normalmente, el peón solo se mueve hacia delante, una casilla cada vez. Una excepción es la primera vez que se mueve un peón, que se puede mover dos casillas hacia delante. El peón no puede saltar sobre otras piezas, cualquier pieza que esté justo delante de un peón bloquea su avance a esa casilla. El peón es la única pieza que no captura de la misma manera que se mueve, sino que lo hace en diagonal. No puede capturar moviéndose hacia delante.</p></div>"
            }
        }
        if(i==14){
            xp=peon7[0];
            yp=peon7[1];
            if(x==xp && y==yp){
                ficha=15;//Peon7
                CellSelected_x=x;
                CellSelected_y=y;
                tipoFicha=6;
                cell = document.getElementById("CuadroBase").innerHTML = 
                "<img id='ImgFichaBase' src='images/peon..png'></img><div id=Texto> <p id=TituloReglaPeon>PEÓN:</p><p id=DesReglaPeon>El peón es la pieza más numerosa y la menos poderosa del tablero de ajedrez. Los peones tienen un movimiento inusual. Normalmente, el peón solo se mueve hacia delante, una casilla cada vez. Una excepción es la primera vez que se mueve un peón, que se puede mover dos casillas hacia delante. El peón no puede saltar sobre otras piezas, cualquier pieza que esté justo delante de un peón bloquea su avance a esa casilla. El peón es la única pieza que no captura de la misma manera que se mueve, sino que lo hace en diagonal. No puede capturar moviéndose hacia delante.</p></div>"
            }
        }
        if(i==15){
            xp=peon8[0];
            yp=peon8[1];
            if(x==xp && y==yp){
                ficha=16;//Peon8
                CellSelected_x=x;
                CellSelected_y=y;
                tipoFicha=6;
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
                ValidarMovimiento(i,j);
                if(celdaCorrecta){
                    ShowMovements(i, j);
                }
            }
        }
        //window.alert(limiteXPActual+","+limiteXNActual+","+limiteYPActual+","+limiteYNActual);
        //window.alert("UR"+limiteXPActual1+","+limiteYPActual1+"UL"+limiteXNActual2+","+limiteYPActual2+"DL"+limiteXNActual1+","+limiteYNActual1+"DR"+limiteXPActual2+","+limiteYNActual2);
    }
}

function resetearVariables(){
    ficha=0;
    cont=0;
    tipoFicha=0;
}

function resetearVariables2(){
    limiteXPActual=0;
    limiteXNActual=0;
    limiteYPActual=0;
    limiteYNActual=0;
    limiteXP=0;
    limiteXN=0;
    limiteYP=0;
    limiteYN=0;
    limiteXP1=0;
    limiteXN1=0;
    limiteYP1=0;
    limiteYN1=0;
    limiteXP2=0;
    limiteXN2=0;
    limiteYP2=0;
    limiteYN2=0;
    limiteXPActual1=0;
    limiteXNActual1=0;
    limiteYPActual1=0;
    limiteYNActual1=0;
    limiteXPActual2=0;
    limiteXNActual2=0;
    limiteYPActual2=0;
    limiteYNActual2=0;
}

function CheckCell(x, y){
    FichaSeleccionada(x, y);
if(ficha>0){
    if(cont==0){
        cont=1;
        resetearVariables2();
        RecorrerTablero(2);
        CasillaSeleccionada(x,y);
        RecorrerTablero(3);
    }
    else{
        ValidarMovimiento(x,y);
         if (celdaCorrecta){
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
             if(ficha==7){
                torre2.splice(0,2,x,y);
                PaintCell(x,y,3);
                PaintBeforeCell(CellSelected_x,CellSelected_y);
                RecorrerTablero(2);
                resetearVariables();
             }
             if(ficha==8){
                alfil2.splice(0,2,x,y);
                PaintCell(x,y,2);
                PaintBeforeCell(CellSelected_x,CellSelected_y);
                RecorrerTablero(2);
                resetearVariables();
             }
             if(ficha==9){
                caballo2.splice(0,2,x,y);
                PaintCell(x,y,1);
                PaintBeforeCell(CellSelected_x,CellSelected_y);
                RecorrerTablero(2);
                resetearVariables();
            }
            if(ficha==10){
                contPeon2=1;
                peon2.splice(0,2,x,y);
                PaintCell(x,y,6);
                PaintBeforeCell(CellSelected_x,CellSelected_y);
                RecorrerTablero(2);
                resetearVariables();
             }
             if(ficha==11){
                contPeon3=1;
                peon3.splice(0,2,x,y);
                PaintCell(x,y,6);
                PaintBeforeCell(CellSelected_x,CellSelected_y);
                RecorrerTablero(2);
                resetearVariables();
             }
             if(ficha==12){
                contPeon4=1;
                peon4.splice(0,2,x,y);
                PaintCell(x,y,6);
                PaintBeforeCell(CellSelected_x,CellSelected_y);
                RecorrerTablero(2);
                resetearVariables();
             }
             if(ficha==13){
                contPeon5=1;
                peon5.splice(0,2,x,y);
                PaintCell(x,y,6);
                PaintBeforeCell(CellSelected_x,CellSelected_y);
                RecorrerTablero(2);
                resetearVariables();
             }
             if(ficha==14){
                contPeon6=1;
                peon6.splice(0,2,x,y);
                PaintCell(x,y,6);
                PaintBeforeCell(CellSelected_x,CellSelected_y);
                RecorrerTablero(2);
                resetearVariables();
             }
             if(ficha==15){
                contPeon7=1;
                peon7.splice(0,2,x,y);
                PaintCell(x,y,6);
                PaintBeforeCell(CellSelected_x,CellSelected_y);
                RecorrerTablero(2);
                resetearVariables();
             }
             if(ficha==16){
                contPeon8=1;
                peon8.splice(0,2,x,y);
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
