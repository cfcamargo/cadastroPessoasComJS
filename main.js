// Evento de sumbmit no form chama a funcao addPerson e previni o redirecionamento da pagina com
// o prevent default

const form = document.getElementById('formulario_pessoas')
form.addEventListener('submit', function (event) {
  event.preventDefault()
  addPerson()
})

// Array q funciona como bd onde salvamos o objeto pessoa 

const pessoas = [
  { nome: 'Cristian', sobrenome: 'camargo', peso: 80, altura: 1.85 },
  { nome: 'Priscila', sobrenome: 'escobar', peso: 59, altura: 1.7 },
]

// funçao que lista e renderiza os objetos do array na pagina

function listarPessoas() {
  document.getElementById('pessoas').innerHTML = ''

  for (i = 0; i <= pessoas.length; i++) {
    const card = document.createElement('li')
    card.classList.add('card')
    card.innerHTML = `<p>Nome : ${pessoas[i].nome}</p>
        <p>Sobrenome: ${pessoas[i].sobrenome}</p>
        <p>Peso : ${pessoas[i].peso}</p>
        <p>Altura: ${pessoas[i].altura}</p>`

    document.getElementById('pessoas').appendChild(card)
  }
}

// Aqui pego os campos do formulario

var nome = document.getElementById('name')
var lastname = document.getElementById('lastname')
var peso = document.getElementById('peso')
var altura = document.getElementById('altura')


//funcao que adiciona o objeto pessoa ao array pessoas utilizando o valor digitado nos campos
function addPerson() {
  
    pessoas.push({
      nome: nome.value,
      sobrenome: lastname.value,
      peso: peso.value,
      altura: altura.value,
    })
    
    nome.value = ""
    lastname.value = ""
    peso.value = ""
    altura.value = ""

    listarPessoas()

  
}

// aqui chamamos a funcao que lista pessoas
listarPessoas()
