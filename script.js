const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O Taehyung já fumou?",
        alternativas: [
            {
                texto: "verdadeiro!",
                afirmacao: "correto"
            },
            {
                texto:  "falso",
                afirmacao: "errado"
            }
        ]
    },
    {
        enunciado: "Jimin é o líder do grupo?",
        alternativas: [
            {
                texto: "verdadeiro!",
                afirmacao: "errado"
            },
            {
                texto: "falso.",
                afirmacao: "correto"
            }
        ]
    },
    {
        enunciado: "São 8 integrantes?",
        alternativas: [
            {
                texto: "verdadeiro!",
                afirmacao: "errado"
            },
            {
                texto: "falso",
                afirmacao: "correto"
            }
        ]
    },
    {
        enunciado: "Eles debutaram em 2014?",
        alternativas: [
            {
                texto: "falso",
                afirmacao: "correto"
            },
            {
                texto: "verdadeiro",
                afirmacao: "errado"
            }
        ]
    },
    {
        enunciado: "O Suga brigou com um mendigo por causa de um papelão? ",
        alternativas: [
            {
                texto: "falso",
                afirmacao: "correto"
            },
            {
                texto: "verdadeiro",
                afirmacao: "errado"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "AMYY CONGRATULATION";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.style.display = "block";
}

mostraPergunta();