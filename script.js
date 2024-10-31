// Conteúdo para cada matéria
const content = {
    portugues: "Explore tópicos de gramática, interpretação de texto e redação.",
    matematica: "Estude álgebra, geometria, trigonometria e muito mais.",
    geografia: "Aprenda sobre geografia física, econômica e cartografia.",
    historia: "Explore História Geral e História do Brasil.",
    biologia: "Estude citologia, genética, ecologia e outros tópicos.",
    fisica: "Aprenda sobre mecânica, termodinâmica, óptica e mais.",
    quimica: "Estude química orgânica, inorgânica e estequiometria."
};

// Perguntas e respostas para cada matéria
const questions = {
    portugues: [
        { question: "Qual a diferença entre verbo transitivo e intransitivo?", answer: "Verbo transitivo exige complemento, enquanto o intransitivo não exige." },
        { question: "O que é uma oração subordinada?", answer: "É uma oração que depende de outra para fazer sentido completo." }
    ],
    matematica: [
        { question: "O que é uma função do segundo grau?", answer: "Uma função que pode ser expressa como f(x) = ax^2 + bx + c." },
        { question: "Explique o Teorema de Pitágoras.", answer: "Em um triângulo retângulo, o quadrado da hipotenusa é igual à soma dos quadrados dos catetos." }
    ],
    geografia: [
        { question: "O que é latitude?", answer: "É a distância em graus de qualquer ponto da superfície terrestre em relação à linha do Equador." },
        { question: "Qual a diferença entre clima e tempo?", answer: "Clima é o comportamento do tempo em longo prazo, enquanto o tempo é a condição atmosférica em um dado momento." }
    ],
    historia: [
        { question: "O que foi o Renascimento?", answer: "Foi um movimento cultural e artístico que ocorreu na Europa entre os séculos XIV e XVII." },
        { question: "Explique a Revolução Francesa.", answer: "Foi um período de revolta social e política na França, que durou de 1789 a 1799." }
    ],
    biologia: [
        { question: "O que é célula?", answer: "A célula é a unidade básica de vida dos seres vivos." },
        { question: "Explique a teoria da evolução.", answer: "É a teoria que sugere que todas as espécies de seres vivos evoluíram ao longo do tempo a partir de um ancestral comum." }
    ],
    fisica: [
        { question: "O que é velocidade?", answer: "Velocidade é a taxa de variação de posição em relação ao tempo." },
        { question: "Explique a lei da inércia.", answer: "A lei da inércia afirma que um objeto em repouso permanece em repouso e um objeto em movimento continua em movimento até que uma força externa atue sobre ele." }
    ],
    quimica: [
        { question: "O que é um átomo?", answer: "O átomo é a menor unidade fundamental da matéria que ainda retém as propriedades de um elemento." },
        { question: "Explique o que são ligações covalentes.", answer: "Ligações covalentes ocorrem quando dois átomos compartilham pares de elétrons." }
    ]
};

// Função para carregar o conteúdo da matéria
function loadContent(subject) {
    const contentDiv = document.getElementById(`content-${subject}`);
    contentDiv.textContent = content[subject];
    toggleVisibility(contentDiv);
}

// Função para exibir perguntas da matéria
function showQuestions(subject) {
    const questionsDiv = document.getElementById(`questions-${subject}`);
    questionsDiv.innerHTML = questions[subject]
        .map((item, index) => `
            <div class="question-item">
                <p><strong>Pergunta ${index + 1}:</strong> ${item.question}</p>
                <button onclick="showAnswer('${subject}', ${index})">Ver Resposta</button>
                <p id="answer-${subject}-${index}" class="answer" style="display: none;">${item.answer}</p>
            </div>
        `)
        .join("");
    toggleVisibility(questionsDiv);
}

// Função para mostrar a resposta de uma pergunta específica
function showAnswer(subject, index) {
    const answer = document.getElementById(`answer-${subject}-${index}`);
    answer.style.display = answer.style.display === "none" ? "block" : "none";
}

// Função para alternar a visibilidade com animação
function toggleVisibility(element) {
    if (element.classList.contains("show")) {
        element.classList.remove("show");
        element.style.opacity = "0";
        setTimeout(() => { element.style.display = "none"; }, 500);
    } else {
        element.style.display = "block";
        setTimeout(() => { element.classList.add("show"); element.style.opacity = "1"; }, 10);
    }
}
