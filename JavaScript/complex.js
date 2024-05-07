const x = 4;
let y = 0;

function suma(base, adicion) {
    max = 20; // Variable local
    console.log(base);
    if (base + adicion < max) {
        suma(base + adicion, adicion);
    }else{
        console.log(base);
    }
}

suma(y, x);