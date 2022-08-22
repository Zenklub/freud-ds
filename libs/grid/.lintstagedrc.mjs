export default {
  '**/*.{js,jsx,ts,tsx}': ["eslint --fix", "prettier --write", "jest --findRelatedTests"],
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
}