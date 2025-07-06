const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O voleibol é um dos esportes mais populares do mundo. A Seleção Brasileira se destaca como uma das melhores da história, com títulos e alto nível técnico. Analise os principais fatores que contribuíram para esse sucesso. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Seleção Brasileira",
                afirmacao: "🏐 Seleção Masculina (Liga das Nações 2025 – convocação de Bernardinho) Levantadoras: Macris Roberta Opostas: Jheovana Kisy Rosamaria Tainara Ponteiras: Ana Cristina Gabi  Helena Júlia Bergmann  Centrais: Diana Júlia Kudiess Lorena Luzia Líberos: Laís Marcele",
            },
            {
                texto: "Seleção Japonesa",
                afirmacao: "A Seleção Japonesa de Voleibol pode ser considerada uma das melhores do mundo na atualidade?Capitão e ponteiro estrela: Yūki Ishikawa — continua líder do time e destaque em pontos nos grandes torneios, Oposto talentoso: Yuji Nishida, sensação de 25 anos, presente em 2024 e confirmado para 2025, Ponteiros em destaque: Ran Takahashi, mais o experiente Tatsunori Otsuka e jovem Shoma Tomita, que até foi capitão nas primeiras fases da VNL, Centrais confiáveis: Taishi Onodera, veterano Kentaro Takahashi (recall de aposentadoria), Setters: elenco liderado por Masahiro Sekita, com outros nomes como Hideomi Fukatsu e Líbero sólido: destaque para Tomohiro Yamamoto "
            }
        ]
    },
    {
        enunciado: "Entre a Seleção Brasileira e a Seleção Japonesa de Voleibol, qual é a melhor atualmente?",
        alternativas: [
            {
                texto: "O Brasil tem três ouros olímpicos (masculino e feminino), além de vários títulos em Mundiais, Copas do Mundo e Ligas das Nações. O Japão, embora tenha tradição e tenha sido campeão olímpico no passado (masculino em 1972, feminino em 1964 e 1976), não conquista títulos de expressão há décadas.",
                afirmacao: "A seleção brasileira conta com jogadores mundialmente reconhecidos como Gabi, Alan, Lucarelli e Macris, enquanto o Japão tem destaques como Ishikawa e Nishida, mas com menor profundidade no elenco."
            },
            {
                texto: "O Brasil está frequentemente entre os 3 melhores do mundo, enquanto o Japão oscila mais nas competições e ainda está se firmando entre as grandes potências novamente.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Nos últimos anos, o Japão passou por uma renovação que aumentou muito o nível técnico da equipe. Eles vêm conquistando vitórias importantes contra seleções de elite, como Brasil, Polônia e Estados Unidos.",
        alternativas: [
            {
                texto: "Jogadores como Yūki Ishikawa e Yuji Nishida são estrelas internacionais. Além deles, atletas como Ran Takahashi e Taishi Onodera mostram grande habilidade, velocidade e leitura de jogo.",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "O Japão é conhecido por um estilo rápido, com excelente defesa, cobertura e disciplina tática. Isso compensa a menor estatura da equipe em comparação a outras seleções.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "Qual seleção pode ser considerada a melhor do voleibol atualmente: Brasil ou Japão?",
        alternativas: [
            {
                texto: "A Seleção Japonesa vem crescendo rapidamente, com jogadores jovens e talentosos como Ishikawa e Nishida, mostrando um nível técnico altíssimo.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "O Japão é uma das melhores seleções da atualidade por seu estilo de jogo ágil, disciplina tática e resultados recentes em torneios internacionais.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Qual seleção pode ser considerada a melhor do voleibol atualmente: Brasil ou Japão?",
        alternativas: [
            {
                texto: "A Seleção Brasileira é a melhor por seu histórico vitorioso em Olimpíadas e Mundiais, além de contar com jogadores experientes e renomados.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: " A Seleção Brasileira se destaca por sua consistência no pódio e pela forte formação de atletas desde as categorias de base.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
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

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
