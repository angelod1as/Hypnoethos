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

