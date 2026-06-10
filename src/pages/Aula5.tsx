import AulaTemplate from '../components/AulaTemplate';

const Aula5 = () => {
    const prompts = [
        {
            titulo: 'Modelo 1: Prompt Gerador de Relatório',
            texto: 'Atue como um(a) pedagogo(a) especialista em educação inclusiva. Sua tarefa é redigir um Relatório de Desenvolvimento Individualizado (PDI) com base nas informações fornecidas a seguir. O relatório final deve ser um texto único, coeso e corrido, com uma linguagem profissional, descritiva e empática. Não utilize tópicos ou listas no texto final. Estruture o relatório de forma lógica, conectando as diferentes seções para criar uma narrativa fluida sobre o desenvolvimento do estudante.\n\n1. Título do Documento:\nRelatório de Desenvolvimento Individualizado\n\n2. Período Avaliativo:\nDe: []\nAté: []\n\n3. Caracterização do Estudante:\nNome: []\nIdade: []\nAno/Série: []\nDescrição Geral: [.]\n\n4. Frequência:\nAssiduidade: []\n\n5. Avaliação Inicial (Nível de Desempenho no Início do Período):\nDesempenho Acadêmico Inicial: []\nDesempenho Funcional Inicial: []\n\n6. Objetivos de Aprendizagem Propostos no PAEE (Plano de Atendimento Educacional Especializado):\nObjetivos: []\n\n7. Metodologia e Recursos Didáticos Utilizados:\nEstratégias e Recursos: []\n\n8. Resultados das Intervenções (Progresso Observado):\nEvolução e Análise: []\n\n9. Parecer Final (Conclusão e Recomendações):\nParecer: []',
        },
        {
            titulo: 'Modelo 2: Refinamento e Método SMART',
            texto: 'Atue como um(a) pedagogo(a) especialista em educação inclusiva. Sua tarefa é reescrever o relatório abaixo, focando em melhorar a clareza, a coesão e a estrutura profissional do texto. Use os princípios do método SMART (Específico, Mensurável, Atingível, Relevante, Temporal) como um guia interno para reestruturar os objetivos de aprendizagem e a avaliação dos resultados, garantindo que o progresso do aluno seja descrito de forma concreta e compreensível.\n\nFormato de Entrega: O resultado deve ser apenas o texto corrido do relatório final revisado. Não inclua tópicos, explicações sobre o método, tabelas ou comparações de "Antes e Depois".',
        },
    ];

    const objetivos = [
        'Auxiliar a escrita e a correção do relatório do PAEE',
        'Fornecer exemplos de prompts específicos para diferentes seções do relatório',
    ];

    const materiaisDownload = [
        {
            nome: 'Apresentação - Relatório de Desenvolvimento Individualizado',
            arquivo: '/materiais/AULA5.pdf',
        },
        {
            nome: 'Prompt Exemplo - Mal Preenchido',
            arquivo: '/materiais/Prompt_Mal_Preenchido.pdf',
        },
    ];

    const referencias = [
        {
            titulo: 'DOS SANTOS JR, Francisco Dutra et al. Inteligência artificial e educação especial: Desafios éticos. In: WORKSHOP DE DESAFIOS DA COMPUTAÇÃO APLICADA À EDUCAÇÃO (DESAFIE!), 2019. Anais [...]. [S. l.]: SBC, 2019. p. 13-15.',
        },
        {
            titulo: 'NUNES, Débora Regina de Paula; FIGUEROLA, Wilfredo Blanco; AZEVEDO, Mariana Orrico de. Análise de demandas acadêmicas e funcionais de alunos com autismo: utilização de inteligência artificial em relatórios pedagógicos. In: DELIBERATO, Débora; GONÇALVES, Maria de Jesus; MANZINI, Eduardo José (Org.). Pesquisas e trabalho colaborativo: práticas para a formação de profissionais da Educação Especial. Goiânia: Editora Sobama, 2025. p. 207-223.',
        },
        {
            titulo: 'THE IRIS CENTER. IEPS: Developing high-quality individualized education programs. 2019.',
            link: 'https://iris.peabody.vanderbilt.edu/module/iep01/',
        },
        {
            titulo: 'DORAN, George T. There’s a S.M.A.R.T. way to write management’s goals and objectives. Management Review, New York, v. 70, n. 11, p. 35-36, nov. 1981.',
            link: 'https://www.eval.fr/wp-content/uploads/2020/01/S.M.A.R.T-Way-Management-Review-eval.fr_.pdf',
        },
    ];

    return (
        <AulaTemplate
            numeroAula={5}
            titulo="IAGen para AEE III - Relatórios"
            descricao="O propósito desta aula é oferecer orientações e esclarecer dúvidas a respeito da aplicação da Inteligência Artificial na criação do Relatório de Desenvolvimento Individualizado. Serão mostrados exemplos de prompts e modelos de relatórios que contribuem para a produção de resultados mais precisos e eficientes, possibilitando que os professores utilizem melhor seu tempo em outras tarefas pedagógicas."
            objetivos={objetivos}
            prompts={prompts}
            materiaisDownload={materiaisDownload}
            referencias={referencias}
            color="from-[#0081cc] to-[#005a99]"
        />
    );
};

export default Aula5;
