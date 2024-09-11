# ImgCollage(The algorithum will not work as is)
I would not call this finished<br />
*this code is stickytaped togethor with ducktape using "not toching it" as adhesive the documentation isn.t realy documentation,the code has hardly any comments donot try to read.Some of the steps include manual copy pasting large arrays and objects,It may also not work on unmodifyed browser from the memory cap,It took work to get it working with the memory cap extended,It should not have data,I think...This is a pile of some what working stuff,It is junk.Thank you LCG for running in constant time and space.Serch for your id from https://yutaylemon.github.io/FindUsr/ 

TODO:
-condence in one application<br />
-do something about memory<br />
-skip the img to array accses directly<br />
-fix lcg to work alwase and not "probalisticly alwase for large n*m"<br />
-remove manul steps,and not go over the memory cap<br />
-add coments<br />
-add documentation<br />



General over view<br />
-proccesProfile:converts all squer img's to a circle and finds the ave color<br />
-main index.js<br />
-find edges using maxrixes(edge.js)<br />
var Ix = [<br />
    [-1,0,1],<br />
    [-2,0,2],<br />
    [-1,0,1]<br />
]<br />

var Iy = [<br />
    [-1,-2,-1],<br />
    [0,0,0],<br />
    [1,2,1]<br />
]<br />
I=size of vector<br />
-draw circles with matching colors,largest to not go over edge-normal boundarys<br />
-the random cordinates are sampled using a custome LCG wich returns each cordinate in the img in a random order but uniqlu but in CONSTANT TIME AND SPACE<br />
x(n+1) = (x(n)*a+c)%m<br />


-the sdbm hash is use to store the list of the id's for the lookup website <br />
