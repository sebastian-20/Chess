var CellSelected_x;
var CellSelected_y;
var Moves;
var Options;

var secs;
var mins;
var cronometer;
var cont=0;

var caballo1 = ['1','0'];
var alfil1 = ['2','0'];
var ficha = 0;

var board = new Array(8);

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

function SelectCell(x, y){
    
    PaintCell(x,y);

}

function PaintCell(x, y, ficha){
    CellSelected_x=x;
	CellSelected_y=y;
    board[x][y]=1
    if(ficha==1){
        cell = document.getElementById("c"+x+y).innerHTML = 
		"<img id='" + x + y + "' src='images/horse.png'></img>"
    }
    else if(ficha==2){
        cell = document.getElementById("c"+x+y).innerHTML = 
		"<img id='" + x + y + "' src='images/alfil.png'></img>"
    }
}

function autoplay(){
    for (i=0; i<9; i++) {
        board[i]= new Array(8);  
    }

    ClearBoard();
    ResetTime();
    CargarPosiciones();

}

function CargarPosiciones(){
    for (i=0; i<2; i++){
        if(i==0){
           x=caballo1[i];
        }
        else if(i==1){
        y=caballo1[i];
        }  
    }
    PaintCell(x,y,1);

    for (i=0; i<2; i++){
        if(i==0){
           x=alfil1[i];
        }
        else if(i==1){
        y=alfil1[i];
        }
    }
    PaintCell(x,y,2);
}

function ClearBoard(){
	for (i=0; i<8; i++){
		for (j=0; j<8; j++){
			board[i][j]=0;

			cell = document.getElementById("c"+i+j);
			cell.style.background = "";  
			cell = document.getElementById("c"+i+j).innerHTML = "";
		}
	}

}

function CheckCell(x, y){
    CheckTrue = false;
    cont=cont+1;

if(cont==1){
    for (i=0;i<2;i++){
        if(i==0){
            for (j=0; j<2; j++){
                if(j==0){
                    xp=caballo1[j];
                }
                else if(j==1){
                    yp=caballo1[j];
                }
            }
            if(x==xp && y==yp){
                ficha=1;//Caballo
                CellSelected_x=x;
                CellSelected_y=y;
                
            }
        }
        else if(i==1){
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
                break;
            }
        }
    }
    if(ficha<=0){
        cont=0;
    }
  }
    
else {
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
        
        if (CheckTrue){
            cont=0;
            caballo1.splice(0,2,x,y);
            PaintCell(x,y,1);
        } 
    }
    if(ficha==2){
        dif_x = x - CellSelected_x;
        dif_y = y - CellSelected_y;
        if (dif_x >= 1 && dif_y >= 1 && dif_x==dif_y)   CheckTrue = true;
        if (dif_x <= -1 && dif_y <= -1 && dif_x==dif_y)   CheckTrue = true;
        if (dif_x <= -1 && dif_y >= 1 && (dif_x+dif_y)+dif_y==dif_y)  CheckTrue = true;
        if (dif_x >= 1 && dif_y <= -1 && (dif_x+dif_y)+dif_y==dif_y)   CheckTrue = true; 
        
        if (CheckTrue){
            cont=0;
            alfil1.splice(0,2,x,y);
            PaintCell(x,y,2);
        } 
    }

}


   
    
}