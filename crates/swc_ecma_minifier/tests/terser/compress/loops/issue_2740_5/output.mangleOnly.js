L1: for(var a = 0; a < 3; a++){
    break L1;
    L2: for(var b = 0; b < 2; b++){
        break L2;
    }
}
console.log(a, b);
