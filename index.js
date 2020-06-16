"use strict";

//Se podria consultar de las siguientes formas:
//verificador("12.345.678-k")
//verificador("12.345.678","k")
//verificador(12345678,"k")
//verificador("12345678-k")
//verificador("18622178")
module.exports = function verificador(string, ver1 = "") {
    ver1 = ver1.toString().toLowerCase()
    let rut = ''
    if(string === null || string === undefined){
        return false
    }
    if(ver1 === ""){//Seguimos en caso de que el verificador esté en el string.
        rut = simpleRut(string);//Quitamos los puntos si hay alguno.
        rut = rut.split("-");
        if(rut[1] === undefined)
            return calculaVerificador(rut[0])
        ver1 = rut[1]
        rut = rut[0]
    }
    else{
        rut = simpleRut(string)
    }

    return (ver1 === calculaVerificador(rut))

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
    let res1 = ((suma/11)+"").split(".")
    let res2 = Number(res1[0])*11
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