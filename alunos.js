import { getAlunos } from './servico.js';

// Função para carregar os alunos
export async function carregarAlunos() {
    const main = document.getElementById('main');

    try {
        // Buscar os dados dos alunos da API
        const listaAlunos = await getAlunos();

        // Criar os cards dos alunos
        const cardAlunos = listaAlunos.map(criarCard);

        // Substituir o conteúdo do <main> pelos cards
        main.replaceChildren(...cardAlunos);
    } catch (error) {
        console.error('Erro ao carregar os alunos:', error);

        // Exibir mensagem de erro no <main>
        main.innerHTML = '<p>Erro ao carregar os alunos. Tente novamente mais tarde.</p>';
    }
}

// Função para criar um card de aluno
function criarCard(aluno) {
    const card = document.createElement('div');
    card.className = 'aluno-card';

    const foto = document.createElement('img');
    foto.src = aluno.foto || './img/default.png'; // Imagem padrão caso não tenha foto
    foto.alt = `Foto de ${aluno.nome}`;

    const nomeAluno = document.createElement('h3');
    nomeAluno.textContent = aluno.nome;

    // Adicionar evento de clique no card
    card.onclick = () => mostrarDesempenho(aluno);

    card.append(foto, nomeAluno);

    return card; // Retorna o card criado
}

// Função para mostrar o desempenho do aluno
function mostrarDesempenho(aluno) {
    const main = document.getElementById('main');

    // Criar a seção de desempenho
    const desempenhoSection = document.createElement('div');
    desempenhoSection.className = 'desempenho-section';

    const titulo = document.createElement('h2');
    titulo.textContent = `Desempenho de ${aluno.nome}`;

    // Verificar se o desempenho está disponível
    const desempenho = document.createElement('p');
    if (aluno.desempenho) {
        desempenho.textContent = `Desempenho: ${aluno.desempenho[0].valor}`;
        console.log(aluno.desempenho)
    } else {
        desempenho.textContent = 'Desempenho não disponível.';
    }

    const voltarButton = document.createElement('button');
    voltarButton.textContent = 'Voltar';
    voltarButton.onclick = carregarAlunos; // Volta para a lista de alunos

    desempenhoSection.append(titulo, desempenho, voltarButton);

    // Substituir o conteúdo do <main> pela seção de desempenho
    main.replaceChildren(desempenhoSection);
}