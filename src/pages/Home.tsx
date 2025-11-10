import { NavLink } from 'react-router-dom';
import { Brain, Sparkles, GraduationCap } from 'lucide-react';

const Home = () => {
    const aulas = [
        {
            numero: 1,
            titulo: 'Introdução da IAGen',
            descricao: 'Conceitos fundamentais sobre Inteligência Artificial Generativa aplicada à Educação Especial',
            icon: '🚀',
            color: 'from-[#ff5757] to-[#ff8787]',
        },
        {
            numero: 2,
            titulo: 'Engenharia de Prompts',
            descricao: 'Conceitos de IA generativa e técnicas para criar prompts eficazes no planejamento de aulas e materiais acessíveis',
            icon: '⚡',
            color: 'from-[#10bb82] to-[#0d8f66]',
        },
        {
            numero: 3,
            titulo: 'IAGen para AEE I',
            descricao: 'Ideias para adaptar recursos educacionais para alunos com necessidades especiais',
            icon: '💡',
            color: 'from-[#ff914d] to-[#ffb380]',
        },
        {
            numero: 4,
            titulo: 'IAGen para AEE II',
            descricao: 'Monitoramento da execução das adaptações e acompanhamento dos alunos',
            icon: '📊',
            color: 'from-[#7521ac] to-[#a855f7]',
        },
        {
            numero: 5,
            titulo: 'IAGen para AEE III',
            descricao: 'Orientações sobre uso da IA no Relatório de Desenvolvimento Individualizado com exemplos de prompts e modelos',
            icon: '📝',
            color: 'from-[#0081cc] to-[#005a99]',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
            {/* Header */}
            <header className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-8 shadow-lg">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <img
                                src="/logoCEEE.jpeg"
                                alt="Logo CEESP"
                                className="h-16 w-16 rounded-full border-4 border-white shadow-lg"
                            />
                            <div>
                                <h1 className="text-4xl font-bold mb-2">IAGen para AEE</h1>
                                <p className="text-blue-100">
                                    Inteligência Artificial Generativa no Atendimento Educacional Especializado
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <div className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                        🎓 CEESP/NATAL
                    </div>
                    <h2 className="text-5xl font-bold text-gray-800 mb-4">Transforme sua prática educacional com IA</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Curso de capacitação para professores da Educação Especial aprenderem a utilizar ferramentas de
                        Inteligência Artificial na criação de recursos e materiais adaptados.
                    </p>
                </div>

                {/* Sobre o Projeto */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
                    <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                        <Brain className="text-blue-600" size={36} />
                        Sobre o Projeto
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-xl font-semibold text-blue-600 mb-3">Objetivos do AEE</h4>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 mt-1">✓</span>
                                    <span>Atender estudantes matriculados na Educação pública regular</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 mt-1">✓</span>
                                    <span>Disponibilizar serviços de Atendimento Educacional Especializado</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 mt-1">✓</span>
                                    <span>Promover ambiente de acolhimento e respeito à diversidade</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 mt-1">✓</span>
                                    <span>Planejar e compartilhar materiais didáticos acessíveis</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold text-cyan-600 mb-3">Habilidades Desenvolvidas</h4>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-blue-50 p-3 rounded-lg text-center">
                                    <Sparkles className="mx-auto text-blue-600 mb-2" size={24} />
                                    <p className="text-sm font-semibold text-gray-700">Artísticas</p>
                                </div>
                                <div className="bg-cyan-50 p-3 rounded-lg text-center">
                                    <GraduationCap className="mx-auto text-cyan-600 mb-2" size={24} />
                                    <p className="text-sm font-semibold text-gray-700">Acadêmicas</p>
                                </div>
                                <div className="bg-purple-50 p-3 rounded-lg text-center">
                                    <span className="text-3xl">🏃</span>
                                    <p className="text-sm font-semibold text-gray-700">Físico-cinestésicas</p>
                                </div>
                                <div className="bg-pink-50 p-3 rounded-lg text-center">
                                    <span className="text-3xl">💻</span>
                                    <p className="text-sm font-semibold text-gray-700">Tecnológicas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cards das Aulas */}
                <div className="mb-12">
                    <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Aulas do Curso</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {aulas.map((aula) => (
                            <NavLink
                                key={aula.numero}
                                to={`/aula${aula.numero}`}
                                className="group"
                                onClick={() => window.scrollTo(0, 0)}
                            >
                                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full transform hover:-translate-y-2">
                                    <div className={`h-2 bg-gradient-to-r ${aula.color}`}></div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="text-5xl">{aula.icon}</div>
                                            <div className="flex-1">
                                                <div className="text-sm font-semibold text-gray-500 mb-1">
                                                    AULA {aula.numero}
                                                </div>
                                                <h4 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                                                    {aula.titulo}
                                                </h4>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 mb-4">{aula.descricao}</p>
                                        <div className="flex items-center text-blue-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                                            <span>Acessar aula</span>
                                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        ))}
                    </div>
                </div>

                {/* Contato */}
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl shadow-xl p-8 text-white">
                    <h3 className="text-3xl font-bold mb-6 text-center">Entre em Contato</h3>
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div>
                            <div className="text-4xl mb-3">📞</div>
                            <p className="font-semibold mb-2">Telefone</p>
                            <p>(84) 3232-2374</p>
                            <p>(84) 99916-8272</p>
                        </div>
                        <div>
                            <div className="text-4xl mb-3">📧</div>
                            <p className="font-semibold mb-2">E-mail</p>
                            <p>ceespaee@gmail.com</p>
                        </div>
                        <div>
                            <div className="text-4xl mb-3">📱</div>
                            <p className="font-semibold mb-2">Instagram</p>
                            <p>@ceespaee</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-6 mt-12">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-gray-300">Centro Estadual de Educação Especial - CEESP/NATAL</p>
                    <p className="text-gray-400 text-sm mt-2">
                        "Diga-me uma coisa e eu esquecerei. Ensine-me algo e eu me lembrarei disso. Envolva-me em algo e
                        eu vou aprender." - Benjamin Franklin
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
