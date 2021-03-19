function random (min, max) {
  const r = Math.random() * ( max - min ) + min;
  return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(1, 50);

while (rand !== 10) {
  rand = random(min, max);
  console.log(rand)
}
// while é usado para laços quando não se sabe a quantidades de vezes que é necessario para retornar false na condição

do {
  rand = random(min, max);
  console.log(rand)
} while(rand !== 10);

// Do while executa primeiro e depois ler a condição