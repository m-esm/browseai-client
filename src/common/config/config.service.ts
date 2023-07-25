import { Injectable, OnModuleInit } from '@nestjs/common';
import { Config } from './config.type.js';
import fs from 'fs-extra';
import { join } from 'path';
import { cwd } from 'process';
@Injectable()
export class ConfigService implements OnModuleInit {
  private configPath = join(cwd(), '.browse-ai.json');
  public config: Config = {};

  async onModuleInit() {
    const configExists = await fs.exists(this.configPath);
    if (!configExists) {
      await fs.writeJson(this.configPath, {});
    }
    await this.load();
  }

  async patch(config: Config) {
    this.config = Object.assign(this.config, config);
    await fs.writeJson(this.configPath, this.config, {
      spaces: 2,
      replacer: null,
    });
    return this.config;
  }

  private async load(): Promise<void> {
    this.config = await fs.readJson(this.configPath);
  }
}
