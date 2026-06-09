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

    const referencias = [
        { titulo: 'BRASIL. Ministério da Educação. Política Nacional de Educação Especial na Perspectiva da Educação Inclusiva. Brasília: MEC/SEESP, 2008.' },
        { titulo: 'BRASIL, Casa Civil, Ministério da Educação/Conselho Nacional de Educação/Câmara de Educação Básica. Resolução no 4, de 2 de outubro de 2009. Institui Diretrizes Operacionais para o Atendimento Educacional Especializado na Educação Básica, modalidade Educação Especial.' },
        { titulo: 'BRASIL. (2020). Política Nacional de Educação Especial na Perspectiva da Educação Inclusiva. Brasília: Ministério da Educação.' },
        { titulo: 'COOPER, J. O.; HERON, T. E.; HEWARD, W. L. Applied Behavior Analysis. 3. ed. New Jersey: Pearson, 2020.' },
        { titulo: 'Education, in. “Impact of Inclusive Education on the Academic Performance of Students with Special Needs.” International Journal for Research in Education (IJRE), Feb. 2025.' },
        { titulo: 'FERREIRA, A. C.; LIMA, R. S. (2021). Educação Inclusiva: Desafios e Perspectivas. Revista Brasileira de Educação Especial, v. 27, n. 1, p. 45-60.' },
        { titulo: 'Forrest, Christopher B., et al. “School Outcomes of Children with Special Health Care Needs.” Pediatrics, vol. 128, no. 2, 1 Aug. 2011, pp. 303–312.', link: 'https://doi.org/10.1542/peds.2010-3347' },
        { titulo: 'FUCHS, D.; VAUGHN, S. Responsiveness-to-intervention: A decade later. Journal of Learning Disabilities, v. 45, n. 3, p. 195–203, 2012.' },
        { titulo: 'Fuchs, Douglas, and Lynn Fuchs. “Introduction to Response to Intervention: What, Why, and How Valid Is It?” Reading Research Quarterly, vol. 41, no. 1, 3 Jan. 2006, pp. 93–99.', link: 'https://doi.org/10.1598/rrq.41.1.4' },
        { titulo: 'FREITAS, E. L. S. X. et al. Inteligência Artificial para Educação: Um Caminho para um Campo mais Inclusivo. Revista Brasileira de Informática na Educação, v. 31, p. 307–322, 2023.' },
        { titulo: 'Horner, Robert H., et al. “The Use of Single-Subject Research to Identify Evidence-Based Practice in Special Education.” Exceptional Children, vol. 71, no. 2, Jan. 2005, pp. 165–179.', link: 'https://doi.org/10.1177/001440290507100203' },
        { titulo: 'KAZDIN, A. E. Single-Case Research Designs: Methods for Clinical and Applied Settings. 2. ed. New York: Oxford University Press, 2011.' },
        { titulo: 'LEDFORD, J. R.; GAST, D. L. (ed.). Single Case Research Methodology: Applications in Special Education and Behavioral Sciences. 3. ed. New York: Routledge, 2018.' },
        { titulo: 'Libâneo, J. C. (2013). Didática. São Paulo: Cortez.' },
        { titulo: 'LIMA, R. S., & FERREIRA, A. C. (2019). Formação de professores para a educação inclusiva: desafios e possibilidades. São Paulo: Editora Moderna.' },
        { titulo: 'LUCKESI, C. C. Avaliação da aprendizagem escolar. 13. ed. São Paulo: Cortez, 2002.' },
        { titulo: 'MANTOAN, M. T. E. (2020). A Inclusão Escolar e o Atendimento Educacional Especializado. São Paulo: Editora Moderna.' },
        { titulo: 'NARCISO, R.; BARBOSA FERNANDES, A.; LOPES DA SILVA JÚNIOR, S. Explorando a Inteligência Artificial para Personalização do Ensino em Ambientes de Educação Especial. Revista Cocar, v. 20, n. 38, 2024.' },
        { titulo: 'Parco, Novalyn, et al. “Factors Impacting Academic Performance in Special Education.” World Journal on Education and Humanities Research, vol. 4, 2024, pp. 21–32.' },
        { titulo: 'RIBEIRO, G. C. Inteligência artificial e inclusão escolar: reflexões éticas e pedagógicas. Revista REASE, v. 10, n. 4, p. 1–16, 2024.' },
        { titulo: 'Ruble, L., McGrew, J., Dale, B. et al. Goal Attainment Scaling: An Idiographic Measure Sensitive to Parent and Teacher Report of IEP Goal Outcome Assessment for Students with ASD. J Autism Dev Disord 52, 3344–3352 (2022).' },
        { titulo: 'Rosa, Madelaine, et al. “Analysis of the Importance of Supporting Students with Special Educational Needs: A Review Article.” Edelweiss Applied Science and Technology, vol. 9, no. 10, 3 Oct. 2025, pp. 1–8.', link: 'https://doi.org/10.55214/2576-8484.v9i10.10328' },
        { titulo: 'Saoussan Maarouf. “Examining the Effects of Language Competencies on Academic Achievements of Special Needs Students and Their Peers Using Standardized Test Scores.” European Journal of Education and Pedagogy, vol. 5, no. 2, 5 Mar. 2024, pp. 1–11.', link: 'https://doi.org/10.24018/ejedu.2024.5.2.717' },
        { titulo: 'SAMPAIO, A. A. S. et al. Uma introdução aos delineamentos experimentais de sujeito único. Interação em Psicologia, v. 12, n. 1, p. 151–164, 2008.' },
        { titulo: 'SASSAKI, R. K. (2022). Educação Inclusiva: Teoria e Prática. Rio de Janeiro: Editora Vozes.' },
        { titulo: 'SIDMAN, M. Táticas da pesquisa científica: avaliação dos dados experimentais na psicologia. São Paulo: Brasiliense, 1976. (Obra original publicada em 1960.)' },
        { titulo: 'SILVA, J. R.; OLIVEIRA, T. (2023). Tecnologias Assistivas na Educação: Um Estudo de Caso. Revista de Educação e Tecnologia, v. 15, n. 2, p. 123-135.' },
        { titulo: 'SOUZA, L. M.; PEREIRA, F. (2024). Formação de Professores para a Inclusão: Desafios e Possibilidades. Educação e Pesquisa, v. 50, n. 3, p. 789-804.' },
        { titulo: 'TATE, R. L.; PERDICES, M. Single-Case Experimental Designs for Clinical Research and Neurorehabilitation Settings. New York: Psychology Press, 2019.' },
        { titulo: 'VYGOTSKY, L. S. A formação social da mente. São Paulo: Martins Fontes, 1984.' },
    ];

    return (
        <AulaTemplate
            numeroAula={4}
            titulo="IAGen para AEE II - Monitoramento da execução das adaptações"
            descricao="Esta aula tem como objetivo apresentar, de forma clara e prática, como usar a IA generativa para auxiliar no monitoramento da execução das adaptações – a habilidade de operar com eficácia com essas ferramentas. Nosso foco é demonstrar como o professor pode utilizar essas ferramentas para melhorar o monitoramento das ferramentas que são utilizadas nas aulas para alunos com condições especiais."
            objetivos={objetivos}
            prompts={prompts}
            materiaisDownload={materiaisDownload}
            referencias={referencias}
            color="from-[#7521ac] to-[#a855f7]"
        />
    );
};

export default Aula4;
