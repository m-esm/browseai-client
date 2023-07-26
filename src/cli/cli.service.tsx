import { Injectable, OnModuleInit } from '@nestjs/common';
import { render } from 'ink';
import React, { useState } from 'react';

import { ConfigService } from '../common/config/config.service.js';
import UI from './ui.js';
import { ClientService } from '../client/client.service.js';

@Injectable()
export class CliService implements OnModuleInit {
  constructor(
    private readonly configService: ConfigService,
    private readonly clientService: ClientService,
  ) {}
  async onModuleInit() {
    render(
      <UI
        clientService={this.clientService}
        configService={this.configService}
      />,
    );
  }
}
