import { Module } from '@nestjs/common';

import { ClientModule } from '../client/client.module.js';
import { CommandModule } from '../command/command.module.js';
import { CommonModule } from '../common/common.module.js';
import { CliService } from './cli.service.js';

@Module({
  imports: [CommandModule, CommonModule, ClientModule],
  providers: [CliService],
})
export class CliModule {}
