import { Module } from '@nestjs/common';
import { CliService } from './cli.service.js';
import { CommandModule } from '../command/command.module.js';

@Module({
  imports: [CommandModule],
  providers: [CliService],
})
export class CliModule {}
