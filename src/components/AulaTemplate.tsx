import { NavLink } from 'react-router-dom';
import { ArrowLeft, Download, Copy, CheckCircle, BookOpen } from 'lucide-react';
import { useState } from 'react';

interface Prompt {
    titulo: string;
    texto: string;
    exemplo?: string;
}

interface Referencia {
    titulo: string;
    link?: string;
}

interface AulaTemplateProps {
    numeroAula: number;
    titulo: string;
    descricao: string;
    objetivos: string[];
    prompts?: Prompt[];
    materiaisDownload?: {
        nome: string;
        arquivo: string;
    }[];
    referencias?: Referencia[];
    color: string;
}

const AulaTemplate = ({
    numeroAula,
    titulo,
    descricao,
    objetivos,
    prompts,
    materiaisDownload,
    referencias,
    color,
}: AulaTemplateProps) => {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const copyToClipboard = (texto: string, index: number) => {
        navigator.clipboard.writeText(texto);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
            {/* Header */}
            <header className={`bg-gradient-to-r ${color} text-white py-4 sm:py-6 shadow-lg`}>
                <div className="container mx-auto px-4 sm:px-6">
                    <NavLink
                        to="/"
                        onClick={() => window.scrollTo(0, 0)}
                        className="inline-flex items-center gap-2 text-white hover:text-blue-100 transition-colors mb-3 sm:mb-4 text-sm sm:text-base"
                    >
                        <ArrowLeft size={18} />
                        <span>Voltar para início</span>
                    </NavLink>
                    <div>
                        <div className="text-xs sm:text-sm font-semibold opacity-90 mb-1">AULA {numeroAula}</div>
                        <h1 className="text-2xl sm:text-4xl font-bold leading-tight">{titulo}</h1>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
                {/* Descrição */}
                <div className="bg-white rounded-xl shadow-lg p-5 sm:p-8 mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Sobre esta aula</h2>
                    <p className="text-gray-700 text-base sm:text-lg">{descricao}</p>
                </div>

                {/* Objetivos */}
                <div className="bg-white rounded-xl shadow-lg p-5 sm:p-8 mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Objetivos de Aprendizagem</h2>
                    <ul className="space-y-3">
                        {objetivos.map((objetivo, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <CheckCircle className="text-green-500 mt-0.5 sm:mt-1 flex-shrink-0" size={20} />
                                <span className="text-gray-700 text-sm sm:text-base">{objetivo}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Materiais para Download */}
                {materiaisDownload && materiaisDownload.length > 0 && (
                    <div className="bg-white rounded-xl shadow-lg p-5 sm:p-8 mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-5 sm:mb-6">
                            Materiais para Download
                        </h2>
                        <div className="grid gap-4">
                            {materiaisDownload.map((material, index) => (
                                <a
                                    key={index}
                                    href={material.arquivo}
                                    download
                                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg hover:shadow-md transition-all group gap-3 sm:gap-0"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="bg-blue-600 text-white p-2.5 sm:p-3 rounded-lg flex-shrink-0">
                                            <Download size={20} className="sm:w-6 sm:h-6" />
                                        </div>
                                        <span className="font-semibold text-gray-800 text-sm sm:text-base">
                                            {material.nome}
                                        </span>
                                    </div>
                                    <span className="text-blue-600 text-sm font-semibold group-hover:translate-x-1 transition-transform self-end sm:self-auto">
                                        Baixar →
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                )}

                {/* Prompts */}
                {prompts && prompts.length > 0 && (
                    <div className="bg-white rounded-xl shadow-lg p-5 sm:p-8 mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-5 sm:mb-6">
                            Prompts para Usar nas IAs
                        </h2>
                        <div className="space-y-6">
                            {prompts?.map((prompt, index) => (
                                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                                    <div
                                        className={`bg-gradient-to-r ${color} text-white px-4 py-3 text-sm sm:text-base font-semibold`}
                                    >
                                        {prompt.titulo}
                                    </div>
                                    <div className="p-4 sm:p-5 bg-gray-50">
                                        <div className="flex flex-col xl:flex-row justify-between items-start gap-4 mb-3">
                                            <p className="text-gray-700 w-full xl:flex-1 font-mono text-xs sm:text-sm whitespace-pre-wrap overflow-x-auto">
                                                {prompt.texto}
                                            </p>
                                            <button
                                                onClick={() => copyToClipboard(prompt.texto, index)}
                                                className={`flex items-center justify-center w-full xl:w-auto gap-2 px-4 py-2 sm:py-2.5 rounded-lg transition-all ${
                                                    copiedIndex === index
                                                        ? 'bg-green-500 text-white'
                                                        : 'bg-blue-600 text-white hover:bg-blue-700 hover:cursor-pointer'
                                                }`}
                                            >
                                                {copiedIndex === index ? (
                                                    <>
                                                        <CheckCircle size={18} />
                                                        <span className="text-sm font-semibold">Copiado!</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <Copy size={18} />
                                                        <span className="text-sm font-semibold">Copiar</span>
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                        {prompt.exemplo && (
                                            <div className="mt-4 pt-4 border-t border-gray-300">
                                                <p className="text-xs text-gray-600 font-bold mb-2">EXEMPLO:</p>
                                                <p className="text-gray-600 text-xs sm:text-sm italic">
                                                    {prompt.exemplo}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Referências */}
                {referencias && referencias.length > 0 && (
                    <div className="bg-white rounded-xl shadow-lg p-5 sm:p-8 mb-6 sm:mb-8">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-5 sm:mb-6">
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center gap-2">
                                <BookOpen className="text-blue-600" size={24} />
                                Referências da Aula
                            </h2>
                            <a
                                href={`/referencias/Referencias-Aula${numeroAula}.pdf`}
                                download
                                className="flex items-center justify-center w-full sm:w-auto gap-2 bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 px-4 py-2.5 sm:py-2 rounded-lg font-semibold transition-colors text-sm sm:text-base"
                            >
                                <Download size={18} />
                                Baixar Referências
                            </a>
                        </div>
                        <ul className="space-y-4">
                            {referencias.map((ref, index) => (
                                <li key={index} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                                    <div className="flex items-start gap-2 text-gray-800 font-medium text-sm sm:text-base">
                                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-600 mt-2 sm:mt-2.5 flex-shrink-0"></div>
                                        <span>{ref.titulo}</span>
                                    </div>
                                    {ref.link && (
                                        <a
                                            href={ref.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-800 hover:underline text-xs sm:text-sm ml-3.5 sm:ml-2 whitespace-nowrap self-start sm:self-auto mt-1 sm:mt-0.5"
                                        >
                                            Acessar link →
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Questionário de Avaliação */}
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-xl p-6 sm:p-8 mb-8 text-white text-center transform hover:-translate-y-1 transition-transform duration-300">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 flex items-center justify-center gap-2 sm:gap-3">
                        <span className="text-3xl sm:text-4xl">📝</span> Avalie esta Aula
                    </h2>
                    <p className="text-base sm:text-lg text-indigo-50 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
                        Seu feedback sincero é fundamental para entendermos o impacto dessas novas ferramentas na
                        prática pedagógica e aprimorarmos futuras formações. Garante que vamos ler tudo com carinho e
                        leva <strong>apenas 5 minutinhos!</strong>
                    </p>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSeuVIFpZDXHcDv0XZExajYos8gg7YRw6cJkQtZKm0VFl1oDRQ/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center"
                    >
                        <span>Ir para o Formulário</span>
                        <span>→</span>
                    </a>
                </div>

                {/* Navegação entre aulas */}
                <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
                    {numeroAula > 1 && (
                        <NavLink
                            to={`/aula${numeroAula - 1}`}
                            onClick={() => window.scrollTo(0, 0)}
                            className="flex items-center justify-center gap-2 bg-white px-4 sm:px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all w-full sm:w-auto"
                        >
                            <ArrowLeft size={18} />
                            <span className="text-sm sm:text-base font-semibold text-gray-700">Aula Anterior</span>
                        </NavLink>
                    )}
                    {numeroAula < 5 && (
                        <NavLink
                            to={`/aula${numeroAula + 1}`}
                            onClick={() => window.scrollTo(0, 0)}
                            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 sm:px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all sm:ml-auto w-full sm:w-auto"
                        >
                            <span className="text-sm sm:text-base font-semibold">Próxima Aula</span>
                            <span className="text-sm sm:text-base">→</span>
                        </NavLink>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AulaTemplate;
