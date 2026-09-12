import { carregarHome } from "./home.js";
import { carregarAlunos } from "./alunos.js";

const logo = document.getElementById('logo');
const dsButton = document.querySelector('.ds-button'); // Botão para carregar alunos

logo.onclick = carregarHome;

// Adicionar evento ao botão "DS"
if (dsButton) {
    dsButton.onclick = carregarAlunos;
}

// Carregar a página inicial por padrão
carregarHome();