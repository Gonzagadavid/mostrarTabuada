const output = document.getElementById('output')

function tabuada () {
  const numero = parseInt(prompt('A tabuada de qual numero\nvocê deseja saber?(entre "0" e "199")'))
  let resultado = ''
  if (numero === '' || isNaN(numero)) { return alert('Você precisa escolher um numero') }
  if (numero > 199 || numero < 0) { return alert('somente numeros de "0" a "199"') }
  for (let i = 0; i < 100; i++) {
    resultado += `<br> ${i} x ${numero} = ${i * numero}<br>`
  }
  output.innerHTML = resultado
}

function apagador () {
  output.innerHTML = ''
}
