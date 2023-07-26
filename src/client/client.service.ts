import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';

import { ConfigService } from '../common/config/config.service.js';
import { CreateTaskPayload, FetchResult, RobotsList } from './client.types.js';
import { Robot } from 'src/shared/robot.type.js';

@Injectable()
export class ClientService {
  public baseUrl = 'https://api.browse.ai/v2';

  constructor(private readonly configService: ConfigService) {}

  private getHeaders() {
    return {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.configService.config.apiKey}`,
    };
  }
  async getRobots(): Promise<FetchResult<Robot[]>> {
    const response = await fetch(this.baseUrl + '/robots', {
      headers: this.getHeaders(),
    });

    const resBody = (await response.json()) as RobotsList;

    return {
      status: response.status,
      payload: resBody.robots?.items,
      url: response.url,
    };
  }

  async runRobot<T>(
    robotId: string,
    options: CreateTaskPayload,
  ): Promise<FetchResult<Robot[]>> {
    const response = await fetch(`${this.baseUrl}/robots/${robotId}/tasks`, {
      method: 'POST',
      body: JSON.stringify(options),
      headers: this.getHeaders(),
    });

    const resBody = (await response.json()) as RobotsList;

    return {
      status: response.status,
      payload: resBody.robots?.items,
      url: response.url,
    };
  }
}
