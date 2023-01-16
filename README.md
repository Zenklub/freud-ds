# Freud DS Workspace

## Requisitos para desenvolvimento e manipulação das libs
- Node 16
- NPM na versão 8.x.x

## Instalando o projeto
Faça o clone do projeto em sua máquina. Entre na pasta raiz do projeto e rode o comando `npm install --legacy-peer-deps`. Utilize esta flag pois não estamos usando as versões mais recentes de algumas dependências. Após isso, rode o comando `npm run bootstrap`. Ele deve realizar as instalações das dependências dos projetos (*packages*) presentes neste monorepo.

## Estrutura
Esse workspace utiliza o lerna para gerenciamento das libs.

Todos as lisbs estão na pasta `packages`
