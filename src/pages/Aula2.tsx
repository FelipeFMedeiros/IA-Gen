import AulaTemplate from '../components/AulaTemplate';

const Aula2 = () => {
    const prompts = [
        {
            titulo: 'Exemplo Prático 1: Prompt Inicial',
            texto: 'Explique o ciclo da água.',
        },
        {
            titulo: 'Exemplo Prático 2: Prompt Inicial',
            texto: 'Crie perguntas sobre O Pequeno Príncipe.',
        },
        {
            titulo: 'Exemplo Prático 2: Prompt Melhorado',
            texto: 'Atue como um professor de Língua Portuguesa especialista em criação de atividades pedagógicas para o Ensino Fundamental II.\n\nContexto: Vou trabalhar o capítulo XXI de "O Pequeno Príncipe" (o encontro com a raposa) com uma turma do 7º ano. Meu objetivo é que os alunos desenvolvam a capacidade de interpretação de texto e pensamento crítico, indo além da compreensão superficial.\n\nSua tarefa é: Criar 5 perguntas de interpretação de texto sobre esse capítulo.\n\nInstruções específicas: As perguntas devem exigir que o aluno reflita sobre os sentimentos dos personagens, o significado de metáforas e a moral da história. Evite perguntas cuja resposta seja uma simples cópia de trecho do livro ou um fato óbvio. Inclua uma pergunta que faça uma ligação entre o conceito de "cativar" no livro e uma experiência real da vida do aluno.\n\nFormato de saída: Para cada pergunta, forneça também um gabarito comentado com a resposta esperada e os objetivos de aprendizagem daquela questão.\nApresente a resposta em uma tabela simples com 3 colunas: "Pergunta", "Gabarito", "Objetivo de Aprendizagem".',
        },
        {
            titulo: 'Exercício Prático 1: Prompt Inicial (Fotossíntese)',
            texto: 'Explique a fotossíntese.',
        },
        {
            titulo: 'Exercício Prático 1: Prompt Completo (Fotossíntese)',
            texto: 'Você é um divulgador científico especializado em explicar conceitos complexos para adolescentes. Sua tarefa é criar um material de apoio para uma aula de Ciências do 7º ano sobre fotossíntese. Baseie sua explicação em conceitos científicos consolidados. Estruture a resposta da seguinte forma:\n\nTítulo: Chamativo e simples.\n\nAnalogia Inicial: Use uma analogia envolvendo uma "fábrica de comida" para introduzir o conceito.\n\nLista Simples dos "Ingredientes" e "Produtos": Crie uma tabela de duas colunas mostrando o que a planta "pega" da natureza (Ingredientes) e o que ela "fabrica" (Produtos).\n\nExplicação Curta: Em no máximo 3 parágrafos, explique o processo de forma simples, mencionando a clorofila e a importância da luz solar.\n\nFato Curioso: Finalize com um fato interessante ou inesperado sobre a fotossíntese.\n\nA linguagem deve ser acessível, direta e engajadora, evitando jargões técnicos desnecessários.',
        },
        {
            titulo: 'Técnicas: Zero-Shot Prompting (Fotossíntese)',
            texto: 'Explique o conceito de fotossíntese para alunos do 6º ano usando uma analogia com uma fábrica.',
        },
        {
            titulo: 'Técnicas: Few-Shot Prompting (Fotossíntese)',
            texto: 'Explique fotossíntese para alunos do 6º ano. Siga estes exemplos:\n\n• "A fotossíntese é como uma cozinha: a planta pega ingredientes (água, luz, CO2) e prepara seu alimento."\n• "A fotossíntese é como uma usina solar: a planta capta luz e transforma em energia."\n\nAgora faça uma analogia com uma fábrica.',
        },
        {
            titulo: 'Técnicas: Chain-of-Thought Prompting (Fotossíntese)',
            texto: 'Explique fotossíntese para alunos do 6º ano usando analogia com fábrica.\n\nPense passo a passo:\n1. O que é uma fábrica? (matéria-prima, energia, produção)\n2. O que a planta precisa para fazer fotossíntese?\n3. Como cada elemento da fábrica se relaciona com a planta?\n4. Qual é o produto final da fotossíntese?\n\nAgora escreva a explicação completa.',
        },
        {
            titulo: 'Técnicas: Prompt Chaining (Fotossíntese)',
            texto: 'Prompt 1: "Quais são os 3 principais elementos de uma fábrica?"\nPrompt 2: "Agora liste os 3 principais elementos da fotossíntese"\nPrompt 3: "Com base nas listas anteriores: relacione cada elemento da fábrica com um elemento da fotossíntese"\nPrompt 4: "Agora escreva uma explicação completa da fotossíntese para o 6º ano usando a analogia que construímos"',
        },
        {
            titulo: 'Técnicas: Generate Knowledge Prompting (Fotossíntese)',
            texto: 'Prompt 1: "Liste 5 fatos essenciais sobre fotossíntese que uma criança do 6º ano precisa saber"\nPrompt 2: "Com base nesses 5 fatos, crie uma explicação da fotossíntese usando analogia com uma fábrica para alunos do 6º ano"',
        },
        {
            titulo: 'Exercício Prático 2: Zero-shot Prompting (TDAH)',
            texto: 'Crie 3 dicas para ensinar reciclagem para uma criança de 8 anos com TDAH.',
        },
        {
            titulo: 'Exercício Prático 2: Few-shot Prompting (TDAH)',
            texto: 'Crie 3 dicas para ensinar reciclagem para uma criança com TDAH.\nSiga o padrão dos exemplos abaixo:\n\nExemplo 1 - Ciências: "Use um experimento curto de até 2 minutos"\nExemplo 2 - Matemática: "Use blocos coloridos para contar"\nExemplo 3 - Leitura: "Divida o texto em 3 frases com ícones"\n\nAgora crie as 3 dicas sobre reciclagem seguindo o mesmo padrão.',
        },
        {
            titulo: 'Exercício Prático 2: Chain-of-Thought Prompting (TDAH)',
            texto: 'Preciso ensinar reciclagem para um aluno com TDAH (8 anos, atenção curta).\n\nPense passo a passo:\n1. Qual é a principal dificuldade do TDAH neste tema?\n2. Que tipo de atividade prende mais a atenção?\n3. Como dividir o conteúdo em partes de 1-2 minutos?\n4. Que reforço visual ou tátil posso usar?\n\nDepois de pensar em cada passo, crie um plano de 3 atividades sobre reciclagem seguindo essas conclusões.',
        },
        {
            titulo: 'Exercício Prático 2: Prompt Chaining (TDAH)',
            texto: 'Prompt 1: "Liste os 3 conceitos mais importantes sobre reciclagem para uma criança de 8 anos."\nPrompt 2: "Para cada item da lista anterior, sugira uma analogia simples com o dia a dia da criança."\nPrompt 3: "Com base nas analogias, crie uma atividade prática de até 2 minutos para cada conceito."\nPrompt 4: "Organize as 3 atividades em uma sequência lógica, da mais fácil para a mais difícil."',
        },
        {
            titulo: 'Exercício Prático 2: Generate Knowledge (TDAH)',
            texto: 'Prompt 1: "Liste 8 fatos essenciais sobre reciclagem que uma criança de 8 anos com TDAH precisa saber. Priorize fatos concretos e visuais."\nPrompt 2: "Com base nos 8 fatos que você listou, crie um miniconto ilustrado (3 parágrafos curtos) sobre reciclagem, usando personagens e cores. Destine para criança com TDAH."',
        },
        {
            titulo: 'Criação de imagens 1: Prompt Inicial',
            texto: 'Crie uma imagem que ilustre o slide cujo título é "CRIAÇÃO DE IMAGENS COM IA GENERATIVA". A imagem deve retratar um professor trabalhando de maneira inspiradora e sonhadora. O cenário é de uma biblioteca calma cheia de livros coloridos. O estilo artístico deverá ser animação futurista da disney.',
        },
        {
            titulo: 'Criação de imagens 1: Prompt Detalhado',
            texto: "Crie uma imagem que ilustre o slide cujo título é \"CRIAÇÃO DE IMAGENS COM IA GENERATIVA\". Siga as instruções:\n\nCena educacional futurista em estilo Disney-Pixar mostrando um professor entusiasmado de 30-40 anos, de etnia diversa, guiando estudantes em uma biblioteca high-tech. O professor está cercado por hologramas coloridos de imagens geradas por IA que flutuam no ar - mostrando dragões de fantasia, paisagens surrealistas e retratos criativos. Ele gesticula animadamente enquanto explica os processos criativos, com expressão facial inspiradora e sonhadora.\n\nCenário: Biblioteca moderna com estantes altas de madeira escura repletas de livros coloridos, mas integrada com painéis digitais interativos e luzes LED azuis suaves. Raios de luz solar filtram por vitrais futuristas, criando atmosfera mágica e acolhedora.\n\nEstilo artístico: Animação 3D da Disney em estilo 'Operação Big Hero' ou 'Divertidamente', com cores vibrantes, iluminação cinematográfica e detalhes futuristas. Renderização em alta definição com profundidade de campo suave.\n\nElementos específicos:\n• No primeiro plano: Professor em pé sobre plataforma circular com interface holográfica;\n• Ao redor: 3-4 estudantes diversos observando fascinados as imagens flutuantes;\n• Fundo: Estantes infinitas de livros que se misturam com tecnologia digital;\n• Detalhes mágicos: Partículas de luz dançando ao redor das imagens holográficas;\n• Humor: Inspirador, futurista, educacional e magicamente realista.",
        },
        {
            titulo: 'Criação de imagens 2: Prompt Inicial (Floresta)',
            texto: 'Crie uma imagem da Floresta Amazônica.',
        },
        {
            titulo: 'Criação de imagens 2: Prompt Detalhado (Floresta)',
            texto: 'Crie uma imagem representativa da Floresta Amazônica brasileira com árvores altas e copas fechadas, rio serpenteando ao fundo, araras-vermelhas voando, macaco-prego em um galho. Cena de ecossistema completo com interações entre espécies visíveis. Estilo ilustração realista com cores vibrantes. Humor claro e informativo, transmitindo riqueza natural. Sem elementos humanos ou desmatamento. Formato paisagem.',
        },
    ];

    const objetivos = [
        'Apresentar os conceitos básicos da IA generativa e a técnica da Engenharia de Prompt',
        'Demonstrar como aplicar essas tecnologias no cotidiano profissional dos professores',
        'Explorar como transformar instruções simples em respostas complexas e personalizadas e, dessa forma obter resultados aprimorados',
    ];

    const materiaisDownload = [
        {
            nome: 'Apresentação - Engenharia de Prompts',
            arquivo: '/materiais/AULA2.pdf',
        },
    ];

    const referencias = [
        {
            titulo: 'AWS. O que é Prompt Engineering? [S.l.]: Amazon Web Services.',
        },
        {
            titulo: 'BROWN, T. B. et al. Language Models are Few-Shot Learners. 2020.',
            link: 'https://arxiv.org/abs/2005.14165',
        },
        {
            titulo: 'IBM. A engenharia de prompts. [S.l.]: IBM.',
            link: 'https://www.ibm.com/br-pt/think/topics/prompt-engineering',
        },
        {
            titulo: 'LEWIS, P. et al. Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks. 2020.',
            link: 'https://arxiv.org/abs/2005.11401',
        },
        {
            titulo: 'MICROSOFT. Introdução aos conceitos básicos de IA generativa. [S. l.], [2023?].',
            link: 'https://learn.microsoft.com/pt-br/training/modules/intro-generative-ai-explore-basics/',
        },
        {
            titulo: 'MICROSOFT. Criar prompts para ferramentas de IA generativa. [S. l.], [2023?].',
            link: 'https://learn.microsoft.com/pt-br/training/modules/create-prompts-for-generative-ai-training-tools/',
        },
        {
            titulo: 'MICROSOFT. Criar imagens com IA generativa. [S. l.], [2023?].',
            link: 'https://learn.microsoft.com/pt-br/training/modules/create-images-with-generative-ai/',
        },
    ];

    return (
        <AulaTemplate
            numeroAula={2}
            titulo="Engenharia de Prompts"
            descricao="Esta aula tem como objetivo apresentar, de forma clara e prática, os conceitos básicos da IA generativa e a técnica da Engenharia de Prompt – a habilidade de operar com eficácia com essas ferramentas. Nosso foco é demonstrar como o professor pode utilizar essas tecnologias para otimizar o planejamento de aulas, criar materiais didáticos acessíveis e diversificados, e desenvolver estratégias pedagógicas mais engajadoras e inclusivas."
            objetivos={objetivos}
            prompts={prompts}
            materiaisDownload={materiaisDownload}
            referencias={referencias}
            color="from-[#10bb82] to-[#0d8f66]"
        />
    );
};

export default Aula2;
