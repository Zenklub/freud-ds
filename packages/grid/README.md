# Freud DS Grid
Escala e consistência em todos os produtos Zen!

## Sobre o Freud
Neurologista e psiquiatra criador da psicanálise. Seus estudos serviram como base pra a evolução da psicologia.

Do mesmo modo, nosso Design System tem como base garantir a evolução dos produtos Zenklub.

Através do Freud DS queremos propagar pelo mundo a importância de criar produtos acessíveis e consistentes.

## Projeto @freud-ds/grid
Biblioteca com estilos e configurações de grid


### Como instalar a lib em seu projeto Angular

#### 1 - Primeiro instale a biblioteca via npm:
``
npm i @freud-ds/grid
``

#### 2 - Importe as variáveis no arquivo `angular.json`:
No array de styles adicione o estilo da grid
```
  "node_modules/@freud-ds/grid/scss/grid.scss"

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

## Utilizando os grids

### Estrutura do HTML

#### Grid fuida, sem limite de tamanho
```
<div class="freud-grid">
  <div class="freud-row">
    <div class="freud-col-<NUMERO DE COLUNAS>"></div> <--- Numero de 1 a 12
    <div class="freud-col"></div> <--- Sem determinar o numero de colunas é atribuido o maximo(12)
  </div>
</div>

```

#### Grid fixa, com limite maximo do container em 1320
```
<div class="freud-grid-fixed">
  <div class="freud-row">
    <div class="freud-col-<NUMERO DE COLUNAS>"></div> <--- Numero de 1 a 12
    <div class="freud-col"></div> <--- Sem determinar o numero de colunas é atribuido o maximo(12)
  </div>
</div>

```

#### Classes disponíveis

### CSS Classes

Classe CSS | Descrição
--- | ---
`freud-grid` | Obrigatório, para o elemento de grade de layout
`freud-row` | Obrigatório, para agrupar as colunas
`freud-col` | Obrigatório, Coluna do grid
`freud-col-<NUMBER_OF_COLUMNS>` | Opcional, especifica o numero de colunas de 1 até 12
`<SIZE>:freud-col-<NUMBER_OF_COLUMNS>` | Opcional, especifica o numero de colunas em um tamanho de tela ex (sm, md, lg)
`freud-col-order-<INDEX>` | Opcional, especifica a ordem da coluna dentro da row
`freud-col-align-<POSITION>` | Opcional, especifica o alinhamento da coluna
