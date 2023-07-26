import { Robot } from 'src/shared/robot.type.js';

export type ResponsePayload<T> = {
  statusCode: number;
  messageCode: string;
} & T;

export type RobotsList = {
  robots: { totalCount: number; items: Robot[] };
};

export type FetchResult<T = any> = {
  url: string;
  status: number;
  payload: T;
};
