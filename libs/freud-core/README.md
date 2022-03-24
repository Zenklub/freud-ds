# Freud DS Core

Escala e consistência em todos os produtos Zen!


## Sobre o Freud

Neurologista e psiquiatra criador da psicanálise. Seus estudos serviram como base pra a evolução da psicologia. 

Do mesmo modo, nosso Design System tem como base garantir a evolução dos produtos Zenklub.

Através do Freud DS queremos propagar pelo mundo a importância de criar produtos acessíveis e consistentes.


## Projeto @zenklub-ds/freud-core

Biblioteca que auxilia na composição dos componentes e interfaces como ícones, marcas, grids e utilities.

Ao abrir o arquivo `config.json` você vai encontrar 3 plataformas definidas, css, scss e react-native. Cada plataforma definida transforma os arquivos na pasta tokens em variáveis de acordo com a plataforma e formado configurado.

Para mais informações consulte a documentação do `Amazon Style Dictionary`


## Exemplos de output

**CSS**
```css
<!-- variables.css -->
:root {

  --brand-color-pure: #6732D1;
  --brand-color-01: #E1D6F6;
  --brand-color-02: #A484E3;

  --border-radius-none: 0;
  --border-radius-sm: 4px;
  --border-radius-md: 8px;
}
```

**SCSS**
```scss
  // _variables.scss
  $color-base-gray-light: #cccccc;
  $color-base-gray-medium: #999999;
  $color-base-gray-dark: #111111;
  $color-base-red: #ff0000;
  $color-base-green: #00ff00;
  $color-font-base: #ff0000;
  $color-font-secondary: #00ff00;
  $color-font-tertiary: #cccccc;
  $size-font-small: 0.75rem;
  $size-font-medium: 1rem;
  $size-font-large: 2rem;
  $size-font-base: 1rem;
```

**REACT NATIVE**
```js
  // variables.js
  export const brandColorPure = "#6732D1";
  export const brandColor01 = "#E1D6F6";
  export const brandColor02 = "#A484E3";

  export const opacityLevel1 = 0.04;
  export const opacityLevel2 = 0.08;
  export const opacityLevel3 = 0.16;
```


## Estrutura da lib compilada

```
├── README.md
├── assets/
│   ├── brand/
│   ├── icon/
│   ├── emoji/
│   ├── fonts/
├── style/
│   ├── react-native/
│      ├── variables.js
│   ├── css/
│      ├── variables.css
│   ├── scss/
│      ├── _variables.scss
│      ├── _grid.scss
```


## Como instalar o Freud core em seu projeto Angular
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
