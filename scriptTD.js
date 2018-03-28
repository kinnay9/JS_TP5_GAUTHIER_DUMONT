window.addEventListener("load",function() {

    var canvas = document.getElementById('mon_canvas');
        if(!canvas)
        {
            alert("Impossible de récupérer le canvas");
            return;
        }

    var context = canvas.getContext('2d');
        if(!context)
        {
            alert("Impossible de récupérer le context du canvas");
            return;
        }

    var mode = "line";
    var modeColor = false;
    var xDebut,yDebut,xfin,yfin;
    var colorFill = '#ac41f4';

    document.getElementById('mon_canvas').addEventListener("mousedown",debut);
    document.getElementById('mon_canvas').addEventListener("mouseup",fin);
    document.getElementById('rect').addEventListener("click",modeRect);
    document.getElementById('circle').addEventListener("click",modeCircle);
    document.getElementById('line').addEventListener("click",modeLine);
    document.getElementById('clear').addEventListener("click",clean);
    document.getElementById('color').addEventListener("click",color);
    document.getElementById('bleu').addEventListener("click",bleu);
    document.getElementById('rouge').addEventListener("click",rouge);
    document.getElementById('vert').addEventListener("click",vert);





    function debut(e){
        if (mode == "line") {
            context.beginPath();
            context.lineTo(e.pageX, e.pageY);
        }else if (mode == "rect") {
            xDebut = e.pageX;
            yDebut = e.pageY;
        }else if (mode == "circle") {
            context.beginPath(); 
            xDebut = e.pageX;
            yDebut = e.pageY;
        }
    }

    function fin(e){
        if (!modeColor) {
            if (mode == "line") {
                context.lineTo(e.pageX, e.pageY);
                context.stroke();
                context.closePath();
            }else if (mode == "rect") {
                xfin = e.pageX;
                yfin = e.pageY;
                context.strokeRect(xDebut, yDebut, xfin - xDebut, yfin - yDebut);

            }else if(mode == "circle") {
                xfin = e.pageX;
                yfin = e.pageY;
                var rayonX =Math.abs(xfin - xDebut);
                var rayonY =Math.abs(yfin - yDebut);
                if (rayonY > rayonX) {
                    context.arc(xDebut, yDebut, rayonY, 0, Math.PI*2); 
                }else {
                    context.arc(xDebut, yDebut, rayonX, 0, Math.PI*2); 
                }
                context.stroke();
                context.closePath();
            }
        }else{
            context.fillStyle = colorFill;
            if (mode == "line") {
                context.lineTo(e.pageX, e.pageY);
                context.fill();
                context.closePath();
            }else if (mode == "rect") {
                xfin = e.pageX;
                yfin = e.pageY;
                context.fillRect(xDebut, yDebut, xfin - xDebut, yfin - yDebut);

            }else if(mode == "circle") {
                xfin = e.pageX;
                yfin = e.pageY;
                var rayonX =Math.abs(xfin - xDebut);
                var rayonY =Math.abs(yfin - yDebut);
                if (rayonY > rayonX) {
                    context.arc(xDebut, yDebut, rayonY, 0, Math.PI*2); 
                }else {
                    context.arc(xDebut, yDebut, rayonX, 0, Math.PI*2); 
                }
                context.fill();
                context.closePath();
            }
        }
    }

    function modeRect(){
        mode = "rect";
    }

    function modeLine(){
        mode = "line";
    }

    function modeCircle(){
        mode = "circle";
    }

    function clean(){
        context.fillStyle = 'rgb(255,255,255)';
        context.fillRect(0,0,500,500);
    }

    function color(){
        if (modeColor) {
            modeColor = false;
        }else{
            modeColor = true;
        }
    }

    function bleu(){
        colorFill = '#24477f';
    }

    function rouge(){
        colorFill = '#cc2222';
    }

    function vert(){
        colorFill = '#4bf442';
    }

});