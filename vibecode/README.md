# LUMI beauty — landing page de maquiagem

**Luz, beleza e autenticidade.**

Landing page conceitual criada como exercício de vibecode, identidade visual e revisão de interfaces. LUMI beauty, seus produtos, preços e endereço de contato são fictícios.

## Como abrir

1. Abra a pasta `vibecode/` no VS Code.
2. Abra `index.html` diretamente no navegador ou use uma extensão de servidor local, se já estiver instalada.
3. Não é necessário instalar dependências nem executar build: o projeto usa HTML, CSS e JavaScript nativos.

Os caminhos para os arquivos CSS, JavaScript e imagens são relativos a `index.html`. Mantenha as pastas `css/`, `js/` e `img/` no mesmo nível do arquivo.

## Estrutura

```text
vibecode/
├── index.html
├── README.md
├── processo.md
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── img/
│   ├── README.md
│   ├── beleza-em-foco.jpg
│   ├── campanha-beleza.jpg
│   ├── pinceis-e-cores.jpg
│   ├── produtos-maquiagem.jpg
│   └── rotina-de-beleza.jpg
└── documentacao/
    ├── decisoes-design.md
    ├── prompts.md
    ├── referencias.md
    ├── testes-e-correcoes.md
    └── referencias-visuais/
        ├── captura-lumi-desktop.png
        └── referencia-sephora.png
```

## O que cada arquivo faz

- `index.html`: conteúdo, estrutura semântica e ligação aos estilos e scripts.
- `css/styles.css`: paleta, tipografia, componentes e adaptações para celular.
- `js/script.js`: menu mobile, busca local, filtros, nécessaire demonstrativa com lista de itens e resposta do formulário demonstrativo.
- `img/`: imagens locais da página. O catálogo de origem e as instruções para adicionar fotos estão em `img/README.md`.
- `processo.md`: índice cronológico do processo.
- `documentacao/`: briefing, prompts, referências, decisões visuais, testes/correções e capturas de referência e da página.

## Interações e limites

Busca, filtro, menu e nécessaire funcionam localmente no navegador. Ao adicionar um produto, a nécessaire abre e mostra itens, quantidades e subtotal ilustrativo; também é possível remover unidades, esvaziar a lista ou abrir a nécessaire pelo cabeçalho. O formulário apenas mostra uma mensagem e não envia nem armazena o e-mail. Não há pedido, pagamento, estoque, cadastro ou backend. Produtos e preços são exemplos.

As imagens são fotografias editoriais de terceiros e podem conter produtos/marcas que não pertencem à LUMI beauty. Confira a origem e a licença antes de publicar. Veja [img/README.md](img/README.md).

## Roteiro para apresentar o exercício

1. Leia o briefing e explique o público e a intenção em [documentacao/prompts.md](documentacao/prompts.md).
2. Mostre como as referências foram traduzidas — sem copiar uma marca — em [documentacao/referencias.md](documentacao/referencias.md).
3. Apresente a paleta e as decisões de identidade em [documentacao/decisoes-design.md](documentacao/decisoes-design.md).
4. Abra `index.html` e percorra a página.
5. Demonstre busca, filtro, navegação mobile, conteúdo da nécessaire e mensagem de formulário.
6. Conte o que foi revisto e o que ainda é uma limitação em [documentacao/testes-e-correcoes.md](documentacao/testes-e-correcoes.md).

## Verificações técnicas

Se Node.js estiver instalado, valide a sintaxe do JavaScript a partir da raiz do repositório:

```text
node --check vibecode/js/script.js
```

Depois confira a página visualmente em telas largas e estreitas e teste os caminhos das imagens localmente.
