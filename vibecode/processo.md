# Processo de Vibecode — LUMI beauty

Este arquivo organiza o processo por etapas. Os detalhes ficam separados por assunto para facilitar a leitura e apresentação.

**Conceito:** LUMI beauty — “Luz, beleza e autenticidade.”

## Etapas do projeto

1. **Briefing:** interpretar o objetivo da atividade — criar uma landing page e registrar o raciocínio, referências e revisões.
2. **Definição de tema:** escolher maquiagem e expressão pessoal como assunto da página.
3. **Conceito:** criar a marca fictícia LUMI beauty e definir público, tom de voz e objetivo.
4. **Direção visual:** escolher paleta, tipografia, fotografia e organização das seções antes de finalizar a implementação.
5. **Implementação:** organizar conteúdo, estilos, interações e imagens em arquivos separados.
6. **Revisão crítica:** identificar o que era fictício, evitar promessas de compra/envio reais, documentar os limites das fotografias e melhorar o painel da nécessaire para listar os produtos adicionados.
7. **Validação:** conferir sintaxe, caminhos locais, âncoras e documentação; registrar os testes visuais que ainda precisam ser feitos manualmente.

## Documentos do processo

- [README](README.md): como abrir, estrutura e roteiro de apresentação.
- [Briefing e prompts](documentacao/prompts.md): objetivo, prompt de implementação e critérios de revisão.
- [Pesquisas, fontes e referências visuais](documentacao/referencias.md): referências consultadas, uso no projeto e limites da pesquisa.
- [Decisões de design](documentacao/decisoes-design.md): conceito, identidade, paleta e composição.
- [Testes e correções](documentacao/testes-e-correcoes.md): revisões, verificações e limitações.
- [Capturas visuais](documentacao/referencias-visuais/): referência de categoria e captura da página.
- [Fotos](img/README.md): arquivos locais, origens e instruções de uso.

## Estrutura final

```text
vibecode/
├── index.html
├── README.md
├── processo.md
├── css/styles.css
├── js/script.js
├── img/
└── documentacao/
    ├── decisoes-design.md
    ├── prompts.md
    ├── referencias.md
    ├── testes-e-correcoes.md
    └── referencias-visuais/
        ├── captura-lumi-desktop.png
        └── referencia-sephora.png
```

## Estado da entrega

- Página: [index.html](index.html)
- Estilos: [css/styles.css](css/styles.css)
- Interações: [js/script.js](js/script.js)
- Registros: [documentacao/](documentacao/)
- Imagens e origens: [img/](img/)

Os arquivos `.jpg` estão armazenados dentro de `img/`; a página os carrega pelos caminhos locais `img/nome-do-arquivo.jpg`. Os URLs externos aparecem apenas na documentação de origem das fotografias. A nécessaire lista os itens adicionados, atualiza quantidades e subtotal ilustrativo, permite remover itens e esvaziar a lista; nada é enviado a um servidor.
