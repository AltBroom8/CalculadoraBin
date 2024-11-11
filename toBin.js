//Archivo para convertir de un formato a binario.
//Para convertir de decimal a binario
function decimalABinario(numero){
    let bin = '';
    while(numero>2){
        let cosa = numero%2;
        bin+=cosa;
        numero = Math.trunc(numero / 2);
    }
    bin = bin.split('').reverse().join('');
    bin = (numero % 2) + bin
    bin = (Math.trunc(numero / 2)) + bin;
    return bin;
}

function binarioDeTres(numero){
    let bin = '';
    while(numero>2){
        let cosa = numero%2;
        bin+=cosa;
        numero = Math.trunc(numero / 2);
    }
    bin = bin.split('').reverse().join('');
    bin = (numero % 2) + bin;
    if(Math.trunc(numero / 2) === 1){
        bin = '1' + bin;
    }
    if(!(bin.charAt(0) === 1)){
        while(bin.length<=2){
            bin = '0'+bin;
        }
    }
    return bin;
}
let cast = num => Number(num);
function octalABinario(octal){

    
    
    let miArray = Array.from(String(octal), cast);

    console.log(miArray);
    let stringOctal = '';

    while(miArray.length > 0){
        let bini = binarioDeTres(miArray[miArray.length - 1]);
        stringOctal = bini + stringOctal;
        miArray.pop();
    }

    return stringOctal
}

function binarioDeCuatro(char){
    switch(char){
        case '0':
            return '0000';
        case '1':
            return '0001';
        case '2':
            return '0010';
        case '3':
            return '0011';
        case '4':
            return '0100';
        case '5':
            return '0101';
        case '6':
            return '0110';
        case '7':
            return '0111';
        case '8':
            return '1000';
        case '9':
            return '1001';
        case 'A':
            return '1010';
        case 'B':
            return '1011';
        case 'C':
            return '1100';
        case 'D':
            return '1101';
        case 'E':
            return '1110';
        case 'F':
            return '1111';
        default:
            return '';
    }

}
function hexABinario(hex){

    let miArray = Array.from(hex);

    let stringHex = '';

    while(miArray.length > 0){
        let bini = binarioDeCuatro(miArray[miArray.length - 1]);
        stringHex = bini + stringHex;
        miArray.pop();
    }
    let cosa = '';
    if (stringHex.charAt(0) === '0'){
        cosa = stringHex.substring(stringHex.indexOf('1'),(stringHex.length))
    }
    console.log('El numero 1A9 en binario es '+ cosa);
    return cosa;

}


console.log('75 decimal a binario es '+decimalABinario(75));
console.log('75 octal a binario es '+ octalABinario(75));
console.log('75 hexadecimal a binario es '+hexABinario('75'))

















