               
const hex2rgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    
    // return {r, g, b} 
    return { r, g, b };
}


function GetImgByRGB(r,g,b){
    var best = AveColors[0];
    var minVal = Math.abs(best.r - r) + Math.abs(best.g - g) + Math.abs(best.b - b);
    for(var i = 1;i<AveColors.length;i++){
        var cu = AveColors[i];
        var cuVal = Math.abs(cu.r - r) + Math.abs(cu.g - g) + Math.abs(cu.b - b);
        if(cuVal<minVal){
            minVal = cuVal;
            best = cu;
        }
    }
    return best;
}

function DrwImgRGB(r,g,b,xPos,yPos,radi){
    return new Promise((resolve,reject)=>{
    //ctx.arc(xPos,yPos,radi,0,2*Math.PI);
    //ctx.clip();
    
    var imag = new Image();
    //console.log(img.src);
    imag.addEventListener("load",function(){
    ctx.drawImage(imag,xPos-radi,yPos-radi,radi*2,radi*2); 
                imag.style.display = "none";
        
    });
    var Uname = GetImgByRGB(r,g,b).n;
    imag.src ="ProfileBatchEdited/"+ Uname + '.png';
    resolve({na:Uname,c:[xPos,yPos]});
    });
}