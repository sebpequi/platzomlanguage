# Platzom

Platzom es un idioma inventado para el curso de
Fundamentos de JavaScript de Platzi

## Descripción del idioma

- Si la palabra termina en "ar", se le quitan esos dos caracteres
- Si la palabra inicia con Z, ss le añade "pe" al final
- si la palabra traducida tiene 10 o mas letras, se debe partir a la mitad y unir con un guión del medio
- Si la palabra origina es un palindromo, ningua regla anterior cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas

## Instalación

```
npm install platzomlanguage
```
```
import platzom from 'platzomlanguage'
platzom("Programar") // program
platzom("Zorro") // Zorrope
platzom("Zarpar") // Zarppe
platzom("abecedario") // abece-dario
platzom("sometemos") // SoMeTeMoS
```

## Créditos
- [Sebastian Pérez Quintero](https://sebastianperezquintero.com)

## Licencia

[MIT] (https://opensource.org/licenses/MIT)
