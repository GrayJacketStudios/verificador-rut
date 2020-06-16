const assert = require('assert');
const verificador = require("../.")

describe('Validar digito verificador', () => {
    it('Prueba con puntos y guion', () => {
        assert.equal(verificador("12.345.678-5"), true);
    });
    it('Prueba con puntos y DV como parametro', () => {
        assert.equal(verificador("12.345.678","5"), true);
    });
    it('prueba sin puntos y DV como parametro', () => {
        assert.equal(verificador("12345678","5"), true);
    });
    it('prueba sin puntos y con guion', () => {
        assert.equal(verificador("12345678-5"), true);
    });
    it('prueba sin puntos, con guion y digito incorrecto', () => {
        assert.equal(verificador("12345678-1"), false);
    });
    it('prueba con formato erroneo', () => {
        assert.equal(verificador("123123dg"), false);
    });
   });