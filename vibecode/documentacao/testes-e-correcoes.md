# Testes e correções

## Evolução da solução

| Etapa | Revisão | Ajuste |
|---|---|---|
| Conceito inicial | A primeira versão explorava hospedagem na natureza, mas o tema final passou a ser maquiagem. | Substituída pela vitrine conceitual LUMI beauty. |
| Ativos visuais | A página precisava de imagens disponíveis no projeto. | Criada `img/`; fotos baixadas e referenciadas no HTML por caminhos locais. |
| Organização | Estrutura, estilo e interações precisavam ser fáceis de localizar. | Separados `index.html`, `css/styles.css` e `js/script.js`. |
| Conteúdo comercial | Produtos e valores poderiam parecer ofertas reais. | Identificados como fictícios e ilustrativos. |
| Interações | Formulário e botões poderiam sugerir envio ou compra real. | Limitados a busca, filtros, mensagens locais e nécessaire demonstrativa. |
| Identidade | A marca ganhou nome e assinatura definidos. | Atualizada para LUMI beauty — “Luz, beleza e autenticidade.” |
| Nécessaire | O contador não permitia conferir o conteúdo. | Criado painel com produtos, quantidades, subtotal ilustrativo, remoção de unidades e opção para esvaziar. |
| Rodapé | Faltavam navegação e informações de contato. | Adicionadas colunas, links internos e e-mail ilustrativo. |
| Registros | A documentação precisava ser fácil de consultar e apresentar. | Separados README, prompts, referências, decisões e testes/correções. |
| Referências visuais | A referência de mercado e a apresentação da página precisavam de registro visual, além dos links e descrições. | Arquivadas as capturas fornecidas em `documentacao/referencias-visuais/` e incorporadas a `referencias.md`. |

## Verificações executadas

- Diagnósticos do editor em HTML, CSS e JavaScript: sem erros reportados.
- `node --check vibecode/js/script.js`: sintaxe JavaScript válida.
- Caminhos locais de imagens, CSS e JavaScript: arquivos existentes.
- Âncoras da página: destinos internos conferidos.
- Links relativos nos documentos Markdown: destinos locais conferidos.
- `git diff --check -- vibecode`: sem erros de whitespace.
- Cinco imagens locais abertas e inspecionadas visualmente quanto ao assunto geral.
- Capturas de referência e da landing page recebidas e incluídas na documentação.

## Verificações visuais pendentes

- Abrir em navegador em tamanhos desktop e mobile e conferir cortes, espaçamento e overflow.
- Testar menu mobile e busca com e sem acentos.
- Testar filtros, abrir/fechar a nécessaire, adicionar produtos, aumentar quantidades, remover unidades e esvaziar a lista.
- Enviar e-mail de teste no formulário e confirmar a resposta local.
- Conferir foco visível e navegação por teclado.
- Confirmar fotógrafo, página individual e licença de cada imagem antes de publicação.

## Limitações conhecidas

- Fotos do Unsplash podem conter produtos e marcas de terceiros. Não há parceria com essas marcas.
- Os caminhos locais das imagens não dependem da internet; os URLs registrados em `img/README.md` servem somente para rastrear a origem.
- A autoria e a licença individual das fotos ainda precisam ser verificadas.
- O endereço `oi@lumibeauty.com.br` é ilustrativo e não foi verificado como ativo.
- A nécessaire existe apenas enquanto a página permanece aberta. Não há backend, conta, pedido, pagamento, estoque ou persistência de dados.
