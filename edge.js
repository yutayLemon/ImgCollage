var Ix = [
    [-1,0,1],
    [-2,0,2],
    [-1,0,1]
]

var Iy = [
    [-1,-2,-1],
    [0,0,0],
    [1,2,1]
]

var edgeThresh = 100;

var empt = 0;
var edge = 1;
var full = 2;


function NegEdgeDetect(img){
    var imgW = img.length;
    var imgH = img[0].length;
    var res = [];
    for(let i = 0;i<img.length;i++){
        
        if(i%1000){
            console.log("edge:"+i);
        }
        res.push([]);
        for(let j = 0;j<img[i].length;j++){
            var tempr = 0;
            var tempg = 0;
            var tempb = 0;
            var sumX = {};
            sumX.r = 0;
            sumX.g = 0;
            sumX.b = 0;
            var sumY = {};
            sumY.r = 0;
            sumY.g = 0;
            sumY.b = 0;
            for(let x = 0;x<3;x++){
                for(let y = 0;y<3;y++){
                    if(!((i-1+x < 0 || j-1+y < 0) || (i-1+x>=imgW || j-1+y>=imgH))){
                        sumX.r += img[i-1+x][j-1+y].r * Iy[x][y];
                        sumY.r += img[i-1+x][j-1+y].r * Iy[x][y];
                        sumX.g += img[i-1+x][j-1+y].g * Iy[x][y];
                        sumY.g += img[i-1+x][j-1+y].g * Iy[x][y];
                        sumX.b += img[i-1+x][j-1+y].b * Iy[x][y];
                        sumY.b += img[i-1+x][j-1+y].b * Iy[x][y];
                    }
                }   
            }
            tempr = Math.sqrt(sumX.r*sumX.r + sumY.r*sumY.r);
            tempg = Math.sqrt(sumX.g*sumX.g + sumY.g*sumY.g);
            tempb = Math.sqrt(sumX.b*sumX.b + sumY.b*sumY.b);
            tempr = Math.round(tempr);
            tempg = Math.round(tempg);
            tempb = Math.round(tempb);
            if((tempr > edgeThresh)||(tempb > edgeThresh || tempg > edgeThresh)){
                res[i][j] = edge;
            }else{
                res[i][j] = empt;
            }   
        }
    }
    return res;
}

function MaxCirc(points,center){
    var min = (center[0]-points[0][0])*(center[0]-points[0][0])+(center[1]-points[0][1])*(center[1]-points[0][1]);
    for(var i =1;i<points.length;i++){
        if(((center[0]-points[i][0])*(center[0]-points[i][0])+(center[1]-points[i][1])*(center[1]-points[i][1])) < min){
            min = ((center[0]-points[i][0])*(center[0]-points[i][0])+(center[1]-points[i][1])*(center[1]-points[i][1]));
        }
    }
    return Math.sqrt(min);
}
