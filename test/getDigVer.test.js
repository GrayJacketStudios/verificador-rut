const assert = require('assert');
const verificador = require("../.")

describe('Obtener digito verificador', () => {
    it('Prueba string sin puntos', () => {
        assert.equal(verificador("12345678"), "5");
    });
    it('Prueba string con puntos', () => {
        assert.equal(verificador("12.345.678"), "5");
    });
    it('prueba string como numero', () => {
        assert.equal(verificador(12345678), "5");
    });
    it('DV como numero', () => {
        assert.equal(verificador("12345678"), 5);
    });
    
});