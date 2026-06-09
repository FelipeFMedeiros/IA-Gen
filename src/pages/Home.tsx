import { NavLink } from 'react-router-dom';
import { Brain, Sparkles, GraduationCap, Activity, Monitor } from 'lucide-react';

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
            descricao: 'Aplicação prática de IA Generativa para criar recursos adaptados, otimizar planejamento e desenvolver estratégias personalizadas para a diversidade',
            icon: '💡',
            color: 'from-[#ff914d] to-[#ffb380]',
        },
        {
            numero: 4,
            titulo: 'IAGen para AEE II',
            descricao: 'Como usar IA generativa para auxiliar no monitoramento das adaptações e ferramentas utilizadas nas aulas para alunos com condições especiais',
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
                    <div className="flex items-center">
                        <h1 className="text-4xl font-bold mb-2">IAGen para AEE</h1>
                        <div className="ml-4 border-l-2 border-blue-400 pl-4">
                            <p className="text-blue-50 font-medium max-w-md">
                                Inteligência Artificial Generativa no Atendimento Educacional Especializado
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <div className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 shadow-md">
                        🎓 SME Natal & UERN
                    </div>
                    <h2 className="text-5xl font-bold text-gray-800 mb-4 tracking-tight">
                        Transforme sua prática educacional com IA
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                        Capacitação para professores do Atendimento Educacional Especializado do Ensino Fundamental.
                        Aprenda a criar recursos e materiais de apoio inovadores utilizando ferramentas de Inteligência Artificial.
                    </p>
                    
                    <div className="flex flex-wrap justify-center items-center gap-8">
                        <img
                            src="/logo-prefeitura.png"
                            alt="Logo SME Natal"
                            className="h-20 object-contain drop-shadow-sm"
                        />
                        <img
                            src="/logo-uern-1.png"
                            alt="Logo UERN"
                            className="h-20 object-contain drop-shadow-sm"
                        />
                    </div>
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
                                <div className="bg-purple-50 p-3 rounded-lg text-center flex flex-col items-center justify-center">
                                    <Activity className="text-purple-600 mb-2" size={24} />
                                    <p className="text-sm font-semibold text-gray-700">Físico-cinestésicas</p>
                                </div>
                                <div className="bg-pink-50 p-3 rounded-lg text-center flex flex-col items-center justify-center">
                                    <Monitor className="text-pink-600 mb-2" size={24} />
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
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8 mt-12">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-gray-300 font-semibold mb-2">
                        Setor de Educação Especial - SME Natal / RN
                    </p>
                    <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                        "Diga-me uma coisa e eu esquecerei. Ensine-me algo e eu me lembrarei disso. Envolva-me em algo e
                        eu vou aprender." - Benjamin Franklin
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
