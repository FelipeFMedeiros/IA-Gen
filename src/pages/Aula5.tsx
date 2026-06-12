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
        {
            titulo: 'Prompt 1 - Mal preenchido',
            texto: 'Atue como um(a) pedagogo(a) especialista em educação inclusiva. Sua tarefa é redigir um Relatório de Desenvolvimento Individualizado (PDI) com base nas informações fornecidas a seguir. O relatório final deve ser um texto único, coeso e corrido, com uma linguagem profissional, descritiva e empática.  Não utilize tópicos ou listas no texto final. Estruture o relatório de forma lógica, conectando as diferentes seções para criar uma narrativa fluida sobre o desenvolvimento do estudante.\n\n1. Título do Documento: Relatório de Desenvolvimento Individualizado \n\n2. Período Avaliativo: De: [Março] Até: [Junho] \n\n3. Caracterização do Estudante: Nome: [João] Idade: [10 anos] Ano/Série: [4º ano]  Descrição Geral: [É um aluno ativo e participativo. Tem facilidade de aprender.] \n\n4. Frequência: Assiduidade: [Falta pouco, mas os pais justificam.] \n\n5. Avaliação Inicial (Nível de Desempenho no Início do Período): Desempenho Acadêmico Inicial: [Sabe ler bem. Tem facilidade em matemática.]  Desempenho Funcional Inicial: [Consegue ficar sentado e prestar atenção por longos períodos.] \n\n6. Objetivos de Aprendizagem Propostos no PAEE (Plano de Atendimento Educacional Especializado):  Objetivos: [Aprimorar a leitura crítica. Desenvolver habilidades matemáticas avançadas. Manter a atenção durante as aulas.] \n\n7. Metodologia e Recursos Didáticos Utilizados:  Estratégias e Recursos: [Foram usados jogos educativos, atividades em grupo e recursos multimídia. A professora ofereceu suporte individualizado quando necessário.] \n\n8. Resultados das Intervenções (Progresso Observado):  Evolução e Análise: [Ele apresentou um progresso significativo. Está mais confiante na leitura e melhorou suas habilidades matemáticas. Consegue manter a atenção durante as aulas.] \n\n9. Parecer Final (Conclusão e Recomendações):  Parecer: [Recomenda-se continuar o atendimento para consolidar os avanços alcançados. A família deve continuar participando ativamente do processo educacional.]',
        },
        {
            titulo: 'Prompt 1 - Bem preenchido',
            texto: "Atue como um(a) pedagogo(a) especialista em educação inclusiva. Sua tarefa é redigir um Relatório de Desenvolvimento Individualizado (PDI) com base nas informações fornecidas a seguir. O relatório final deve ser um texto único, coeso e corrido, com uma linguagem profissional, descritiva e empática. Não utilize tópicos ou listas no texto final. Estruture o relatório de forma lógica, conectando as diferentes seções para criar uma narrativa fluida sobre o desenvolvimento do estudante.\n\n1. Título do Documento: Relatório de Desenvolvimento Individualizado\n\n2. Período Avaliativo: De: [02 de Março de 2025] Até: [28 de Junho de 2025]\n\n3. Caracterização do Estudante: Nome: [Maria Santos de Oliveira] Idade: [8 anos e 2 meses] Ano/Série: [2º ano do Ensino Fundamental] Descrição Geral: [Maria é uma aluna participativa, verbaliza bem suas ideias e possui forte interesse por artes visuais e música. Apresenta diagnóstico de Dislexia e demonstra traços de ansiedade quando confrontada com tarefas de escrita, tendendo a evitar atividades de leitura em voz alta.]\n\n4. Frequência: Assiduidade: [A aluna apresentou frequência regular, com 90% de assiduidade durante o período. As 4 (quatro) faltas ocorridas foram devidamente justificadas para acompanhamento fonoaudiológico.]\n\n5. Avaliação Inicial (Nível de Desempenho no Início do Período): Desempenho Acadêmico Inicial: [No início do período, Maria reconhecia todas as letras do alfabeto de forma isolada, mas apresentava dificuldade na decodificação de sílabas simples (ex: BA, BE, BI), realizando trocas fonéticas. Sua escrita era omissiva, suprimindo letras (ex: 'calo' para 'cavalo'). Em matemática, compreendia quantidades até 10, mas não realizava operações simples de adição.] Desempenho Funcional Inicial: [Demonstrava baixa tolerância à frustração em atividades de escrita, frequentemente amassando o papel ou desistindo da tarefa. Apresentava dificuldade em organizar seus materiais (estojo, cadernos) na mesa. A interação social com os colegas era positiva.]\n\n6. Objetivos de Aprendizagem Propostos no PAEE (Plano de Atendimento Educacional Especializado): Objetivos: [1. Consolidar a associação grafema-fonema para todas as sílabas simples e complexas (ex: BRA, LHA). 2. Desenvolver a leitura de palavras dissílabas e trissílabas com fluência mínima (leitura sem erros de decodificação). 3. Aplicar o conceito de adição simples (unidades) com apoio de material concreto.]\n\n7. Metodologia e Recursos Didáticos Utilizados: Estratégias e Recursos: [Foram utilizadas abordagens multissensoriais, incluindo o método fônico-visuo-articulatório (Método das Boquinhas). Uso intensivo de alfabeto móvel, caixas de areia para treino da grafia e software de leitura assistida no tablet. Para matemática, foi utilizado o material dourado e jogos de boliche adaptados para a soma.]\n\n8. Resultados das Intervenções (Progresso Observado): Evolução e Análise: [Ao final do período, Maria demonstra avanços significativos. Já consegue ler palavras trissílabas com 80% de precisão, embora a fluência ainda seja silabada. Sua escrita, embora ainda com erros ortográficos contextuais (troca de 'x' por 'ch'), já não apresenta omissões. Em matemática, realiza adições simples (até 20) com apoio visual e compreende o conceito de 'juntar'.]\n\n9. Parecer Final (Conclusão e Recomendações): Parecer: [O progresso da aluna foi notável, especialmente na consciência fonológica. Recomenda-se a continuidade do atendimento no próximo semestre, com foco na fluência leitora e no início da produção de frases curtas. Sugere-se também a implementação de checklists visuais para auxiliar na organização de seus materiais. A parceria com a fonoaudióloga deve ser mantida e intensificada.]",
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
