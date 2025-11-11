import AulaTemplate from '../components/AulaTemplate';

const Aula5 = () => {
    const prompts = [
        {
            titulo: 'Prompt 1: Criação de Relatório de Desenvolvimento Individualizado',
            texto: '"Atue como um(a) pedagogo(a) especialista em educação inclusiva. Sua tarefa é redigir um Relatório de Desenvolvimento Individualizado (PDI) com base nas informações fornecidas a seguir. O relatório final deve ser um texto único, coeso e corrido, com uma linguagem profissional, descritiva e empática. Não utilize tópicos ou listas no texto final. Estruture o relatório de forma lógica, conectando as diferentes seções para criar uma narrativa fluida sobre o desenvolvimento do estudante."\n\n[INÍCIO DAS INFORMAÇÕES - PREENCHA OS CAMPOS ABAIXO]\n\n1. Título do Documento:\nRelatório de Desenvolvimento Individualizado\n\n2. Período Avaliativo:\nDe: [Ex: Março de 2024]\nAté: [Ex: Junho de 2024]\n\n3. Caracterização do Estudante:\nNome: [Nome completo do aluno]\nIdade: [Idade do aluno durante o período avaliativo]\nAno/Série: [Ano/série que o aluno está cursando]\nDescrição Geral: [Descreva o perfil do aluno. Inclua informações sobre seu comportamento, como costuma interagir com colegas e professores, seus interesses, pontos fortes, se é comunicativo(a), tímido(a), agitado(a), etc. Mencione brevemente, se houver, algum diagnóstico relevante e como ele se manifesta no ambiente escolar.]\n\n4. Frequência:\nAssiduidade: [Relate a frequência do aluno. Por exemplo: "O(A) aluno(a) foi assíduo(a) e participativo(a) durante todo o período, não apresentando faltas que comprometessem o processo de aprendizagem." ou "Apresentou um número significativo de faltas (X faltas), sendo a família contatada para orientação. As ausências impactaram parcialmente o desenvolvimento das atividades propostas."]\n\n5. Avaliação Inicial (Nível de Desempenho no Início do Período):\nDesempenho Acadêmico Inicial: [Descreva o que o aluno sabia e quais eram suas principais dificuldades no início do atendimento. Em relação à linguagem: como era sua leitura e escrita? Em relação à matemática: reconhecia números, realizava operações simples? Ex: "Inicialmente, o(a) aluno(a) reconhecia apenas as vogais e não estabelecia relação entre letra e som..."]\nDesempenho Funcional Inicial: [Descreva as habilidades de autonomia, comunicação, interação social e motoras no início do período. Ex: "Apresentava dificuldade em organizar seus materiais, dependia de mediação constante para iniciar interações com os colegas e possuía preensão do lápis inadequada."]\n\n6. Objetivos de Aprendizagem Propostos no PAEE (Plano de Atendimento Educacional Especializado):\nObjetivos: [Liste de forma clara os principais objetivos traçados para o aluno. Ex: "1. Desenvolver a consciência fonológica, associando fonemas e grafemas; 2. Aprimorar a coordenação motora fina para o traçado de letras e números; 3. Ampliar a capacidade de interação social, participando de atividades em grupo; 4. Reconhecer e quantificar números até 20."]\n\n7. Metodologia e Recursos Didáticos Utilizados:\nEstratégias e Recursos: [Descreva as abordagens, atividades e materiais que foram utilizados para alcançar os objetivos. Ex: "Foram realizadas intervenções individualizadas, utilizando uma abordagem lúdica com jogos pedagógicos, recursos visuais e materiais concretos (alfabeto móvel, material dourado). Também foram empregados softwares educativos em tablet para estimular o raciocínio lógico e a atenção, sempre com mediação constante do(a) professor(a)."]\n\n8. Resultados das Intervenções (Progresso Observado):\nEvolução e Análise: [Descreva detalhadamente o progresso do aluno em relação a cada um dos objetivos propostos. Aponte os avanços, mesmo que sutis, e as dificuldades que ainda persistem. Use exemplos concretos. Ex: "O(A) estudante demonstrou um avanço significativo no reconhecimento de todas as letras do alfabeto e já consegue formar sílabas simples. Sua participação nas atividades em grupo aumentou, embora ainda precise de incentivo para iniciar o diálogo. O traçado das letras está mais firme. Em relação à matemática, já reconhece os números até 15, mas ainda apresenta dificuldade na contagem sequencial..."]\n\n9. Parecer Final (Conclusão e Recomendações):\nParecer: [Com base nos resultados, emita um parecer conclusivo. Indique se o aluno deve continuar no atendimento, se precisa de algum encaminhamento para outros profissionais ou se atingiu os objetivos e pode ter alta do serviço. Ex: "Diante dos avanços observados, sugere-se a continuidade dos atendimentos no próximo semestre para consolidar as habilidades de leitura e escrita e ampliar os conceitos matemáticos." ou "Recomenda-se o encaminhamento para uma avaliação fonoaudiológica para investigar questões relacionadas à linguagem oral." ou "Considerando que o(a) aluno(a) atingiu os objetivos propostos, demonstrando autonomia e superação de suas dificuldades iniciais, sugere-se a liberação dos atendimentos especializados, com acompanhamento e monitoramento do professor da sala de aula regular."]',
        },
        {
            titulo: 'Prompt 2: Revisão e Aprimoramento com Método SMART',
            texto: 'Atue como um(a) pedagogo(a) especialista em educação inclusiva. Sua tarefa é reescrever o relatório abaixo, focando em melhorar a clareza, a coesão e a estrutura profissional do texto.\nUse os princípios do método SMART (Específico, Mensurável, Atingível, Relevante, Temporal) como um guia interno para reestruturar os objetivos de aprendizagem e a avaliação dos resultados, garantindo que o progresso do aluno seja descrito de forma concreta e compreensível.\n\nFormato de Entrega: O resultado deve ser apenas o texto corrido do relatório final revisado.\nNão inclua tópicos, explicações sobre o método, tabelas ou comparações de "Antes e Depois".',
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

    return (
        <AulaTemplate
            numeroAula={5}
            titulo="IAGen para AEE III - Relatórios"
            descricao="O propósito desta aula é oferecer orientações e esclarecer dúvidas a respeito da aplicação da Inteligência Artificial na criação do Relatório de Desenvolvimento Individualizado. Serão mostrados exemplos de prompts e modelos de relatórios que contribuem para a produção de resultados mais precisos e eficientes, possibilitando que os professores utilizem melhor seu tempo em outras tarefas pedagógicas."
            objetivos={objetivos}
            prompts={prompts}
            materiaisDownload={materiaisDownload}
            color="from-[#0081cc] to-[#005a99]"
        />
    );
};

export default Aula5;
