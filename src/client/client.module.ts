import { Module } from '@nestjs/common';

import { CommonModule } from '../common/common.module.js';
import { ClientService } from './client.service.js';

@Module({
  imports: [CommonModule],
  providers: [ClientService],
  exports: [ClientService],
})
export class ClientModule {}
