# Freud DS Workspace

## Estrutura

Esse [monorepo](https://monorepo.tools/) utiliza o [lerna](https://lerna.js.org/) para gerenciamento das libs.

Todos as lisbs estão na pasta `packages`

## Requisitos para desenvolvimento e manipulação das libs

- Node 16
- NPM na versão 8.x.x

## Instalando o projeto

Na pasta raiz do projeto e rode o comando:

```bash
npm install --legacy-peer-deps
```

`--legacy-peer-deps`: Utilize esta flag pois não estamos usando as versões mais recentes de algumas dependências.

Para cada pacote que precise mexer, entre na pasta do projeto e rode:

```bash
npm install --legacy-peer-deps
```

<!-- TODO: atualizar lerna para usar novo package management -->

<!-- Após isso, rode o comando:

```bash
npm run bootstrap --legacy-peer-deps
```

Ele deve realizar as instalações das dependências dos projetos (_packages_) presentes neste monorepo. -->


