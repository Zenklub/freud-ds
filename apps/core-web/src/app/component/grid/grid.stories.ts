import readme from './README.md';

const cardSize = 500;

const card = `
  <div class="">
    Conteudo em construção
  </div>
`;

export default {
  title: '@freud-ds/core-support/Grid',
  parameters: { notes: readme },
};

export const Default = () => {
  return {
    template: card,
  };
};
