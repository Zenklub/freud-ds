# Freud DS Core

Tokens, icones e emojis do Freud DS.
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

## Projeto

Ao abrir o arquivo `config.json` você vai encontrar 3 plataformas definidas, css, scss e react-native. Cada plataforma definida transforma os arquivos na pasta tokens em variáveis de acordo com a plataforma e formado configurado.

Para adicionar mais formatos consulte a documentação do `Amazon Style Dictionary`

### Estrutura do projeto

```
├── README.md
├── config.json
├── assets/
│   ├── brand/
│   ├── icon/
│   ├── emoji/
├── tokens/
│   ├── color/
│       ├── base.json
│       ├── font.json
│   ├── size/
│       ├── font.json
```

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
