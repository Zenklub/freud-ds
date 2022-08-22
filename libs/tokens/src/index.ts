import chalk from "chalk";
import { Builder } from "./builder";

type Action = 'build' | 'cleanup';

async function runner() {
  const action = (process.argv[3] as Action) ?? 'build';
  const builder = new Builder();
  if (action === 'build') {
    return builder.build();
  } else if (action === 'cleanup') {
    return builder.cleanUp();
  }

  console.log(chalk.bold.red('Fail: '), `Command ${action} not valid.`);
  console.log(chalk.bold('Available actions:: '), `Command ${action} not valid. \n`, '"build" or "clear"');

  return 1
}

(async () => {
  const exitCode = await runner();
  process.exit(exitCode || 0);
})()


