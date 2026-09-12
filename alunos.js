import { getAlunos } from "./servico.js"

function criarCard(alunos){
    const card = document.createElement('div')
    card.className = 'aluno-card'

    const foto = document.createElement('img')
    foto.src = alunos.foto

    const nomeAluno = document.createElement('h3')
    nomeAluno.textContent = alunos.nome

    card.append(foto, nomeAluno)


}

export async function carregarAlunos(){
    const main = document.getElementById('main')
    main.className = 'alunos'

    const titulo = document.createElement('h2')
    titulo.className = 'aluno-titulo'
    titulo.textContent = 'Desenvolvimento de Sistemas'

    const cardContainer = document.createElement('div')
    cardContainer.className = 'aluno-card-container'

    const listaAlunos = await getAlunos()
    const cardAlunos = listaAlunos.map(criarCard)

    cardContainer.replaceChildren(...cardAlunos)
    main.replaceChildren(titulo, cardContainer)
}

