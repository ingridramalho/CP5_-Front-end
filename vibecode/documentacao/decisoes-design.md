# Decisões de design — LUMI beauty

## Conceito

- **Marca:** LUMI beauty, fictícia.
- **Assinatura:** “Luz, beleza e autenticidade.”
- **Tema:** maquiagem como experimentação e expressão pessoal.
- **Público imaginado:** pessoas interessadas em cores e texturas e em uma linguagem inclusiva, sem regras rígidas de beleza.
- **Objetivo:** apresentar uma seleção ilustrativa e permitir explorar categorias e itens da nécessaire.
- **Tom de voz:** acolhedor, direto e otimista, sem promessas de resultado.

## Identidade visual

| Token | Valor | Aplicação |
|---|---|---|
| Branco quente | `#FFFDF9` | Fundo principal |
| Creme | `#F4EEE5` | Superfícies suaves e galeria |
| Tinta | `#171513` | Texto, rodapé e botões principais |
| Texto secundário | `#746E68` | Descrições e metadados |
| Rosa coral | `#C97870` | Destaques suaves |
| Rosa escuro | `#A94F49` | Ênfase, marca e chamadas |
| Rosa claro | `#F2DED8` | Etiquetas e contador demonstrativo |
| Linha | `#E8E2DA` | Divisórias e bordas |

**Tipografia:** Arial/Helvetica para navegação e interface; Georgia para títulos editoriais. São fontes do sistema, sem carregamento externo.

## Composição

1. **Cabeçalho:** assinatura da marca, wordmark, busca e navegação.
2. **Apresentação principal:** proposta, chamada para explorar e fotografia de cosméticos.
3. **Faixa de benefícios:** mensagens curtas da marca conceitual.
4. **Seleção de produtos:** filtros, preços demonstrativos e ações locais.
5. **Conteúdo editorial:** mensagem de expressão pessoal e fotografia.
6. **Galeria:** retratos ilustrativos com legendas.
7. **Newsletter:** formulário local demonstrativo.
8. **Nécessaire:** painel que abre após adicionar produto ou ao clicar no contador; mostra nome, quantidade e subtotal ilustrativo, permite remover unidades e esvaziar a lista.
9. **Rodapé:** apresentação da marca, navegação, e-mail ilustrativo e links para os registros do projeto.

## Organização técnica

O projeto é uma página estática e usa HTML, CSS e JavaScript nativos separados por responsabilidade:

- `index.html`: conteúdo e estrutura semântica.
- `css/styles.css`: identidade visual, componentes e responsividade.
- `js/script.js`: busca, filtros, menu, nécessaire e formulário demonstrativo.
- `img/`: fotografias locais e catálogo de fontes.
- `documentacao/`: briefing, prompts, referências, decisões e testes.

Essa estrutura mantém o projeto simples de abrir e estudar, sem dependências ou etapa de compilação.

## Comportamento e limites

- Marca, assinatura, produtos, descrições, preços e e-mail são fictícios.
- As imagens são fotografias editoriais de terceiros, não produtos da LUMI.
- Busca e filtros atuam apenas nos cards estáticos carregados.
- A nécessaire guarda itens somente na memória da página aberta. Não há persistência, estoque, pedido ou pagamento.
- O formulário apenas apresenta uma resposta local e não transmite nem armazena dados.
- Os links levam a seções existentes ou aos documentos do projeto.

## Critérios de revisão visual

- Hierarquia clara entre apresentação, catálogo e conteúdo editorial.
- Contraste e legibilidade consistentes.
- Imagens com texto alternativo, corte adequado e origem registrada.
- Layout adaptado a telas pequenas e grandes.
- Controles com comportamento correspondente aos seus rótulos.
- Conteúdo fictício identificado como demonstração.
