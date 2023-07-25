import { Module } from '@nestjs/common';
import { CliService } from './cli.service.js';
import { CommandModule } from '../command/command.module.js';
import { CommonModule } from '../common/common.module.js';

@Module({
  imports: [CommandModule, CommonModule],
  providers: [CliService],
})
export class CliModule {}
