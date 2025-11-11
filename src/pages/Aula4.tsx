import AulaTemplate from '../components/AulaTemplate';

const Aula4 = () => {
    const prompts = [
        {
            titulo: 'Prompt 1: Critérios de Avaliação Adaptados',
            texto: 'Instruções de Contexto e Formato: "Você é um assistente de coleta e estruturação de dados para monitoramento de sessões de Educação Especial, com base na Análise do Comportamento (ABA). Sua tarefa é extrair e formatar os dados de monitoramento. Use um tom estritamente objetivo. Gere *apenas o conteúdo* para as 8 colunas especificadas, separadas por ponto e vírgula (;), na ordem listada, sem títulos ou frases introdutórias."\n\nDados de Entrada do Professor (Preenchidos):\n1. DATA\n2. ALUNO:\n3. CONDICAO_ESPECIAL:\n4. META_RASTREADA:\n5. FERRAMENTA_USADA:\n6. DADOS DETALHADOS DA SESSÃO (Preencha objetivamente):\nA - ANTECEDENTE PRINCIPAL: O professor pediu para ler um artigo de ciências de 6º ano.\nDURACAO_TOTAL_SESSAO: 30\nTEMPO_DE_FOCO: 27\nCONTAGEM_INCIDENTES: 0\nRESULTADO_BRUTO: 9 em 12 perguntas.\nC - CONSEQUENCIA CRÍTICA: Elogio de grupo e folha de registro de progresso.',
        },
    ];

    const objetivos = [
        'Esta aula tem como objetivo apresentar, de forma clara e prática, como usar a IA generativa para auxiliar no monitoramento da execução das adaptações – a habilidade de operar com eficácia com essas ferramentas.',
        'Nosso foco é demonstrar como o professor pode utilizar essas ferramentas para melhorar o monitoramento das ferramentas que são utilizadas nas aulas para alunos com condições especiais',
        'Conceitos básicos do Gemini para auxiliar no monitoramento',
        'Conceitos básicos do google planilhas para guardar informações do monitoramento',
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
            titulo="IAGen para AEE II - Monitoramento da execução das adaptações"
            descricao="Esta aula tem como objetivo apresentar, de forma clara e prática, como usar a IA generativa para auxiliar no monitoramento da execução das adaptações – a habilidade de operar com eficácia com essas ferramentas. Nosso foco é demonstrar como o professor pode utilizar essas ferramentas para melhorar o monitoramento das ferramentas que são utilizadas nas aulas para alunos com condições especiais."
            objetivos={objetivos}
            prompts={prompts}
            materiaisDownload={materiaisDownload}
            color="from-[#7521ac] to-[#a855f7]"
        />
    );
};

export default Aula4;
