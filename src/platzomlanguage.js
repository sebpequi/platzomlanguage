export default function platzom(str){
  let translation = str

  //Si la palabra origina es un palindromo,
  //ningua regla anterior cuenta u se devuelve
  //la misma palabra intercalando mayúsculas y minúsculas
  const alreves = (str) => str.split('').reverse().join('')
  function minMay(str){
    const length = str.length
    let translation = ''
    let capitalize = true
    for(let i = 0; i < length; i++){
      const char = str.charAt(i)
      translation += capitalize ? char.toUpperCase() : char.toLowerCase()
      capitalize = !capitalize
    }
    return translation
  }

  if(str == alreves(str)){
    return minMay(str)
  }

  //Si la palabra termina en "ar", se le quitan esos dos caracteres
  if(str.toLowerCase().endsWith('ar')){
    translation = str.slice(0, -2)
  }
  //Si la palabra inicia con Z, ss le añade "pe" al final
  if(str.toLowerCase().startsWith('z')){
    translation += "pe"
  }
  //si la palabra traducida tiene 10 o mas letras,
  //se debe partir a la mitad y unir con un guión del medio
  const numCaracteres = translation.length
  if(numCaracteres >= 10){
    const firstHalf = translation.slice(0, Math.round(numCaracteres / 2))
    const secondHalf = translation.slice(Math.round(numCaracteres / 2))
    translation = `${firstHalf}-${secondHalf}`
  }

  return translation
}
