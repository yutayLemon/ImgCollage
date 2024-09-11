var primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997,1009,1013,1019,1021,1031,1033,1039,1049,1051,1061,1063,1069,1087,1091,1093,1097,1103,1109,1117,1123,1129,1151,1153,1163,1171,1181,1187,1193,1201,1213,1217];
function EvalParms(max){
    var mFact = new Array(primes.length);
    var aVal = 1;
    var cVal = 1;
    var mVal = 1;
    var Fact4 = false;
    var p = 0.3;
    while(mVal < max){
        var tempfact = max/mVal;
        var tempi = 1;
        while(primes[tempi] <= tempfact && tempi<=primes.length - 1){
            tempi++;
        }
        var RandIndex = Math.floor(Math.random()*(tempi));
        var tempRandomFact = primes[RandIndex];
        mFact[RandIndex] = true;
        mVal *= tempRandomFact;
    }
    if(mVal%4 == 0){
        Fact4 = true;
    }
    for(var i = 0;i<mFact.length;i++){
        if(mFact[i] == true && aVal*primes[i] < mVal){
            aVal *= primes[i];//a is devisibal by all prime factors of m
        }else{
            if(Math.random() < p && cVal*primes[i] < mVal){
                cVal *= primes[i]; // c shares no prme factors with primes  
            }
        }
    }
    for(var i = 0;i<Math.random()*10;i++){
        RandIndex = Math.floor(Math.random()*primes.length);
        if((!Fact4 || primes[RandIndex] != 2)&& aVal*primes[RandIndex] < mVal){
            aVal *= primes[RandIndex];// divisibal by factors of m //include as factor if m is not a factor of 4 or prime selcted is 2
             //gets skped if m%4 == 0 and selected factor is 2
        }
    }
    aVal += 1;
    this.a = aVal;
    this.m = mVal;
    this.c = cVal;
    this.x = Math.floor(Math.random()*max);
    return {a:aVal,m:mVal,c:cVal,x: Math.floor(Math.random()*max)};
}

class UniqeSequence{
    constructor(max){
    this.v = EvalParms(max);
    }
    
   
    Next(){
        this.v.a = (this.v.a + this.v.c)%this.m;
        return this.v.a;
    }
}

class Sequence2D{
    constructor(m,n){
    this.v = EvalParms(n*m);
    this.n = n;
    this.m = m;
    //this.v.a = 9403735;
  //  this.v.c = 2032639;
   // this.v.m = 10915662;
//this.v.x = 2034252;
  //  this.cord = [Math.floor(this.v.x/this.n),this.v.x%this.n];
    }
    
    Next(){
        this.v.x = (this.v.x*this.v.a + this.v.c)%this.v.m;
        if(Math.floor(this.v.x/this.n) < this.m && this.v.x%this.n < this.n){
        this.cord = [Math.floor(this.v.x/this.n),this.v.x%this.n];
        return [Math.floor(this.v.x/this.n),this.v.x%this.n];
        }else{
        return -1;
        }
    }
}
