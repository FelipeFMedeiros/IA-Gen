import AulaTemplate from '../components/AulaTemplate';

const Aula3 = () => {
    const prompts = [
        {
            titulo: 'Oficina 01: Simplificando Textos (TEA)',
            texto: 'Aja como um professor especialista em educação especial. Simplifique o seguinte texto [texto aqui] sobre o Ciclo da Água para um aluno do 3º ano com autismo, que aprende de forma literal e visual. Instrução Chave: O aluno tem hiperfoco em dinossauros. Use frases curtas e diretas. Substitua termos complexos como "evaporação", "condensação" e "precipitação" por explicações simples e concretas (ex: "a água vira vapor e sobe para o céu"). Divida o conteúdo em 4 parágrafos curtos e numerados. Ao final, sugira 3 imagens que poderiam ilustrar cada etapa do processo.',
        },
        {
            titulo: 'Oficina 01: Variação (História "Dino Gota")',
            texto: 'Agora, transforme a explicação simplificada do Ciclo da Água em uma pequena história de 5 parágrafos. O personagem principal deve ser um dinossauro chamado "Dino Gota", que viaja pelo ciclo da água. Use a mesma linguagem simples e direta.',
        },
        {
            titulo: 'Oficina 02: Materiais Visuais (Sequência)',
            texto: 'Aja como um designer instrucional para alunos com deficiência intelectual. Crie uma sequência de 6 passos visuais para a atividade "Plantar um feijão no algodão". Para cada passo, descreva um ícone ou imagem simples e uma frase com no máximo 4 palavras. A sequência deve ser lógica e fácil de seguir. O formato de saída deve ser uma lista numerada. Exemplo: "1. [Ícone de um copo plástico] Pegar o copo."',
        },
        {
            titulo: 'Oficina 02: Variação (Quadro de Rotina)',
            texto: 'Com base na sequência visual criada, gere um "Quadro de Rotina" em formato de tabela com duas colunas: "O que fazer?" e "Já fiz!". A primeira coluna deve conter a descrição da imagem de cada passo, e a segunda coluna deve ter um espaço em branco para que a aluna possa marcar (com um X ou um adesivo) após completar a tarefa.',
        },
        {
            titulo: 'Oficina 03: Problemas de Matemática (Super-Heróis)',
            texto: 'Aja como um professor de matemática do 5º ano, especialista em gamificação e educação inclusiva. Instrução Chave: O aluno tem hiperfoco no universo de super-heróis. Crie 5 problemas de matemática que envolvam as quatro operações básicas (adição, subtração, multiplicação e divisão). Todos os problemas devem ser temáticos, usando personagens e situações do universo dos Vingadores da Marvel. Certifique-se de que os problemas sejam claros, diretos e adequados para a faixa etária de 10-11 anos.',
        },
        {
            titulo: 'Oficina 03: Variação (Tabela de Lógica)',
            texto: 'Agora, crie uma atividade de lógica e classificação. Gere uma tabela com 3 colunas: "Herói", "Poder Principal" e "Objeto Associado". Preencha a tabela com 5 heróis dos Vingadores, mas deixe 3 células em branco de forma aleatória para que o aluno possa preencher com a informação correta.',
        },
        {
            titulo: 'Oficina 04: Apoio à Comunicação (Prancha de Brincadeiras)',
            texto: 'Aja como um fonoaudiólogo especialista em comunicação alternativa. Crie o conteúdo para uma prancha de comunicação temática sobre "Brincadeiras no Parquinho". Gere uma lista com 10 itens. Cada item deve conter a descrição de um ícone visual simples e uma frase curta e direta correspondente. Inclua verbos de ação como "Eu quero" e nomes de brincadeiras comuns. Por exemplo: [Ícone de uma criança no balanço] Eu quero balançar.',
        },
        {
            titulo: 'Oficina 04: Variação (Prancha de Sentimentos)',
            texto: 'Crie uma segunda prancha de comunicação com o tema "Como estou me sentindo?". Gere uma lista de 6 sentimentos básicos (feliz, triste, com raiva, cansado, com dor, animado). Para cada sentimento, descreva um ícone de emoji claro e uma frase simples como "Estou feliz.". Adicione também duas opções de ação: "[Ícone de uma pessoa abraçando um boneco] Eu quero um abraço." e "[Ícone de uma pessoa sentada quieta] Eu preciso de um tempo."',
        },
        {
            titulo: 'Aplicação Prática: Histórias Sociais',
            texto: 'Crie uma história social curta, estrelada pelo Homem-Aranha, para ensinar um aluno de 8 anos com TEA a pedir desculpas quando esbarrar em um colega no recreio.',
        },
        {
            titulo: 'Exemplo Prático: Encadeamento de Prompts (Ciências)',
            texto: '01 (Objetivo): "Aja como um professor de ciências. Liste 3 objetivos de aprendizagem simples sobre o ciclo da água."\n02 (Atividade): "Focando no objetivo 2, crie uma atividade prática e lúdica de 15 minutos para fazer em sala de aula."\n03 (Avaliação): "Agora, com base nessa atividade, gere 3 perguntas curtas para avaliar se os alunos entenderam o conceito."',
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

    const referencias = [
        {
            titulo: 'DUQUE-PEREIRA, Ives da Silva; MOURA, Sergio Arruda de. Compreendendo a inteligência artificial generativa na perspectiva da língua.',
        },
        {
            titulo: 'BERSCH, R.; SARTORETTO, M. L.. Atendimento Educacional Especializado (AEE). Assistiva - Tecnologia e Educação',
        },
        {
            titulo: 'CELENTANO, S. P.; GIBERTONI, D. Abordagens da Inteligência no Contexto do Transtorno do Espectro Autista. Revista Interface Tecnológica, v. 19, n.',
        },
        {
            titulo: 'SAHOO, Pranab; Singh K., Ayush; Saha, Sriparna; Jain, Vinija; Mondal, Samrat; Chadha,Aman. A Systematic Survey of Prompt Engineering in Large Language Models: Techniques and Applications. Frontiers in Education, [s.l.], v. 8, 2023, p. 1-16, jul. 2023.',
        },
        {
            titulo: 'ANDRADE, Adriana de Fátima; NICOLAS, Alexandre Cruz. Inteligência Artificial e Práticas Pedagógicas: desafios e perspectivas para a educação contemporânea. Anais do II Congresso Nacional de Pesquisas e Práticas em Educação, v. 3, n. 2, p. 1-6, 2025.',
        },
        {
            titulo: 'CRUZ, K. R. da; TOLEDO, R. da S.; OLIVEIRA, A. S. de, et al. IA na sala de aula: como a Inteligência Artificial está redefinindo os métodos de ensino.',
        },
        {
            titulo: 'NASCIMENTO, William Pereira do. Inteligência artificial e educação: soluções inovações para o aprendizado de alunos com Transtorno do Espectro Autista (TEA).',
        },
        {
            titulo: 'GOMES, L. V. G.; DIAS, P. J. F.; PINTO, E. A. Inteligência Artificial na Educação Matemática Inclusiva: Possibilidades para o Planejamento de Aulas para Estudantes com Transtorno do Espectro Autista. (2024).',
        },
        {
            titulo: 'CIDDL. Generative AI Prompt Engineering for Educators. 2025.',
            link: 'https://ciddl.org/ciddl-research-and-practice-brief-generative-ai-prompt-engineering-for-educators/',
        },
        {
            titulo: 'ERIC. The Future of Artificial Intelligence in Special Education. 2024.',
            link: 'https://files.eric.ed.gov/fulltext/EJ1387002.pdf',
        },
        {
            titulo: 'NATIONAL CENTER ON ACCESSIBLE EDUCATIONAL MATERIALS. AI & Accessibility: Supporting All Learners. 2024.',
            link: 'https://aem.cast.org/get-started/resources/2024/ai--accessibility-supporting-all-learners',
        },
        {
            titulo: 'OECD. Leveraging artificial intelligence to support students with special education needs. 2025.',
            link: 'https://www.oecd.org/en/publications/leveraging-artificial-intelligence-to-support-students-with-special-education-needs_1e3dffa0-en.html',
        },
        {
            titulo: 'SAHOO, P. et al. A systematic survey of prompt engineering in large language models: techniques and applications. Frontiers in Education, 2023.',
        },
        {
            titulo: 'DAVILA-MORAN, R. C. et al. Brief Prompt-Engineering Clinic Substantially Improves AI Literacy and Reduces Technology Anxiety in First-Year Teacher-Education Students: A Pre-Post Pilot Study. Education Sciences, v. 15, n. 8, p. 1010, 2025.',
            link: 'https://doi.org/10.3390/educsci15081010',
        },
        {
            titulo: 'DONG, Y.; ZHANG, L.; LI, H. ChatGPT-based text simplification and self-explanation prompts in L2 reading: Effects on comprehension and cognitive load. Computer Assisted Language Learning, p. 1-25, 2024.',
        },
        {
            titulo: 'KHAN ACADEMY. Engenharia de prompt para planos de aula. Blog Khan Academy, 2026.',
            link: 'https://blog.khanacademy.org/pt-br/engenharia-de-prompt-para-planos-de-aula/',
        },
        {
            titulo: 'REIS, et al. Apud: Textual Simplification with Artificial Intelligence for Students with Reading Difficulties: A Systematic Review. 2025.',
        },
        {
            titulo: 'SAKOWICZ, M.; HAMIDI, F. Exploring the role of generative AI in supporting students with disabilities, through the lens of universal design for learning. American Journal of STEM Education, v. 15, p. 1-22, 2025.',
            link: 'https://doi.org/10.32674/yeyaaq64',
        },
        {
            titulo: 'SILVA, T. O.; OLIVEIRA, J. M. L.; JENNINGS, C. A. F. Mineração de Dados Educacionais e Inteligência Artificial Aplicadas à Adaptação Curricular em Contextos Inclusivos. Revista Tópicos, Rio de Janeiro, v. 4, n. 32, p. 1-15, 2026.',
            link: 'https://doi.org/10.70773/revistatopicos/776517243',
        },
        {
            titulo: 'LEE, J. et al. AutiHero: Leveraging Generative AI in Social Narratives to Engage Parents in Story-Driven Behavioral Guidance for Autistic Children. Human-Computer Interaction (HCI), 2025.',
        },
        {
            titulo: 'WANG, Y. et al. (Estudo EMooly). Enhancing Emotion Recognition in Autistic Children through Personalized Social Stories Generated by AI. PubMed Central (PMC), PMC12322814, 2024.',
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
            referencias={referencias}
            color="from-[#ff914d] to-[#ffb380]"
        />
    );
};

export default Aula3;
