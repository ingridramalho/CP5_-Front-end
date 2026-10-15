# Fotos do projeto

As imagens desta pasta foram baixadas para que a landing page possa ser aberta localmente sem depender de um serviço de imagens remoto.

| Arquivo local | Uso na página | Origem do arquivo |
|---|---|---|
| `produtos-maquiagem.jpg` | Imagem principal e card de lábios | [Unsplash CDN — foto `1596462502278-27bfdc403348`](https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1000&q=85) |
| `campanha-beleza.jpg` | Card de rosto | [Unsplash CDN — foto `1522335789203-aabd1fc54bc9`](https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1400&q=85) |
| `pinceis-e-cores.jpg` | Card de olhos e seção editorial | [Unsplash CDN — foto `1512496015851-a90fb38ba796`](https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1000&q=85) |
| `beleza-em-foco.jpg` | Galeria editorial, retrato com maquiagem suave | [Unsplash CDN — foto `1524504388940-b1c1722653e1`](https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85) |
| `rotina-de-beleza.jpg` | Galeria editorial, retrato com batom rosado | [Unsplash CDN — foto `1488426862026-3ee34a7d66df`](https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=85) |

## Observações de uso

- A página usa cópias locais; o caminho nas tags `<img>` começa com `img/`.
- Os links acima identificam os arquivos de imagem usados na atividade. O nome do fotógrafo e a página individual da foto não foram confirmados ao baixar os arquivos; verifique essas informações e os termos atuais do Unsplash antes de publicar ou usar comercialmente.
- Algumas embalagens podem exibir nomes de marcas de terceiros. As fotos são referências visuais de maquiagem, não produtos da marca fictícia LUMI beauty, endosso ou parceria.
- Os retratos foram usados como imagens editoriais ilustrativas; não há indicação de que as pessoas retratadas sejam clientes, modelos contratadas ou representantes da LUMI beauty.
- Não remova nem recorte créditos incorporados às imagens. Prefira substituir por fotos próprias ou por imagens com origem, permissão e atribuição verificadas antes de uma publicação pública.

## Como adicionar outra foto

1. Escolha uma imagem que você tenha permissão para usar e registre sua origem e licença.
2. Faça o download e salve o arquivo nesta pasta com um nome descritivo, simples e sem espaços, por exemplo `batom-coral.jpg`.
3. No `index.html`, use `src="img/batom-coral.jpg"`.
4. Escreva um `alt` curto que descreva a imagem; se for apenas decorativa, use `alt=""`.
5. Para imagem fora da primeira dobra, pode usar `loading="lazy"`; não aplique lazy loading à imagem principal que deve aparecer imediatamente.
6. Abra a página localmente e confira se a imagem carrega e se o corte em telas pequenas continua adequado.

## Organização sugerida para fotos

Para esta página, manter todos os arquivos visuais em `img/` é suficiente e simples de explicar. Se o projeto crescer, agrupe por finalidade em subpastas — por exemplo `img/produtos/`, `img/editorial/` e `img/icones/` — e atualize os caminhos no HTML. Nomeie os arquivos pelo conteúdo, mantenha uma tabela de fonte/licença como a acima e não crie uma pasta diferente para cada imagem.
