import AulaTemplate from '../components/AulaTemplate';

const Aula2 = () => {
    const prompts = [
        {
            titulo: 'Prompt 1: Estrutura de um Bom Prompt',
            texto: 'Crie um guia passo a passo sobre como estruturar um prompt eficaz para IA. Inclua elementos essenciais como contexto, tarefa específica, formato desejado e tom de voz.',
        },
        {
            titulo: 'Prompt 2: Refinando Respostas',
            texto: 'Você é um assistente pedagógico especializado em educação especial. Preciso que você [TAREFA ESPECÍFICA]. O público-alvo são alunos com [TIPO DE DEFICIÊNCIA], na faixa etária de [IDADE]. O material deve ser [CARACTERÍSTICAS DESEJADAS]. Forneça exemplos práticos e adaptados.',
            exemplo: 'Substitua os campos entre colchetes com suas informações específicas.',
        },
        {
            titulo: 'Prompt 3: Iteração e Melhoria',
            texto: 'A resposta anterior está boa, mas preciso que você: 1) Simplifique a linguagem, 2) Adicione mais exemplos visuais, 3) Torne o conteúdo mais interativo.',
        },
        {
            titulo: 'Prompt 4: Prompt com Persona',
            texto: 'Atue como um professor de educação especial com 20 anos de experiência em AEE. Seu objetivo é criar materiais adaptados que sejam inclusivos e eficazes. [CONTINUE COM SUA SOLICITAÇÃO ESPECÍFICA]',
        },
    ];

    const objetivos = [
        'Dominar as técnicas de criação de prompts eficazes',
        'Aprender a contextualizar adequadamente as solicitações para IA',
        'Desenvolver habilidades de iteração e refinamento de prompts',
        'Compreender como obter respostas mais precisas e úteis',
        'Aplicar estratégias de prompt engineering no contexto educacional',
    ];

    const materiaisDownload = [
        {
            nome: 'Guia de Engenharia de Prompts',
            arquivo: '/materiais/aula2-engenharia-prompts.pdf',
        },
        {
            nome: 'Template de Prompts para AEE',
            arquivo: '/materiais/aula2-templates.pdf',
        },
    ];

    return (
        <AulaTemplate
            numeroAula={2}
            titulo="Engenharia de Prompts"
            descricao="Aprenda a arte e a ciência de criar prompts eficazes que gerem respostas de alta qualidade das IAs. Nesta aula, você dominará técnicas essenciais para comunicar-se de forma clara e objetiva com as ferramentas de IA."
            objetivos={objetivos}
            prompts={prompts}
            materiaisDownload={materiaisDownload}
            color="from-purple-500 to-pink-500"
        />
    );
};

export default Aula2;
