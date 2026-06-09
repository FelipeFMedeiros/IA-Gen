import AulaTemplate from '../components/AulaTemplate';

const Aula1 = () => {
    const objetivos = [
        'Apresentar a trajetória da IA até os dias atuais',
        'Introduzir algumas noções básicas para construir um bom prompt',
        'IA Generativa como aliada para o docente na educação especial',
        'Abordar os benefícios e riscos do uso da IA',
    ];

    const materiaisDownload = [
        {
            nome: 'Apresentação - Introdução à IA Generativa',
            arquivo: '/materiais/AULA1.pdf',
        },
    ];

    const referencias = [
        { 
            titulo: 'SAKOWICZ, Marie; HAMIDI, Foad. Generative AI for Inclusive Education: Supporting Students with Disabilities Through Universal Design for Learning. American Journal of STEM Education: Issues and Perspectives, v. 15, p. 1–22, 2025.', 
            link: 'https://doi.org/10.32674/yeyaaq64' 
        },
        { 
            titulo: 'HE, Ran; CAO, Jie; TAN, Tieniu. Generative Artificial Intelligence: A Historical Perspective. National Science Review, v. 12, nwaf050, 2025.', 
            link: 'https://doi.org/10.1093/nsr/nwaf050' 
        },
        { 
            titulo: 'AL-AMIN, Md.; ALI, Mohammad Shazed; SALAM, Abdus; KHAN, Arif; ALI, Ashraf; ULLAH, Ahsan; ALAM, Nur; CHOWDHURY, Shamsul Kabir. History of Generative Artificial Intelligence (AI) Chatbots: Past, Present, and Future Development. arXiv preprint, 2024.', 
            link: 'https://doi.org/10.48550/arXiv.2402.05122' 
        },
        { 
            titulo: 'RIZOS, Ioannis; FOYKAS, Evaggelos; GEORGAKOPOULOS, Spiros V. Enhancing Mathematics Education for Students with Special Educational Needs through Generative AI: A Case Study in Greece. Contemporary Educational Technology, v. 16, n. 4, ep535, 2024.', 
            link: 'https://doi.org/10.30935/cedtech/15487' 
        },
        { 
            titulo: 'SILVA, Luis André Ferreira da; SIQUEIRA, Nadilson; RODRIGUES, Vinicius Brasil. O uso da inteligência artificial como ferramenta para educação no Brasil. Revista Sociedade Científica, v. 7, n. 1, p. 3546–3568, 2024.', 
            link: 'https://doi.org/10.61411/rsc202455317' 
        },
        { 
            titulo: 'ALAM, Md Nur et al. History of Generative Artificial Intelligence (AI) Chatbots: Past, Present, and Future Development. ResearchGate Preprint, fev. 2024.', 
            link: 'https://www.researchgate.net/publication/378149233' 
        }
    ];

    return (
        <AulaTemplate
            numeroAula={1}
            titulo="Introdução da IAGen"
            descricao="Essa aula tem como objetivo introduzir os conceitos e aplicações da IA Generativa na área educacional e os momentos históricos da área. As implicações éticas e os benefícios da IA na educação especial também será abordada."
            objetivos={objetivos}
            materiaisDownload={materiaisDownload}
            referencias={referencias}
            color="from-[#ff5757] to-[#ff8787]"
        />
    );
};

export default Aula1;
