var h = 1000;
var w = 1000;
var mousePos = {};
//var edgePoints= {};
mousePos.x =0;
mousePos.y = 0;
const canvas =document.querySelector("canvas");
canvas.width = w;
canvas.height = h;
const ctx = canvas.getContext("2d",{willReadFrequently:true});
var ContexIMG;
var coloredImgContext;

document.querySelector(".inputImg").addEventListener("change",(event)=>{
   const fileImg = event.target.files[0];
    if(fileImg){
            const reader = new FileReader();
            reader.onload = function(e){
                const imag = new Image();

                imag.addEventListener("load",()=>{
                canvas.width = 2480;
                //w = imag.naturalWidth;
                w=2480;
                canvas.height = 3508;
                //h = imag.naturalHeight;
                h=3508;    
                ctx.drawImage(imag,0,0,w,h);
                coloredImgContext = ImgtoArray();
                ContexIMG = NegEdgeDetect(coloredImgContext);
                //FIX
                
                imag.style.display = "none";
                
});
                
         imag.src = e.target.result;
        };
         reader.readAsDataURL(fileImg);
   
    }
});

document.querySelector("canvas").addEventListener("mousemove",(e)=>{
   const bounding = canvas.getBoundingClientRect();
   //console.log(e.clientX-bounding.left,e.clientY-bounding.top); 
   mousePos.x = e.clientX-bounding.left;
   mousePos.y = e.clientY-bounding.top;
});

document.querySelector("canvas").addEventListener("click",(e)=>{
    
    //contextArray = ImgtoArray();
    var tempPos = mousePos;
    tempPos.x = Math.round(tempPos.x);
    tempPos.y = Math.round(tempPos.y);
    //console.log(tempPos);
    place(tempPos);
   
});

function place(pos,col){
    var r = dSerch(pos,ContexIMG,col);
    var colur = LogCircle(pos,r,ContexIMG,coloredImgContext);
   // edgePoints = UpdateMark(contextArray);
    ////////////////////emptImg = UpdateMark(contextArray).empt;
    //edgePoints = edgePoints.mark;
   // PrintImg(contextArray); 
    return {c:colur,r:r,pos:pos};
}

function ImgtoArray(){
    
    var ImgData = ctx.getImageData(0, 0, w, h);
    var Dat = ImgData.data;
    var res = [];
    for(var i = 0;i<w;i++){
        res.push([]);
        for(var j = 0;j<h;j++){
            res[i].push({});
            var index = (j*w+i)*4;
            res[i][j].r = Dat[index];
            res[i][j].g = Dat[index+1];
            res[i][j].b = Dat[index+2];
            res[i][j].a = Dat[index+3];
        }
    }
    return res;
}

function PrintImg(Img){
    ctx.clearRect(0,0,w,h);
    var resDat =ctx.createImageData(w,h);
    c = 0;
    for(var j = 0;j<Img[0].length;j++){
        for(var i = 0;i<Img.length;i++){
            resDat.data[c] = Img[i][j].r;
            resDat.data[c+1] = Img[i][j].g;
            resDat.data[c+2] = Img[i][j].b;
            resDat.data[c+3] = Img[i][j].a;
            c+=4;
        }
    }
    
    ctx.putImageData(resDat,0,0);
    return resDat.data;
}









var Table = [];
var locationTable = {};


function sdbm(id){
    let hash = 0;

	for (let i = 0; i < id.length; i++) {
		hash = id.charCodeAt(i) + (hash << 6) + (hash << 16) - hash;
	}

	return (hash >>> 0).toString(16);
}







    var resNew = [];
async function recoverA(){
      var randomGenLCG = new Sequence2D(w,h);
    console.log(randomGenLCG.v);
      for(var i = 0;i<randomGenLCG.v.m;i++){
          var cuCord = randomGenLCG.Next();
          while(cuCord == -1){
              cuCord = randomGenLCG.Next();
          }
          var cuState = ContexIMG[cuCord[0]][cuCord[1]];
          if(cuState != full){
          var temA = place({x:cuCord[0],y:cuCord[1]},(cuState+1)%2);  
        var ta = await DrwImgRGB(temA.c.r,temA.c.g,temA.c.b,temA.pos.x,temA.pos.y,temA.r);
              
              
              
              //hash table? thing
var hashId = sdbm(ta.na);
if(locationTable[hashId] == undefined){
    Table.push([]);
    Table[Table.length - 1].push(ta.c);
    locationTable[hashId] = Table.length - 1;
}else{
    Table[locationTable[hashId]].push(ta.c);
}
              //dose not store indevisual id's
              
              
          }
          if(i%100000 == 0){
              console.log(ta);
              console.log(h*w-i);
          }
      }
    console.log(randomGenLCG.v);
}
