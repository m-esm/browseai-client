import { Module } from '@nestjs/common';
import { ConfigService } from './config/config.service.js';

@Module({
  providers: [ConfigService],
  exports: [ConfigService],
})
export class CommonModule {}
