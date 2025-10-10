import AulaTemplate from '../components/AulaTemplate';

const Aula1 = () => {
    const prompts = [
        {
            titulo: 'Prompt 1: Entendendo IA Generativa',
            texto: 'Explique de forma simples e objetiva o que é Inteligência Artificial Generativa e como ela pode ser aplicada na educação especial para criar materiais adaptados.',
        },
        {
            titulo: 'Prompt 2: Benefícios da IA no AEE',
            texto: 'Liste 5 benefícios específicos do uso de IA Generativa no Atendimento Educacional Especializado, considerando diferentes tipos de deficiências.',
        },
        {
            titulo: 'Prompt 3: Ferramentas Disponíveis',
            texto: 'Quais são as principais ferramentas de IA Generativa gratuitas que professores podem usar para criar recursos educacionais? Liste e descreva brevemente cada uma.',
        },
    ];

    const objetivos = [
        'Compreender os conceitos básicos de Inteligência Artificial Generativa',
        'Identificar as principais ferramentas de IA disponíveis para educação',
        'Reconhecer as aplicações práticas da IA no contexto do AEE',
        'Entender os limites e possibilidades da tecnologia na educação especial',
    ];

    const materiaisDownload = [
        {
            nome: 'Apresentação - Introdução à IAGen',
            arquivo: '/materiais/aula1-introducao.pdf',
        },
    ];

    return (
        <AulaTemplate
            numeroAula={1}
            titulo="Introdução da IAGen"
            descricao="Nesta primeira aula, vamos explorar os fundamentos da Inteligência Artificial Generativa e compreender como essa tecnologia pode revolucionar a forma como criamos materiais e recursos para o Atendimento Educacional Especializado."
            objetivos={objetivos}
            prompts={prompts}
            materiaisDownload={materiaisDownload}
            color="from-blue-500 to-cyan-500"
        />
    );
};

export default Aula1;
