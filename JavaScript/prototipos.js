let a = "Hola mundo";

a = a.padEnd(20, "----");
a = a.padStart(30, "++++");

let b = []

b.push(a);
b.push(a);
b.pop(a)

let C = "[Hola, que tal como estas, yo muy bien gracias]";
C = C.replace(/[^a-zA-Z ,]/g, "");
C = C.split(" ");
C = C.join(" ");

console.log(C);