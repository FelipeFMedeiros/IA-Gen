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
            nome: 'Apresentação - Introdução à IAGen',
            arquivo: '/materiais/AULA1.pdf',
        },
    ];

    return (
        <AulaTemplate
            numeroAula={1}
            titulo="Introdução da IAGen"
            descricao="Essa aula tem como objetivo introduzir os conceitos e aplicações da IA Generativa na área educacional e os momentos históricos da área. As implicações éticas e os benefícios da IA na educação especial também será abordada."
            objetivos={objetivos}
            materiaisDownload={materiaisDownload}
            color="from-[#ff5757] to-[#ff8787]"
        />
    );
};

export default Aula1;
