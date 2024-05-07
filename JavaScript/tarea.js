// indentificar si un texto es un palindromo
const palindrome = (text) => {
    const normalizedText = text.toLowerCase().replace(/\s/g, '');
    const reversedText = normalizedText.split('').reverse().join('');
    console.log(normalizedText === reversedText ? 'Es un palindromo' : 'No es un palindromo');
}

// constar del 1 al 100 y e imprimir lo siguiente en los siguientes casos
//     los siguientes casos
//     - multiplo de 3 - "Fizz"
//         - multiplo de 5 - "Fuzz"
//             - multiplo de 3 y 5 - "Caera la republica"
//                 - en cualquier otro caso el numero que se imprime
const fizzBuzz = (numbers) => {
    for (let i = 1; i <= numbers; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i, 'Caera la republica');
        } else if (i % 3 === 0) {
            console.log(i, 'Fizz');
        } else if (i % 5 === 0) {
            console.log(i, 'Fuzz');
        }
    }
}

// imprimir una piramidae de la altura que se solicite por el usuario
const piramid = (height) => {
    for (let i = 1; i <= height; i++) {
        let space = ' '.repeat(height - i);
        let block = '*'.repeat(i * 2 - 1);
        console.log(space + block + space);
    }
}

palindrome('Anita lava la tina');
console.log('-------------------');
fizzBuzz(20);
console.log('-------------------');
piramid(2);