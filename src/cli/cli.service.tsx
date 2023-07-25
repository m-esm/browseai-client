import { Injectable, OnModuleInit } from '@nestjs/common';
import { render } from 'ink';
import React, { useState } from 'react';

import { ConfigService } from '../common/config/config.service.js';
import UI from './ui.js';

@Injectable()
export class CliService implements OnModuleInit {
  constructor(private readonly configService: ConfigService) {}
  async onModuleInit() {
    render(<UI configService={this.configService} />);
  }
}
