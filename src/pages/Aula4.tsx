import AulaTemplate from '../components/AulaTemplate';

const Aula4 = () => {
    const prompts = [
        {
            titulo: 'Prompt 1: Critérios de Avaliação Adaptados',
            texto: 'Crie critérios de avaliação adaptados para um aluno com [TIPO DE DEFICIÊNCIA] que está trabalhando com [ATIVIDADE/CONTEÚDO]. Os critérios devem: 1) Ser mensuráveis e objetivos, 2) Considerar as limitações e potencialidades do aluno, 3) Focar no progresso individual, 4) Incluir diferentes formas de demonstração do aprendizado.',
        },
        {
            titulo: 'Prompt 2: Registro de Observações',
            texto: 'Ajude-me a criar um template de registro diário de observações para monitorar o desenvolvimento de um aluno com [DEFICIÊNCIA]. O template deve incluir: 1) Áreas de desenvolvimento (cognitivo, motor, social, emocional), 2) Espaço para observações específicas, 3) Indicadores de progresso, 4) Sugestões de intervenções.',
        },
        {
            titulo: 'Prompt 3: Análise de Progresso',
            texto: 'Com base nas seguintes observações sobre o aluno [NOME/INICIAIS]: [COLE AS OBSERVAÇÕES]. Analise: 1) Principais avanços identificados, 2) Dificuldades persistentes, 3) Estratégias que funcionaram bem, 4) Recomendações para próximas intervenções, 5) Aspectos que requerem atenção especial.',
        },
        {
            titulo: 'Prompt 4: Ajuste de Estratégias',
            texto: 'A estratégia atual para ensinar [CONTEÚDO] ao aluno com [DEFICIÊNCIA] não está surtindo o efeito esperado. As dificuldades observadas são: [DESCREVA AS DIFICULDADES]. Sugira 5 estratégias alternativas de intervenção pedagógica, explicando como implementá-las e quais resultados esperar.',
        },
        {
            titulo: 'Prompt 5: Comunicação com a Família',
            texto: 'Redija um comunicado para a família do aluno sobre o progresso observado este mês. Inclua: 1) Conquistas e avanços (tom positivo), 2) Áreas que ainda precisam de apoio, 3) Sugestões de atividades para fazer em casa, 4) Próximos objetivos. Use linguagem acessível e acolhedora.',
        },
    ];

    const objetivos = [
        'Desenvolver estratégias de monitoramento contínuo do aluno',
        'Aprender a registrar e analisar observações de forma sistemática',
        'Criar ferramentas personalizadas de acompanhamento',
        'Identificar padrões de progresso e áreas de dificuldade',
        'Ajustar intervenções pedagógicas com base em dados observados',
        'Comunicar efetivamente com famílias e equipe multidisciplinar',
    ];

    const materiaisDownload = [
        {
            nome: 'Apresentação - Monitoramento do Desenvolvimento dos Alunos',
            arquivo: '/materiais/AULA4.pdf',
        },
    ];

    return (
        <AulaTemplate
            numeroAula={4}
            titulo="IAGen para AEE II - Monitoramento"
            descricao="Aprenda a usar IA como aliada no monitoramento do desenvolvimento dos alunos. Nesta aula, você descobrirá como criar ferramentas de acompanhamento, analisar progressos e ajustar estratégias pedagógicas de forma eficaz."
            objetivos={objetivos}
            prompts={prompts}
            materiaisDownload={materiaisDownload}
            color="from-[#7521ac] to-[#a855f7]"
        />
    );
};

export default Aula4;
