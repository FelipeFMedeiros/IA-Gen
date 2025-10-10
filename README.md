# IAGen para AEE

Site interativo para o curso de capacitação em Inteligência Artificial Generativa aplicada ao Atendimento Educacional Especializado (AEE).

## 📚 Sobre o Projeto

Este projeto foi desenvolvido para auxiliar professores da Educação Especial durante o curso de 5 aulas sobre o uso de IA Generativa no AEE. O site oferece:

- **Informações sobre o projeto** e objetivos do AEE
- **5 aulas completas** com conteúdo estruturado
- **Prompts prontos** para copiar e usar em IAs durante as aulas
- **Materiais para download** (PDFs e recursos)
- **Interface responsiva** e acessível
- **Design baseado** nas cores da logo do CEESP/NATAL

## 🎯 Estrutura das Aulas

1. **Aula 1 - Introdução da IAGen**: Conceitos fundamentais de IA Generativa
2. **Aula 2 - Engenharia de Prompts**: Técnicas para criar prompts eficazes
3. **Aula 3 - IAGen para AEE I**: Criação e adaptação de recursos educacionais
4. **Aula 4 - IAGen para AEE II**: Monitoramento do desenvolvimento dos alunos
5. **Aula 5 - IAGen para AEE III**: Elaboração de Relatórios Individualizados

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca JavaScript para interfaces
- **TypeScript** - Superset tipado do JavaScript
- **Vite** - Build tool e dev server ultra-rápido
- **React Router** - Roteamento entre páginas
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Biblioteca de ícones
- **Material-UI** - Componentes React

## 💻 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/FelipeFMedeiros/IA-Gen.git

# Entre na pasta do projeto
cd IA-Gen

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

O site estará disponível em `http://localhost:5173/`

## 📁 Estrutura de Pastas

```
IA-Gen/
├── public/
│   └── logoCEEE.jpeg        # Logo do CEESP
├── src/
│   ├── assets/              # Arquivos estáticos (PDFs)
│   ├── components/          # Componentes reutilizáveis
│   │   └── AulaTemplate.tsx # Template das páginas de aula
│   ├── pages/               # Páginas do site
│   │   ├── Home.tsx        # Página inicial
│   │   ├── Aula1.tsx       # Aula 1
│   │   ├── Aula2.tsx       # Aula 2
│   │   ├── Aula3.tsx       # Aula 3
│   │   ├── Aula4.tsx       # Aula 4
│   │   └── Aula5.tsx       # Aula 5
│   ├── styles/             # Estilos globais
│   │   └── index.css
│   ├── App.tsx             # Configuração de rotas
│   └── main.tsx            # Ponto de entrada
├── package.json
└── vite.config.ts
```

## 🎨 Funcionalidades

### Página Inicial
- Visão geral do projeto
- Cards interativos para cada aula
- Informações sobre objetivos do AEE
- Dados de contato do CEESP

### Páginas das Aulas
- Descrição e objetivos da aula
- Prompts prontos com botão "Copiar"
- Materiais para download
- Navegação entre aulas
- Botão voltar para home

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Preview do build de produção
- `npm run lint` - Executa o linter

## 📝 Como Adicionar Materiais

Para adicionar novos materiais de download:

1. Coloque os arquivos PDF na pasta `public/materiais/`
2. Edite o arquivo da aula correspondente em `src/pages/`
3. Adicione o material no array `materiaisDownload`:

```typescript
const materiaisDownload = [
  {
    nome: 'Nome do Material',
    arquivo: '/materiais/nome-do-arquivo.pdf',
  },
];
```

## 🌈 Paleta de Cores

Baseada na logo do CEESP/NATAL:
- Azul: `#3B82F6` (blue-600)
- Ciano: `#06B6D4` (cyan-600)
- Verde: `#10B981` (green-500)
- Roxo: `#A855F7` (purple-500)

## 📱 Responsividade

O site é totalmente responsivo e adaptado para:
- Desktop (1280px+)
- Tablet (768px - 1279px)
- Mobile (< 768px)

## 👥 Contato CEESP/NATAL

- **Telefone**: (84) 3232-2374 / (84) 99916-8272
- **E-mail**: ceespaee@gmail.com
- **Instagram**: @ceespaee

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais pelo CEESP/NATAL.

---

Desenvolvido com ❤️ para professores da Educação Especial