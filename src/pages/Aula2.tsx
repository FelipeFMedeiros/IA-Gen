import AulaTemplate from '../components/AulaTemplate';

const Aula2 = () => {
    const prompts = [
        {
            titulo: 'Prompt 1: Criando Perguntas sobre O Pequeno Príncipe de forma simples',
            texto: 'Crie perguntas sobre O Pequeno Príncipe'
        },
        {
            titulo:  'Prompt 2: Criando Perguntas sobre O Pequeno Príncipe de forma avançada',
            texto: 'Atue como um professor de Língua Portuguesa especialista em criação de atividades pedagógicas para o Ensino Fundamental II.\n\nContexto: Vou trabalhar o capítulo XXI de "O Pequeno Príncipe" (o encontro com a raposa) com uma turma do 7º ano. Meu objetivo é que os alunos desenvolvam a capacidade de interpretação de texto e pensamento crítico, indo além da compreensão superficial.\n\nSua tarefa é: Criar 5 perguntas de interpretação de texto sobre esse capítulo.\n\nInstruções específicas: As perguntas devem exigir que o aluno reflita sobre os sentimentos dos personagens, o significado de metáforas e a moral da história. Evite perguntas cuja resposta seja uma simples cópia de trecho do livro ou um fato óbvio. Inclua uma pergunta que faça uma ligação entre o conceito de "cativar" no livro e uma experiência real da vida do aluno.\n\nFormato de saída: Para cada pergunta, forneça também um gabarito comentado com a resposta esperada e os objetivos de aprendizagem daquela questão.\n\nApresente a resposta em uma tabela simples com 3 colunas: "Pergunta", "Gabarito", "Objetivo de Aprendizagem".'
        },
        {
            titulo: 'Prompt 3: Primeiro Exercício',
            texto: 'Você é um divulgador científico especializado em explicar conceitos complexos para adolescentes. Sua tarefa é criar um material de apoio para uma aula de Ciências do 7º ano sobre fotossíntese. Baseie sua explicação em conceitos científicos consolidados. Estruture a resposta da seguinte forma:\n\nTítulo: Chamativo e simples.\n\nAnalogia Inicial: Use uma analogia envolvendo uma "fábrica de comida" para introduzir o conceito.\n\nLista Simples dos "Ingredientes" e "Produtos": Crie uma tabela de duas colunas mostrando o que a planta "pega" da natureza (Ingredientes) e o que ela "fabrina" (Produtos).\n\nExplicação Curta: Em no máximo 3 parágrafos, explique o processo de forma simples, mencionando a clorofila e a importância da luz solar.\n\nFato Curioso: Finalize com um fato interessante ou inesperado sobre a fotossíntese.\n\nA linguagem deve ser acessível, direta e engajadora, evitando jargões técnicos desnecessários.'
        },
        {
            titulo: 'Prompt 4: Segundo Exercício',
            texto: 'Atue como um especialista em análise de dados educacionais. Analise a planilha abaixo e identifique:\n\n1. Os 3 principais padrões de desempenho da turma;\n2. Estudantes com desempenho acima da média;\n3. Estudantes que precisam de intervenção imediata;\n4. Habilidades que a turma domina e as que precisam de reforço.\n\n[Dados da planilha aqui]\n\nApresente a análise em tópicos objetivos.'
        },
        {
            titulo: 'Prompt 5: Terceiro Exercício',
            texto: 'Com base na análise anterior, elabore um relatório profissional para reunião de pais com a seguinte estrutura:\n\nSEÇÃO 1: DESEMPENHO GERAL DA TURMA\n- Médias por competência;\n- Evolução ao longo do bimestre.\n\nSEÇÃO 2: ANÁLISE DETALHADA\n- Grupos de desempenho (excelente, satisfatório, atenção);\n- Habilidades consolidadas e fragilidades.\n\nSEÇÃO 3: RECOMENDAÇÕES PEDAGÓGICAS\n- Intervenções para a turma\n- Ações individuais específicas\n- Ações individuais específicas\n\nSEÇÃO 4: PRÓXIMOS PASSOS\n- Plano de ação para o próximo bimestre\n\nUse linguagem clara, dados concretos e seja construtivo nas críticas.'
        },
        {
            titulo: 'Prompt 6: Criação de imagens - Método 1',
            texto: 'Crie uma imagem que ilustre o slide cujo título é "CRIAÇÃO DE IMAGENS COM IA GENERATIVA". A imagem deve retratar um professor trabalhando de maneira inspiradora e sonhadora. O cenário é de uma biblioteca calma cheia de livros coloridos. O estilo artístico deverá ser animação futurista da disney.'
        },
        {
            titulo: 'Prompt 7: Criação de imagens - Método 2',
            texto: 'Ipê-amarelo florido majestoso (assunto) em uma paisagem do cerrado com gramíneas altas e solo avermelhado (configuração), no estilo ilustração científica detalhada (estilo artístico), com atmosfera ensolarada e vibrante (humor), mostrando raízes profundas, folhas verdes brilhantes e detalhes dos botões florais (detalhes específicos)'
        }
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

    return (
        <AulaTemplate
            numeroAula={2}
            titulo="Engenharia de Prompts"
            descricao="Esta aula tem como objetivo apresentar, de forma clara e prática, os conceitos básicos da IA generativa e a técnica da Engenharia de Prompt – a habilidade de operar com eficácia com essas ferramentas. Nosso foco é demonstrar como o professor pode utilizar essas tecnologias para otimizar o planejamento de aulas, criar materiais didáticos acessíveis e diversificados, e desenvolver estratégias pedagógicas mais engajadoras e inclusivas."
            objetivos={objetivos}
            prompts={prompts}
            materiaisDownload={materiaisDownload}
            color="from-[#10bb82] to-[#0d8f66]"
        />
    );
};

export default Aula2;
