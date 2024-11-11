//Para convertir de binario a otro formato numerico
function reverse(string){
    let nueva =''; 
    for (let i = 0; i< string.length;i++){
        nueva = string.charAt(i) + nueva
    }
    return nueva
}
function binADecimal(num){
    
    let total = 0;
    num = reverse(num);
    for (let i = 0; i< num.length;i++){
        if(num.charAt(i)==='1'){
            total = total + (Math.pow(2,i));
        }
    }

    return total;
}

function dataOctal(string){
    switch(string){
        case '000':
            return '0';
        case '001':
            return '1';
        case '010':
            return '2';
        case '011':
            return '3';
        case '100':
            return '4';
        case '101':
            return '5';
        case '110':
            return '6';
        case '111':
            return '7';
    }
}
function dataHex(string){
    switch(string){
        case '0000':
            return '0';
        case '0001':
            return '1';
        case '0010':
            return '2';
        case '0011':
            return '3';
        case '0100':
            return '4';
        case '0101':
            return '5';
        case '0110':
            return '6';
        case '0111':
            return '7';
        case '1000':
            return '8';
        case '1001':
            return '9';
        case '1010':
            return 'A';
        case '1011':
            return 'B';
        case '1100':
            return 'C';
        case '1101':
            return 'D';
        case '1110':
            return 'E';
        case '1111':
            return 'F';
    }
}

function binAOctal(bin){
    let miarray = []
    while(bin.length>3){
        miarray.push(bin.substring((bin.length - 3),bin.length));
        bin = bin.substring(0,bin.length - 3);
    }
    if(bin.length<3 && (bin!== '00' & bin!== '0' && bin!== '')){
        while(bin.length<3){
            bin = '0'+bin;
        }
        miarray.push(bin);
    }
    miarray.reverse();
    let final = '';
    miarray.forEach((cosa)=>final = final + dataOctal(cosa));
    return final;
}

function binAHex(bin){
    let miarray = []
    while(bin.length>3){
        miarray.push(bin.substring((bin.length - 4),bin.length));
        bin = bin.substring(0,bin.length - 4);
        
    }
    if(bin.length<4 && (bin!== '000' && bin!== '00' & bin!== '0' && bin!== '')){ 
        while(bin.length<4){
            bin = '0'+bin;
        }
        miarray.push(bin);
        
    }
    miarray.reverse();
    let final = '';
    miarray.forEach((cosa)=>final = final + dataHex(cosa));
    return final;
}






