import { NavLink } from 'react-router-dom';
import { ArrowLeft, Download, Copy, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface Prompt {
    titulo: string;
    texto: string;
    exemplo?: string;
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
    color: string;
}

const AulaTemplate = ({
    numeroAula,
    titulo,
    descricao,
    objetivos,
    prompts,
    materiaisDownload,
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
            <header className={`bg-gradient-to-r ${color} text-white py-6 shadow-lg`}>
                <div className="container mx-auto px-4">
                    <NavLink
                        to="/"
                        onClick={() => window.scrollTo(0, 0)}
                        className="inline-flex items-center gap-2 text-white hover:text-blue-100 transition-colors mb-4"
                    >
                        <ArrowLeft size={20} />
                        <span>Voltar para início</span>
                    </NavLink>
                    <div className="flex items-center gap-4">
                        <img
                            src="/logoCEEE.jpeg"
                            alt="Logo CEESP"
                            className="h-16 w-16 rounded-full border-4 border-white shadow-lg"
                        />
                        <div>
                            <div className="text-sm font-semibold opacity-90 mb-1">AULA {numeroAula}</div>
                            <h1 className="text-4xl font-bold">{titulo}</h1>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8">
                {/* Descrição */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Sobre esta aula</h2>
                    <p className="text-gray-700 text-lg">{descricao}</p>
                </div>

                {/* Objetivos */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Objetivos de Aprendizagem</h2>
                    <ul className="space-y-3">
                        {objetivos.map((objetivo, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                                <span className="text-gray-700">{objetivo}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Prompts */}
                {prompts && prompts.length > 0 && (
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Prompts para Usar nas IAs</h2>
                    <div className="space-y-6">
                        {prompts?.map((prompt, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                                <div className={`bg-gradient-to-r ${color} text-white px-4 py-3 font-semibold`}>
                                    {prompt.titulo}
                                </div>
                                <div className="p-4 bg-gray-50">
                                    <div className="flex justify-between items-start gap-4 mb-3">
                                        <p className="text-gray-700 flex-1 font-mono text-sm whitespace-pre-wrap">
                                            {prompt.texto}
                                        </p>
                                        <button
                                            onClick={() => copyToClipboard(prompt.texto, index)}
                                            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                                                copiedIndex === index
                                                    ? 'bg-green-500 text-white'
                                                    : 'bg-blue-600 text-white hover:bg-blue-700 hover:cursor-pointer'
                                            }`}
                                        >
                                            {copiedIndex === index ? (
                                                <>
                                                    <CheckCircle size={18} />
                                                    <span>Copiado!</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Copy size={18} />
                                                    <span>Copiar</span>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                    {prompt.exemplo && (
                                        <div className="mt-3 pt-3 border-t border-gray-300">
                                            <p className="text-xs text-gray-600 font-semibold mb-2">EXEMPLO:</p>
                                            <p className="text-gray-600 text-sm italic">{prompt.exemplo}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                )}

                {/* Materiais para Download */}
                {materiaisDownload && materiaisDownload.length > 0 && (
                    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Materiais para Download</h2>
                        <div className="grid gap-4">
                            {materiaisDownload.map((material, index) => (
                                <a
                                    key={index}
                                    href={material.arquivo}
                                    download
                                    className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg hover:shadow-md transition-all group"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="bg-blue-600 text-white p-3 rounded-lg">
                                            <Download size={24} />
                                        </div>
                                        <span className="font-semibold text-gray-800">{material.nome}</span>
                                    </div>
                                    <span className="text-blue-600 font-semibold group-hover:translate-x-1 transition-transform">
                                        Baixar →
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                )}

                {/* Navegação entre aulas */}
                <div className="flex justify-between items-center">
                    {numeroAula > 1 && (
                        <NavLink
                            to={`/aula${numeroAula - 1}`}
                            onClick={() => window.scrollTo(0, 0)}
                            className="flex items-center gap-2 bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                        >
                            <ArrowLeft size={20} />
                            <span>Aula Anterior</span>
                        </NavLink>
                    )}
                    {numeroAula < 5 && (
                        <NavLink
                            to={`/aula${numeroAula + 1}`}
                            onClick={() => window.scrollTo(0, 0)}
                            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all ml-auto"
                        >
                            <span>Próxima Aula</span>
                            <span>→</span>
                        </NavLink>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AulaTemplate;
