# Freud DS Workspace

## Estrutura

Esse [monorepo](https://monorepo.tools/) utiliza o [lerna](https://lerna.js.org/) para gerenciamento das libs.

Todos as lisbs estão na pasta `packages`

## Requisitos para desenvolvimento e manipulação das libs

- Node 18.x
- NPM na versão 9.x

## Instalando o projeto

Na pasta raiz do projeto e rode o comando:

```bash
npm install
```

Para cada pacote que precise mexer, entre na pasta do projeto e rode:

```bash
npm install
```

**Importate!** Para o pacote `@freud-ds/web-components` localizado em `packages/web/projects/web-components`, rode:

```bash
npm install --legacy-peer-deps
```

Referência e thread do problema: https://github.com/storybookjs/storybook/issues/14828#issuecomment-1523875596
