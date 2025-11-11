import AulaTemplate from '../components/AulaTemplate';

const Aula3 = () => {
    const prompts = [
        {
            titulo: 'Oficina 1 - Simplificando textos',
            texto: 'Aja como um professor especialista em educação especial. Simplifique o seguinte texto [texto aqui] sobre o Ciclo da Água para um aluno do 3º ano com autismo, que aprende de forma literal e visual. Instrução Chave: O aluno tem hiperfoco em dinossauros. Use frases curtas e diretas. Substitua termos complexos como "evaporação", "condensação" e "precipitação" por explicações simples e concretas (ex: "a água vira vapor e sobe para o céu"). Divida o conteúdo em 4 parágrafos curtos e numerados. Ao final, sugira 3 imagens que poderiam ilustrar cada etapa do processo.',
        },
        {
            titulo: 'Oficina 1 - Simplificando textos (variante)',
            texto: 'Agora, transforme a explicação simplificada do Ciclo da Água em uma pequena história de 5 parágrafos. O personagem principal deve ser um dinossauro chamado "Dino Gota", que viaja pelo ciclo da água. Use a mesma linguagem simples e direta.',
        },
        {
            titulo: 'Oficina 2 - Materiais Visuais',
            texto: 'Aja como um designer instrucional para alunos com deficiência intelectual. Crie uma sequência de 6 passos visuais para a atividade "Plantar um feijão no algodão". Para cada passo, descreva um ícone ou imagem simples e uma frase com no máximo 4 palavras. A sequência deve ser lógica e fácil de seguir. O formato de saída deve ser uma lista numerada. Exemplo: "1. [Ícone de um copo plástico] Pegar o copo."',
        },
        {
            titulo: 'Oficina 2 - Materiais Visuais (variante)',
            texto: 'Com base na sequência visual criada, gere um "Quadro de Rotina" em formato de tabela com duas colunas: "O que fazer?" e "Já fiz!". A primeira coluna deve conter a descrição da imagem de cada passo, e a segunda coluna deve ter um espaço em branco para que a aluna possa marcar (com um X ou um adesivo) após completar a tarefa.',
        },
        {
            titulo: 'Oficina 3 - Personalização de Atividades',
            texto: 'Aja como um professor de matemática do 5º ano, especialista em gamificação e educação inclusiva. Instrução Chave: O aluno tem hiperfoco no universo de super-heróis. Crie 5 problemas de matemática que envolvam as quatro operações básicas (adição, subtração, multiplicação e divisão). Todos os problemas devem ser temáticos, usando personagens e situações do universo dos Vingadores da Marvel. Certifique-se de que os problemas sejam claros, diretos e adequados para a faixa etária de 10-11 anos.',
        },
        {
            titulo: 'Oficina 3 - Personalização de Atividades (variante)',
            texto: 'Agora, crie uma atividade de lógica e classificação. Gere uma tabela com 3 colunas: "Herói", "Poder Principal" e "Objeto Associado". Preencha a tabela com 5 heróis dos Vingadores, mas deixe 3 células em branco de forma aleatória para que o aluno possa preencher com a informação correta.',
        },
        {
            titulo: 'Oficina 4 - Apoio à Comunicação',
            texto: 'Aja como um fonoaudiólogo especialista em comunicação alternativa. Crie o conteúdo para uma prancha de comunicação temática sobre "Brincadeiras no Parquinho". Gere uma lista com 10 itens. Cada item deve conter a descrição de um ícone visual simples e uma frase curta e direta correspondente. Inclua verbos de ação como "Eu quero" e nomes de brincadeiras comuns. Por exemplo: [Ícone de uma criança no balanço] Eu quero balançar.',
        },
        {
            titulo: 'Oficina 4 - Apoio à Comunicação (variante)',
            texto: 'Crie uma segunda prancha de comunicação com o tema "Como estou me sentindo?". Gere uma lista de 6 sentimentos básicos (feliz, triste, com raiva, cansado, com dor, animado). Para cada sentimento, descreva um ícone de emoji claro e uma frase simples como "Estou feliz." Adicione também duas opções de ação: "[Ícone de uma pessoa abraçando um boneco] Eu quero um abraço." e "[Ícone de uma pessoa sentada quieta] Eu preciso de um tempo."',
        },
        {
            titulo: 'Atividade Prática - Adaptação de Matemática',
            texto: 'Aja como um professor especialista em [Perfil A/B]. O aluno tem hiperfoco em [Interesse Escolhido]. Crie uma atividade de matemática sobre [Tema/Objetivo] que use [Interesse Escolhido] no contexto. Use uma linguagem muito simples, frases curtas, e o formato de lista numerada. A resposta deve ser uma questão de matemática e a sugestão de uma imagem visual que a ilustre.'
        },
    ];

    const objetivos = [
        'Compreender os conceitos de IA Generativa e Engenharia de Prompts.',
        'Identificar ferramentas de IA (como Gemini, ChatGPT, Perplexity AI) para personalização e otimização de recursos pedagógicos.',
        'Aplicar a Engenharia de Prompts para criar recursos adaptados para o Atendimento Educacional Especializado (AEE).',
        'Estruturar prompts eficazes usando Instrução e Contexto (público-alvo, hiperfoco, restrições).',
        'Prompts para usar nas IAs.',
    ];

    const materiaisDownload = [
        {
            nome: 'Apresentação - Criando Recursos e Materiais de Apoio',
            arquivo: '/materiais/AULA3.pdf',
        },
    ];

    return (
        <AulaTemplate
            numeroAula={3}
            titulo="IAGen para AEE I - Criando Recursos"
            descricao="Nesta aula, o objetivo central é aplicar os conceitos de Inteligência Artificial (IA) Generativa e Engenharia de Prompts na criação prática de recursos adaptados para a Educação Especial. Nosso foco é demonstrar como a IA pode ser uma ferramenta pedagógica, ética e inclusiva, permitindo que o professor otimize o tempo de planejamento, elabore materiais didáticos diversificados e adaptados às necessidades, interesses e habilidades dos alunos, e desenvolva estratégias de ensino mais significativas e personalizadas para atender à diversidade."
            objetivos={objetivos}
            prompts={prompts}
            materiaisDownload={materiaisDownload}
            color="from-[#ff914d] to-[#ffb380]"
        />
    );
};

export default Aula3;
