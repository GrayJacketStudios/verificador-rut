"use strict";

//Se podria consultar de las siguientes formas:
//verificador("12.345.678-k")
//verificador("12.345.678","k")
//verificador(12345678,"k")
//verificador("12345678-k")
//verificador("18622178")
module.exports = function verificador(string, ver1 = "") {
    ver1 = ver1.toString().toLowerCase()
    string = string.toString()
    let rut = ''
    if(string === null || string === undefined){
        return false
    }
    if(ver1 === ""){//Seguimos en caso de que el verificador esté en el string.
        rut = (simpleRut(string)).split("-");//Quitamos los puntos si hay alguno y el guion
        if(isNumber(rut[0]) === false)
            return false;
        if(rut[1] === undefined)
            return calculaVerificador(rut[0])
        ver1 = rut[1]
        rut = rut[0]
    }
    else{
        rut = simpleRut(string)
        if(isNumber(rut) === false)
            return false
    }

    return (ver1 === calculaVerificador(rut))

}

function isNumber(string){
    return /^\d*$/.test(string)
}

function simpleRut(str){
    return str.replace(/\./g,"");
}

function reverseArray(str){
    return str.split("").reverse();
}


function calculaVerificador(rut){
    rut = reverseArray(rut)
    let multiplicador = [2,3,4,5,6,7,2,3]
    let suma = 0;
    rut.map((dig,i) => {
        suma += (dig*multiplicador[i])
    })
    let res2 = Number((((suma/11)+"").split("."))[0])*11
    let res3 = suma-res2
    switch(11-res3){
        case 11:
            return "0";
        case 10:
            return "k";
        default:
            return (11-res3).toString()
    }
}
