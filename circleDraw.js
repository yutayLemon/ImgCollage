function LogCircle(center,r,img,coloredImg){
    if(r == 1){
        img[center.x][center.y] = full;
        return coloredImg[center.x][center.y];
    }
    //fix edge bias
    var aveColor = {r:0,g:0,b:0};
    var c = 0;
    for(var i = 0;i<2*r;i++){
        var hight = Math.sqrt(2*r*i-i*i);
        var startPointY = center.y - hight;
        var startPointX = center.x+i-r;
        
        var len = 2*hight;
        
        for(var j = 0;j<len;j++){
            var xPos = Math.max(0,Math.round(startPointX));
            var yPos = Math.max(0,Math.round(startPointY+j));
            xPos = Math.min(xPos,img.length -1);
            yPos = Math.min(yPos,img[0].length - 1);
            img[xPos][yPos] = full;
            //emptImg.splice(match([xPos,yPos],emptImg),1);
            aveColor.r+=coloredImg[xPos][yPos].r;
            aveColor.g+=coloredImg[xPos][yPos].g;
            aveColor.b+=coloredImg[xPos][yPos].b;
            c++;
        }
        
    }
    //console.log("painted");
    aveColor.r/=c;
    aveColor.r=Math.round(aveColor.r);
    aveColor.g/=c;
    aveColor.g=Math.round(aveColor.g);
    aveColor.b/=c;
    aveColor.b=Math.round(aveColor.b);
    return aveColor;
}

function match(el,arr){
    for(var i = 0;i<arr.length;i++){
        if((el[0] == arr[i][0]) && (el[1] == arr[i][1])){
            return i;
        }
    }
    return -1;
}