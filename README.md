
# verificador-rut

[![GitHub issues](https://img.shields.io/github/issues/GrayJacketStudios/verificador-rut)](https://github.com/GrayJacketStudios/verificador-rut/issues)
[![npm](https://img.shields.io/npm/v/verificador-rut)](https://github.com/GrayJacketStudios/verificador-rut)
[![GitHub license](https://img.shields.io/github/license/GrayJacketStudios/verificador-rut)](https://github.com/GrayJacketStudios/verificador-rut)
[![npm bundle size(minified)](https://img.shields.io/bundlephobia/min/verificador-rut)](https://github.com/GrayJacketStudios/verificador-rut)
[![GitHub stars](https://img.shields.io/github/stars/GrayJacketStudios/verificador-rut)](https://github.com/GrayJacketStudios/verificador-rut/stargazers)

Modulo para NPM con el cual podras verificar si un rut es correcto, enviando un digito a comparar, devolviendo true si corresponde y false si no.

Si **no se especifica el digito verificador**, el que corresponderia es **devuelto**.

## instalación
Para instalar el modulo simplemente ejecuta desde una terminal:

`npm install verificador-rut -s`

## Ejemplos
Proyecto Node.js
```javascript
const verificador = require('verificador-rut');
...
if(verificador("123.456.789-5")){...}
```
Proyecto Reactjs
```javascript
import verificador  from 'verificador-rut'
...
if(verificador("123.456.789-5")){...}
```
## Valores & parametros permitidos
la funcion `verificador` acepta dos parametros, siendo el segundo opcional.

`verificador(<string de rut>{,<digito verificador>})`

Se puede utilizar de las siguientes formas:

```javascript
verificador("12345678-k")//<= devuelve true o false
verificador("12.345.678-K")//<= devuelve true o false
verificador("12345678","k")//<= devuelve true o false
verificador("12.345.678","k")//<= devuelve true o false
verificador("12.345.678",8)//<= devuelve true o false

verificador("12345678")//<= devuelve el digito verificador
verificador("12.345.678")//<= devuelve el digito verificador

```