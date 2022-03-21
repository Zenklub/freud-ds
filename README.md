# Freud DS

Escala e consistência em todos os produtos Zen!

## Sobre o Freud

Neurologista e psiquiatra criador da psicanálise. Seus estudos serviram como base pra a evolução da psicologia. 

Do mesmo modo, nosso Design System tem como base garantir a evolução dos produtos Zenklub.

Através do Freud DS queremos propagar pelo mundo a importância de criar produtos acessíveis e consistentes.


## Projetos


### @zenklub-ds/freud-core

Biblioteca que auxilia na composição dos componentes e interfaces como ícones, marcas, grids e utilities.

### @zenklub-ds/freud-core-web

Biblioteca de componentes web para Angular

### @zenklub-ds/freud-core-mobile

Biblioteca de componentes mobile para react-native


## Requisitos

Para este projeto, você precisa de um conhecimento básico de _Storybook_ para os projetos de core-web e core-mobile e _Style Dictionary_ para a biblioteca de suporte.

Se você nunca encontrou nenhum deles antes, recomendamos algumas horas para se familiarizar com ambos, antes de voltar aqui.

### Referências
- [Storybook](https://storybook.js.org/tutorials/intro-to-storybook/angular/en/get-started/)
- [Style Dictionary](https://amzn.github.io/style-dictionary/#/)
- [NX workspace](https://nx.dev/)


## Como instalar o Freud em seu projeto Angular

### Somente o core (Tokens, grid, icones e emojis)

1. Primeiro instale a biblioteca via npm:

`npm i @zenklub-ds/freud-core`


2. Importe as variáveis via scss para o seu arquivo de estilo que você for precisar dos tokens (Opção 1):

```
@import '@zenklub-ds/freud-core/dist/style/scss/_variables.scss';
@import '@zenklub-ds/freud-core/dist/style/scss/_grid.scss';

=> Exemplo de uso:

background-color: $brand-color-01;

```

2. **Ou** Importe as variáveis root para o seu arquivo de estilo principal (Opção 2):

```
@import '@zenklub-ds/freud-core/dist/style/css/_variables.css';

=> Exemplo de uso:

background-color: var(--brand-color-01);

```

2. **Ou** Importe as variáveis no arquivo `angular.json` (Opção 3):

```
No array de styles adicione o seguinte estilo

"node_modules/@zenklub-ds/freud-core/dist/style/css/variables.css"

=> Exemplo de uso:

background-color: var(--brand-color-01);

```

```
// angular.json

{
  ...
  "projects": {
    ...
    "architect": {
      ...
      "build": {
        ...
        "options": {
          ...
          "styles": [...] <== PASTE HERE
        }
      }
    }
  }
}
```

3. Adicione o seguinte caminho para a pasta de ativos em seu arquivo `angular.json` para permitir o uso dos icones e emojis:

```
  {
    "glob": "**/*",
    "input": "node_modules/@zenklub-ds/freud-core/dist/assets",
    "output": "./assets/@zenklub-ds/"
  }
```

```
// angular.json

{
  ...
  "projects": {
    ...
    "architect": {
      ...
      "build": {
        ...
        "options": {
          ...
          "assets": [...] <== PASTE HERE
        }
      }
    }
  }
}
```

## Em construção

### Para publicar o Core no npm

Processo para ser automatizado

```
1 - Alerar a versão do pacote:

2 - Rodar o comando abaixo:

npm run publish:freud-core

```

### Para incluir o storybook de componentes react native:

Tecnologias sugeridas:
Expo + Storybook

https://github.com/nrwl/nx-labs/tree/main/packages/expo

https://storybook.js.org/tutorials/intro-to-storybook/react-native/en/get-started
