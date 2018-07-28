const expect = require('chai').expect
// const platzom = require('..')
//si no corre el test lo que debemos hacer es agregar .default
const platzom = require('..').default

describe('#platzomlanguage', function(){
  //lo que esta en las comillas simples es una descripción del test
  it('Si la palabra termina en "ar", se le quitan esos dos caracteres', function(){
    const translation = platzom("Programar");
    expect(translation).to.equal("Program");
  });
  it('Si la palabra inicia con Z, se le añade "pe" al final', function(){
    const translation = platzom("Zorro");
    const translation2 = platzom("Zarpar");
    expect(translation).to.equal("Zorrope");
    expect(translation2).to.equal("Zarppe");
  });
  it('Partir a la mitad si tiene 10 o más caracteres', function(){
    const translation = platzom("abecedario");
    const translation2 = platzom("murcielago");
    expect(translation).to.equal("abece-dario");
    expect(translation2).to.equal("murci-elago");
  });
  it('si es un palindromo alternar Mayusculas y minusculas', function(){
    const translation = platzom("sometemos");
    expect(translation).to.equal("SoMeTeMoS");
  });
})
