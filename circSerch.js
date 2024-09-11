function dSerch(center,img,col){
    var n = 1;
    var firstR = ndSerch(center,img,n,col);
    while(!firstR){
        n++;
        firstR = ndSerch(center,img,n,col);
    }
    var minR = (center.x-firstR[0])*(center.x-firstR[0])+(center.y-firstR[1])*(center.y-firstR[1]);
    for(var i = 0;i<Math.floor(n/2);i++){
        n++
        var tempR = ndSerch(center,img,n,col);
        if(tempR){
            minR = Math.min(minR,((center.x-tempR[0])*(center.x-tempR[0])+(center.y-tempR[1])*(center.y-tempR[1])))
        }
    }
    return Math.sqrt(minR);
}

function ndSerch(center,img,r,col){
    var directions = [[1,1],[1,-1],[-1,-1],[-1,1]];
    
    var cy = center.y;
    var cx = center.x - r;
    for(var dir= 0;dir<4;dir++){
        for(var i = 0;i<r;i++){
             cy = cy+directions[dir][1];
             cx = cx+directions[dir][0];
            //cheack cy,cx
                if((cx < 0 || cy < 0) || (cx >= img.length||cy>=img[0].length)){
                    return [cx,cy];
                }
               if(img[cx][cy] == col || img[cx][cy] == full){
                   return [cx,cy];
               } 
            
        }
    }
        
}