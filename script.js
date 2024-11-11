let filaPrincipal = document.getElementById('principal');

let inputs = filaPrincipal.getElementsByTagName('input');

let boton = document.getElementById('boton');
let clear = document.getElementById('clear');

//Función para los decimales
function saleDecimal(){
    let num = parseInt(inputs[0].value);
    let bin = decimalABinario(num);
    let octal = binAOctal(bin)
    let hex = binAHex(bin);
    inputs[1].value = bin;
    inputs[2].value = octal;
    inputs[3].value = hex;

}
//Función para los binarios
function saleBin(){
    let bin = inputs[1].value;
    let num = binADecimal(bin);
    let octal = binAOctal(bin)
    let hex = binAHex(bin);
    inputs[0].value = num;
    inputs[2].value = octal;
    inputs[3].value = hex;
}
//Función para los octales
function saleOctal(){
    let octal = inputs[2].value;
    let bin = octalABinario(octal)
    let num = binADecimal(bin);
    let hex = binAHex(bin);
    inputs[0].value = num;
    inputs[1].value = bin;
    inputs[3].value = hex;
}
//Función para los hexadecimales
function saleHex(){
    let hex = inputs[3].value;
    let bin = hexABinario(hex)
    let num = binADecimal(bin);
    let octal = binAOctal(bin);
    inputs[0].value = num;
    inputs[1].value = bin;
    inputs[2].value = octal;
}
boton.addEventListener('click',()=>{
    if(inputs[0].value!==''){
        saleDecimal()
    }else if(inputs[1].value!==''){
        saleBin();
    }else if(inputs[2].value!==''){
        saleOctal();
    }else if(inputs[3].value!==''){
        saleHex();
    }
});


//Limpiar el área de trabajo
clear.addEventListener('click',()=>{
    console.log('entra')
    let colec = Array.from(inputs)
    colec.forEach(element => {
        element.value = '';
    });
})

