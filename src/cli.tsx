import { CommandFactory } from 'nest-commander';

import { CliModule } from './cli/cli.module.js';

async function bootstrap() {
  await CommandFactory.run(CliModule);
}

bootstrap().catch((e) => console.error(e));
