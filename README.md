# Hypnoethos

## Como preencher

Verifique o arquivo `_config.yml` e preencha-o corretamente para melhor SEO.

### Menu

Para adicionar/excluir itens do menu, você deve preencher o arquivo `menu.yml` na pasta `_data`. Siga o formato presente no arquivo:

```yml
-
  url: url que você quer apontar
  title: nome que vai aparecer no menu
-
  url: url que você quer apontar
  title: nome que vai aparecer no menu
  dropdown:
    0:
      url: url do primeiro submenu
      title: nome do primeiro submenu
    1:
      url: url do segundo submenu
      title: título do segundo submenu
```

### Home

A home é dividida em várias **seções**, com os arquivos `.md` localizados na pasta `_sections`.
Para esconder qualquer seção, adicione `hidden:true` no FrontMatter.

### Blog

Para criar novos post, basta seguir os modelos existentes dentro de `_posts`. O formato do nome do arquivo **deve** ser seguido.

FrontMatter sugerido:

```
---
layout: post
title: Exemplo de blog post
date: 2018-02-28 22:00:00 -0300
categories: blog teste
excerpt_separator: <!--more-->
---
```

remova `excerpt_separator:` e insira `excerpt:` para colocar um excerpt customizado.

### Páginas estáticas

Crie um arquivo `.md` na raiz e siga o exemplo do `pageExample.md`.

FrontMatter sugerido:
```
---
title: Exemplo de página estática
layout: page
permalink: pageexample.html
---
```

### Imagens e outros

Não utilize a pasta `images`. Ela é uma pasta do sistema.

Coloque fotos e outros na pasta `assets`.

### URLs

Prefira URLs relativas, utilizando `{{ site.url }}/url.html` do que `www.hypnoethos.com/url.html`.

### Dúvidas?

[Só ler a doc do Jekyll.](https://jekyllrb.com/docs/home/)