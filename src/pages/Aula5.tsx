import AulaTemplate from '../components/AulaTemplate';

const Aula5 = () => {
    const prompts = [
        {
            titulo: 'Prompt 1: Estrutura do Relatório',
            texto: 'Crie um modelo estruturado de Relatório de Desenvolvimento Individualizado para um aluno com [TIPO DE DEFICIÊNCIA]. O relatório deve incluir as seguintes seções: 1) Identificação do aluno, 2) Histórico educacional, 3) Descrição do funcionamento atual, 4) Objetivos trabalhados no período, 5) Estratégias utilizadas, 6) Progressos observados, 7) Dificuldades persistentes, 8) Recomendações e próximos passos.',
        },
        {
            titulo: 'Prompt 2: Descrição de Habilidades',
            texto: 'Ajude-me a descrever de forma detalhada e profissional as habilidades desenvolvidas pelo aluno [INICIAIS] com [DEFICIÊNCIA] nas seguintes áreas:\n- Área cognitiva: [DESCREVA OBSERVAÇÕES]\n- Área motora: [DESCREVA OBSERVAÇÕES]\n- Área socioemocional: [DESCREVA OBSERVAÇÕES]\n- Área comunicativa: [DESCREVA OBSERVAÇÕES]\n\nUse linguagem técnica apropriada para um relatório pedagógico.',
        },
        {
            titulo: 'Prompt 3: Objetivos e Metas',
            texto: 'Com base no perfil do aluno: [DESCREVA O PERFIL], e considerando os progressos já alcançados: [LISTE PROGRESSOS], sugira 5 objetivos específicos e mensuráveis para os próximos 6 meses. Para cada objetivo, indique: 1) Habilidade a ser desenvolvida, 2) Estratégias sugeridas, 3) Recursos necessários, 4) Indicadores de sucesso.',
        },
        {
            titulo: 'Prompt 4: Análise Comparativa',
            texto: 'Compare o desempenho atual do aluno com o início do período letivo. Dados iniciais: [COLE INFORMAÇÕES DO INÍCIO DO PERÍODO]. Dados atuais: [COLE INFORMAÇÕES ATUAIS]. Elabore uma análise comparativa destacando: 1) Áreas com maior evolução, 2) Áreas que necessitam mais atenção, 3) Fatores que contribuíram para o progresso, 4) Sugestões de continuidade.',
        },
        {
            titulo: 'Prompt 5: Recomendações Profissionais',
            texto: 'Baseado no desenvolvimento do aluno com [DEFICIÊNCIA] e nas seguintes observações: [DESCREVA AS PRINCIPAIS OBSERVAÇÕES], elabore recomendações profissionais para: 1) Professores da sala regular, 2) Família, 3) Profissionais de apoio (psicólogo, fonoaudiólogo, etc.), 4) Gestão escolar. As recomendações devem ser práticas e fundamentadas.',
        },
        {
            titulo: 'Prompt 6: Revisão e Refinamento',
            texto: 'Revise o seguinte trecho do relatório e melhore a redação mantendo o conteúdo técnico, mas tornando-o mais claro e objetivo: [COLE O TRECHO DO RELATÓRIO]. Corrija também possíveis erros gramaticais e sugira uma linguagem mais profissional quando necessário.',
        },
    ];

    const objetivos = [
        'Aprender a estruturar relatórios pedagógicos completos e profissionais',
        'Dominar a linguagem técnica apropriada para documentos educacionais',
        'Desenvolver habilidade de síntese e análise de dados observacionais',
        'Criar objetivos mensuráveis e alcançáveis para os alunos',
        'Elaborar recomendações práticas e fundamentadas',
        'Usar IA como ferramenta de apoio na redação e revisão de relatórios',
        'Garantir documentação adequada para acompanhamento multidisciplinar',
    ];

    const materiaisDownload = [
        {
            nome: 'Modelo de Relatório Individualizado',
            arquivo: '/materiais/aula5-modelo-relatorio.pdf',
        },
        {
            nome: 'Checklist para Relatórios',
            arquivo: '/materiais/aula5-checklist.pdf',
        },
        {
            nome: 'Glossário de Termos Técnicos',
            arquivo: '/materiais/aula5-glossario.pdf',
        },
    ];

    return (
        <AulaTemplate
            numeroAula={5}
            titulo="IAGen para AEE III - Relatórios"
            descricao="Domine a arte de criar Relatórios de Desenvolvimento Individualizado completos e profissionais com o auxílio da IA. Nesta aula final, você aprenderá a documentar adequadamente o progresso dos alunos, elaborar análises detalhadas e comunicar resultados de forma clara e técnica."
            objetivos={objetivos}
            prompts={prompts}
            materiaisDownload={materiaisDownload}
            color="from-indigo-500 to-blue-500"
        />
    );
};

export default Aula5;
