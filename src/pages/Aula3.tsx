import AulaTemplate from '../components/AulaTemplate';

const Aula3 = () => {
    const prompts = [
        {
            titulo: 'Prompt 1: Adaptação de Texto',
            texto: 'Preciso adaptar o seguinte texto para um aluno com [TIPO DE DEFICIÊNCIA]: [COLE O TEXTO AQUI]. Adapte considerando: 1) Linguagem simplificada, 2) Frases curtas e diretas, 3) Conceitos apresentados de forma concreta, 4) Sugestões de recursos visuais ou sensoriais que possam complementar.',
        },
        {
            titulo: 'Prompt 2: Criação de Atividades Adaptadas',
            texto: 'Crie 5 atividades educacionais adaptadas sobre o tema [TEMA] para alunos com [TIPO DE DEFICIÊNCIA]. As atividades devem: 1) Seguir a BNCC, 2) Ser práticas e engajadoras, 3) Incluir diferentes níveis de dificuldade, 4) Considerar recursos de acessibilidade, 5) Incluir instruções claras para o professor.',
        },
        {
            titulo: 'Prompt 3: Recursos Visuais e Multissensoriais',
            texto: 'Sugira ideias de recursos visuais, táteis ou multissensoriais para ensinar o conceito de [CONCEITO] a um aluno com [DEFICIÊNCIA]. Considere materiais de baixo custo que possam ser facilmente criados ou encontrados.',
        },
        {
            titulo: 'Prompt 4: Jogos Educacionais Inclusivos',
            texto: 'Desenvolva um jogo educacional inclusivo sobre [TEMA] que possa ser jogado por alunos com e sem deficiência. Inclua: 1) Regras claras e simples, 2) Adaptações para diferentes tipos de deficiência, 3) Objetivos de aprendizagem, 4) Materiais necessários, 5) Variações do jogo.',
        },
        {
            titulo: 'Prompt 5: Histórias Personalizadas',
            texto: 'Crie uma história educativa sobre [TEMA] que inclua um personagem com [TIPO DE DEFICIÊNCIA] como protagonista. A história deve: 1) Ter linguagem adequada para [FAIXA ETÁRIA], 2) Promover valores de inclusão e diversidade, 3) Incluir elementos educativos sobre [CONTEÚDO ESPECÍFICO], 4) Ter final positivo e motivador.',
        },
    ];

    const objetivos = [
        'Aprender a adaptar materiais didáticos existentes usando IA',
        'Criar recursos educacionais personalizados para diferentes deficiências',
        'Desenvolver atividades inclusivas e acessíveis',
        'Explorar possibilidades de recursos multissensoriais',
        'Gerar ideias criativas para engajar todos os alunos',
        'Aplicar princípios da BNCC nas adaptações',
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
            descricao="Nesta aula prática, você aprenderá a usar IA para criar e adaptar recursos educacionais específicos para alunos com necessidades especiais. Explore técnicas para gerar materiais personalizados, atividades inclusivas e conteúdos acessíveis."
            objetivos={objetivos}
            prompts={prompts}
            materiaisDownload={materiaisDownload}
            color="from-[#ff914d] to-[#ffb380]"
        />
    );
};

export default Aula3;
